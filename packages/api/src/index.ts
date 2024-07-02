/* eslint-disable @typescript-eslint/ban-ts-comment */

import { FSUIPC, Simulator, Type, FSUIPCError } from 'fsuipc.js';
import { timer, from, Observable, throwError, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

// Utils
import { Offset } from '@shared/offset';
import { OffsetValues } from '@shared/offset-values';
import { ConvertedOffsetValues } from '@shared/converted-offset-values';
import { applyConversion } from '@convert/apply-conversion';
import { OFFSETS } from '@offsets';

export class FsuipcApi {
  private fsuipcGlobalInstance: FSUIPC;
  private fsuipc: FSUIPC;
  private watchedOffsetCache: any[] = [];

  constructor(private simulator?: Simulator) {}

  public async init() {
    this.fsuipcGlobalInstance = new FSUIPC();

    try {
      if (this.simulator) {
        this.fsuipc = await this.fsuipcGlobalInstance.open(this.simulator);
      } else {
        this.fsuipc = await this.fsuipcGlobalInstance.open();
      }
      return true;
    } catch (error) {
      throw new FSUIPCError(error.message, error.code);
    }
  }

  public async close() {
    try {
      this.fsuipc = await this.fsuipcGlobalInstance.close();
      return true;
    } catch (error) {
      throw new FSUIPCError(error.message, error.code);
    }
  }

  public listen(
    useInterval: boolean,
    interval: number,
    offsetList: string[],
    terminateOnError = true
  ): Observable<ConvertedOffsetValues> {
    if (!this.fsuipc) {
      return throwError(() => 'NO_FSUIPC_INSTANCE');
    }

    this.watchOffsets(offsetList);

    const source$ = useInterval ? timer(interval, interval) : of(null);

    return source$.pipe(
      switchMap(() =>
        from(this.fsuipc.process()).pipe(
          map((result: object) => {
            const rawOffsetValues: OffsetValues = { ...result };
            let offsetValues: ConvertedOffsetValues = {};

            for (const offsetName of Object.keys(rawOffsetValues)) {
              offsetValues = {
                ...offsetValues,
                [offsetName]: applyConversion(OFFSETS[offsetName], rawOffsetValues[offsetName])
              };
            }

            return offsetValues;
          }),
          catchError((error: FSUIPCError) => {
            if (terminateOnError) {
              this.fsuipc.close();
            }

            return throwError(() => JSON.stringify(error));
          })
        )
      )
    );
  }

  public async write(
    offsetList: { offset: string; value: string | number | bigint | ArrayBufferView }[],
    terminateOnError = true
  ): Promise<void> {
    if (!this.fsuipc) {
      throw new Error('NO_FSUIPC_INSTANCE');
    }

    for (const offsetData of offsetList) {
      const offset: Offset = OFFSETS[offsetData.offset];

      if (offset.permission === 'r') {
        throw new Error(`${offset.name} offset does not allow writing.`);
      }

      if (offset.type === Type.ByteArray || offset.type === Type.String) {
        const offsetType = offset.type as Type.ByteArray | Type.String;
        // @ts-ignore
        this.fsuipc.write(offset.value, offsetType, offset.length, offsetData.value);
      } else {
        const offsetType = offset.type as
          | Type.Byte
          | Type.SByte
          | Type.Int16
          | Type.Int32
          | Type.Int64
          | Type.UInt64
          | Type.UInt16
          | Type.UInt32
          | Type.Double
          | Type.Single;

        // @ts-ignore
        this.fsuipc.write(offset.value, offsetType, offsetData.value);
      }
    }

    try {
      await this.fsuipc.process();
    } catch (error) {
      if (terminateOnError) {
        this.fsuipc.close();
      }

      throw new Error(JSON.stringify(error));
    }
  }

  private watchOffsets(offsetList: string[]): void {
    if (this.shouldUpdateCache(offsetList)) {
      this.watchedOffsetCache = offsetList;
    }

    for (const offsetName of this.watchedOffsetCache) {
      const offset: Offset = OFFSETS[offsetName];

      if (
        offset.type === Type.ByteArray ||
        offset.type === Type.String ||
        offset.type === Type.BitArray
      ) {
        const offsetType = offset.type as Type.ByteArray | Type.String | Type.BitArray;
        this.fsuipc.add(offset.name, offset.value, offsetType, offset.length);
      } else {
        const offsetType = offset.type as
          | Type.Byte
          | Type.SByte
          | Type.Int16
          | Type.Int32
          | Type.Int64
          | Type.UInt16
          | Type.UInt32
          | Type.UInt64
          | Type.Double
          | Type.Single;
        this.fsuipc.add(offset.name, offset.value, offsetType);
      }
    }
  }

  private shouldUpdateCache(offsetList: string[] = []): boolean {
    return (
      offsetList.length > 0 &&
      (!this.watchedOffsetCache.length ||
        !this.watchedOffsetCache.every((item) => offsetList.includes(item)))
    );
  }
}

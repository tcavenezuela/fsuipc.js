# @fsuipc.js/api

## 2.0.4

### Patch Changes

- 600964a: add plane related offsets (altitude AMSL, atltitude AGL, indicated altitude, landing rate)

## 2.0.3

### Patch Changes

- f2434dd: add missing radio imports and improve nav1, nav2 convert function
- 6fe1c7b: add new radio offsets: com1, com2 and improve transponder convert function

## 2.0.2

### Patch Changes

- 665c17c: add offset 0x3380: Write a message as string to show in the simulator.
  add offset 0x32fa: Text display control in seconds.
- 92defa1: add write method
- 707dfc1: change throw error to avoid use new Error since we are returning a JSON to improve error parsing
- 4bce020: add connected status to main class
- 886ec28: add offset 0x3308: sim version currently in use.
  add offset 0x3d00: aircraft name currently in use.
  add exclusive X-Plane offset 0x6fff: flag to indicate if the fsuipc version is currently running in X-Plane (XPUIPC).
  add exclusive X-Plane offset 0x6f03: XPUIPC version string.

## 2.0.1

### Patch Changes

- 94b996e: add param in listen function to enable or disable interval

## 2.0.0

### Patch Changes

- 352ebb6: increment minimum node version to 18+
- Updated dependencies [21a9bb3]
- Updated dependencies [6574bab]
- Updated dependencies [352ebb6]
  - fsuipc.js@1.2.0

## 1.1.1

### Patch Changes

- cb1da15: Update README files headers.
- Updated dependencies [cb1da15]
  - fsuipc.js@1.1.1

## 1.1.0

### Minor Changes

- fa4b718: Bump latest fsuipc-node 0.5.0 changes.

### Patch Changes

- 57d8ba7: Sort in right order all package.json files in the repo.
- Updated dependencies [57d8ba7]
- Updated dependencies [fa4b718]
  - fsuipc.js@1.1.0

## 1.0.0

### Major Changes

- ad3aa7c: Add eslint and prettier config to enforce code style [Release Build ✨🚀]

### Patch Changes

- a7f55f2: Add readme files 📝
- e7ce8e6: Add close method to API Package (Thanks @hiaaryan) ✨
- Updated dependencies [a7f55f2]
- Updated dependencies [e7ce8e6]
- Updated dependencies [ad3aa7c]
  - fsuipc.js@1.0.0

## 0.0.7

### Patch Changes

- 42e18bf: Fix workflow to include gyp file to compile the artifact when a user try to install the core dependency
- Updated dependencies [42e18bf]
  - fsuipc.js@0.0.7

## 0.0.6

### Patch Changes

- 4339470: Add .nvmrc file to set node minimum version
- 660f3f2: Add api package
- Updated dependencies [4339470]
- Updated dependencies [660f3f2]
  - fsuipc.js@0.0.6

## 0.0.5

### Patch Changes

- 138fecb: Add changeset and Code of Conduct, Contributing files
- Updated dependencies [138fecb]
  - fsuipc.js@0.0.5

## 0.0.4

### Patch Changes

- 7a23a61: Add changeset
- Updated dependencies [7a23a61]
  - fsuipc.js@0.0.4

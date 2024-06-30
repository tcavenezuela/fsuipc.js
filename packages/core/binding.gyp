{
  "targets": [
    {
      "target_name": "fsuipc",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "conditions": [
        ['OS=="win"', {
          "msvs_settings": {
            "VCCLCompilerTool": { "ExceptionHandling": 1 }
          },
          "sources": [
            "src/native/index.cc",
            "src/native/FSUIPC.cc",
            "src/native/IPCUser.cc"
          ],
          "include_dirs": [
            "src/native",
            "<!(node -p \"require('node-addon-api').include_dir\")"
          ]
        }]
      ]
    }
  ]
}
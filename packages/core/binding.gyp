{
  "targets": [
    {
      "target_name": "fsuipc",
      "sources": [
        "src/native/index.cc",
        "src/native/FSUIPC.cc",
        "src/native/IPCUser.cc"
      ],
      "include_dirs": [
        "src/native",
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}

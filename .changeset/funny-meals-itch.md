---
'@fsuipc.js/api': patch
---

change throw error to avoid use new Error since we are returning a JSON to improve error parsing

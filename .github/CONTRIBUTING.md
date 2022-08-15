# Contribute

## Introduction

First, thank you for considering contributing to fsuipc.js!

We welcome any type of contribution, not only code. You can help with

- **QA**: file bug reports, the more details you can give the better (e.g. screenshots with the console open, simulator logs, etc)
- **Marketing**: writing blog posts, howto's, printing stickers, ...
- **Community**: presenting the project at meetups, organizing a dedicated meetup for the local community, ...
- **Code**: take a look at the [open issues](https://github.com/tcavenezuela/fsuipc.js/issues). Even if you can't write code, commenting on them, showing that you care about a given issue matters. It helps us triage them.

## Set up your development environment

fsuipc.js is a monorepo. That means the whole solution is broken into small pieces, or packages, each of which solves a specific problem. No need to worry much about it, since [Lerna](https://lerna.js.org/) does most of the work for us. If you are not familiarized with it it's always helpful to have an overall idea of how it works.

Also, this library can't work in MacOS or Linux because depends on Windows C/C++ header files. You can still clone the repo in non-windows environments but only for work in files that don't depend in the FSUIPC module.

## Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests.

## Code review process

The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.
It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you?

## Credits

### Contributors

Thank you to all the people who have already contributed and make possible fsuipc.js!

[koesie10](https://github.com/koesie10/fsuipc-node) for make the FSUIPC headers modules files.

[blackholegalaxy, Flusinerd](https://github.com/fsuipc-node/api) for make the API wrapper around fsuipc-node.

[carl0shd](https://github.com/carl0shd) for make the monorepo and make adjustments, unify all fsuipc community work and update the library.

<!-- This `CONTRIBUTING.md` is based on @nayafia's template https://github.com/nayafia/contributing-template -->

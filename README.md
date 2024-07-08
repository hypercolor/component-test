# Hypercolor Promise Queue

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [License](LICENSE)
- [More Information](#more-information)
    - [Toolchain](#toolchain)
    - [Project Repository](#project-repository)
    - [Organization Repository](#organization-repository)

## Introduction
This is a test package for detemining feasibility of injecting styled components via NPM

## Development/Deployment
- the `copyfiles` package is required to build this package for publishing updates. Please install globally:
  - `npm i -g copyfiles`
- All components should be imported and exported from the `src/index.ts` file.
- The `src/index.ts` file should be the entry point for the package.
- After making changes, run `npm run build` to compile the TypeScript files into JavaScript.
- After building, prepare the package for deployment by running `npm pack`.
- The package will be built and a `.tgz` file will be created in the root directory.
- This `.tgz` file can be installed in other projects for testing by running `npm i <path-to-tgz-file>`.
- After testing, the package can be published to NPM by running `npm publish`.

## Installation
- NPM
    - `npm i @hypercolor/component-test`
- Yarn
    - `yarn add @hypercolor/component-test`

## More Information
### Toolchain
- TypeScript
- React

#### [Project Repository](https://github.com/hypercolor/component-test)

#### [Organization Repository](https://github.com/hypercolor/)

# CRA + Electron + Electron-Builder Boilerplate

This is a skeleton project that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) then modified to use [Electron](https://github.com/electron/electron). It uses [Electron Builder](https://github.com/electron-userland/electron-builder) to package builds. The electron.js file in public/ is based on [Kitze's example](https://github.com/kitze/react-electron-example/blob/master/public/electron.js) as part of his example code accompanying [this article](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3) as well as his suggestion of using [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to start node and electron for development. This skeleton has hot module replacement enabled for development. To change, remove the relevant lines from src/index.js. The entry point for the application is src/App.js.

I made this mostly because I needed a simple boilerplate for quickly creating custom one-off interactive applications and I dislike 

## Instructions

1. Clone this repository
2. Edit package.json to change the name, author, description and build.appId fields
3. Run `yarn install`
4. Optionally, edit the BrowserWindow call on line 11 of public/electron.js to suit your needs

To run the development environment, `yarn start-dev`

To package for your current platform, `yarn build` followed by `yarn package`. Packaged and unpackaged executables will be created in /dist.

To change the target platform for packaging, look at the [documentation for Electron Builder](https://www.electron.build/cli). You may have luck adding custom targets to build build property in package.json or you may want to run `node_modules/.bin/electron-builder` directly.

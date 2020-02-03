# CRA + Electron + Electron-Builder Boilerplate

This is a skeleton project that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) then modified to use [Electron](https://github.com/electron/electron). It uses [Electron Builder](https://github.com/electron-userland/electron-builder) to package builds. The electron.js file in public/ is based on [Kitze's example](https://github.com/kitze/react-electron-example/blob/master/public/electron.js) as part of his example code accompanying [this article](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3) as well as his suggestion of using [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to start node and electron for development. This skeleton has hot module replacement enabled for development. To change, remove the relevant lines from src/index.js. The entry point for the application is src/App.js.

I made this mostly because I needed a simple boilerplate for quickly creating custom one-off interactive applications. I also made this because a lot of the other available Electron + React boilerplates are needlessly complicated, straight up don't work, or try to enforce their own idea of project/code layout. I have kept this as close to a new project made with create-react-app as I can.

## Instructions

1. Clone this repository
2. Edit package.json to change the name, author, description and build.appId fields
3. Run `yarn install`
4. Optionally, edit the BrowserWindow call on line 11 of public/electron.js to suit your needs (e.g., remove `frame: false` to show a title bar on the Electron window)

To run the development environment, `yarn start-dev`

To package for your current platform, `yarn build` followed by `yarn package`. Packaged and unpackaged executables will be created in /dist.

To change the target platform for packaging, look at the [documentation for Electron Builder](https://www.electron.build/cli). You may have luck adding custom targets to build build property in package.json or you may want to run `node_modules/.bin/electron-builder` directly.

## Troubleshooting

If `yarn start-dev` doesn't spawn an Electron window, try running `yarn global add concurrently`. I'm honestly not sure if it needs to be globally installed or not. It is on my development machine. Also, if it's your first time running `yarn start-dev`, it can take a couple minutes to do its initial build.

There's also a gotcha here. Electron-builder will create tgz's in your root directory. The included .gitignore file ignores any .tgz in the root directory. Just be aware of that.

This was created in February of 2020. If you run `yarn upgrade` it may break things if any dependancy has been updated with breaking changes since then.

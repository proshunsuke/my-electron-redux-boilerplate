# My-Electron-Redux-Boilerplate
Electron application boilerplate based on React, Redux, Redux DevTools, Webpack, Bootstrap.

![](./docs/screenshot.png)

## Setup
```shell
$ git clone git@github.com:proshunsuke/my-electron-redux-boilerplate.git
$ cd my-electron-redux-boilerplate
$ bower install & npm install
```

## Run

run webpack dev server

```shell
$ npm run start-dev-server
```

and, in another terminal.

run electron

```shell
$ npm run start-dev
```

## Build and Package

to build

```shell
$ npm run build
```

package your app using electron-packager

```shell
$ ./node_modules/.bin/electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> --version=<version>
```

see more detail https://github.com/maxogden/electron-packager

## Bibliography
- https://github.com/banderson/generator-redux
- https://github.com/airtoxin/Electron-React-Boilerplate
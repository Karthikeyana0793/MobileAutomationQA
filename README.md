# abridgeAIMobileAutomation
Automate Abridge AI application for iOS and Android devices, integrated with browserstack. Framework was basically developed around WebdriverIO and Typescript.

# appium-abdridgeAI

AbdridgeAI Automation project to run Appium tests together with WebdriverIO for:

- iOS/Android Native App

## Based on
This project is currently based on:
- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `git clone <URL>`
2. Running `npm install`
3. Installing Appium on a local machine [here](./docs/APPIUM.md)
4. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
5. Making app available. Create a `./apps` directory. Download the app files (.app / .apk) with version 
6. Running tests `npm run android.app` or `npm run android.app`


## How to implement in your project
Choose one of the following options:

1. Clone the git repo — `git clone <URL>`
2. Then copy the files to your project directory (all files in `/tests` and the `wdio.conf`-files in the `config`-folder)
3. Merge project dev dependencies with your projects dev dependencies in your `package.json`
4. Merge the scripts to your `package.json` scripts

## Configuration files
This boilerplate uses a specific config for iOS and Android, see [configs](./config). The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).
This shared config holds **all the defaults** so the iOS and Android configs only need to hold the capabilities and specs that are needed
for running on iOS and or Android (app or browser).

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.

Since we do not have Appium installed as part of this package we are going to use the globally installed version of Appium. This is
configured in [`wdio.appium.conf.ts`](./config/wdio.appium.conf.ts).

## Native App Tests
All tests can be executed on te devices as configured in [`wdio.ANDROID.conf.ts`](./config/wdio.ANDROID.conf.ts). Please check the below tests on what they do or on how to run them separately.

        // For Android local execution
        npm run android.app

### BrowserStack
This boilerplate provides a setup for testing with BrowserStack. Please check the [BrowserStack](./config/browserstack)-folder to see the
setup for Android.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
$ npm install --save-dev @wdio/browserstack-service
```

There are scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

    // For Android
    $ npm run android.browserstack.app

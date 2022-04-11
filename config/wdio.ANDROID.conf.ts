import { join } from 'path';
import config from './wdio.appium.conf';

config.specs = [
    './test/specs/*.spec.ts',
];

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'RZCR30163VW',
        platformVersion: '12.0',
        automationName: 'UiAutomator2',
        // The path to the app
        app: join(process.cwd(), './apps/app-staging2-release.apk'),
        noReset: true,
        newCommandTimeout: 240,
    },
];

exports.config = config;

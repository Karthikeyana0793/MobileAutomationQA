import { config } from './wdio.conf';

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            command: 'appium',
            args: {
                relaxedSecurity: true,
            },
        },

    ],
]);

export default config;

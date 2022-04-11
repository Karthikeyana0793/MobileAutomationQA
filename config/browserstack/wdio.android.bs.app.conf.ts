import { config } from '../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './test/specs/*.spec.ts',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'karthikeyana_TY2b1v';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'r79e6AgU5kyJWQNKXxEW';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,
        'browserstack.console': 'errors',

        // Set URL of the application under test
        app_url: process.env.BROWSERSTACK_APP_ID || 'bs://e65bfba214550f7b43aa90f66be5bab00e715c0a',

        // Specify device and os_version for testing
        device: 'Samsung Galaxy S20',
        os_version: '10.0',

        // Set other BrowserStack capabilities
        project: 'wdio-abridge-project',
        build: 'android',
        name: 'wdio-abridge'
    },
];

exports.config = config;

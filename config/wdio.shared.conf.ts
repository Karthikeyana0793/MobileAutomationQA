const allure = require('@wdio/allure-reporter').default;
import { WAITFORTIMEOUT } from '../constant/wait.constant';
import logger from '../utility/logger';

const allureResultsDir = 'allure-results';

export const config: WebdriverIO.Config = {

    runner: 'local',

    specs:[],

    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    // Set specific log levels per logger
    bail: 0,
    baseUrl: '',
    // Default timeout for all waitFor* commands.
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
     waitforTimeout: WAITFORTIMEOUT,
    // Default timeout in milliseconds for request
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    // Test runner services
    // Services are empty here but will be defined in the
    // configuration files
    services: [],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [],
    // Options to be passed to Mocha.
    mochaOpts: {
        ui: 'bdd',
        require: ['tsconfig-paths/register'],
        timeout: 90000,
    },
    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
        // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
        // do please make sure "tsconfig-paths" is installed as dependency
        // tsConfigPathsOpts: {
        //     baseUrl: './'
        // }
    },
    before: () => {
        logger.info('Script start to execute in Android Environment');
    },
    after: () => {
        logger.info('Script completed execution in Android Environment');
    },
    beforeTest: function (test, context) {
        logger.info('Before test Android Environment');
    },
    afterTest: (test, context, { error, result, passed, duration }) => {
            if (passed) {
                driver.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Testcase passed"}}');
            }
            else{
                driver.execute('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": " Testcase failed"}}');
            }
    },
    onPrepare: () => {
        logger.debug('<<< MOBILE TESTS STARTED >>>');
    },
    onComplete: () => {
        //const mergeResults = require('wdio-mochawesome-reporter/mergeResults');
        //mergeResults(mochaResultsDir, "wdio*")
        logger.debug('<<< TESTING FINISHED >>>');
    },
};
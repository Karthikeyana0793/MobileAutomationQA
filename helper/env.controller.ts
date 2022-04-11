import { MOBILE } from '../constant/helper.constant';
import { TEST_ENV } from 'config/env.config';
import logger from '../utility/logger';

class envController {
    public getBaseURL(env?: string): any {
        let getUrl: any;
        if (env) {
            getUrl =
                env == MOBILE
                    ? TEST_ENV.BASEURL
                    : 'error';
        } else {
            getUrl =
                process.env.ENV == MOBILE
                    ? TEST_ENV.BASEURL
                    : 'error';
        }
        if (getUrl == 'error') {
            logger.error(
                "Invalid ENV: ENV should be 'run.local' or 'run.dev' or 'run.test' or 'run.stage' or 'run.prod'",
            );
            throw new Error('Invalid Environment Name!!!');
        } else {
            return getUrl;
        }
    }

    public setEnvData(env?: string) {
        let getData;
        if (env) {
            getData =
                env == MOBILE
                    ? TEST_ENV.TESTDATA
                    : 'error';
        } else {
            getData =
                process.env.ENV == MOBILE
                    ? TEST_ENV.TESTDATA
                    : 'error';
        }
        if (getData == 'error') {
            logger.error(
                "Invalid ENV: ENV should be 'run.local' or 'run.dev' or 'run.test' or 'run.stage' or 'run.prod'",
            );
            throw new Error('Invalid Environment Name!!!');
        } else {
            return getData;
        }
    }
}

export default new envController();

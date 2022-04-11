import envController from 'helper/env.controller';
import ILoginPage from 'test/interfaces/IloginPage';
import actionContainer from 'test/wrapper/actionContainer';
import IactionContainer from 'test/wrapper/IactionContainer';
import logger from 'utility/logger';

const testData = envController.setEnvData();

describe('Abridge AI Patient App Automation', () => {
    let actContr: IactionContainer;
    let loginPageObj: ILoginPage;

    before('setup', () => {
        logger.debug('Test execution started');
        actContr = new actionContainer();
        loginPageObj = actContr.loadLoginpage();
    });

    it('Verify intro screen after app launch', () => {
        logger.debug('Testcase_01');
        loginPageObj.verifyIntroScreen();
    });
    
    it('SignIn to Abridge App', () => {
        logger.debug('Testcase_02');
        loginPageObj.navigateToSignInPage();
    });

    // it('Logout of Abridge App', () => {
    //     logger.debug('Testcase_03');
    //     loginPageObj.logOut();
    // });
});

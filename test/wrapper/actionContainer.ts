import logger from "utility/logger";
import BasePage from "test/common/basepage";
import IactionContainer from "./IactionContainer";

import ILoginPage from "test/interfaces/IloginPage";

import LoginPage from "test/pages/login.page";

export default class actionContainer extends BasePage implements IactionContainer {
   
    public loadLoginpage(): ILoginPage {    
        logger.debug('Login page Loaded Successfully..!');
        return new LoginPage();
    }
    
}
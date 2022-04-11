import IloginPage from 'test/interfaces/IloginPage';
import { loginObjects } from 'test/pageObjects/login.objects';
import BasePage from '../common/basepage';
import {intro_Screen_Map} from '../../constant/text_Content';

export default class LoginPage extends BasePage implements IloginPage {

    get introHeader() {
        return $(loginObjects.introHeader);
    }
    get introDescription() {
        return $(loginObjects.introDescription);
    }
    get introImage() {
        return $(loginObjects.introImage);
    }
    get introGetStartedButton() {
        return $(loginObjects.introGetStartedButton);
    }
    get iSignInText(){
        return $(loginObjects.iSignInText);
    }
    get iCountryCode(){
        return $(loginObjects.iCountryCode);
    }
    get iCountrySearch(){
        return $(loginObjects.iCountrySearch);
    }
    get iCountryIN(){
        return $(loginObjects.iCountryIN);
    }
    get iPhoneNumber(){
        return $(loginObjects.iPhoneNumber);
    }
    get iNextButton(){
        return $(loginObjects.iNextButton);
    }
    get iProfileIcon(){
        return $(loginObjects.iProfileIcon);
    }
    get iProfileDetails(){
        return $(loginObjects.iProfileDetails);
    }
    get iAppSettings(){
        return $(loginObjects.iAppSettings);
    }
    get iAppLogout(){
        return $(loginObjects.iAppLogout);
    }
    
    verifyIntroScreen(): void{
        for (let header of intro_Screen_Map.entries()) {  
            expect(this.introHeader).toHaveTextContaining(header[0]);
            expect(this.introDescription).toHaveTextContaining(header[1]);
            this.swipe();
            driver.pause(1000);
        }  
    }
    navigateToSignInPage(): void{
        this.introGetStartedButton.click();
        driver.pause(2000);
        this.waitForTextPresent(this.iSignInText, "Enter your phone number");
        this.iCountryCode.click();
        this.iCountrySearch.click();
        this.iCountrySearch.setValue('india');
        this.iCountryIN.click();
        this.iPhoneNumber.setValue('9994133167');
        driver.pause(2000);
        this.iNextButton.click();
        driver.pause(5000);
    }
    logOut(): void {
        driver.pause(15000);
        this.iProfileIcon.click();
        this.iAppSettings.click();
        this.iAppLogout.click();
    }
}

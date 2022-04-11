export default interface ILoginPage {
    introHeader: WebdriverIO.Element;
    introDescription: WebdriverIO.Element;
    introImage: WebdriverIO.Element;
    introGetStartedButton: WebdriverIO.Element;
    iSignInText: WebdriverIO.Element;
    iCountryCode: WebdriverIO.Element;
    iCountrySearch: WebdriverIO.Element;
    iCountryIN: WebdriverIO.Element;
    iPhoneNumber: WebdriverIO.Element;
    iNextButton: WebdriverIO.Element;
    iProfileIcon: WebdriverIO.Element;
    iProfileDetails: WebdriverIO.Element;
    iAppSettings: WebdriverIO.Element;
    iAppLogout: WebdriverIO.Element;
    navigateToSignInPage(): void;
    verifyIntroScreen(): void;
    logOut(): void;
}
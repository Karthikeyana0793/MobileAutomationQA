import actionKeywords from './actionKeywords';
import controller from '../../helper/env.controller';
import genericMethods from '../../utility/genericMethods';

export default class BasePage extends actionKeywords {
    public open(path: string) {
        const envUri = browser.config.baseUrl;
        browser.maximizeWindow();
        return browser.url(`${envUri}/${path}`);
    }
    public loadAPPURL(env: string, path: string) {
        const envUri = controller.getBaseURL(env);
        return browser.url(`${envUri}/${path}`);
    }
    public waitToExitLoadingIcon(loadTime?: number) {
        if (loadTime) {
            this.waitUntillDisappear($('.loading.show'), loadTime);
        } else {
            this.waitUntillDisappear($('.loading.show'));
        }
    }
    public getDynamicXpath(xpath: string, value: string) {
        return genericMethods.formatString(xpath, value);
    }
}

import { DEFAULT_TIMEOUT } from '../../constant/wait.constant';

export default class ActionKeywords {
    public waitForElement(selector: WebdriverIO.Element, isExist = true) {
        return selector.waitForExist({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isExist,
        });
    }
    public waitForClickable(selector: WebdriverIO.Element, isClickable = true) {
        return selector.waitForClickable({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isClickable,
        });
    }
    public waitUntillDisappear(selector: WebdriverIO.Element, settime?: number) {
        // browser.waitUntil(() => !selector.isDisplayed());
        let TIMEOUT;
        if (settime) {
            TIMEOUT = settime;
        } else {
            TIMEOUT = DEFAULT_TIMEOUT;
        }
        return selector.waitForExist({
            timeout: TIMEOUT,
            reverse: true,
        });
    }
    public waitForTextPresent(selector: WebdriverIO.Element, text: string) {
        browser.waitUntil(
            function () {
                return selector.getText() === text;
            },
            { timeout: DEFAULT_TIMEOUT },
        );
    }
    public waitAndClick(selector: WebdriverIO.Element) {
        selector.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });
        selector.click();
    }
    public clearAndSetValue(selector: WebdriverIO.Element, value: string) {
        selector.clearValue();
        selector.setValue(value);
    }
    public scrollToElement(selector: WebdriverIO.Element) {
        selector.scrollIntoView();
    }
    public swipe(){
        driver.touchPerform([
            { action: 'press', options: { x: 1000, y: 1500 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 10, y: 1500 }},
            { action: 'release' }
          ]);
    }
}
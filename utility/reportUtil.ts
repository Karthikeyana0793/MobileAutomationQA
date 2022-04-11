import allureReporter from '@wdio/allure-reporter';
import fs from 'fs';
import moment from 'moment';
class reportUtil {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public addReportInfo(feature: string, testLink?: string): void {
        allureReporter.addFeature(feature);
        if (testLink) {
            allureReporter.addTestId(testLink);
        }
    }
    public takeScreenshot(name: string, failure = false) {
        if (!name) name = moment().format('YYYY-MM-DDTH:mm:ss');
        const path = './testReport/screenshots/';
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
        if (failure) {
            name = name + '_fail';
        }
        name = name.replace(/ /g, '_') + '.png';
        browser.saveScreenshot(path + name);
        const data = fs.readFileSync(`${path}/${name}`);
        allureReporter.addAttachment(name, data, 'image/png');
    }
}

export default new reportUtil();

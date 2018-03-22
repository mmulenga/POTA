/* eslint-disable */

module.exports = {
  'Demo test Google' : function (browser) {
    console.log('test');
    browser.url(browser.globals.devServerURL);
    browser.url.waitForElementVisible('body', 1000);

    browser.url.waitForElementPresent('#modal_submit', 1000);

    browser.url.waitForElementPresent('#cv_AtrialFib', 500);
    browser.url.waitForElementPresent('#cv_Defib', 500);
    browser.url.waitForElementPresent('#cv_CAD', 500);
    browser.url.waitForElementPresent('#cv_CardiacStent', 500);
    browser.url.waitForElementPresent('#cv_CerebralDisease', 500);
    browser.url.waitForElementPresent('#cv_PulmonaryVascular', 500);
    browser.url.waitForElementPresent('#cv_TIA', 500);
    browser.url.waitForElementPresent('#cv_Stroke', 500);
    browser.url.waitForElementPresent('#cv_VHD', 500);
    browser.url.waitForElementPresent('#cv_HeartFail', 500);
    browser.url.waitForElementPresent('#cv_PVD', 500);

    browser.url.waitForElementPresent('#pd_PulmDisease', 500);

    browser.url.waitForElementPresent('#other_Age', 500);
    browser.url.waitForElementPresent('#other_Risk', 500);
    browser.url.waitForElementPresent('#other_Bleeding', 500);
    browser.url.waitForElementPresent('#other_Anemia', 500);
    browser.url.waitForElementPresent('#other_ActiveBleeding', 500);
    browser.url.waitForElementPresent('#other_KidneyDisease', 500);
    browser.url.waitForElementPresent('#other_Diabetes', 500);
    browser.url.waitForElementPresent('#other_Malignancy', 500);
    browser.url.waitForElementPresent('#other_Hepatic', 500);
    browser.url.waitForElementPresent('#other_Adrenal', 500);
    browser.url.waitForElementPresent('#other_Pituitary', 500);
    browser.url.waitForElementPresent('#other_Endocrine', 500);
    browser.url.waitForElementPresent('#other_Thyroid', 500);

    browser.url.waitForElementPresent('#med_Digoxin', 500);
    browser.url.waitForElementPresent('#med_Lithium', 500);
    browser.url.waitForElementPresent('#med_Diuretics', 500);
    browser.url.waitForElementPresent('#med_ACEI', 500);
    browser.url.waitForElementPresent('#med_ARB', 500);
    browser.url.waitForElementPresent('#med_NSAIDS', 500);
    browser.url.waitForElementPresent('#med_Anticoagulant', 500);
    browser.url.waitForElementPresent('#med_Antiplatelet', 500);
    browser.url.waitForElementPresent('#med_Steroid', 500);

    browser.url.end();
};

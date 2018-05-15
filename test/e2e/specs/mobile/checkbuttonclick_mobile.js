/* eslint-disable */

module.exports = {
  'Demo preopt app test (desktop)': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)

      // .resizeWindow(414, 736)
      
      .waitForElementVisible('#understanding', 1000)
      .click('#understanding')
      .waitForElementNotVisible('#understanding', 500)

      .waitForElementPresent('#submit_button', 1000)

      .waitForElementPresent('#mobile_cv_AtrialFib', 500)
      .click('#mobile_cv_AtrialFib')
      .waitForElementPresent('#mobile_cv_Defib', 500)
      .waitForElementPresent('#mobile_cv_CAD', 500)
      .waitForElementPresent('#mobile_cv_CerebralDisease', 500)
      .waitForElementPresent('#mobile_cv_Stroke', 500)
      .waitForElementPresent('#mobile_cv_VHD', 500)
      .waitForElementPresent('#mobile_cv_HeartFail', 500)
      .waitForElementPresent('#mobile_cv_PVD', 500)

      .waitForElementPresent('#mobile_pd_PulmDisease', 500)
      .click('#mobile_pd_PulmDisease')

      .waitForElementPresent('#mobile_other_Age', 500)
      .waitForElementPresent('#mobile_other_Risk', 500)
      .waitForElementPresent('#mobile_other_Bleeding', 500)
      .waitForElementPresent('#mobile_other_Anemia', 500)
      .waitForElementPresent('#mobile_other_ActiveBleeding', 500)
      .waitForElementPresent('#mobile_other_KidneyDisease', 500)
      .waitForElementPresent('#mobile_other_Diabetes', 500)
      .waitForElementPresent('#mobile_other_Malignancy', 500)
      .waitForElementPresent('#mobile_other_Hepatic', 500)
      .waitForElementPresent('#mobile_other_Adrenal', 500)
      .waitForElementPresent('#mobile_other_Pituitary', 500)
      .waitForElementPresent('#mobile_other_Endocrine', 500)
      .waitForElementPresent('#mobile_other_Thyroid', 500)

      .waitForElementPresent('#mobile_med_Digoxin', 500)
      .click('#mobile_med_Digoxin')
      .waitForElementPresent('#mobile_med_Lithium', 500)
      .waitForElementPresent('#mobile_med_Diuretics', 500)
      .waitForElementPresent('#mobile_med_ACEI', 500)
      .waitForElementPresent('#mobile_med_ARB', 500)
      .waitForElementPresent('#mobile_med_NSAIDS', 500)
      .waitForElementPresent('#mobile_med_Anticoagulant', 500)
      .waitForElementPresent('#mobile_med_Antiplatelet', 500)
      .waitForElementPresent('#mobile_med_Steroid', 500)

      .assert.hidden('#modal_okay', 'modal_okay was hidden')

      .waitForElementPresent('#reset_button', 1000)
      .click('#reset_button')

      .waitForElementPresent('#mobile_status_button', 1000)

      .waitForElementPresent('#submit_button', 1000)
      .click('#submit_button')

      .waitForElementVisible('#modal_okay', 1000)
      .click('#modal_okay')
      
      .end();
  },
};

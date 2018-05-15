/* eslint-disable */

module.exports = {
  'Demo preopt app test (desktop)': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)

      .maximizeWindow()
      
      .waitForElementVisible('#understanding', 1000)
      .click('#understanding')
      .waitForElementNotVisible('#understanding', 500)

      .waitForElementPresent('#submit_button', 1000)

      .waitForElementPresent('#cv_AtrialFib', 500)
      .click('#cv_AtrialFib')
      .waitForElementPresent('#cv_Defib', 500)
      .waitForElementPresent('#cv_CAD', 500)
      .waitForElementPresent('#cv_CerebralDisease', 500)
      .waitForElementPresent('#cv_VHD', 500)
      .waitForElementPresent('#cv_HeartFail', 500)
      .waitForElementPresent('#cv_PVD', 500)

      .waitForElementPresent('#pd_PulmDisease', 500)
      .click('#pd_PulmDisease')

      .waitForElementPresent('#other_Risk', 500)
      .waitForElementPresent('#other_Bleeding', 500)
      .waitForElementPresent('#other_Anemia', 500)
      .waitForElementPresent('#other_KidneyDisease', 500)
      .waitForElementPresent('#other_Diabetes', 500)
      .waitForElementPresent('#other_Malignancy', 500)
      .waitForElementPresent('#other_Hepatic', 500)
      .waitForElementPresent('#other_Adrenal', 500)
      .waitForElementPresent('#other_Pituitary', 500)
      .waitForElementPresent('#other_Endocrine', 500)
      .waitForElementPresent('#other_Thyroid', 500)

      .waitForElementPresent('#med_Digoxin', 500)
      .click('#med_Digoxin')
      .waitForElementPresent('#med_Lithium', 500)
      .waitForElementPresent('#med_Diuretics', 500)
      .waitForElementPresent('#med_ACEI', 500)
      .waitForElementPresent('#med_ARB', 500)
      .waitForElementPresent('#med_NSAIDS', 500)
      .waitForElementPresent('#med_Anticoagulant', 500)
      .waitForElementPresent('#med_Antiplatelet', 500)
      .waitForElementPresent('#med_Steroid', 500)

      .assert.hidden('#modal_okay', 'modal_okay was hidden')

      .waitForElementPresent('#reset_button', 1000)
      .click('#reset_button')

      .waitForElementPresent('#submit_button', 1000)
      .click('#submit_button')

      .waitForElementVisible('#modal_okay', 1000)
      .click('#modal_okay')
      
      .end();
  },
};

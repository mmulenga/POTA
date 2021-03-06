/* eslint-disable */

module.exports = {
  'Demo preopt app test (mobile)' : function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      
      // .resizeWindow(414, 736)

      .waitForElementPresent('#understanding', 1000)
      .click('#understanding')
      
      .waitForElementPresent('#submit_button', 1000)
      .waitForElementPresent('#mobile_status_button', 1000)
      .waitForElementPresent('#reset_button', 1000)

      .waitForElementPresent('#mobile_cv_AtrialFib', 500)
      .waitForElementPresent('#mobile_cv_Defib', 500)
      .waitForElementPresent('#mobile_cv_CAD', 500)
      .waitForElementPresent('#mobile_cv_CerebralDisease', 500)
      .waitForElementPresent('#mobile_cv_VHD', 500)
      .waitForElementPresent('#mobile_cv_HeartFail', 500)
      .waitForElementPresent('#mobile_cv_PVD', 500)

      .waitForElementPresent('#mobile_pd_PulmDisease', 500)

      .waitForElementPresent('#mobile_other_Risk', 500)
      .waitForElementPresent('#mobile_other_Bleeding', 500)
      .waitForElementPresent('#mobile_other_Anemia', 500)
      .waitForElementPresent('#mobile_other_KidneyDisease', 500)
      .waitForElementPresent('#mobile_other_Diabetes', 500)
      .waitForElementPresent('#mobile_other_Malignancy', 500)
      .waitForElementPresent('#mobile_other_Hepatic', 500)
      .waitForElementPresent('#mobile_other_Adrenal', 500)
      .waitForElementPresent('#mobile_other_Pituitary', 500)
      .waitForElementPresent('#mobile_other_Endocrine', 500)
      .waitForElementPresent('#mobile_other_Thyroid', 500)

      .waitForElementPresent('#mobile_med_Digoxin', 500)
      .waitForElementPresent('#mobile_med_Lithium', 500)
      .waitForElementPresent('#mobile_med_Diuretics', 500)
      .waitForElementPresent('#mobile_med_ACEI', 500)
      .waitForElementPresent('#mobile_med_ARB', 500)
      .waitForElementPresent('#mobile_med_NSAIDS', 500)
      .waitForElementPresent('#mobile_med_Anticoagulant', 500)
      .waitForElementPresent('#mobile_med_Antiplatelet', 500)
      .waitForElementPresent('#mobile_med_Steroid', 500)
    
      .end();
  }
};

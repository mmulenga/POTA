/* eslint-disable */

module.exports = {
  'Demo test Google' : function (browser) {
    console.log('test');
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('body', 1000)
      .waitForElementPresent('#submit', 1000)
      .waitForElementPresent('#cv_atrial_fibrillation', 500)
      .waitForElementPresent('#cv_defibrillator', 500)
      .waitForElementPresent('#cv_coronary_artery_disease', 500)
      .waitForElementPresent('#cv_cardiac_stent', 500)
      .waitForElementPresent('#cv_cerebral_disease', 500)
      .waitForElementPresent('#cv_pulmonary_vascular_disease', 500)
      .waitForElementPresent('#cv_tia', 500)
      .waitForElementPresent('#cv_stroke', 500)
      .waitForElementPresent('#cv_vavular_heart_disease', 500)
      .waitForElementPresent('#cv_heart_failure', 500)
      .waitForElementPresent('#cv_pvd', 500)
      .waitForElementPresent('#pd_copd', 500)
      .waitForElementPresent('#od_bleeding_disorders', 500)
      .waitForElementPresent('#od_anemia', 500)
      .waitForElementPresent('#od_active_bleeding', 500)
      .waitForElementPresent('#od_renal_disease', 500)
      .waitForElementPresent('#od_diabetes', 500)
      .waitForElementPresent('#od_present_malignancy', 500)
      .waitForElementPresent('#od_hepatic_disease', 500)
      .waitForElementPresent('#od_adrenal_disease', 500)
      .waitForElementPresent('#od_pituitary_disease', 500)
      .waitForElementPresent('#od_endocrine_disease', 500)
      .waitForElementPresent('#med_digoxin', 500)
      .waitForElementPresent('#med_lithium', 500)
      .waitForElementPresent('#med_diuretics', 500)
      .waitForElementPresent('#med_acei', 500)
      .waitForElementPresent('#med_arb', 500)
      .waitForElementPresent('#med_nsaids', 500)
      .waitForElementPresent('#med_anticoagulants', 500)
      .waitForElementPresent('#med_antiplatelet', 500)
      .waitForElementPresent('#med_steroid_use', 500)
      .end();
  }
};

/* eslint-disable */

module.exports = {
  'Common scenerio test': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      // Checking for body
      .waitForElementVisible('body', 1000)
      .maximizeWindow()

      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      // Checking if hidden and clicking understand btn
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')

      // Checking if hover glossary works
      .moveToElement('#pd_PulmDisease > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Spirometric',
        'Checking if hover glossary works for <#pd_PulmDisease>')

      .moveToElement('#other_Bleeding > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'bleeding',
        'Checking if hover glossary works for <#other_Bleeding>')

      .moveToElement('#other_Hepatic > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Alcohol',
        'Checking if hover glossary works for <#other_Hepatic>')

      .moveToElement('#other_Pituitary > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Acromegaly',
        'Checking if hover glossary works for <#other_Pituitary>')

      .moveToElement('#other_Endocrine > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Parathyroid',
        'Checking if hover glossary works for <#other_Endocrine>')

      .moveToElement('#med_Diuretics > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Furosemide',
        'Checking if hover glossary works for <#med_Diuretics>')

      .moveToElement('#med_ACEI > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Captopril',
        'Checking if hover glossary works for <#med_ACEI>')

      .moveToElement('#med_ARB > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Valsartan',
        'Checking if hover glossary works for <#med_ARB>')

      .moveToElement('#med_Anticoagulant > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Warfarin',
        'Checking if hover glossary works for <#med_Anticoagulant>')

      .moveToElement('#med_Antiplatelet > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Clopidogrel',
        'Checking if hover glossary works for <#med_Antiplatelet>')

      .moveToElement('#med_Steroid > div.row > div.col-1', 40, 0)
      .assert.containsText('pre.pt-0', 'Prednisone',
        'Checking if hover glossary works for <#med_Steroid>')

      // Test Case 1

      // Checking if submit and reset btn are visible
      .assert.visible('#submit_button')
      .assert.visible('#reset_button')
      // Checking if certain checkboxes are unchecked
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')
      // Checking if certain checkboxes are checked after clicking
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')

      // Checking if PatientStatus is updated
      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Age')  
        
      // Checking if result modal is visible after clicking
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      // Checking if modal is hidden after clicking
      .click('#modal_okay')
      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')
      // Checking if checkboxes are still checked
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .assert.visible('#other_checkbox_Age:checked',
        'Testing if element <#other_checkbox_Age> is checked')
      // Unchecking them and then confirming that they are unchecked
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .click('#other_checkbox_Age')
      .assert.visible('#other_checkbox_Age:not(:checked)',
        'Testing if element <#other_checkbox_Age> is unchecked')

       // Checking if PatientStatus is updated
       .assert.containsText('div.list', '')

      // Test Case 6
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')
      // Checking if PatientStatus is updated
      .click('#other_Diabetes')
      .assert.containsText('div.list', 'Diabetes')
      .click('#other_Malignancy')
      .assert.containsText('div.list', 'Present malignancy')

      .assert.visible('#other_checkbox_Diabetes:checked', 
        'Testing if element <#other_checkbox_Diabetes> is checked')
      .assert.visible('#other_checkbox_Malignancy:checked',
        'Testing if element <#other_checkbox_Malignancy> is checked')
 
      // Checking results are correct
      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'Renal')
      .assert.containsText('p:nth-of-type(3)', 'Gluc')
      .assert.containsText('p:nth-of-type(4)', 'CBC')
      .assert.containsText('p:nth-of-type(5)', 'CXR')
      .assert.containsText('#conditional-exams', 'HbA1C')
      .assert.containsText('div[id=conditional-exams]:nth-of-type(2)', 'PTT/INR')

      .click('#modal_okay')
      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')


      // Click Reset 
      .click('#reset_button')
      .assert.containsText('div.list', '')
      .assert.visible('#other_checkbox_Diabetes:not(:checked)', 
        'Testing if element <#other_Diabetes> is unchecked')
      .assert.visible('#other_checkbox_Malignancy:not(:checked)', 
        'Testing if element <#other_Malignancy> is unchecked')

      // Test Case 4
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')

      .click('#cv_VHD')
      .click('#cv_HeartFail')

      .assert.visible('#cv_checkbox_VHD:checked', 
        'Testing if element <#cv_checkbox_VHD> is checked')
      .assert.visible('#cv_checkbox_HeartFail:checked',
        'Testing if element <#cv_checkbox_HeartFail> is checked')

      .assert.containsText('div.list', 'Valvular heart disease')
      .assert.containsText('div.list', 'Heart failure')  

      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      .click('#modal_okay')

      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')

      .click('#reset_button')
      .assert.containsText('div.list', '')
      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .assert.visible('#cv_checkbox_HeartFail:not(:checked)', 
        'Testing if element <#cv_checkbox_HeartFail> is unchecked')


      // Test Case 7 
      .assert.visible('#cv_checkbox_AtrialFib:not(:checked)', 
        'Testing if element <#cv_checkbox_AtrialFib> is unchecked')
      .assert.visible('#med_checkbox_Anticoagulant:not(:checked)',
        'Testing if element <#med_checkbox_Anticoagulant> is unchecked')
      // Checking if certain checkboxes are checked after clicking
      .click('#cv_checkbox_AtrialFib')
      .assert.visible('#cv_checkbox_AtrialFib:checked', 
        'Testing if element <#cv_checkbox_AtrialFib> is checked')
      .click('#med_checkbox_Anticoagulant')
      .assert.visible('#med_checkbox_Anticoagulant:checked',
        'Testing if element <#med_checkbox_Anticoagulant> is checked')        

      .assert.containsText('div.list', 'Atrial fibrillation')
      .assert.containsText('div.list', 'Anticoagulants')  

      .click('#submit_button')
      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('p:nth-of-type(2)', 'CBC')
      .assert.containsText('p:nth-of-type(3)', 'Renal Panel')
      .assert.containsText('#conditional-exams', 'PTT/INR')

      .click('#modal_okay')
      
      // Test Case 3 
      .assert.visible('#med_checkbox_Anticoagulant:checked',
        'Testing if element <#med_checkbox_Anticoagulant> is checked')   
      .click('#med_checkbox_Anticoagulant')
      .assert.visible('#med_checkbox_Anticoagulant:not(:checked)',
        'Testing if element <#med_checkbox_Anticoagulant> is unchecked')

      .assert.visible('#cv_checkbox_VHD:not(:checked)', 
        'Testing if element <#cv_checkbox_VHD> is unchecked')
      .click('#cv_checkbox_VHD')      
      .assert.visible('#cv_checkbox_VHD:checked',
        'Testing if element <#cv_checkbox_VHD> is checked')   

      .assert.containsText('div.list', 'Atrial')  
      .assert.containsText('div.list', 'Valvular')  

      .click('#submit_button')

      .assert.visible('#modal_okay')
      .assert.visible('#exams')
      .assert.containsText('#exams', 'ECG')
      .assert.containsText('#conditional-exams', 'CBC')

      
      .click('#modal_okay')
      .assert.hidden('#modal_okay')
      .assert.hidden('#exams')


      .click('#reset_button')
      .assert.containsText('div.list', '')  

  


      
      .resizeWindow(414, 736)
      .refresh()
      .pause(2000)

      // Checking for initial page
      .assert.visible('#modal_box')
      .assert.visible('#understanding')
      .assert.containsText('h5.modal-title', 'Disclaimer')
      // Checking if hidden and clicking understand btn
      .click('#understanding')
      .assert.hidden('#understanding')
      .assert.hidden('#modal_box')

      

      .pause(5000)


      // .assert.visible('#mobile_submit_button')
      // .assert.visible('#mobile_reset_button')

      // .assert.visible('#mobile_cv_AtrialFib')
      // .assert.visible('#mobile_cv_Defib')
      // .assert.visible('#mobile_cv_CAD')
      // .assert.visible('#mobile_cv_CardiacStent')
      // .assert.visible('#mobile_cv_CerebralDisease')
      // .assert.visible('#mobile_cv_PulmonaryVascular')
      // .assert.visible('#mobile_cv_TIA')
      // .assert.visible('#mobile_cv_Stroke')
      // .assert.visible('#mobile_cv_VHD')
      // .assert.visible('#mobile_cv_HeartFail')
      // .assert.visible('#mobile_cv_PVD')

      // .assert.visible('#mobile_pd_PulmDisease')
      
      // .assert.visible('#mobile_other_Age')
      // .assert.visible('#mobile_other_Risk')
      // .assert.visible('#mobile_other_Bleeding')
      // .assert.visible('#mobile_other_Anemia')
      // .assert.visible('#mobile_other_ActiveBleeding')
      // .assert.visible('#mobile_other_KidneyDisease')
      // .assert.visible('#mobile_other_Diabetes')
      // .assert.visible('#mobile_other_Malignancy')
      // .assert.visible('#mobile_other_Hepatic')
      // .assert.visible('#mobile_other_Adrenal')
      // .assert.visible('#mobile_other_Pituitary')
      // .assert.visible('#mobile_other_Endocrine')
      // .assert.visible('#mobile_other_Thyroid')

      // .assert.visible('#mobile_med_Digoxin')
      // .assert.visible('#mobile_med_Lithium')
      // .assert.visible('#mobile_med_Diuretics')
      // .assert.visible('#mobile_med_ACEI')
      // .assert.visible('#mobile_med_ARB')
      // .assert.visible('#mobile_med_NSAIDS')
      // .assert.visible('#mobile_med_Anticoagulant')
      // .assert.visible('#mobile_med_Antiplatelet')
      // .assert.visible('#mobile_med_Steroid')




      .closeWindow()


      // .assert.hidden('#modal_okay', 'modal_okay was hidden')

      // .assert.visible('#submit_button', 1000)
      // .click('#submit_button')

      // .waitForElementVisible('#modal_okay', 1000)
      // .click('#modal_okay')

      .end();
  },
};

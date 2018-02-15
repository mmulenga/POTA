/* eslint-disable */

// Initial Testing Structure for Pre-op Grid

// Cardiovasular Diseases and list of test needed
// Used for comparing and testing of the algorithm in main.js
const comorbidities = {
  0: 'Atrial Fibrillation / History of irregular heart beat',
  1: 'Defibrillator / Pacemaker',
  2: 'Coronary artery disease (CAD)',
  3: 'Cardiac stent (<12 months)',
  4: 'History of cerebral or pulmonary vascular disease',
  5: 'Transient Ischemic Attac (TIA) or stroke',
  6: 'Valvular heart disease / Valve replacement',
  7: 'Heart failure',
  8: 'Peripheral vasuclar disease (PVD)',
  9: 'Severe COPD; Home oxygen; Pulmonary HTN',
  10: 'Bleeding disorders (hemophiliac | DVT)',
  11: 'History of anemia or active bleeding',
  12: 'Renal disease (on dialysis or at risk for Acue Kidney Injury [AKI])',
  13: 'Diabetes (on Insulin or 2 oral agents)',
  14: 'Present malignancy / surgery for malignancy',
  15: 'Hepatic disease',
  16: 'History of adrenal, pituitary, or major systemic endocrine disease',
  17: 'Use of Digoxin',
  18: 'Use of Lithium, Diuretics, ACE-I, ARB, nSAIDS',
  19: 'Use of Anticoagulants / Antiplatelet (ASA excluded)',
  20: 'Systemic steroid use within 6 months',
  list: {
    0: { tests: ['ECG'] },
    1: { tests: ['ECG'] },
    2: { tests: ['ECG'] },
    3: { tests: ['ECG'] },
    4: { tests: ['ECG'] },
    5: { tests: ['ECG'] },
    6: { tests: ['ECG', 'CBC'] },
    7: { tests: ['ECG', 'CBC', 'Renal Panel'] },
    8: { tests: ['ECG', 'Renal Panel'] },
    9: { tests: ['ECG', 'CBC', 'CXR'] },
    10: { tests: ['G&S', 'CBC', 'PTT/INR'] },
    11: { tests: ['CBC'] },
    12: { tests: ['ECG', 'CBC', 'Renal Panel'] },
    13: { tests: ['ECG', 'Renal Panel', 'Gluc', 'HbA1C'] },
    14: { tests: ['ECG', 'CBC', 'Renal Panel', 'PTT/INR', 'CXR'] },
    15: { tests: ['CBC', 'Renal Panel', 'PTT/INR', 'LFTs'] },
    16: { tests: ['Renal Panel'] },
    17: { tests: ['ECG', 'Renal Panel'] },
    18: { tests: ['Renal Panel'] },
    19: { tests: ['CBC', 'Renal Panel', 'PTT/INR'] },
    20: { tests: ['Renal Panel', 'Gluc'] },
  },
};

for (let i = 0; i < 21; i++) {
  console.log(comorbidities[i]); // Name of the co-morbidity
  console.log(comorbidities.list[i].tests); // List of tests needed for the co-morbidity
}


// Testing for each co-morbidities on the pre-op grid
const getTests = require('@/main.js'); // acquiring getTest()
const getName = require('@/main.js'); // acquiring getName()
const addToCollection = require('@/main.js'); // acquiring addToCollection()
const comorbidityArr = require('@/main.js'); // acquiring array of comorbidity from main.js
const server = require('@/main.js'); // acquiring server singleton
const getAll = require('@/main.js'); // acquiring getAll()

// Testing all of the co-morbidities individually with expected set of tests
// Tags need to contain correct set of tests
for (let i = 0; i < 21; i++) {
  describe('Co-morbidity in main.js', () => {
    it('should output correct list of operations', () => {
      const result = comorbidityArr[i].getTests();
      const expected = comorbidities.list[i].tests;
      expect(result).toBe(expected);
    });
  });
}
// Tags need to contain correct co-morbidity name
for (let i = 0; i < 21; i++) {
  describe('Co-morbidity in main.js', () => {
    it('should output correct co-morbidity name', () => {
      const result = comorbidityArr[i].getTests();
      const expected = comorbidities[i];
      expect(result).toBe(expected);
    });
  });
}
// Testing addToCollection() function with visual inspection
for (let i = 0; i < 21; i++) {
  console.log(getAll());
  addToCollection(comorbidityArr[i]);
}

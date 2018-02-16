import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;

describe('Testing PatientExamsNeeded() for cardiovascular diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for atrial fibrillation / history of irregular heart beat', () => {
    const result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for defibriallator / pacemaker', () => {
    const result = PatientExamsNeeded([Condition.Defib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for coronary artery disease', () => {
    const result = PatientExamsNeeded([Condition.CAD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for cardiac stent (< 12 months)', () => {
    const result = PatientExamsNeeded([Condition.CardiacStent]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of cerebral disease', () => {
    const result = PatientExamsNeeded([Condition.CerebralDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of pulmonary vascular disease', () => {
    const result = PatientExamsNeeded([Condition.PulmonaryVascular]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for transient ischemic attack (TIA)', () => {
    const result = PatientExamsNeeded([Condition.TIA]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for stroke', () => {
    const result = PatientExamsNeeded([Condition.Stroke]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for valvular heart disease / valve replacement', () => {
    const result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for heart failure', () => {
    const result = PatientExamsNeeded([Condition.HeartFail]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for peripheral vasculara disease (PVD)', () => {
    const result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for pulmonary diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    const result = PatientExamsNeeded([Condition.PulmDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for other diseases in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    const result = PatientExamsNeeded([Condition.Bleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of anemia', () => {
    const result = PatientExamsNeeded([Condition.Anemia]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of active bleeding', () => {
    const result = PatientExamsNeeded([Condition.ActiveBleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for renal disease (on dialysis or at rish for Acute Kidney Injury [AKI])', () => {
    const result = PatientExamsNeeded([Condition.Renal]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for diabetes (on Insulin or 2 oral agents)', () => {
    const result = PatientExamsNeeded([Condition.Diabetes]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.HbA1C);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for present malignancy / surgery for malignancy', () => {
    const result = PatientExamsNeeded([Condition.Malignancy]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for hepatic disease', () => {
    const result = PatientExamsNeeded([Condition.Hepatic]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.LFT);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of adrenal disease', () => {
    const result = PatientExamsNeeded([Condition.Adrenal]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of pituitary disease', () => {
    const result = PatientExamsNeeded([Condition.Pituitary]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for history of systemic endocrine disease', () => {
    const result = PatientExamsNeeded([Condition.Endocrine]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for medication use in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for use of Digoxin', () => {
    const result = PatientExamsNeeded([Condition.Digoxin]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of Lithium', () => {
    const result = PatientExamsNeeded([Condition.Lithium]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of Diuretics', () => {
    const result = PatientExamsNeeded([Condition.Diuretics]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of ACE-I', () => {
    const result = PatientExamsNeeded([Condition.ACEI]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of ARB', () => {
    const result = PatientExamsNeeded([Condition.ARB]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of NSAIDS', () => {
    const result = PatientExamsNeeded([Condition.NSAIDS]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of Anticoagulant', () => {
    const result = PatientExamsNeeded([Condition.Anticoagulant]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of Antiplatelet (ASA excluded)', () => {
    const result = PatientExamsNeeded([Condition.Antiplatelet]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct set of preop exams for use of systemic steroid used within 6 months', () => {
    const result = PatientExamsNeeded([Condition.Steroid]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for no inputs in PreopRecommendation.js', () => {
  it('returns correct set of preop exams for no diseases or medication', () => {
    const result = PatientExamsNeeded([]);
    requiredExams = new Set();
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing GetExams() for all cardiovascular diseases in tag.js', () => {
  it('returns the correct array of preop exams for atrial fibrillation', () => {
    const result = GetExams(Condition.AtrialFib);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for defibrillator', () => {
    const result = GetExams(Condition.Defib);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for coronary artery disease', () => {
    const result = GetExams(Condition.CAD);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for cardiac stent (< 12 month)', () => {
    const result = GetExams(Condition.CardiacStent);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for history of cerebral disease', () => {
    const result = GetExams(Condition.CerebralDisease);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for history of pulmonary vascular disease', () => {
    const result = GetExams(Condition.PulmonaryVascular);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for transient heart disease', () => {
    const result = GetExams(Condition.TIA);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for transient heart disease (TIA)', () => {
    const result = GetExams(Condition.Stroke);
    requiredExams = ['ECG'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for valvular heart disease / valve replacement', () => {
    const result = GetExams(Condition.VHD);
    requiredExams = ['ECG', 'CBC'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for heart failure', () => {
    const result = GetExams(Condition.HeartFail);
    requiredExams = ['ECG', 'CBC', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of examinations for peripheral vascular disease (PVD)', () => {
    const result = GetExams(Condition.PVD);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });
});

describe('Testing GetExams() for all pulmonary diseases in tag.js', () => {
  it('returns the correct array of preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    const result = GetExams(Condition.PulmDisease);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)', 'CXR'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });
});

describe('Testing GetExams() for all other diseases in tag.js', () => {
  it('returns the correct array of preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    const result = GetExams(Condition.Bleeding);
    requiredExams = ['G&S', 'CBC', 'PTT/INR'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for history of anemia', () => {
    const result = GetExams(Condition.Anemia);
    requiredExams = ['CBC'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for history of active bleeding', () => {
    const result = GetExams(Condition.ActiveBleeding);
    requiredExams = ['CBC'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for renal disease (on dialysis or at rish of Acute Kidney Injury [AKI])', () => {
    const result = GetExams(Condition.Renal);
    requiredExams = ['ECG', 'CBC', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for diabetes', () => {
    const result = GetExams(Condition.Diabetes);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)', 'Gluc', 'HbA1C'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for present malignancy / surgery for malignancy', () => {
    const result = GetExams(Condition.Malignancy);
    requiredExams = ['ECG', 'CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'CXR'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for hepatic disease', () => {
    const result = GetExams(Condition.Hepatic);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'LFT'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for history of adrenal disease', () => {
    const result = GetExams(Condition.Adrenal);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for history of pituitary disease', () => {
    const result = GetExams(Condition.Pituitary);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for history of major systemic endocrine disease', () => {
    const result = GetExams(Condition.Endocrine);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });
});

describe('Testing GetExams() for all medication use in tag.js', () => {
  it('returns the correct array of preop exams for use of Digoxin', () => {
    const result = GetExams(Condition.Digoxin);
    requiredExams = ['ECG', 'Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of Lithium', () => {
    const result = GetExams(Condition.Lithium);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of Diuretics', () => {
    const result = GetExams(Condition.Diuretics);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of ACE-I', () => {
    const result = GetExams(Condition.ACEI);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of ARB', () => {
    const result = GetExams(Condition.ARB);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of NSAIDS', () => {
    const result = GetExams(Condition.NSAIDS);
    requiredExams = ['Renal Panel (Creat + Lytes)'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of Anticoagulants', () => {
    const result = GetExams(Condition.Anticoagulant);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of Antiplatelet (ASA excluded)', () => {
    const result = GetExams(Condition.Antiplatelet);
    requiredExams = ['CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });

  it('returns the correct array of preop exams for use of systemic steroid used within 6 months', () => {
    const result = GetExams(Condition.Steroid);
    requiredExams = ['Renal Panel (Creat + Lytes)', 'Gluc'];
    expect(result).toEqual(expect.arrayContaining(requiredExams));
  });
});


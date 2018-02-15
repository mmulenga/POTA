// import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;

describe('Testing PatientExamsNeeded() for cardiovascular diseases in PreopRecommendation.js', () => {
  it('returns correct preop exams for atrial fibrillation / history of irregular heart beat', () => {
    const result = PatientExamsNeeded([Condition.AtrialFib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for defibriallator / pacemaker', () => {
    const result = PatientExamsNeeded([Condition.Defib]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for coronary artery disease', () => {
    const result = PatientExamsNeeded([Condition.CAD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for cardiac stent (< 12 months)', () => {
    const result = PatientExamsNeeded([Condition.CardiacStent]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of cerebral disease', () => {
    const result = PatientExamsNeeded([Condition.CerebralDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of pulmonary vascular disease', () => {
    const result = PatientExamsNeeded([Condition.PulmonaryVascular]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for transient ischemic attack (TIA)', () => {
    const result = PatientExamsNeeded([Condition.TIA]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for stroke', () => {
    const result = PatientExamsNeeded([Condition.Stroke]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for valvular heart disease / valve replacement', () => {
    const result = PatientExamsNeeded([Condition.VHD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for heart failure', () => {
    const result = PatientExamsNeeded([Condition.HeartFail]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for peripheral vasculara disease (PVD)', () => {
    const result = PatientExamsNeeded([Condition.PVD]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for pulmonary diseases in PreopRecommendation.js', () => {
  it('returns correct preop exams for severe COPD, home oxygen, pulmonary HTN', () => {
    const result = PatientExamsNeeded([Condition.PulmDisease]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for other diseases in PreopRecommendation.js', () => {
  it('returns correct preop exams for bleeding disorders (hemophiliac | DVT)', () => {
    const result = PatientExamsNeeded([Condition.Bleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of anemia', () => {
    const result = PatientExamsNeeded([Condition.Anemia]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of active bleeding', () => {
    const result = PatientExamsNeeded([Condition.ActiveBleeding]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for renal disease (on dialysis or at rish for Acute Kidney Injury [AKI])', () => {
    const result = PatientExamsNeeded([Condition.Renal]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for diabetes (on Insulin or 2 oral agents)', () => {
    const result = PatientExamsNeeded([Condition.Diabetes]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.HbA1C);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for present malignancy / surgery for malignancy', () => {
    const result = PatientExamsNeeded([Condition.Malignancy]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.CXR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for hepatic disease', () => {
    const result = PatientExamsNeeded([Condition.Hepatic]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.LFT);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of adrenal disease', () => {
    const result = PatientExamsNeeded([Condition.Adrenal]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of pituitary disease', () => {
    const result = PatientExamsNeeded([Condition.Pituitary]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for history of systemic endocrine disease', () => {
    const result = PatientExamsNeeded([Condition.Endocrine]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for medication use in PreopRecommendation.js', () => {
  it('returns correct preop exams for use of Digoxin', () => {
    const result = PatientExamsNeeded([Condition.Digoxin]);
    requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of Lithium', () => {
    const result = PatientExamsNeeded([Condition.Lithium]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of Diuretics', () => {
    const result = PatientExamsNeeded([Condition.Diuretics]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of ACE-I', () => {
    const result = PatientExamsNeeded([Condition.ACEI]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of ARB', () => {
    const result = PatientExamsNeeded([Condition.ARB]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of NSAIDS', () => {
    const result = PatientExamsNeeded([Condition.NSAIDS]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of Anticoagulant', () => {
    const result = PatientExamsNeeded([Condition.Anticoagulant]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of Antiplatelet (ASA excluded)', () => {
    const result = PatientExamsNeeded([Condition.Antiplatelet]);
    requiredExams = new Set();
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    expect(result).toEqual(requiredExams);
  });

  it('returns correct preop exams for use of systemic steroid use within 6 months', () => {
    const result = PatientExamsNeeded([Condition.Steroid]);
    requiredExams = new Set();
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.Gluc);
    expect(result).toEqual(requiredExams);
  });
});

describe('Testing PatientExamsNeeded() for no inputs in PreopRecommendation.js', () => {
  it('returns correct preop exams for no diseases or medication', () => {
    const result = PatientExamsNeeded([]);
    requiredExams = new Set();
    expect(result).toEqual(requiredExams);
  });
});


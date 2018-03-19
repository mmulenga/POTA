import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let conditionalExams;
let result;

describe('Testing PatientExamsNeeded() with multiple non-conditional comorbidities', () => {
  it('returns correct set of preop exams for AtrialFib + Age > 69', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Age]);
    requiredExams = [Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for AtrialFib + Age to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CAD + Cardiac Stent', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.risk]);
    requiredExams = [Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });

  it('set of preop exams for CAD + Cardiac Stent to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });


  it('returns correct set of preop exams for Atrial Fibrillation + Valve Replacement', () => {
    result = PatientExamsNeeded([Condition.CAD, Condition.Anemia]);
    requiredExams = [Exam.ECG, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Atrial Fibrillation + Valve Replacement to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Heart Failure + Valve Replacement', () => {
    result = PatientExamsNeeded([Condition.CardiacStent, Condition.ChronicKidneyDisease]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Heart Failure + Valve Replacement to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CAD + Diabetes', () => {
    result = PatientExamsNeeded([Condition.CerebralDisease, Condition.Diabetes]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for CAD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Present Malignancy', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.PresentMalignancy]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.PTTINR, Exam.Gluc, Exam.HbA1C, Exam.CXR];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Diabetes + Present Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Atrial Fibrillation + Use of Anticoagulants', () => {
    result = PatientExamsNeeded([Condition.ValveReplacement, Condition.PresentMalignancy]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.PTTINR, Exam.CBC];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Atrial Fibrillation + Use of Anticoagulants to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Atrial Fibrillation + Use of Digoxin', () => {
    result = PatientExamsNeeded([Condition.HeartFail, Condition.Bleeding]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Atrial Fibrillation + Use of Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Defibrillator + Use of Digoxin', () => {
    result = PatientExamsNeeded([Condition.Defibrillator, Condition.Digoxin]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Defibrillator + Use of Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for History of Adrenal + Systemic Steroid', () => {
    result = PatientExamsNeeded([Condition.Adrenal, Condition.Renal, Condition.Steroid]);
    requiredExams = [Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for History of Adrenal + Systemic Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Bleeding Disorders + History of Recent Anemia', () => {
    result = PatientExamsNeeded([Condition.Bleeding,
      Condition.Anemia]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.PTTINR];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Bleeding Disorders + History of Recent Anemia to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Chronic Kidney Disease + Diabetes', () => {
    result = PatientExamsNeeded([Condition.ChronicKidneyDisease, Condition.Diabetes]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.Gluc, Exam.HbA1C];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Chronic Kidney Disease + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });
});

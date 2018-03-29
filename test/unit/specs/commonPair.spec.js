import { Condition, Exam } from '@/constants';
import { PatientExamsNeeded } from '@/PreopRecommendation';

let requiredExams;
let conditionalExams;
let result;

describe('Testing PatientExamsNeeded() with common pairs of comorbidities', () => {
  it('returns correct set of preop exams for AtrialFib + Age > 69', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Age]);
    requiredExams = [Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for AtrialFib + Age > 69 to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CAD + CardiacStent', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.CardiacStent]);
    requiredExams = [Exam.ECG];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });

  it('set of preop exams for CAD + CardiacStent to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });


  it('returns correct set of preop exams for AtrialFib + VHD', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.VHD]);
    requiredExams = [Exam.ECG];
    conditionalExams = [Exam.CBC];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for AtrialFib + VHD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for HeartFail + VHD', () => {
    result = PatientExamsNeeded([Condition.HeartFail, Condition.VHD]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for HeartFail + VHD to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for CAD + Diabetes', () => {
    result = PatientExamsNeeded([Condition.CAD, Condition.Diabetes]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [Exam.HbA1C];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for CAD + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Diabetes + Malignancy', () => {
    result = PatientExamsNeeded([Condition.Diabetes, Condition.Malignancy]);
    requiredExams = [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.CBC, Exam.CXR];
    expect(result.conditionalExams[0].exams).toEqual([Exam.HbA1C]);
    expect(result.conditionalExams[1].exams).toEqual([Exam.PTTINR]);
  });
  it('set of preop exams for Diabetes + Malignancy to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
    expect(result.conditionalExams[1].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for AtrialFib + Anticoagulant', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Anticoagulant]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel];
    conditionalExams = [Exam.PTTINR];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for Atrial Fibrillation + Anticoagulants to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for 2 >= risks + ACEI', () => {
    result = PatientExamsNeeded([Condition.Risk, Condition.ACEI]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for 2 >= risks + ACEI to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for AtrialFib + Digoxin', () => {
    result = PatientExamsNeeded([Condition.AtrialFib, Condition.Digoxin]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Defibrillator + Use of Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Defib + Digoxin', () => {
    result = PatientExamsNeeded([Condition.Defib, Condition.Digoxin]);
    requiredExams = [Exam.ECG, Exam.RenPanel];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Defib + Digoxin to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Adrenal + Steroid', () => {
    result = PatientExamsNeeded([Condition.Adrenal, Condition.Steroid]);
    requiredExams = [Exam.RenPanel, Exam.Gluc];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Adrenal + Steroid to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for Bleeding + Anemia', () => {
    result = PatientExamsNeeded([Condition.Bleeding, Condition.Anemia]);
    requiredExams = [Exam.GnS, Exam.CBC, Exam.PTTINR];
    conditionalExams = [];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams).toEqual(conditionalExams);
  });
  it('set of preop exams for Bleeding + Anemia to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams).toMatchSnapshot();
  });

  it('returns correct set of preop exams for KidneyDisease + Diabetes', () => {
    result = PatientExamsNeeded([Condition.KidneyDisease, Condition.Diabetes]);
    requiredExams = [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.Gluc];
    conditionalExams = [Exam.HbA1C];
    expect(result.exams).toEqual(requiredExams);
    expect(result.conditionalExams[0].exams).toEqual(conditionalExams);
  });
  it('set of preop exams for KidneyDisease + Diabetes to match snapshot', () => {
    expect(result.exams).toMatchSnapshot();
    expect(result.conditionalExams[0].exams).toMatchSnapshot();
  });
});

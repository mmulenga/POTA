// Singleton data, not a class
import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';

/** Tag definitions
 * These definitions are of the format: Tag(condition, [exams])
 * Define all tags here and they will be loaded into the system on import
 */
/* Cardiovascular Diseases */
Tag(Condition.AtrialFib, [Exam.ECG]);
Tag(Condition.Defib, [Exam.ECG]);
Tag(Condition.CAD, [Exam.ECG]);
Tag(Condition.CardiacStent, [Exam.ECG]);
Tag(Condition.CerebralDisease, [Exam.ECG]);
Tag(Condition.PulmonaryVascular, [Exam.ECG]);
Tag(Condition.TIA, [Exam.ECG]);
Tag(Condition.Stroke, [Exam.ECG]);
Tag(Condition.VHD, [Exam.ECG],
  { 'Is valve mechanical?': [Exam.CBC] });
Tag(Condition.HeartFail, [Exam.ECG, Exam.CBC, Exam.RenPanel]);
Tag(Condition.PVD, [Exam.ECG, Exam.RenPanel]);
/* Pulmonary Diseases */
Tag(Condition.PulmDisease, [Exam.ECG, Exam.RenPanel, Exam.CXR]);/* TODO: CXR is time qualified */
/* Other Diseases */
Tag(Condition.Bleeding, [Exam.GnS, Exam.CBC, Exam.PTTINR]);
Tag(Condition.Anemia, [Exam.CBC]);
Tag(Condition.ActiveBleeding, [Exam.CBC]);
Tag(Condition.Renal, [Exam.ECG, Exam.CBC, Exam.RenPanel]);
Tag(Condition.Diabetes,
  [Exam.ECG, Exam.RenPanel, Exam.Gluc, Exam.HbA1C]);/* TODO HbA1C is qualified */
Tag(Condition.Malignancy,
  [Exam.ECG, Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.CXR]);/* TODO chemo qualifications */
Tag(Condition.Hepatic, [Exam.CBC, Exam.RenPanel, Exam.PTTINR, Exam.LFT]);
Tag(Condition.Adrenal, [Exam.RenPanel]);
Tag(Condition.Pituitary, [Exam.RenPanel]);
Tag(Condition.Endocrine, [Exam.RenPanel]);
/* Medications */
Tag(Condition.Digoxin, [Exam.ECG, Exam.RenPanel]);
Tag(Condition.Lithium, [Exam.RenPanel]);
Tag(Condition.Diuretics, [Exam.RenPanel]);
Tag(Condition.ACEI, [Exam.RenPanel]);
Tag(Condition.ARB, [Exam.RenPanel]);
Tag(Condition.NSAIDS, [Exam.RenPanel]);
Tag(Condition.Anticoagulant, [Exam.CBC, Exam.RenPanel, Exam.PTTINR]);
Tag(Condition.Antiplatelet, [Exam.CBC, Exam.RenPanel, Exam.PTTINR]);
Tag(Condition.Steroid, [Exam.RenPanel, Exam.Gluc]);
/**
 * Given a list of patient conditions, return a collection of examinations that should be performed
 * @param {String[]} patientConditions
 */
export function PatientExamsNeeded(patientConditions) {
  const testAggregation = new Set();
  for (let i = 0; i < patientConditions.length; i += 1) {
    const exams = GetExams(patientConditions[i]);
    for (let j = 0; j < exams.length; j += 1) {
      testAggregation.add(exams[j]);
    }
  }
  return testAggregation;
}

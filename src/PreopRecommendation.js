// Singleton data, not a class
import { Tag, GetExams, GetConditionalExams, ConditionalExam } from '@/tag';
import { Condition, Exam } from '@/constants';

/** Tag definitions
 * These definitions are of the format: Tag(condition, [exams])
 * A third, optional argument may be passed to include any conditional exams
 * The format for this third argument is: { 'ConditionPhrase?': [Exams if True] }
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
Tag(Condition.PulmDisease, [Exam.ECG, Exam.CBC, Exam.CXR]);
/* Other Diseases */
Tag(Condition.Bleeding, [Exam.GnS, Exam.CBC, Exam.PTTINR]);
Tag(Condition.Anemia, [Exam.CBC]);
Tag(Condition.ActiveBleeding, [Exam.CBC]);
Tag(Condition.Renal, [Exam.ECG, Exam.CBC, Exam.RenPanel]);
Tag(Condition.Diabetes, [Exam.ECG, Exam.RenPanel, Exam.Gluc],
  { 'Has patient gone at least 3 months since an Hb1AC?': [Exam.HbA1C] });
Tag(Condition.Malignancy, [Exam.CBC, Exam.CXR],
  { 'Is patient on chemo?': [Exam.ECG, Exam.RenPanel, Exam.PTTINR] });
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
 * ExamSummary is a simple data struct with two properties:
 * @param exams {String[]}: a list of exams to be performed
 * @param conditionalExams {ConditionalExam[]} a list of ConditionalExams to be optionally performed
 */
export class ExamSummary {
  constructor(exams, conditionalExams) {
    this.exams = exams;
    this.conditionalExams = conditionalExams;
  }
}

/**
 * Given a list of patient conditions, return an ExamSummary object
 * The ConditionalExams returned will be prefiltered so as to not include any
 * already required exams or any redundant conditional phrases (i.e. no new exams)
 * @param {String[]} patientConditions
 * @returns {ExamSummary} Summary of examinations to be performed
 */
export function PatientExamsNeeded(patientConditions) {
  const examAggregation = new Set();
  const conditionalExamAggregation = [];
  for (let i = 0; i < patientConditions.length; i += 1) {
    const exams = GetExams(patientConditions[i]);
    for (let j = 0; j < exams.length; j += 1) {
      examAggregation.add(exams[j]);
    }
  }
  for (let i = 0; i < patientConditions.length; i += 1) {
    const conditionalExams = GetConditionalExams(patientConditions[i]);
    for (let j = 0; j < conditionalExams.length; j += 1) {
      // Make a new copy of the ConditionalExam with any preconsidered exams filtered out
      const ce = new ConditionalExam(
        conditionalExams[j].conditionPhrase,
        conditionalExams[j].exams.filter(e => !(examAggregation.has(e))),
      );
      // Only aggregate this conditionalExam if it is not entirely preconsidered
      if (ce.exams.length > 0) {
        conditionalExamAggregation.push(ce);
      }
    }
  }
  return new ExamSummary([...examAggregation], conditionalExamAggregation);
}

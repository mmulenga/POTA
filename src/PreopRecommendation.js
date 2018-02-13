// Singleton data, not a class
import { Tag, GetExams } from '@/tag';
import { Condition, Exam } from '@/constants';

/** Tag definitions
 * These definitions are of the format: Tag(condition, [exams])
 * Define all tags here and they will be loaded into the system on import
 */
Tag(Condition.HeartFail, [Exam.ECG, Exam.CBC, Exam.RenPanel]);

/**
 * Given a list of patient conditions, return a collection of examinations that should be performed
 * @param {String[]} patientConditions
 */
function PatientExamsNeeded(patientConditions) {
  const testAggregation = new Set();
  for (let i = 0; i < patientConditions.length; i += 1) {
    const exams = GetExams(patientConditions[i]);
    for (let j = 0; j < exams.length; j += 1) {
      testAggregation.add(exams[j]);
    }
  }
  return testAggregation;
}
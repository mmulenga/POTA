// Singleton data, not a class
import assert from '@/main.js';
import { Tag, GetExams } from '@/tag.js';
import { Condition, Exam } from '@/constants.js';

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
    testAggregation = new Set();
    for (var i = 0; i < patientConditions.length; i++) {
        exams = GetExams(patientConditions[i])
        for (var j = 0; j < exams.length; j++) {
            testAggregation.add(exams[j]);
        }
    }
    return testAggregation
}
// Singleton data, not a class
import assert from '@/main.js';
import { Tag, GetExams } from '@/tag.js';
import { Condition, Exam } from '@/constants.js';

/** Tag definitions **/
Tag(Condition.HeartFail, [Exam.ECG, Exam.CBC, Exam.RenPanel]);


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
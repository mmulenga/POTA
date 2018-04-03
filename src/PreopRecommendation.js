// Singleton data, not a class
import '@/configuration';
import { GetExams, GetConditionalExams, ConditionalExam, GetExamValidity } from '@/tag';

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

/**
 * Get the validity period for a given exam
 * @param {String} exam The name of the exam in question
 */
export function ExamValidity(exam) {
  return GetExamValidity(exam);
}

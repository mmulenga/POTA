import { assert } from '@/main';
import { Condition, Exam } from '@/constants';

/**
 * This is the internal collection where all exam information will be saved to.
 * Do not export this or attempt to access it externally!
 */
const examCollection = {};
examCollection.exams = {};
examCollection.conditionalExams = {};
examCollection.validityPeriods = {};

/**
 * Adds a new global exam to the system.
 * Not to be called outside this file!
 * @param {String} name The name of the condition
 * @param {String[]} exams The name of the exams required
 * Preconditons: Name and Exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include the new exams
 */
function addExams(name, exams) {
  assert(Object.values(Condition).indexOf(name) >= 0, `Unknown condition ${name} used for Tag`);
  for (let i = 0; i < exams.length; i += 1) {
    assert(Object.values(Exam).indexOf(exams[i]) >= 0, `Unknown exam ${exams[i]} used for Tag`);
  }
  examCollection.exams[name] = exams;
}

/**
 * ConditionalExam is a simple structure containing a condition phrase and the
 * exams which are required if that phrase is true.
 */
export class ConditionalExam {
  constructor(conditionPhrase, exams) {
    this.conditionPhrase = conditionPhrase;
    this.exams = exams;
  }
}

/**
 * Adds a new global exam to the system.
 * Not to be called outside this file!
 * @param {String} name The name of the condition
 * @param {Object} conditionalExams A mapping of requirements to their conditional exams
 *    Format for conditionalExams:
 *    { requirementName: [examNames] }
 * Preconditons: Name and requirements/exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include
 *                 the new conditional exams as ConditionalExam objects
 */
function addConditionalExams(name, conditionalExams) {
  const conditionalExamList = [];
  // Iterating over keys and values
  const iter = Object.entries(conditionalExams);
  for (let i = 0; i < iter.length; i += 1) {
    const conditionPhrase = iter[i][0];
    const exams = iter[i][1];
    for (let j = 0; j < exams.length; j += 1) {
      assert(Object.values(Exam).indexOf(exams[j]) >= 0, `Unknown Exam ${exams[j]} used for tag`);
    }
    conditionalExamList.push(new ConditionalExam(conditionPhrase, exams));
  }
  examCollection.conditionalExams[name] = conditionalExamList;
}

/**
 * Adds a new global tag to the system.
 * This is to be used for setting up the knowledge base required for a Preop recommendation.
 * If the need for an examination is dependent on a certain condition, it may be passed in:
 * @param {String} name The name of the condition
 * @param {String[]} exams The names of the exams required
 * @param {Object} conditionalExams (optional) A mapping of requirements to their conditional exams
 *    Format for conditionalExams:
 *    { requirementName: [examNames] }
 * Preconditons: Name and Exams must all be from the Constants file
 * Postconditions: The global examCollection object will be extended to include the new Tag
 */
export function Tag(name, exams, conditionalExams = {}) {
  addExams(name, exams);
  addConditionalExams(name, conditionalExams);
}

/**
 * Returns a summary of all exams required for a given condition name.
 * @param {String} name
 */
export function GetExams(name) {
  assert(name in examCollection.exams, `GetExams called with unknown condition ${name}`);
  if (name in examCollection.exams) {
    return examCollection.exams[name];
  }
  return [];
}

/**
 * Returns a comprehensive summary of the entire knowledge base of the system.
 * This should be used for external access instead of directly referencing examCollection
 */
export function GetAllExams() {
  return examCollection;
}

/**
 * Returns a list of ConditionalExam objects associated with the given condition name
 */
export function GetConditionalExams(name) {
  assert(name in examCollection.conditionalExams, `GetConditionalExams called with unknown condition ${name}`);
  if (name in examCollection.conditionalExams) {
    return examCollection.conditionalExams[name];
  }
  return [];
}


/**
 * Sets the validity period for a given exam
 * Validity period is the time window before surgery in which an exam must be performed
 * @param {String} exam The name of the exam
 * @param {String} validityString A string of the format "x months" or "x days"
 * Preconditions: 'exam' must be from the constants file
 * Postconditions: examCollection.validityPeriods will contain the new validity period
 */
export function Validity(exam, validityString) {
  assert(Object.values(Exam).indexOf(exam) >= 0, `Unknown exam "${exam}" used in Validity`);
  examCollection.validityPeriods[exam] = validityString;
}

/**
 * Get the validity period for a given exam
 * @param {String} exam The name of the exam in question
 * Preconditions: exam must be known and must have a registered validity period
 */
export function GetExamValidity(exam) {
  assert(Object.values(Exam).indexOf(exam) >= 0, `GetExamValidity called with unknown exam: ${exam}`);
  return examCollection.validityPeriods[exam];
}

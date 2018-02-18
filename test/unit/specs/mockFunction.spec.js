import { Tag, GetExams, GetAllExams } from '@/tag';
import { Condition, Exam } from '@/constants';
// import { PatientExamsNeeded } from '@/PreopRecommendation';

function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn();
forEach([0, 1], mockCallback);


describe('Testing mocking framework in Jest', () => {
  it('returns correct callback function tests', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});


const mockGetExams = jest
  .fn()
  .mockReturnValue('ECG')
  .mockReturnValueOnce(['G&S', 'CBC', 'PTT/INR'])
  .mockReturnValueOnce(['Gluc', 'CXR']);

function PatientExamsNeeded(patientConditions) {
  const testAggregation = new Set();
  for (let i = 0; i < patientConditions.length; i += 1) {
    const exams = mockGetExams();
    for (let j = 0; j < exams.length; j += 1) {
      testAggregation.add(exams[j]);
    }
  }
  return testAggregation;
}

describe('Testing mock function for GetExams() for PatientExamsNeeded()', () => {
  it('returns correct set of list of exams based off of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded(['', ''])).toEqual(requiredExams);
  });
});


import { Exam } from '@/constants';

function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn();
forEach([0, 1], mockCallback);


describe('Sample testing mocking framework in Jest', () => {
  it('returns correct callback function tests', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});


const mockGetExams = jest
  .fn()
  .mockReturnValue([])
  // Test 1
  .mockReturnValueOnce(['G&S', 'ECG', 'CBC', 'Renal Panel (Creat + Lytes)', 'PTT/INR', 'LFT', 'Gluc', 'HbA1C', 'CXR'])
  // Test 2
  .mockReturnValueOnce(['G&S', 'CBC', 'PTT/INR'])
  .mockReturnValueOnce(['Gluc', 'CXR'])
  // Test 3
  .mockReturnValueOnce(['Renal Panel (Creat + Lytes)'])
  .mockReturnValueOnce(['LFT', 'HbA1C'])
  .mockReturnValueOnce(['G&S', 'CXR'])
  // Test 4
  .mockReturnValueOnce(['CBC', 'Gluc', 'HbA1C'])
  .mockReturnValueOnce(['CXR', 'ECG', 'LFT'])
  .mockReturnValueOnce(['PTT/INR', 'CBC'])
  .mockReturnValueOnce(['Renal Panel (Creat + Lytes)'])
  // Test 5
  .mockReturnValueOnce(['CBC', 'Gluc'])
  .mockReturnValueOnce(['ECG', 'Gluc', 'CBC'])
  .mockReturnValueOnce(['CXR'])
  .mockReturnValueOnce(['ECG'])
  .mockReturnValueOnce(['CBC', 'ECG', 'G&S']);

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
  it('returns correct set of list of exams for test 1 of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.LFT);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.HbA1C);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded([''])).toEqual(requiredExams);
  });

  it('returns correct set of list of exams for test 2 of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded(['', ''])).toEqual(requiredExams);
  });

  it('returns correct set of list of exams for test 3 of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.LFT);
    requiredExams.add(Exam.HbA1C);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded(['', '', ''])).toEqual(requiredExams);
  });

  it('returns correct set of list of exams for test 4 of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.RenPanel);
    requiredExams.add(Exam.PTTINR);
    requiredExams.add(Exam.LFT);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.HbA1C);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded(['', '', '', ''])).toEqual(requiredExams);
  });

  it('returns correct set of list of exams for test 5 of mockGetExams()', () => {
    const requiredExams = new Set();
    requiredExams.add(Exam.GnS);
    requiredExams.add(Exam.ECG);
    requiredExams.add(Exam.CBC);
    requiredExams.add(Exam.Gluc);
    requiredExams.add(Exam.CXR);
    expect(PatientExamsNeeded(['', '', '', '', ''])).toEqual(requiredExams);
  });

  it('returns correct set of list of exams for test 6 of mockGetExams()', () => {
    const requiredExams = new Set();
    expect(PatientExamsNeeded([''])).toEqual(requiredExams);
  });
});


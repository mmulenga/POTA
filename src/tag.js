// import assert from '@/main';

const examCollection = {};


export function Tag(name, tests) {
  examCollection[name] = tests;
}

export function GetExams(name) {
  // assert(name in examCollection, `GetExams called with unknown condition ${name}`);
  if (name in examCollection) {
    return examCollection[name];
  }
  return [];
}

export function GetAllExams() {
  return examCollection;
}


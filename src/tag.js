import assert from '@/main.js';

exam_collection = {};


function Tag(name, tests) {
    exam_collection[name] = tests;
};

function GetExams(name) {
    assert(name in exam_collection, `GetExams called with unknown condition ${name}`)
    if (name in exam_collection) {
        return exam_collection[name]
    } else {
        return []
    }
}

function GetAllExams() {
    return exam_collection;
}

export default { Tag, GetExams, GetAllExams };
test_collection = {};

function Tag(name, tests) {
    test_collection[name] = tests;
};

function GetExams(name) {
    return test_collection[t.name]
}

function GetAllExams() {
    return test_collection;
}

export default { Tag, GetExams, GetAllExams };
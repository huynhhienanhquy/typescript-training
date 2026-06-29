import schooldata from "./data.json";

import {
  SchoolData,
  Student,
  Teacher,
  Subject,
  Classroom,
} from "./models";

import {
  StudentService
  as StudentService,
  Table } from "./services";

const data: SchoolData = schooldata;

// Student Table
console.log("===================STUDENT TABLE============");

const studentService = new StudentService(
  data.students,
  data.scores
);

const studentTableData = data.students.map(student => ({
  ...student,
  averageScore: studentService.getAverageScore(student.id)
}));

type studentTable = Student & {
  averageScore: number;
};

const studentTable = new Table<studentTable>(
  studentTableData,
  [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "age", title: "Age" },
    { key: "classId", title: "Class" },
    { key: "averageScore", title: "Average Score" }
  ]
);

studentTable.render();

// Teacher Table
console.log("==================TEACHER TABLE==============");

const teacherTable = new Table<Teacher>(
  data.teachers,
  [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "subjectId", title: "Subject ID" }
  ]
);

teacherTable.render();

// Subject Table
console.log("================= SUBJECT TABLE=============");

const subjectTable = new Table<Subject> (
  data.subjects,
  [
    {key: "id", title: "ID"},
    {key: "name", title: "Name"}
  ]
);

subjectTable.render();

//classroom table
console.log("================= CLASSROOM TABLE=============");

const classroomTable = new Table<Classroom> (
  data.classrooms,
  [
    {key: "id", title: "ID"},
    {key: "name", title: "Name"},
    {key: "homeroomTeacherId", title: "Homeroom Teacher ID"}
  ]
);

classroomTable.render();

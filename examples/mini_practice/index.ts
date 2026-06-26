import schooldata from "./data.json";

import {
  schoolData,
  student,
  teacher,
  subject,
  classroom,
} from "./models";

import { 
  studentService 
  as StudentService, 
  table } from "./services";

const data: schoolData = schooldata;

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

type studentTable = student & {
  averageScore: number;
};

const studentTable = new table<studentTable>(
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

const teacherTable = new table<teacher>(
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

const subjectTable = new table<subject> (
  data.subjects,
  [
    {key: "id", title: "ID"},
    {key: "name", title: "Name"}
  ]
);

subjectTable.render();

//classroom table
console.log("================= CLASSROOM TABLE=============");

const classroomTable = new table<classroom> (
  data.classrooms,
  [
    {key: "id", title: "ID"},
    {key: "name", title: "Name"},
    {key: "homeroomTeacherId", title: "Homeroom Teacher ID"}
  ]
);

classroomTable.render();

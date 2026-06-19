interface Person {
  name: string;
}

interface Student extends Person {
  studentId: string;
}

const student: Student = {
  name: "Quy",
  studentId: "S12345",
};

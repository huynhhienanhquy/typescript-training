// Student
export interface Student {
  id: string;
  name: string;
  age: number;
  classId: string;
  averageScore?: number;
}

//Teacher
export interface Teacher {
  id: string;
  name: string;
  subjectId: string;
}

//Subject
export interface Subject {
  id: string;
  name: string;
}

//Classroom
export interface Classroom {
  id: string;
  name: string;
  homeroomTeacherId: string;
}

//Score
export interface Score {
  studentId: string;
  subjectId: string;
  score: number;
}

//School Data
export interface SchoolData {
  students: Student[];
  teachers: Teacher[];
  subjects: Subject[];
  classrooms: Classroom[];
  scores: Score[];
}

// Generic Table
export interface Column<T> {
  key: keyof T;
  title: string;
}

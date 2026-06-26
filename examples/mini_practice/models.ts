// Student
export interface student {
  id: string;
  name: string;
  age: number;
  classId: string;
  averageScore?: number;
}

//Teacher
export interface teacher {
  id: string;
  name: string;
  subjectId: string;
}

//Subject
export interface subject {
  id: string;
  name: string;
}

//Classroom
export interface classroom {
  id: string;
  name: string;
  homeroomTeacherId: string;
}

//Score
export interface score {
  studentId: string;
  subjectId: string;
  score: number;
}

//School Data
export interface schoolData {
  students: student[];
  teachers: teacher[];
  subjects: subject[];
  classrooms: classroom[];
  scores: score[];
}
import { 
  student, 
  score 
} from "./models";

// Abstract Generic Service
export abstract class baseService<T extends { id: string }> {
  constructor(protected data: T[]) {}

  getAll(): T[] {
    return this.data;
  }

  findById(id: string): T | undefined {
    return this.data.find(item => item.id === id);
  }

  abstract display(item: T): void;
}

// Student Service
export class studentService extends baseService<student> {
  constructor(
    students: student[],
    private scores: score[]
  ) {
    super(students);
  }

  display(student: student): void {
    console.log(
      `${student.id} | ${student.name} | ${student.age} | ${student.classId}`
    );
  }

  findByClass(classId: string): student[] {
    return this.data.filter(student => student.classId === classId);
  }

  getAverageScore(studentId: string): number {
    const studentScores = this.scores.filter (
      scores => scores.studentId === studentId
    );

    if (studentScores.length === 0) {
      return 0;
    }

    const total = studentScores.reduce (
      (sum, scores) => sum + scores.score, 0
    );

    return Number((total / studentScores.length).toFixed(2));
  }
}

// Generic Table
export interface column<T> {
  key: keyof T;
  title: string;
}

export class table<T> {
  constructor(
    private data: T[],
    private columns: column<T>[]
  ) {}

  render(): void {
    this.data.forEach(row => {
      this.columns.forEach(column => {
        console.log(`${column.title}: ${row[column.key]}`);
      });
      console.log("-------------------------");
    });
  }
}
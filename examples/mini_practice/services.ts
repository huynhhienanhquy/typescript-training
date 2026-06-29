import {
  student,
  score,
  column
} from "./models";

// Abstract Generic Service
export abstract class baseService<T extends { id: string }> {
  constructor(protected data: T[]) {}

  getAll(): T[] {
    return this.data;
  }
}

// Student Service
export class studentService extends baseService<student> {
  constructor(
    students: student[],
    private scores: score[]
  ) {
    super(students);
  }

  //Average score
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

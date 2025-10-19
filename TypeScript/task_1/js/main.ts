// ===== Task 1: Teacher Interface =====
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra attributes like contract: boolean
}

// ===== Task 2: Directors extends Teacher =====
export interface Directors extends Teacher {
  numberOfReports: number;
}

// ===== Task 3: printTeacher function =====
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// ===== Task 4: StudentClass =====
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string { return "Currently working"; }
  displayName(): string { return this.firstName; }
}

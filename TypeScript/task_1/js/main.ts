// Task 1–3
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};
console.log(teacher3);

export interface Directors extends Teacher { numberOfReports: number; }
const director1: Directors = {
  firstName: "John", lastName: "Doe", location: "London",
  fullTimeEmployee: true, numberOfReports: 17,
};
console.log(director1);

export interface printTeacherFunction { (firstName: string, lastName: string): string; }
export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;
console.log(printTeacher("John", "Doe"));

// Task 4
export interface StudentClassInterface { workOnHomework(): string; displayName(): string; }
export interface StudentClassConstructor { new (firstName: string, lastName: string): StudentClassInterface; }
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string { return "Currently working"; }
  displayName(): string { return this.firstName; }
}

// ===== Task 5: Advanced Types Part 1 =====
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() { return "Working from home"; }
  getCoffeeBreak() { return "Getting a coffee break"; }
  workDirectorTasks() { return "Getting to director tasks"; }
}

export class Teacher implements TeacherInterface {
  workFromHome() { return "Cannot work from home"; }
  getCoffeeBreak() { return "Cannot have a break"; }
  workTeacherTasks() { return "Getting to work"; }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}

// ===== Task 6: Type Predicate for Teacher or Director =====
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks();
}

// Demo expected behavior:
console.log(createEmployee(200));      // Teacher
console.log(createEmployee(1000));     // Director
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// ===== Task 7: String Literal Types =====
export type Subjects = "Math" | "History";
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

// Demo
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History

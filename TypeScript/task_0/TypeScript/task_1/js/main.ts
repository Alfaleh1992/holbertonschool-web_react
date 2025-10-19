interface Teacher {
  readonly firstName: string;        // set only at init
  readonly lastName: string;         // set only at init
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;        // optional
  location: string;
  [key: string]: any;                // allow extra attributes like contract(boolean)
}

const teacher3: Teacher = {
  firstName: John,
  lastName: Doe,
  fullTimeEmployee: false,
  location: London,
  contract: false
};

console.log(teacher3);

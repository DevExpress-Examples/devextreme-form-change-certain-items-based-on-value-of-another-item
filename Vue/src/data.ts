export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Address: string;
}

export const employee: Employee = {
  ID: 1,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Address: '351 S Hill St., Los Angeles, CA',
};

export const positions: string[] = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager',
];

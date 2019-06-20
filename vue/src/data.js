const employee = {
    ID: 1,
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    Address: "351 S Hill St., Los Angeles, CA"
  };
  
  const positions = [
    "HR Manager",
    "IT Manager",
    "CEO",
    "Controller",
    "Sales Manager",
    "Support Manager",
    "Shipping Manager"
  ];
  
  export default {
    getEmployee() {
      return employee;
    },
    getPositions() {
      return positions;
    }
  };
  
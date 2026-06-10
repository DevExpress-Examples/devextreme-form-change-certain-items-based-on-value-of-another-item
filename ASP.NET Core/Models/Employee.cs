using System;

namespace ASP_NET_Core.Models;
public class Employee {
    public int ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Position { get; set; }
    public DateTime BirthDate { get; set; }
    public DateTime HireDate { get; set; }
    public string Address { get; set; }

    public static readonly Employee Default = new Employee {
        ID = 1,
        FirstName = "John",
        LastName = "Heart",
        Position = "CEO",
        BirthDate = new DateTime(1964, 3, 16),
        HireDate = new DateTime(1995, 1, 15),
        Address = "351 S Hill St., Los Angeles, CA"
    };

    public static readonly string[] Positions = new[] {
        "HR Manager",
        "IT Manager",
        "CEO",
        "Controller",
        "Sales Manager",
        "Support Manager",
        "Shipping Manager"
    };
}

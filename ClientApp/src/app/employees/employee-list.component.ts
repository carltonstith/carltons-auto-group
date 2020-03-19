import { Component } from '@angular/core';

@Component({
  selector: 'ag-employees',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  pageTitle: string = 'Employee List';
  employees: any[]= [
    {
      "employeeId": 1,
      "firstName": "John",
      "lastName": "Doe",
      "employeeNumber": "1234",
      "department": "Marketing",
      "position": "SEO Manager",
      "locationId": 1
    },
    {
      "employeeId": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "employeeNumber": "5158",
      "department": "Sales",
      "position": "Salesman",
      "locationId": 1
    },
    {
      "employeeId": 3,
      "firstName": "Victor",
      "lastName": "Cruz",
      "employeeNumber": "1148",
      "department": "Operations",
      "position": "Lot Attendant",
      "locationId": 1
    },
    {
      "employeeId": 4,
      "firstName": "Carlton",
      "lastName": "Stith",
      "employeeNumber": "0182",
      "department": "Administration",
      "position": "Chief Technology Officer",
      "locationId": 1
    },
    {
      "employeeId": 5,
      "firstName": "Cameron",
      "lastName": "Stith",
      "employeeNumber": "5268",
      "department": "Administration",
      "position": "Chief Financial Officer",
      "locationId": 1
    },
    {
      "employeeId": 6,
      "firstName": "Alicia",
      "lastName": "Rambaran",
      "employeeNumber": "4678",
      "department": "Administration",
      "position": "CEO",
      "locationId": 1
    },
    {
      "employeeId": 7,
      "firstName": "Trina",
      "lastName": "Smith",
      "employeeNumber": "5438",
      "department": "Sales",
      "position": "Sales Associate",
      "locationId": 1
    },
    {
      "employeeId": 8,
      "firstName": "Richard",
      "lastName": "Brooks",
      "employeeNumber": "7858",
      "department": "Sales",
      "position": "Sales Associate",
      "locationId": 1
    },
    {
      "employeeId": 9,
      "firstName": "Mark",
      "lastName": "Jones",
      "employeeNumber": "1998",
      "department": "Sales",
      "position": "Sales Associate",
      "locationId": 1
    },
    {
      "employeeId": 10,
      "firstName": "Victoria",
      "lastName": "Robinson",
      "employeeNumber": "5158",
      "department": "Sales",
      "position": "Internet Sales Associate",
      "locationId": 1
    }
  ]
}

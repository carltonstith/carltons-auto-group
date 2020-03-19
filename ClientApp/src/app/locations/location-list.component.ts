import { Component } from '@angular/core';

@Component({
  selector: 'ag-locations',
  templateUrl: '/location-list.component.html'
})
export class LocationListComponent {
  pageTitle: string = 'Location List';
  locations: any[]= [
    {
      'locationId': 1,
      'city': 'Philadelphia',
      'state': 'PA',
      'phoneNumber': '215-555-1212'
    },
    {
      'locationId': 2,
      'city': 'New York City',
      'state': 'NY',
      'phoneNumber': '718-555-1212'
    },
    {
      'locationId': 3,
      'city': 'Atlanta',
      'state': 'GA',
      'phoneNumber': '404-555-1212'
    },
    {
      'locationId': 4,
      'city': 'Nashville',
      'state': 'TN',
      'phoneNumber': '615-555-1212'
    },
    {
      'locationId': 5,
      'city': 'Los Angeles',
      'state': 'CA',
      'phoneNumber': '213-555-1212'
    }
  ];
}

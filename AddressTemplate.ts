import { Component, Input } from '@angular/core';

export class Address {
  street: String;
  city: String;
  zipCode: String;
}

@Component({
  selector: 'app-address',
  template: `<p>{{ address.street }}</p>
             <p>{{ address.city }}</p>
             <p>{{ address.zipCode }}</p>`
})
export class AddressComponent {

  @Input() address: Address;
  constructor() { }
}

@Component({
  selector: 'app-address-list',
  //Update this template
  template: `<ul>
               <li *ngFor="let address of addresses">
                 <app-address [address]="address"></app-address>
               </li>
             </ul>`
})
export class AddressListComponent {

  @Input() addresses: Address[] = [{ street: "Third Avenue", city: "New York", zipCode: "10001" },
                                   { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }];
  constructor() { }
}
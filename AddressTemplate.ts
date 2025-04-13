import { Component, Input } from '@angular/core';

export class Address {
    street: string;
    city: string;
    zipCode: string;
}

@Component({
    selector: 'app-address',
    template: `<p>{{ address.street }}</p>
             <p>{{ address.city }}</p>
             <p>{{ address.zipCode }}</p>`
})
export class AddressComponent {

    @Input() address: Address;
    // don't need an empty constructor in either component
}

@Component({
    selector: 'app-address-list',
    template: `<ul>
                @for (address of addresses; track address.zipCode) {
                    <li>
                        <app-address [address]="address"></app-address>
                    </li>
                }
                </ul>`
})
export class AddressListComponent {

    @Input() addresses: Address[] = [{ street: "Third Avenue", city: "New York", zipCode: "10001" },
    { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }];
}
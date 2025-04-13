import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <ul>
                @for (item of items; track item) {
                  <li>{{ item }}</li>
                } 
              </ul>
            </div>`
})

export class ShoppingList {
  @Input() items: string[]; 
  // with input signal, test fails possible this changes in future
  // set items equal to input<string[]>();
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: `<div>
  <ul>
    <li *ngFor="let item of items">{{item}}</li>
  </ul>
</div>`
})

export class ShoppingList {
  @Input() items: string[];
}
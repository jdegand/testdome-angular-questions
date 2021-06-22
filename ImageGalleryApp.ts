import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <div class="image" *ngFor="let link of links">
              <img src={{link}}>
              <button class="remove" (click)="remove($event)">X</button>
  </div>
</div>`
})

export class ImageGallery {
  @Input() links: string[];
  
   remove(event) {
     event.target.closest('div.image').remove();
   }
      
}
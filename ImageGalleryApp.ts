import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div>
                  @for (link of links; track link; let i = $index) {
                    <div class="image">
                      <img [src]="link" alt="" />
                      <button class="remove" (click)="remove(i)">X</button>
                    </div>
                  }
                </div>`,
})
export class ImageGallery {
    links: string[] = ['link1.jpg', 'link2.jpg', 'link3.jpg'];

    remove(index: number) {
        // could also use splice(index, 1) to 100%
        this.links = [...this.links.slice(0, index), ...this.links.slice(index + 1)];
    }
}
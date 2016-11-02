import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<div><h1> container component</h1>
  <about-app [title]='childTitle' (notify)='onNotify($event)'></about-app>
</div> `
})
export class AppComponent {
    childTitle: string = 'This text is passed to child';

    onNotify(message: string): void {
        alert(message);
    }
 }
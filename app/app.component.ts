import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
    <a routerLink=''>Home</a>
    <a routerLink='/about'>About</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
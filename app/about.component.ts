import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'about-app',
    template: `<h2>{{title}}</h2> 
    <span (click)='onClick()'>Click me please!</span> `
})
export class AboutComponent { 
    email = 123;
    @Input() title: string;
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    onClick() {
        this.notify.emit(this.email);
    }
}
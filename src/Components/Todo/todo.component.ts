import {Component} from '@angular/core';

@Component({
    selector:"todo",
    template: require('./todo.component.tpl.html')
})
export class TodoComponent {
    public test: boolean = false;
}
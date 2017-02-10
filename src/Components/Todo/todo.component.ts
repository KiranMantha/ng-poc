import {Component} from '@angular/core';

@Component({
    selector:"todo",
    template: require('./todo.component.tpl.html')
})
export class TodoComponent {
    public test: boolean = false;
    public test1(evt: any):void {
        console.log(evt)
        alert('hi');
    }
}
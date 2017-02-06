import {Component, Input} from '@angular/core';

@Component({
    selector: 'checkbox',
    template: `
        <div class='checkbox'>
            <Input type='checkbox' id='{{id}}' name='{{name}}' value='{{value}}'/>
            <label for='{{id}}'>{{text}}</label>
        </div>
    `
})
export class CheckboxComponent{
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() text: string;
}
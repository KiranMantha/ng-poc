import {Component, Input} from '@angular/core';

@Component({
    selector: 'radio',
    template: `
        <div class='checkbox'>
            <Input type='radio' id='{{id}}' name='{{name}}' value='{{value}}'/>
            <label for='{{id}}'>{{text}}</label>
        </div>
    `
})
export class RadioComponent{
    @Input() id: string;
    @Input() name: string;
    @Input() value: string;
    @Input() text: string;
}
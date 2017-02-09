import { Component, Input, Optional, Inject, ViewChild } from '@angular/core';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { ValueAccessorBase } from './Generics/ValueAccessorBase';

@Component({
    selector: 'text-box',
    template: `
    <div class="container">
        <label>{{label}}</label>
      <input
        type="text"
        [(ngModel)]="value"
        [ngClass]="{invalid: (invalid | async)}" [attr.id]="identifier" [attr.name]="identifier" />
      <validation-messages *ngIf="invalid | async" [messages]="failures | async">
      </validation-messages>
    </div>
  `,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: TextBoxComponent, multi: true }
    ],
})
export class TextBoxComponent extends ValueAccessorBase<string> {
    constructor(
        @Optional() @Inject(NG_VALIDATORS) private validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) private asyncValidators: Array<any>,
    ) {
        super(); // ValueAccessor base
    }    
    @Input() public label: string;
    public identifier = `textbox-${identifier++}`;
}  
let identifier = 0;
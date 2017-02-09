import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';
import { RadioComponent } from './radio.component';
import { DropdownComponent } from './dropdown.component';
import { TextBoxComponent } from './textbox.component';
import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        CheckboxComponent,
        RadioComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ],
    exports: [
        CheckboxComponent,
        RadioComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ],
    entryComponents: [
        CheckboxComponent,
        RadioComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ]
})
export class ControlsModule { }
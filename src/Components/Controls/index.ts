import { NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox.component';
import { RadioComponent } from './radio.component'

@NgModule({
    declarations: [CheckboxComponent, RadioComponent],
    exports: [CheckboxComponent, RadioComponent]
})
export class ControlsModule { }
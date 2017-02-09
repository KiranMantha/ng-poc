import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ControlsModule} from '../Controls';
import { TodoComponent } from './todo.component';

@NgModule({
    imports: [FormsModule, ControlsModule],
    declarations: [TodoComponent],
    exports: [TodoComponent]
})
export class TodoModule { }
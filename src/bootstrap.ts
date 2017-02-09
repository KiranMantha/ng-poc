import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './Components/Header';
import { ControlsModule } from './Components/Controls';
import { TodoModule } from './Components/Todo';

import { AppComponent } from './components/App/app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HeaderModule,
        ControlsModule,
        TodoModule
    ]
})
export class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
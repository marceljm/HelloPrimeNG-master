import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, InputText, TabView, TabPanel, Dialog, Button} from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, InputTextModule, InputText, TabView, TabPanel, Dialog, Button],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

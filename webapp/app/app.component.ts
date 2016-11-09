import {Component} from '@angular/core';
//import {InputText, TabView, TabPanel, Dialog, Button} from 'primeng/primeng';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html'
})

export class AppComponent {
    display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
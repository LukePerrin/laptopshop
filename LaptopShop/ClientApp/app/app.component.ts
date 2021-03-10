import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/dataService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'laptop-shop';
    items: number = 0;;

    constructor(public data: DataService) {

    }

    ngOnInit() {
        
    }

}

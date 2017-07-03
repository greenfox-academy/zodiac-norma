import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel-submenu',
    templateUrl: './hotel-submenu.component.html',
    styleUrls: ['./hotel-submenu.component.scss']
})

export class HotelSubmenuComponent implements OnInit {

    currentRoute = '';

    constructor(private router: Router) {
        this.currentRoute = this.router.url;
    }

    ngOnInit() {
    }

}

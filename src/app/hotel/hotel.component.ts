import { Component, OnInit } from '@angular/core';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { AppService } from '../app.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OwerviewComponent } from './owerview/owerview.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
	selector: 'app-hotel',
	templateUrl: './hotel.component.html',
	styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

	latitude;
	longitude;
	adress;

	constructor(
        private request: AppService,
        private route: ActivatedRoute,
        private router: Router) {}

	ngOnInit() {
		
	}

}

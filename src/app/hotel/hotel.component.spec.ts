import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelComponent } from './hotel.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { AppService } from '../app.service';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import { SliderComponent } from '../slider/slider.component';

describe('HotelComponent', () => {
	let component: HotelComponent;
	let fixture: ComponentFixture<HotelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HotelComponent, SimpleMapComponent ],
	  		imports: [HttpModule, FormsModule, RouterTestingModule, AgmCoreModule ],
	  		providers: [ AppService, MapsAPILoader ]
    	})
    .compileComponents();
	}));

	beforeEach(() => {
    	fixture = TestBed.createComponent(HotelComponent);
    	component = fixture.componentInstance;
    	fixture.detectChanges();
  	});
});

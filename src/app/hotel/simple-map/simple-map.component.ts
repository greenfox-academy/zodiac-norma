import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Response } from '@angular/http';
import { AppService } from '../../app.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-simple-map',
	templateUrl: './simple-map.component.html',
	styleUrls: ['./simple-map.component.scss']
})



export class SimpleMapComponent implements OnInit {
	lat;
	long;
	adress;
	constructor( private request: AppService,
        private route: ActivatedRoute,
        private router: Router) { 
		
	}

	ngOnInit() {
		this.request.getData('https://two-ferns.glitch.me/hotel')
			.subscribe(
			(response: Response) => {
				var data = response.json();

            	this.lat= data[0].lt;
            	this.long = data[0].lng;
				this.adress = data[0].adr;
			},
			(error) => console.log(error)
			);
  	}	
	public customStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-23"
            },
            {
                "lightness": "27"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1"
            },
            {
                "hue": "#ff1800"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e74c3c"
            },
            {
                "saturation": "-59"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff1800"
            },
            {
                "saturation": "2"
            },
            {
                "lightness": "2"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-51"
            },
            {
                "color": "#cbcbcb"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2c3e50"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

	
}; 

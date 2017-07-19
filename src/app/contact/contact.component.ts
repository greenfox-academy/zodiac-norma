import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

    constructor(private service: ContactService) {}
    ngOnInit() {}

    onSubmit(firstName, lastName, email, message) {
        this.service.postEmail(firstName.value.toString(), lastName.value.toString(), email.value.toString(), message.value.toString())

        .subscribe(
          (response: Response) => {
              console.log(response.json());
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

}

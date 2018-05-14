

'use strict';

var THEME_CONFIG = {          
  googleFont: [               // Google Fonts
    "Lato:300,400,700", 
    "Orbitron:400,700"
  ],
  countdownTarget: "2017, 8, 30",    // Countdown target date: YYYY, MM, DD
  countdownExpiry: "We're about to start", // Countdown text on expiry
  subscribeAction: "//working-idea.us15.list-manage.com/subscribe/post?u=5359c228f699ee3c6408b8c8d&amp;id=11a8adfa47", // MailChimp Form Action Path 
  canvasEffect: false,        // Canvas background effect: true / false
  canvasAmount: 3800,         // Canvas amount of stars
  canvasSpeed: 0.0004,        // Canvas stars rotating speed 
  parallaxEffect: false,      // Parallax background effect: true / false
  mapApiKey: "AIzaSyARcbhwKqdNOYD_FiW6PMtLuxE0A8lTLB8", // Your Google map API key
  mapLatitude: 40.7485586,    // Google map latitude
  mapLongitude: -73.9808399,  // Google map longitude
  mapZoom: 11,                // Google map zoom
  mapStyle:                   // Google map style
  [{  
    "elementType": "geometry",
    "stylers": [{
      "color": "#191d21" // #201f2b 
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }, {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#bdbdbd"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "poi.business",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#181818"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#1b1b1b"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#2c2c2c"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#8a8a8a"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#373737"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#3c3c3c"
    }]
  }, {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [{
      "color": "#4e4e4e"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#3d3d3d"
    }]
  }]
};
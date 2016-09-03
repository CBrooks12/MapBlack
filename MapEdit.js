var map;

function initMap() {
	var styleArray = [
	 {
		featureType: "road",
		elementType: "labels",
		stylers: [
		  { visibility: "off" }
		]
	  }
	  ,{
		featureType: "poi",
		elementType: "all",
		stylers: [
		  { visibility: "off" }
		]
	  }
	  ,{
		featureType: "water",
		stylers: [
		  { "color": "#161616" }
		]
	  }
	  ,{
		featureType: "landscape",
		stylers: [
		  {"color": "#141414"}
		]
	  }
	  ,{
		featureType: "administrative",
		stylers: [
		  { visibility: "off" }
		]
	  },{
		featureType: "administrative.locality",
		stylers: [
		  { visibility: "on" }
		]
	  }
	];
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 44.052,
      lng: -123.086
    },
	styles: styleArray,
    zoom: 8
  });
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
}
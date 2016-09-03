var fxml_url = 'https://cbrooks4:e4e205799a31cb95274d38b3d502596b06f3f66c@flightxml.flightaware.com/json/FlightXML2/';

// When the button is clicked, fetch the details about the entered flight ident.
$(document).ready(function(){
	for(i=0;i<100;i+=15){
		$.ajax({
			type: 'GET',
			url: fxml_url + 'Search',
			data: { 'query': "-inAir 1", 'howMany': i+15, 'offset': i },
			success : function(result) {
				if (result.error) {
					alert('Failed to fetch flight: ' + result.error);
					return;
				}
				for (aircraft of result.SearchResult.aircraft) {
					// Add the circle for this city to the map.
					var planeCircle = new google.maps.Circle({
						strokeColor: '#FF0000',
						strokeOpacity: 0.8,
						strokeWeight: 2,
						fillColor: '#FF0000',
						fillOpacity: 0.35,
						map: map,
						center: {lat: aircraft.latitude, lng: aircraft.longitude},
						radius: 7000
					});
				}
				console.log(result);
				//alert('Did not find any useful flights');
			},
			error: function(data, text) { alert('Failed to fetch flight: ' + data); },
			dataType: 'jsonp',
			jsonp: 'jsonp_callback',
			xhrFields: { withCredentials: true }
		});
	}
});
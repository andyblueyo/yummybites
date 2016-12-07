function initMap() {
        var yummy = {lat: 47.657775, lng: -122.313355};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: yummy
        });

        var contentString = '<h2>Yummy Bites</h2>'+'<p>4131 University Way NE, Seattle, WA 98105</p>'+'<p>(206) 633-6582</p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
          position: yummy,
          map: map
        });
        infowindow.open(map, marker);
        marker.addListener('click', function(){
            infowindow.open(map, marker);
        });
}
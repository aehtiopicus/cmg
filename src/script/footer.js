cmg.footer = (function(){
  var inner = {
    initMap : function(){          
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
            center: {lat: -32.935089, lng: -68.770857},
            zoom: 15
          });
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-32.935271, -68.770129),
            icon: "../img/rsz_logocmg.png",
            map: map
          });
          this.mapObjects ={map : map, mapDiv : mapDiv, marker: marker};
      }
  }
  return inner;
})();

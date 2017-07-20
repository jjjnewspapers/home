function initMap() {
  var jjj = {lat: 14.66015, lng: 121.04439};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: jjj
  });
  var marker = new google.maps.Marker({
    position: jjj
  });
  marker.setMap(map);

}

function contacts(){
  $("#cover").hide();
  $("#contact").fadeIn(500);
  initMap();
}
      $("#contact").hide();

  $("#cover button").click(function(){
    contacts();
  });
  
  $("nav li:nth-child(2)").click(function(){
    contacts();
  });

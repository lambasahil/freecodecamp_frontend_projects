var markers = [];
var points = [
    {
        location: {
            lat: 30.7056,
            lng: 76.8013
        },
        name: 'Elante Mall',
        fid: '30.7056,76.8013',
        chart: true
    },
    {
        location: {
            lat: 30.7525,
            lng: 76.8101

        },
        name: 'Rock Garden',
        fid: '30.7525,76.8101',
        chart: true
    },
    {
        location: {
            lat: 30.7461,
            lng: 76.7820
        },
        name: 'Rose Garden',
        fid: '30.7461,76.7820',
        chart: true
    },
    {
        location: {
            lat: 30.725,
            lng: 76.8056
        },
        name: 'Mainland China',
        fid: '30.725,76.8056',
        chart: true
    },
    {
        location: {
            lat: 30.7260,
            lng: 76.8053
        },
        name: 'Barbeque Nation',
        fid: '30.7260,76.8053',
        chart: true
    }
];
var viewmodel = function() {
  //new google.maps.LatLng(points[i].location.lat, points[i].location.lng)
    var infowindow=new google.maps.InfoWindow();
    for (var i = 0; i < points.length; i++) {
        var pos = points[i].location;
          var marker = new google.maps.Marker({
            map: map,
            position: pos,
            title: points[i].name,
            animation: google.maps.Animation.Drop,
            id: points[i].fid,
            chart: ko.observable(true)

    });

      markers.push(marker);
    //  $(markers).click(function(){
    //     Infowindow(this,infowindow);
    //   });


       marker.addListener('click', function() {
           Infowindow(this, infowindow); //on clicking marker calling function populateInfoWindow()
       });
};

  function Infowindow(marker,smallwindow){

      if(marker.smallwindow!=marker){

        smallwindow.marker=marker;
        smallwindow.setContent('<div>' + '<h3>' + marker.title + '</h3>' + '</div>');
        smallwindow.open(map, marker);
        smallwindow.addListener('closeclick',function(){
          smallwindow.marker=null;
        });
      }


  };

     markers.forEach(function(report){

       $.ajax({
         method: 'GET',
         dataType: "json",
         url: "https://api.darksky.net/forecast/d5e3f4ed9885a4e2257a7979abc54453/" + report.id,
         success: function(data){
           var abc=data.currently;
           console.log(abc);
           report.humidity=abc.humidity;
           report.summary=abc.summary;
           report.temp=abc.temperature;
           report.icon=abc.icon;

          }


       });


    });



};

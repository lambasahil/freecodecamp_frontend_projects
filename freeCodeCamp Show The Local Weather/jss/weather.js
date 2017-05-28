
var array=[];


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        array.Location = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    array.latitude= position.coords.latitude ;
    array.longitude= position.coords.longitude;

    //Reverse Geocoding
    $.ajax({
      method: 'GET',
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ array.latitude +"," + array.longitude +"&key=AIzaSyB2ng6KUPwi4wnLFVzXi2LuEbhYWkLhZSM",
      success: function(data){
          array.place=data.results[0].address_components[2].long_name;
      }

    });

    $.ajax({
      method: 'GET',
      dataType: "jsonp",
      crossDomain: true,
      url: "https://api.darksky.net/forecast/d5e3f4ed9885a4e2257a7979abc54453/" + array.latitude + ","+array.longitude,
      success: function(data){
        var info=data.currently;


        array.humidity=info.humidity;
        array.summary=info.summary;
        array.temp=info.temperature;
        array.icon=info.icon;


        var a="Current Place: " + array.place;
        $("#place").append(a);

        var b="Temperature: " + array.temp ;
        var text=" <sup>o</sup>C";
        $("#temp").append(b,text);

        var c="Humidity: " + array.humidity;
        $("#humidity").append(c);

        var d="Pressure: "+ info.pressure +" Pa";
        $("#pressure").append(d);

        var e="Wind Speed: "+ info.windSpeed;
        $("#wind").append(e);

        var f="Icon: "+ info.icon;
        $("#icon").append(f);

        var g="Summary: "+ info.summary;
        $("#summary").append(g);
       }
    });
}

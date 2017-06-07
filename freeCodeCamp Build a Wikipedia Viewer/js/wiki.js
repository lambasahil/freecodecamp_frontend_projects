$(document).ready(function(){

var value;
$("button").click(function(){
  $(".abc").remove();
  value=$("input").val();

  $.ajax({
    dataType: "jsonp",
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +value +"&format=json&callback=wikiCallbackFunction",
    success:function(data){

      for(i=0;i<data[1].length;i++){
        var txt1="<div class='row abc'><div class='col-xs-12 small' >"

        var txt2="</div><div class='long'>"

        var txt3="</div></div>"
        $(".content").append(txt1 + data[1][i] +":"+ txt2 + data[2][i] + txt3);
      }
      // console.log(data[0].length);
      // $(".content").html(data[2][0]);

    }


  });

  $("input").val("");

})


});

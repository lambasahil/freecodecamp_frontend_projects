

$(document).ready(function(){

$("#abc").click(function(){

$("#def").slideToggle();

});



  setInterval(function(){
    Randomquote()
  },4000);
$(".quote").click(function(){
  Randomquote()
});
  function Randomquote(){

    $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?",
          data: "filter[orderby]=rand&filter[posts_per_page]=1&callback=",
          success: function(data){
      var c=data.shift();

      $(".quote").html(c.content  );
     $(".author").html("<p  >"+"-"+c.title+"</p>");

     $("#tshare").attr("href", "http://twitter.com/home/?status=" + c.content +
                           ' (' + c.title + ')');
          $('#fShare').attr("href", "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + c.link + "&p[title]=shareQuote");
          $('#gshare').attr("href", "https://plus.google.com/share?url=" + c.link);
          //$("#capture").removeAttr("download").removeAttr("href");

    },
    cache: false});
  };
});

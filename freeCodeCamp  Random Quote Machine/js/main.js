

$(document).ready(function(){

  setTimeOut(Randomquote(),8000);
  
  function Randomquote(){

    $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?",
          data: "filter[orderby]=rand&filter[posts_per_page]=1&callback=",
          success: function(data){
      var c=data.shift();
      console.log(c.content);
      $(".card-block").html("<p"+c.content+"</p>");
    }});
  };
});

$( "div.col" )
  .mouseenter(function() {
    $(this).find(".right").animate({"top":"0"}, 300);
  })
  .mouseleave(function() {
    $(this).find(".right").animate({"top":"100%"}, 300);
  });

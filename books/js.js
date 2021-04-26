$(document).ready(function(){

    function entryTakeImgWidth() {
        $(".entry").each(function(){
            var image = $(this).find("img");
            var width = image.width();
            var container = $(this).find(".container");
            $(this).css("width", width);
            container.css("width", width);
        });
    };

    entryTakeImgWidth();
    
    $(window).resize(function(){
        entryTakeImgWidth();
      });

});
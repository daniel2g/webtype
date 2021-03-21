$(document).ready(function(){

    // ---------- MODALS ------------
    
    $("#btn-basic").click(function(){
        $(".modal-container").removeClass("modal-hide");
        $("#mt-basic").removeClass("modal-hide");
    });

    $("#btn-zippers").click(function(){
        $(".modal-container").removeClass("modal-hide");
        $("#mt-zippers").removeClass("modal-hide");
    });

    $("#btn-hand").click(function(){
        $(".modal-container").removeClass("modal-hide");
        $("#mt-hand").removeClass("modal-hide");
    });

    $("#btn-crochet").click(function(){
        $(".modal-container").removeClass("modal-hide");
        $("#mt-crochet").removeClass("modal-hide");
    });

    $("#btn-doll").click(function(){
        $(".modal-container").removeClass("modal-hide");
        $("#mt-doll").removeClass("modal-hide");
    });


    function closeWindow() {
        $(".modal-text").addClass("modal-hide");
        $(".modal-container").addClass("modal-hide");
    }

    $(".closebtn").click(function(){
        closeWindow();
    });

    $(".register").click(function(){
        closeWindow();
    });



    // ---------- SEW-ON ------------

    // var sewonPath = document.getElementById("sewon-zippers");
    // var pathLength = sewonPath.getTotalLength();
    // console.log(pathLength);

    $("#btn-basic").hover(function(){
        $("#sewon-basic").addClass("sewon-show")
    });

    $("#btn-zippers").hover(function(){
        $("#sewon-zippers").addClass("sewon-show")
    });

    $("#btn-hand").hover(function(){
        $("#sewon-hand").addClass("sewon-show")
    });

    $("#btn-crochet").hover(function(){
        $("#sewon-crochet").addClass("sewon-show")
    });

    $("#btn-doll").hover(function(){
        $("#sewon-doll").addClass("sewon-show")
    });


    


   

});


// I  love Serena Shen! She's the BEST!! Find her at Serenashen.com
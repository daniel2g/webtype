


var pileImagesOutput = [];

function pileImages(){

    var i = 1;
    while (i < 27) {

        let posx = Math.floor(Math.random() * 70);
        let posy = Math.floor(Math.random() * 70);
        let zi = 27 - i;

        var newImg = '<img class="cover" id="file'+
        i +
        '" src="book_covers/' + 
        i + 
        '.jpg" alt="" style="top:' +
        posy +
        'vh; left: calc(' +
        posx +
        'vw + 280px); z-index:' +
        zi +
        ';"></img>';
        
        pileImagesOutput.push(newImg);

        i++
    }
}

pileImages();

const pileContainer = document.getElementById("pile_container")
pileContainer.innerHTML = pileImagesOutput.join("");

$(".cover").draggable();

var index = 27;

$(".cover").each(function(item){
    this.addEventListener("mousedown", function(e){
        $(this).css("z-index", index);
        index++;
    });
});


$(".aboutbutton").on("click", function(){
    $(".about").show();
    $(".small_back").show();
    $(".book").hide();
    $(".small").hide();
});

$(".small_back").on("click", function(){
    $(".book").hide();
    $(".about").hide();
    $(".small_back").hide();
    $(".small").show();
    // $("iframe").contents().find('video').each(function(){
    //     this.pause();
    // });
});





$("#file1").on("click", function(){
    $("#book1").show();
    $(".small").hide();
    $(".small_back").show();
    
});

$("#file2").on("click", function(){
    $("#book2").show();
    $(".small").hide();
    $(".small_back").show();
});
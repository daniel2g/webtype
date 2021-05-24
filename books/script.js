


var pileImagesOutput = [];

function pileImages(){

    var i = 1;
    while (i < 27) {

        let posx = Math.floor(Math.random() * 85);
        let posy = Math.floor(Math.random() * 65);
        let zi = 27 - i;

        var newImg = '<img class="cover" id="file'+
        i +
        '" src="book_covers/' + 
        i + 
        '.jpg" alt="" style="top:' +
        posy +
        'vh; left: calc(' +
        posx +
        'vw + 0px); z-index:' +
        zi +
        ';"></img>';
        
        pileImagesOutput.push(newImg);

        if(i===1){
            $(".title").css({
                'top': posy + 'vh',
                'left': posx + 'vw',
                'z-index': 27
            })
        }

        i++
    }
}

pileImages();

const pileContainer = document.getElementById("pile_container")
pileContainer.innerHTML = pileImagesOutput.join("");

$(".cover").draggable();
$(".title").draggable();

var index = 27;

$(".cover, .title").each(function(item){
    this.addEventListener("mousedown", function(e){
        $(this).css("z-index", index);
        index++;
    });
});




$(".title").on("click", function(){
    $(".about").show();
    $(".small_back").show();
    $(".book").hide();
    $(".small").hide();
    
});

$(".about").on("click", function(){
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

    window.open("page1.html", "_blank");
   
    
});

$("#file2").on("click", function(){
    $("#book2").show();
    $(".small").hide();
    $(".small_back").show();

    window.open("page2.html", "_blank");
    
});
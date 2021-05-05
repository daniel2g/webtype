//-----------FIRST, FOURTH CONTAINER SETUP------------

// const text = "Hesitantly, she placed her hand over a pale orange patch in the upper right corner of the map. That should be right. Pasadena. Obsidian lifted her hand and looked under it, then folded the map and put it back on the dashboard. He could read, she realized belatedly. He could probably write, too. Abruptly, she hated him— deep, bitter hatred. What did literacy mean to him— a grown man who played cops and robbers? But he was literate and she was not.";

// const text = "As they passed blocks of burned, abandoned buildings, empty lots, and wrecked or stripped cars, he slipped a gold chain over his head and handed it to her. The pendant attached to it was a smooth, glassy, black rock. Obsidian. His name might be Rock or Peter or Black, but she decided to think of him as Obsidian. Even her sometimes useless memory would retain a name like Obsidian. She handed him her own name symbol — a pin in the shape of a large golden stalk of wheat. She had bought it long before the illness and the silence began. Now she wore it, thinking it was as close as she was likely to come to Rye. People like Obsidian who had not known her before probably thought of her as Wheat. Not that it mattered. She would never hear her name spoken again.";


// const words = text.split(" ");

// var textarray = [];
// var i = 1;
// function addMarkup(element) {
//     textarray.push('<p id="ww' + i + '">' + element + ' </p>');
//     // textarray.push('"ww' + i +'"');
//     i++
// }

// words.forEach(addMarkup)
// var finalTxt = textarray.join(", ");
// console.log(finalTxt)



//-----------FIRST CONTAINER--------------


document.addEventListener("DOMContentLoaded", function(){

    const wordIds = ["word1", "word2", "word3", "word4", "word5", "word6", "word7", "word8", "word9", "word10", "word11", "word12", "word13", "word14", "word15", "word16", "word17", "word18", "word19", "word20", "word21", "word22", "word23", "word24", "word25", "word26", "word27", "word28", "word29", "word30", "word31", "word32", "word33", "word34", "word35", "word36", "word37", "word38", "word39", "word40", "word41", "word42", "word43", "word44", "word45", "word46", "word47", "word48", "word49", "word50", "word51", "word52", "word53", "word54", "word55", "word56", "word57", "word58", "word59", "word60", "word61", "word62", "word63", "word64", "word65", "word66", "word67", "word68", "word69", "word70", "word71", "word72", "word73", "word74", "word75", "word76", "word77", "word78", "word79", "word80", "word81", "word82", "cite"];

    const syllableValues = [
        1,6,1,1,1,2,1,1,2,2,2,1,1,2,2,2,1,1,6,
        1,1,1,4,6,
        3,1,1,1,1,1,1,6,1,1,1,4,1,1,1,1,1,1,6,
        1,1,6,1,2,6,
        1,1,2,2,6,
        1,1,1,6,2,2,6,
        1,1,3,1,1,6,1,1,1,1,1,1,1,6,
        1,1,1,4,1,1,1,1,6
    ];

    var sumArray = [];

    function compileSyllables(wordId){

        var element = document.getElementById(wordId);
        // var syllableValue = window.getComputedStyle(element).getPropertyValue("--syllables");

        var wordIndex = wordIds.indexOf(wordId);
        var syllableValue = syllableValues[wordIndex];


        sumArray.push(parseInt(syllableValue));

        let sum = sumArray.reduce(function(passedIn, item) {
            return passedIn + item;
        }, 0);
        
        // console.log(sum);
        element.style.setProperty("--syllables", sum);
    };

    wordIds.forEach(compileSyllables);


    setTimeout(function(){ 

        $("#back").click(function(){
            $("#overlay").show();
        });
        $("#overlay").click(function(){
            location.reload();
        });

    }, 25100*0 );

        


    //---------THIRD CONTAINER--------------


    $(".third_container").mousemove(function(event) {
        let cursorX = event.pageX / $(this).width();
        let settingX = Math.floor(-100 + cursorX * 1250);
        $(".alphabet").css("--tester", settingX);
    });


    var cursorElement = document.getElementById("guide");
    var container = document.getElementById("cont3");
    var x, y;
    document.addEventListener("mousemove", function(event){
        x = event.clientX;
        y = event.clientY;
        var t = container.getBoundingClientRect();
        var tx = x - 60;
        var ty = y - t.top - 40;
        if(tx < 0){
            tx = 0;
        }
        var testright = window.innerWidth - 160; //Change for Scrollbar Width
        if(tx > testright){
            tx = testright;
        }
        var testbottom = window.innerHeight - t.top - 65;
        if(ty > testbottom){
            ty = testbottom;
        }
        if(y > t.bottom - 25){
            ty = t.bottom - t.top - 65;
            return;
        }
        var testtop = -70;
        if(ty < testtop){
            ty = testtop;
        }

        if (typeof x !== 'undefined'){
            cursorElement.style.transform = 
            "translate(" + tx + "px," + ty + "px)";
        };
    }, false);



    // --------FOURTH CONTAINER-------------

    // const wwIds = ["ww1", "ww2", "ww3", "ww4", "ww5", "ww6", "ww7", "ww8", "ww9", "ww10", "ww11", "ww12", "ww13", "ww14", "ww15", "ww16", "ww17", "ww18", "ww19", "ww20", "ww21", "ww22", "ww23", "ww24", "ww25", "ww26", "ww27", "ww28", "ww29", "ww30", "ww31", "ww32", "ww33", "ww34", "ww35", "ww36", "ww37", "ww38", "ww39", "ww40", "ww41", "ww42", "ww43", "ww44", "ww45", "ww46", "ww47", "ww48", "ww49", "ww50", "ww51", "ww52", "ww53", "ww54", "ww55", "ww56", "ww57", "ww58", "ww59", "ww60", "ww61", "ww62", "ww63", "ww64", "ww65", "ww66", "ww67", "ww68", "ww69", "ww70", "ww71", "ww72", "ww73", "ww74", "ww75", "ww76", "ww77", "ww78", "ww79", "ww80", "ww81", "ww82", "ww83", "ww84", "ww85", "ww86", "ww87", "ww88", "ww89", "ww90", "ww91", "ww92", "ww93", "ww94", "ww95", "ww96", "ww97", "ww98", "ww99", "ww100", "ww101", "ww102", "ww103", "ww104", "ww105", "ww106", "ww107", "ww108", "ww109", "ww110", "ww111", "ww112", "ww113", "ww114", "ww115", "ww116", "ww117", "ww118", "ww119", "ww120", "ww121", "ww122", "ww123", "ww124", "ww125", "ww126", "ww127", "ww128", "ww129", "ww130", "ww131", "ww132", "ww133", "ww134", "ww135", "ww136", "ww137", "ww138", "ww139", "ww140", "ww141", "ww142", "ww143", "ww144", "ww145"];



    $(".fourth_container").children().css("--newght", "410")

        // -----CHANGE WORDS AND COLLAPSE------

    $(".fourth_container").children().on("mouseenter", function(){
        let content = this.innerHTML;
        content = content.trim();
        content = content.replace(",", "");
        content = content.replace(".", "");
        content = RiTa.soundsLike(content);
        nsubs = content.length;
        rsub = Math.floor(Math.random() * (nsubs + 1));
        content = content[rsub];
        if (content == undefined) return;

        var newght = $(this).css("--newght");
        newght = parseInt(newght) + 30;
        // console.log(newght);
        
        if (this.id == "ww"){
            this.innerHTML = content + " ";
        }
        if (this.id == "dashnone"){
            return;
        }
        if (this.id == "com"){
            this.innerHTML = content + ", ";
        }
        if (this.id == "per"){
            this.innerHTML = content + ". ";
        }
        if (this.id == "cap"){
            this.innerHTML = content.charAt(0).toUpperCase() + content.slice(1) + " ";
        }
        if (this.id == "capcom"){
            this.innerHTML = content.charAt(0).toUpperCase() + content.slice(1) + ", ";
        }
        if (this.id == "capper"){
            this.innerHTML = content.charAt(0).toUpperCase() + content.slice(1) + ". ";
        }
    
        $(this).css("--newght", newght);
    });

        // ---------COLLAPSE ONLY------------

    // $(".fourth_container").children().on("mousemove", function(){
    //     var newght = $(this).css("--newght");
    //     newght = parseInt(newght) + 30;
    //     console.log(newght);
        
    //     $(this).css("--newght", newght);
    // });








    //------------LAST CONTAINER-----------------

    var inputField = document.getElementById("userentry");

    inputField.addEventListener('mouseover', function() {
        inputField.focus();
    });


    








});
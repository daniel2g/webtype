// const text = "Hesitantly, she placed her hand over a pale orange patch in the upper right corner of the map. That should be right. Pasadena. Obsidian lifted her hand and looked under it, then folded the map and put it back on the dashboard. He could read, she realized belatedly. He could probably write, too. Abruptly, she hated him— deep, bitter hatred. What did literacy mean to him— a grown man who played cops and robbers? But he was literate and she was not.";
// const words = text.split(" ");

// var textarray = [];
// var i = 1;
// function addMarkup(element) {
//     // textarray.push('<p id="word' + i + '">' + element + '</p>');
//     textarray.push('"word' + i +'"');
//     i++
// }

// words.forEach(addMarkup)
// var finalTxt = textarray.join(", ");
// console.log(finalTxt)

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




$(".third_container").mousemove(function(event) {
    let cursorX = event.pageX / $(this).width();
    let settingX = Math.floor(50 + cursorX * 900);
    $(".alphabet").css("--tester", settingX);
});

















});
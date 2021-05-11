const data = [
    {
        title: "Assigned Male (series)",
        cover: "001.jpg",
        auth: "Sophie Labelle",
        authLink: "https://www.serioustransvibes.com/",
        illus: "",
        illusLink: "",
        pub: "Jessica Kingsley",
        pubLink: "https://uk.jkp.com/",
        year: 2021,
    },
    {
        title: "Ciel (series)",
        cover: "002.jpg",
        auth: "Sophie Labelle",
        authLink: "https://www.serioustransvibes.com/",
        illus: "",
        illusLink: "",
        pub: "Second Story Press",
        pubLink: "https://secondstorypress.ca/",
        year: 2020,
    },
    {
        title: "My Dad Thinks I'm a Boy?!",
        cover: "003.jpg",
        auth: "Sophie Labelle",
        authLink: "https://www.serioustransvibes.com/",
        illus: "",
        illusLink: "",
        pub: "Jessica Kingsley",
        pubLink: "https://uk.jkp.com/",
        year: 2020,
    },
    {
        title: "My Rainbow!",
        cover: "004.jpg",
        auth: "Trinity and DeShanna Neal",
        authLink: "https://www.advocate.com/commentary/2016/5/10/how-black-mom-making-better-world-her-trans-daughter",
        illus: "Art Twink",
        illusLink: "https://www.arttwink.com/",
        pub: "Kokila",
        pubLink: "https://twitter.com/KokilaBooks",
        year: 2020,
    },


]



/////////////// DEFINITIONS /////////////////


function entryTakeImgWidth() {
    $(".entry").each(function(){
        var image = $(this).find("img");
        var width = image.width();
        var container = $(this).find(".container");
        $(this).css("width", width);
        container.css("width", width);
    });
};



/////////////// BEGIN SCRIPT /////////////////


$(document).ready(function(){

    entryTakeImgWidth();
    
    $(window).resize(function(){
        entryTakeImgWidth();
    });

});
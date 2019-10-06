// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img29 = document.getElementById("button29");
var vid29 = document.getElementById("video29");
img29.addEventListener("click", () => playVideo(img29, vid29));
init(vid29);

var img30 = document.getElementById("button30");
var vid30 = document.getElementById("video30");
img30.addEventListener("click", () => playVideo(img30, vid30));
init(vid30);

var img31 = document.getElementById("button31");
var vid31 = document.getElementById("video31");
img31.addEventListener("click", () => playVideo(img31, vid31));
init(vid31);

var img32 = document.getElementById("button32");
var vid32 = document.getElementById("video32");
img32.addEventListener("click", () => playVideo(img32, vid32));
init(vid32);

var img33 = document.getElementById("button33");
var vid33 = document.getElementById("video33");
img33.addEventListener("click", () => playVideo(img33, vid33));
init(vid33);

var img34 = document.getElementById("button34");
var vid34 = document.getElementById("video34");
img34.addEventListener("click", () => playVideo(img34, vid34));
init(vid34);

var img35 = document.getElementById("button35");
var vid35 = document.getElementById("video35");
img35.addEventListener("click", () => playVideo(img35, vid35));
init(vid35);

var img36 = document.getElementById("button36");
var vid36 = document.getElementById("video36");
img36.addEventListener("click", () => playVideo(img36, vid36));
init(vid36);

var img37 = document.getElementById("button37");
var vid37 = document.getElementById("video37");
img37.addEventListener("click", () => playVideo(img37, vid37));
init(vid37);

var img78 = document.getElementById("button78");
var vid78 = document.getElementById("video78");
img78.addEventListener("click", () => playVideo(img78, vid78));
init(vid78);

var img38 = document.getElementById("button38");
var vid38 = document.getElementById("video38");
img38.addEventListener("click", () => playVideo(img38, vid38));
init(vid38);

var img39 = document.getElementById("button39");
var vid39 = document.getElementById("video39");
img39.addEventListener("click", () => playVideo(img39, vid39));
init(vid39);

var img40 = document.getElementById("button40");
var vid40 = document.getElementById("video40");
img40.addEventListener("click", () => playVideo(img40, vid40));
init(vid40);

var img41 = document.getElementById("button41");
var vid41 = document.getElementById("video41");
img41.addEventListener("click", () => playVideo(img41, vid41));
init(vid41);

var img42 = document.getElementById("button42");
var vid42 = document.getElementById("video42");
img42.addEventListener("click", () => playVideo(img42, vid42));
init(vid42);

// disappears image and brings up/plays video
function playVideo(img, vid) {
    img.style.display = "none";
    vid.style.display = "inline";
    vid.play();
    for(var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
};

// disappears video and brings up image again
    vid.onended = function() {
        for(var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    };
        vid.style.display = "none";
        img.style.display = "inline";
        vid.onended = "none";
        };
};

// disappears video initially
function init(vid) {
    vid.style.display = "none";
}

// var img* = document.getElementById("button*");
// var vid* = document.getElementById("video*");
// img*.addEventListener("click", () => playVideo(img*, vid*));
// init(vid*);
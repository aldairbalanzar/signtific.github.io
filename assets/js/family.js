// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img9 = document.getElementById("button9");
var vid9 = document.getElementById("video9");
img9.addEventListener("click", () => playVideo(img9, vid9));
init(vid9);

var img10 = document.getElementById("button10");
var vid10 = document.getElementById("video10");
img10.addEventListener("click", () => playVideo(img10, vid10));
init(vid10);

var img11 = document.getElementById("button11");
var vid11 = document.getElementById("video11");
img11.addEventListener("click", () => playVideo(img11, vid11));
init(vid11);

var img12 = document.getElementById("button12");
var vid12 = document.getElementById("video12");
img12.addEventListener("click", () => playVideo(img12, vid12));
init(vid12);

var img13 = document.getElementById("button13");
var vid13 = document.getElementById("video13");
img13.addEventListener("click", () => playVideo(img13, vid13));
init(vid13);

var img14 = document.getElementById("button14");
var vid14 = document.getElementById("video14");
img14.addEventListener("click", () => playVideo(img14, vid14));
init(vid14);

var img15 = document.getElementById("button15");
var vid15 = document.getElementById("video15");
img15.addEventListener("click", () => playVideo(img15, vid15));
init(vid15);

var img80 = document.getElementById("button80");
var vid80 = document.getElementById("video80");
img80.addEventListener("click", () => playVideo(img80, vid80));
init(vid80);

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
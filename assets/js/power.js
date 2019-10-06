// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img1 = document.getElementById("button1");
var vid1 = document.getElementById("video1");
img1.addEventListener("click", () => playVideo(img1, vid1));
init(vid1);

var img2 = document.getElementById("button2");
var vid2 = document.getElementById("video2");
img2.addEventListener("click", () => playVideo(img2, vid2));
init(vid2);

var img3 = document.getElementById("button3");
var vid3 = document.getElementById("video3");
img3.addEventListener("click", () => playVideo(img3, vid3));
init(vid3);

var img4 = document.getElementById("button4");
var vid4 = document.getElementById("video4");
img4.addEventListener("click", () => playVideo(img4, vid4));
init(vid4);

var img5 = document.getElementById("button5");
var vid5 = document.getElementById("video5");
img5.addEventListener("click", () => playVideo(img5, vid5));
init(vid5);

var img6 = document.getElementById("button6");
var vid6 = document.getElementById("video6");
img6.addEventListener("click", () => playVideo(img6, vid6));
init(vid6);

var img7 = document.getElementById("button7");
var vid7 = document.getElementById("video7");
img7.addEventListener("click", () => playVideo(img7, vid7));
init(vid7);

var img8 = document.getElementById("button8");
var vid8 = document.getElementById("video8");
img8.addEventListener("click", () => playVideo(img8, vid8));
init(vid8);

var img9 = document.getElementById("button9");
var vid9 = document.getElementById("video9");
img9.addEventListener("click", () => playVideo(img9, vid9));
init(vid9);

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
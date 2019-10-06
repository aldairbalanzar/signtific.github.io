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
// init(vid*);
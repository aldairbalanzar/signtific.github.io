// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img43 = document.getElementById("button43");
var vid43 = document.getElementById("video43");
img43.addEventListener("click", () => playVideo(img43, vid43));
init(vid43);

var img44 = document.getElementById("button44");
var vid44 = document.getElementById("video44");
img44.addEventListener("click", () => playVideo(img44, vid44));
init(vid44);

var img45 = document.getElementById("button45");
var vid45 = document.getElementById("video45");
img45.addEventListener("click", () => playVideo(img45, vid45));
init(vid45);

var img46 = document.getElementById("button46");
var vid46 = document.getElementById("video46");
img46.addEventListener("click", () => playVideo(img46, vid46));
init(vid46);

var img47 = document.getElementById("button47");
var vid47 = document.getElementById("video47");
img47.addEventListener("click", () => playVideo(img47, vid47));
init(vid47);

var img48 = document.getElementById("button48");
var vid48 = document.getElementById("video48");
img48.addEventListener("click", () => playVideo(img48, vid48));
init(vid48);

var img49 = document.getElementById("button49");
var vid49 = document.getElementById("video49");
img49.addEventListener("click", () => playVideo(img49, vid49));
init(vid49);

var img50 = document.getElementById("button50");
var vid50 = document.getElementById("video50");
img50.addEventListener("click", () => playVideo(img50, vid50));
init(vid50);

var img51 = document.getElementById("button51");
var vid51 = document.getElementById("video51");
img51.addEventListener("click", () => playVideo(img51, vid51));
init(vid51);

var img52 = document.getElementById("button52");
var vid52 = document.getElementById("video52");
img52.addEventListener("click", () => playVideo(img52, vid52));
init(vid52);

var img53 = document.getElementById("button53");
var vid53 = document.getElementById("video53");
img53.addEventListener("click", () => playVideo(img53, vid53));
init(vid53);

var img54 = document.getElementById("button54");
var vid54 = document.getElementById("video54");
img54.addEventListener("click", () => playVideo(img54, vid54));
init(vid54);

var img55 = document.getElementById("button55");
var vid55 = document.getElementById("video55");
img55.addEventListener("click", () => playVideo(img55, vid55));
init(vid55);

var img56 = document.getElementById("button56");
var vid56 = document.getElementById("video56");
img56.addEventListener("click", () => playVideo(img56, vid56));
init(vid56);

var img57 = document.getElementById("button57");
var vid57 = document.getElementById("video57");
img57.addEventListener("click", () => playVideo(img57, vid57));
init(vid57);

var img58 = document.getElementById("button58");
var vid58 = document.getElementById("video58");
img58.addEventListener("click", () => playVideo(img58, vid58));
init(vid58);

var img59 = document.getElementById("button59");
var vid59 = document.getElementById("video59");
img59.addEventListener("click", () => playVideo(img59, vid59));
init(vid59);

var img66 = document.getElementById("button66");
var vid66 = document.getElementById("video66");
img66.addEventListener("click", () => playVideo(img66, vid66));
init(vid66);

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
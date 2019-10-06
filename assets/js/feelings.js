// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img16 = document.getElementById("button16");
var vid16 = document.getElementById("video16");
img16.addEventListener("click", () => playVideo(img16, vid16));
init(vid16);

var img17 = document.getElementById("button17");
var vid17 = document.getElementById("video17");
img17.addEventListener("click", () => playVideo(img17, vid17));
init(vid17);

var img18 = document.getElementById("button18");
var vid18 = document.getElementById("video18");
img18.addEventListener("click", () => playVideo(img18, vid18));
init(vid18);

var img19 = document.getElementById("button19");
var vid19 = document.getElementById("video19");
img19.addEventListener("click", () => playVideo(img19, vid19));
init(vid19);

var img20 = document.getElementById("button20");
var vid20 = document.getElementById("video20");
img20.addEventListener("click", () => playVideo(img20, vid20));
init(vid20);

var img21 = document.getElementById("button21");
var vid21 = document.getElementById("video21");
img21.addEventListener("click", () => playVideo(img21, vid21));
init(vid21);

var img22 = document.getElementById("button22");
var vid22 = document.getElementById("video22");
img22.addEventListener("click", () => playVideo(img22, vid22));
init(vid22);

var img23 = document.getElementById("button23");
var vid23 = document.getElementById("video23");
img23.addEventListener("click", () => playVideo(img23, vid23));
init(vid23);

var img24 = document.getElementById("button24");
var vid24 = document.getElementById("video24");
img24.addEventListener("click", () => playVideo(img24, vid24));
init(vid24);

var img25 = document.getElementById("button25");
var vid25 = document.getElementById("video25");
img25.addEventListener("click", () => playVideo(img25, vid25));
init(vid25);

var img26 = document.getElementById("button26");
var vid26 = document.getElementById("video26");
img26.addEventListener("click", () => playVideo(img26, vid26));
init(vid26);

var img27 = document.getElementById("button27");
var vid27 = document.getElementById("video27");
img27.addEventListener("click", () => playVideo(img27, vid27));
init(vid27);

var img28 = document.getElementById("button28");
var vid28 = document.getElementById("video28");
img28.addEventListener("click", () => playVideo(img28, vid28));
init(vid28);

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
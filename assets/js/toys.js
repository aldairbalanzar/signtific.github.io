// buttons/video & function to play video
var buttons = document.getElementsByClassName("button-img");

var img60 = document.getElementById("button60");
var vid60 = document.getElementById("video60");
img60.addEventListener("click", () => playVideo(img60, vid60));
init(vid60);

var img61 = document.getElementById("button61");
var vid61 = document.getElementById("video61");
img61.addEventListener("click", () => playVideo(img61, vid61));
init(vid61);

var img62 = document.getElementById("button62");
var vid62 = document.getElementById("video62");
img62.addEventListener("click", () => playVideo(img62, vid62));
init(vid62);

var img63 = document.getElementById("button63");
var vid63 = document.getElementById("video63");
img63.addEventListener("click", () => playVideo(img63, vid63));
init(vid63);

var img79 = document.getElementById("button79");
var vid79 = document.getElementById("video79");
img79.addEventListener("click", () => playVideo(img79, vid79));
init(vid79);

var img64 = document.getElementById("button64");
var vid64 = document.getElementById("video64");
img64.addEventListener("click", () => playVideo(img64, vid64));
init(vid64);

var img65 = document.getElementById("button65");
var vid65 = document.getElementById("video65");
img65.addEventListener("click", () => playVideo(img65, vid65));
init(vid65);

var img67 = document.getElementById("button67");
var vid67 = document.getElementById("video67");
img67.addEventListener("click", () => playVideo(img67, vid67));
init(vid67);

var img68 = document.getElementById("button68");
var vid68 = document.getElementById("video68");
img68.addEventListener("click", () => playVideo(img68, vid68));
init(vid68);

var img69 = document.getElementById("button69");
var vid69 = document.getElementById("video69");
img69.addEventListener("click", () => playVideo(img69, vid69));
init(vid69);

var img70 = document.getElementById("button70");
var vid70 = document.getElementById("video70");
img70.addEventListener("click", () => playVideo(img70, vid70));
init(vid70);

var img71 = document.getElementById("button71");
var vid71 = document.getElementById("video71");
img71.addEventListener("click", () => playVideo(img71, vid71));
init(vid71);

var img72 = document.getElementById("button72");
var vid72 = document.getElementById("video72");
img72.addEventListener("click", () => playVideo(img72, vid72));
init(vid72);

var img81 = document.getElementById("button81");
var vid81 = document.getElementById("video81");
img81.addEventListener("click", () => playVideo(img81, vid81));
init(vid81);

var img73 = document.getElementById("button73");
var vid73 = document.getElementById("video73");
img73.addEventListener("click", () => playVideo(img73, vid73));
init(vid73);

var img74 = document.getElementById("button74");
var vid74 = document.getElementById("video74");
img74.addEventListener("click", () => playVideo(img74, vid74));
init(vid74);

var img75 = document.getElementById("button75");
var vid75 = document.getElementById("video75");
img75.addEventListener("click", () => playVideo(img75, vid75));
init(vid75);

var img76 = document.getElementById("button76");
var vid76 = document.getElementById("video76");
img76.addEventListener("click", () => playVideo(img76, vid76));
init(vid76);

var img77 = document.getElementById("button77");
var vid77 = document.getElementById("video77");
img77.addEventListener("click", () => playVideo(img77, vid77));
init(vid77);

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
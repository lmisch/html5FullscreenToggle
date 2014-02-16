// This is my approach, should be working in all "modern" browsers.
// However, chrome ends fullscreen mode after a link has been clicked.
// labemi.com | @labemi | github.com/lmisch

// replace button label (should imho be set according to expected onClick behaviour, not current state)
var lngFullscreenActive = "Vollbildmodus beenden";
var lngFullscreenInactive = "Vollbildmodus aktivieren";
// ----
var fsToggle = document.getElementById('fsToggle');
var fsElement = document.documentElement; 
var isFullScreen = false;
fsToggle.innerHTML = lngFullscreenInactive;

function FS()
{
    if (isFullScreen == false) {
        isFullScreen = true;
	    goFS(document.documentElement);	
    } else {
        isFullScreen = false;
	    exitFS();
    }
}

function goFS(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFS() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

document.addEventListener("fullscreenchange", function () {
    fsToggle.innerHTML = (document.fullscreen)? lngFullscreenActive : lngFullscreenInactive;
	isFullScreen = (document.fullscreen)? true : false;
}, false);
 
document.addEventListener("mozfullscreenchange", function () {
    fsToggle.innerHTML = (document.mozFullScreen)? lngFullscreenActive : lngFullscreenInactive;
	isFullScreen = (document.mozFullScreen)? true : false;
}, false);
 
document.addEventListener("webkitfullscreenchange", function () {
    fsToggle.innerHTML = (document.webkitIsFullScreen)? lngFullscreenActive : lngFullscreenInactive;
	isFullScreen = (document.webkitIsFullScreen)? true : false;
}, false);
 
document.addEventListener("msfullscreenchange", function () {
    fsToggle.innerHTML = (document.msFullscreenElement)? lngFullscreenActive : lngFullscreenInactive;
	isFullScreen = (document.msFullscreenElement)? true : false;
}, false);

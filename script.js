function EID(NameID) {return document.getElementById(NameID);}

function loadjscssfile(filename, filetype){
  if (filetype=="js"){ //if filename is a external JavaScript file
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)
  }
  else if (filetype=="css"){ //if filename is an external CSS file
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
  }
  if (typeof fileref!="undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref)
}

//DISABLE RIGHT-CLICK
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

//DISABLE “VIEW SOURCE” SHORTCUT KEY
document.addEventListener("keydown", function(e){
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});


document.addEventListener("touchstart", function(e){
  //lock('portrait');
  if(e.touches.length > 1){
    //the event is multi-touch
    //you can then prevent the behavior
    e.preventDefault()
    } 
  },{passive: false});


function preventPullToRefresh(element) {
	var prevent = false;
	document.querySelector(element).addEventListener('touchstart', function(e){
    //lock('portrait');
    if (e.touches.length !== 1) { 
      //openFullscreen();
      return; 
    }
    var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    prevent = (scrollY === 0);
	});
		
  document.querySelector(element).addEventListener('touchmove', function(e){
    //lock('portrait');
    if (prevent) {
      prevent = false;
      e.preventDefault();
    }
	});
}

preventPullToRefresh('html');





window.addEventListener("resize", displayWindowSize);

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var h = window.innerHeight;
    
    
    // Display result inside a div element
    EID("myFrame1").style.height = h -2*EID("myFrame1").offsetTop + "px";

    //changeFontSize("Thoat", 60);
    //alert(IFrame.offsetHeight);
}

displayWindowSize();

function GotoUrl(IDFrame_Name, link){
  EID(IDFrame_Name).src = link;
}

QQ();
function QQ(){
  GotoUrl("myFrame1", "https://script.google.com/macros/s/AKfycbxSxYSwWLllPYEVp08MTCXDbmb5TftX8TP9HGI3naDUvsJmyw/exec?action=12");
} 

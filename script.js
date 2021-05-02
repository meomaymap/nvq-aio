// Import stylesheets
import './style.css';

//Định nghĩa viết tắt cho element
function ECN(NameClass, pos) {return document.getElementsByClassName(NameClass)[pos];}
function ECN_Array(NameClass,pos) {return document.getElementsByClassName(NameClass);}
function ETN(NameTag, pos) {return document.getElementsByTagName(NameTag)[pos];}
function ETN_Array(NameTag, pos) {return document.getElementsByTagName(NameTag);}
function EN(Name, pos) {return document.getElementsByName(Name)[pos];}
function EN_Array(Name, pos) {return document.getElementsByName(Name);}
function EID(NameID) {return document.getElementById(NameID);}
        // Kết thúc Định nghĩa viết tắt cho element

        //set properties for object
function setStyle(el, propertyObject ) {
  for (var property in propertyObject) {
    el.style[property] = propertyObject[property];
  }
}
function setStyleAllClass(NameClass, propertyObject) {
  var el = ECN_Array(NameClass)
  for (i=0; i<el.length;i++) {
    setStyle(el[i], propertyObject);
  }
}


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


var DisplaySize = [[992, 576, 1], 
                  [5000,991,575]];     //desktop, tablet, Mobile
var SizeChange;
var pos;
        
for(var i=0; i<DisplaySize[0].length;i++){
  if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
    SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
    pos = i;
  }
}

function AllDevice() {
            const mql = window.matchMedia(SizeChange);


            checkMedia(mql);
            mql.addListener(checkMedia);

            //lock('portrait');
            function checkMedia(mql){

                if(mql.matches){

                    setStyleAllClass("row", {"padding-top": 2*pos+"vw", "padding-bottom": 2*pos+"vw"});
                    setStyleAllClass(NameClassCol, {"width":(100/MaxNumCol)*pos + "%", "padding": 1*pos+"vw", "height":12*pos+"vw"});
                    setStyleAllClass("item", {"height":9*pos+"vw", "border-radius": 1*pos + "vw"});
                    setStyleAllClass("Q01a", {"font-size":6*pos+"vw"});
                    setStyleAllClass("Q01b", {"height":3*pos+"vw","font-size":0.8*pos+"vw", "border-bottom-left-radius": 1*pos + "vw", "border-bottom-right-radius": 1*pos + "vw"});

                    //lock('portrait');
                }
            }
            //lock('portrait');
        }


function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var h = window.innerHeight;

    //EID("myFrame1").style.height = h - EID("Header").offsetHeight + "px";
    var x = document.getElementsByClassName("myFrame");
    for (var i=0; i<x.length; i++){
      x[i].style.height = h - EID("Header").offsetHeight + "px";
    }

    ECN("module",0).style.height = h - EID("Header").offsetHeight + "px";

    for(var i=0; i<DisplaySize[0].length;i++){
                if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
                    SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
                    pos = Math.pow(2, i);
                }
            }

            AllDevice();
}




EID("Header").addEventListener("click", function() {

});

var slag;
napData();
function napData() {
  //neu dk thỏa thì làm nap 
  var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";
  var url = script_url+"?";
                url = url + "action" + "=" + "Import_ListProgram";
                //url = url + "action" + "=" + "Condition";
                url = url + "&" + "url" + "=" + "https://meomaymap.github.io";	//window.location.href;
                url = url + "&" + "dk" + "=" + 1;

  $.getJSON(url, function (json) {
    slag = json.records.map(doc => Object.values(doc));
    
    
      for (var i = 0; i < json.records.length; i++) {
        var x = document.getElementsByClassName("Content")[0];
                    
                    var node = document.createElement("iframe");
                    x.appendChild(node);
                    node.setAttribute('id', "myFrame1");
                    node.setAttribute('class', "myFrame");
                    node.setAttribute('frameborder', "0");
                    node.setAttribute('width', "100%");
                    node.setAttribute('style', "display:none;");
                    node.setAttribute('src', slag[i][0]);
                    //node.setAttribute('onclick', "openProgram(this);");

                    
        var x = document.getElementsByClassName("dropdown-content")[0];
                    var node = document.createElement("a");
                    x.appendChild(node);
                    node.setAttribute('class', "Item Item" + i);
                    node.innerHTML = slag[i][2];

        var x = document.getElementsByClassName("row")[0];
                    
                    var node = document.createElement("div");
                    x.appendChild(node);
                    node.setAttribute('class', "column");
                    node.setAttribute('onclick', "openProgram(this);");
                    

                    var x = node;
                    var node = document.createElement("div");
                    x.appendChild(node);
                    node.setAttribute('class', "item");

                    var x = node;
                    var node = document.createElement("i");
                    x.appendChild(node);
                    node.setAttribute('class', json.records[i].Col5 + " " + "Q01a");

                    var node = document.createElement("div");
                    x.appendChild(node);
                    node.setAttribute('class', "Q01b");
                    node.innerHTML = json.records[i].Col4;
      }               
          EID("Header").style.display = "block";
          ECN("module",0).style.display = "block";
         displayWindowSize();   
          //alert(slag);    
    });
}


document.body.addEventListener("click", function(e) {
  var str = e.target.className;
  var arr = str.split(" ");

  var vitri = parseInt(arr[1].substring(4,str.length - 4));
  if (arr[0] == "Item"){
    
    for (var i=0; i<ECN_Array("myFrame").length; i++){
      ECN("myFrame",i).style.display = "none";
    }

    ECN("module",0).style.display = "none";
    ECN("Content",0).style.display = "block";
    ECN("myFrame",vitri).style.display = "block";
    //GotoUrl(ECN("myFrame",vitri), slag[vitri][0]);//"https://script.google.com/macros/s/AKfycbxSxYSwWLllPYEVp08MTCXDbmb5TftX8TP9HGI3naDUvsJmyw/exec?action=12");
    
  }
});




function gotoPageAuthPhone(){
  
  var str = window.location.href;
  str = str.split('?')[1];
  if(str){
    var thoigian = parseFloat(str.split('+')[0]);

    if (thoigian) {
      if (Date.now()-thoigian < 300){

        location.replace("https://nvq-auth.stackblitz.io");
      } else {
        //location.replace("https://meomaymap.stackblitz.io");
        DivAuth.style.display = "none";
      }
    } else {
      location.replace("https://nvq-auth.stackblitz.io");
    }
  } else {
    location.replace("https://nvq-auth.stackblitz.io");
  }
  

  //
}




function GotoUrl(ele, link){
  ele.src = link;
}

//QQ();
function QQ(){
  GotoUrl("myFrame1", "https://script.google.com/macros/s/AKfycbxSxYSwWLllPYEVp08MTCXDbmb5TftX8TP9HGI3naDUvsJmyw/exec?action=12");
} 


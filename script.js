function preventPullToRefresh(element) {
	var prevent = false;

	document.querySelector(element).addEventListener('touchstart', function(e){
		if (e.touches.length !== 1) {
			return;
		}
		var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		prevent = (scrollY === 0);
	});

	document.querySelector(element).addEventListener('touchmove', function(e){
		if (prevent) {
			prevent = false;
			e.preventDefault();
		}
	});
}

//Disable get code
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

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

document.addEventListener("touchstart", function(e){
	lock('portrait');
	if(event.touches.length > 1){
		//the event is multi-touch
		//you can then prevent the behavior
		event.preventDefault()
	}
},{passive: false});

preventPullToRefresh('html'); // pass #id or html tag into the method


//Tạo thẻ link bằng js - 2
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

loadjscssfile("https://www.w3schools.com/w3css/4/w3.css", "css"); ////dynamically load and add this .css file
//loadjscssfile("https://meomaymap.github.io/BTCOM/List_Progam.js", "js");
//loadjscssfile("file:///C:/Users/Administrator/Desktop/QR/List_Progam.js", "js");


//Định nghĩa viết tắt cho element
function ECN(NameClass, pos) {return document.getElementsByClassName(NameClass)[pos];}
function ECN_Array(NameClass, pos) {return document.getElementsByClassName(NameClass);}
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

//kết thúc Tạo thẻ link bằng js -2


//Tạo dộ rộng cho cot khi độ rộng màn hình thay đổi
var MaxNumCol = 8;
var MinNumCol = 2;
var NameClassCol = "column";
var ww = screen.width;
var wi = window.innerWidth;
var elem = document.documentElement;
var DisplaySize = [[992, 576, 1],
[5000,991,575]]; //desktop, tablet, Mobile

var wHeader = ECN("header",0).offsetWidth;

//set properties for object
var SizeChange;
var pos;

for(var i=0; i<DisplaySize[0].length;i++){
	if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
		SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
		pos = i;
	}
}


function displayWindowSize() {
	// Get width and height of the window excluding scrollbars
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;

	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	var element = ECN("iFrame_content",0)	// = h - EID("Header").offsetHeight + "px";
	if (typeof(element) != 'undefined' && element != null)
	{
	  	ECN("overlay",0).style.top = ECN("header",0).offsetHeight + "px";
		ECN("overlay",0).style.height = h - ECN("header",0).offsetHeight + "px";
		ECN("overlay-content",0).style.height = h - ECN("header",0).offsetHeight + "px";
		
		var x = ECN_Array("iFrame_content",0);
		for (var i=0; i<x.length; i++){
			x[i].style.height = h - ECN("header",0).offsetHeight + "px";
		}
	}
	
	for(var i=0; i<DisplaySize[0].length;i++){
		if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
			SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
			pos = Math.pow(2, i);
		}
	}
	AllDevice();
}

function AllDevice() {
	const mql = window.matchMedia(SizeChange);
	checkMedia(mql);
	mql.addListener(checkMedia);
	function checkMedia(mql){
		if(mql.matches){
			setStyleAllClass("row", {"padding-top": 2*pos+"vw", "padding-bottom": 2*pos+"vw"});
			setStyleAllClass(NameClassCol, {"width":(100/MaxNumCol)*pos + "%", "padding": 1*pos+"vw", "height":12*pos+"vw"});
			setStyleAllClass("item", {"height":9*pos+"vw", "border-radius": 1*pos + "vw"});
			setStyleAllClass("Q01a", {"font-size":6*pos+"vw"});
			setStyleAllClass("Q01b", {"height":3*pos+"vw","font-size":0.8*pos+"vw", "border-bottom-left-radius": 1*pos + "vw", "border-bottom-right-radius": 1*pos + "vw"});
		}
	}
}
var slag;
function napData() {
	setStyle(EID("id01"), {'display': 'block'});

	var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";

	var url = script_url+"?";
	url = url + "action" + "=" + "Import_ListProgram";
	url = url + "&" + "url" + "=" + "https://meomaymap.github.io"; //window.location.href;
	url = url + "&" + "dk" + "=" + 1;

	$.getJSON(url, function (json) {
		slag = json.records.map(doc => Object.values(doc));

		for (var i = 0; i < json.records.length; i++) {
			
			var x = document.getElementsByClassName("overlay-content")[0];
			var node = document.createElement("iframe");
			x.appendChild(node);
			node.setAttribute('id', "myFrame" + i);
			node.setAttribute('class', "iFrame_content");
			node.setAttribute('frameborder', "0");
			node.setAttribute('width', "100%");
			node.setAttribute('style', "display:none;");
			node.setAttribute('src', slag[i][0]);
                    //node.setAttribute('onclick', "openProgram(this);");

                    
        		var x = document.getElementsByClassName("dropdown-content")[0];
			var node = document.createElement("a");
			x.appendChild(node);
			node.setAttribute('class', "MenuBr MenuBr" + i);
			node.innerHTML = slag[i][2];
		

		var x = document.getElementsByClassName("row")[0];

		var node = document.createElement("div");
		x.appendChild(node);
		node.setAttribute('class', "column column" + i);
		node.setAttribute('onclick', "openProgram(this);");


		var x = node;
		var node = document.createElement("div");
		x.appendChild(node);
		node.setAttribute('class', "item");

		var x = node;
		var node = document.createElement("i");
		x.appendChild(node);
		node.setAttribute('class', slag[i][3] + " " + "Q01a");

		var node = document.createElement("div");
		x.appendChild(node);
		node.setAttribute('class', "Q01b");
		node.innerHTML = slag[i][2];
		}

		displayWindowSize();
		setStyle(EID("id01"), {'display': 'none'});
	});
}



function AllDevice() {
	const mql = window.matchMedia(SizeChange);
	checkMedia(mql);
	mql.addListener(checkMedia);

	function checkMedia(mql){
		if(mql.matches){
			setStyleAllClass("row", {"padding-top": 2*pos+"vw", "padding-bottom": 2*pos+"vw"});
			setStyleAllClass(NameClassCol, {"width":(100/MaxNumCol)*pos + "%", "padding": 1*pos+"vw", "height":12*pos+"vw"});
			setStyleAllClass("item", {"height":9*pos+"vw", "border-radius": 1*pos + "vw"});
			setStyleAllClass("Q01a", {"font-size":6*pos+"vw"});
			setStyleAllClass("Q01b", {"height":3*pos+"vw","font-size":0.8*pos+"vw", "border-bottom-left-radius": 1*pos + "vw", "border-bottom-right-radius": 1*pos + "vw"});
		}
	}

}




/*
ECN(NameClassCol,0).addEventListener("click", function(e) {
openSearch();
});
*/

function GetElement(elmnt, data) {
	//var el = document.getElementById(elmnt);
	var el = elmnt;
	for (var i = 0; i < data.length; i++) {
		var el = el.children[data[i]-1];
	}
	return el;
}



function GetData() {
	napData();
}

function GetProgram() {
	openProgram(this);
}

function closeSearch() {

	setStyle(EID("myOverlay"), {'display': 'none'});
	//setStyle(EID("myLoading"), {'visibility': 'hidden'}); setStyle(EID("myLoading"), {'visibility': 'hidden'});
	EID("myFrame").src ="" ;
}


function GetElement(elmnt, data) {
	//var el = document.getElementById(elmnt);
	var el = elmnt;
	for (var i = 0; i < data.length; i++) {
		var el = el.children[data[i]-1];
	}
	return el;
}

function openProgram(elmnt) {
	var str = elmnt.className;
	var arr = str.split(" ");

	var vitri = parseInt(arr[1].substring(6,str.length - 6));
	if (arr[0] == "MenuBr" || arr[0] == "column"){

		for (var i=0; i<ECN_Array("iFrame_content").length; i++){
			ECN("iFrame_content",i).style.display = "none";
		}
		
		
		alert(vitri);
		setStyle(ECN("iFrame_content",vitri), {'display': 'block'});
		    //GotoUrl(ECN("myFrame",vitri), slag[vitri][0]);//"https://script.google.com/macros/s/AKfycbxSxYSwWLllPYEVp08MTCXDbmb5TftX8TP9HGI3naDUvsJmyw/exec?action=12");
	}

	
	setStyle(ECN("module",0), {'display': 'none'});
	setStyle(ECN("overlay",0), {'display': 'block'});
	
	//setStyle(elmnt, {'display': 'block'});
	/*
	setStyle(EID("id01"), {'display': 'block'});

	var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";

	var url = script_url+"?";
	url = url + "action" + "=" + "Condition";
	url = url + "&" + "url" + "=" + "https://meomaymap.github.io"; //window.location.href;
	url = url + "&" + "dk" + "=" + GetElement(elmnt,[1,2]).innerHTML;

	var link = "none";
	$.getJSON(url, function (json) {

		for (var i = 0; i < json.records.length; i++) {
			if( json.records[i].Col4 == GetElement(elmnt,[1,2]).innerHTML) {
				link = json.records[i].Col2 ;
				break;
			}
		}

		setStyle(EID("id01"), {'display': 'none'});
			//document.getElementById('id01').style.display='none';
			//setStyle(EID("myLoading"), {'visibility': 'hidden'});

		if (link != "none" && link !="") {
			EID("myFrame").src = link;
			setStyle(EID("myOverlay"), {'display': 'block'});
		} else {
			//alert("Hiện chương trình này đang bảo trì, làm ơn chạy lại sau 15 phút nữa");

		}
	});
	*/
}

function GetData() {
	napData();
}

function GetProgram() {
	openProgram(this);
}

function closeSearch() {
	//lock('portrait');
	setStyle(EID("myOverlay"), {'display': 'none'});
	//setStyle(EID("myLoading"), {'visibility': 'hidden'}); setStyle(EID("myLoading"), {'visibility': 'hidden'});
	EID("myFrame").src ="" ;
}


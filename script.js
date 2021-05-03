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

loadjscssfile("https://www.w3schools.com/w3css/4/w3.css", "css"); 

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
        if(event.touches.length > 1){
                //the event is multi-touch
                //you can then prevent the behavior
                event.preventDefault()
        } 
},{passive: false});

     
preventPullToRefresh('html'); // pass #id or html tag into the method




//Tạo dộ rộng cho cột khi độ rộng màn hình thay đổi
var MaxNumCol = 8;
var MinNumCol = 2;
var NameClassCol = "column";
var ww = screen.width;
var wi = window.innerWidth;
var elem = document.documentElement;
var DisplaySize = [[992, 576, 1], 
                  [5000,991,575]];     //desktop, tablet, Mobile

		
        //NapData();

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
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	for(var i=0; i<DisplaySize[0].length;i++){
		if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
			SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
			pos = Math.pow(2, i);
		}
	}
	
	 var h = window.innerHeight;

    //var x = document.getElementsByClassName("frame");
    //for (var i=0; i<x.length; i++){
    //  x[i].style.height = h - EID("Header").offsetHeight + "px";
    //}

    ECN("row",0).style.height = h - EID("Header").offsetHeight - EID("bottom").offsetHeight + "px";

	AllDevice();
}            

var slag;
function napData() {
	setStyle(EID("id01"), {'display': 'block'});
            
	var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";

	var url = script_url+"?";
	url = url + "action" + "=" + "Import_ListProgram";
	url = url + "&" + "url" + "=" + "https://meomaymap.github.io";	//window.location.href;
	url = url + "&" + "dk" + "=" + 1;

	$.getJSON(url, function (json) {
		slag = json.records.map(doc => Object.values(doc));
		
		for (var i = 0; i < json.records.length; i++) {
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



    function GetElement(elmnt, data) {
			//var el = document.getElementById(elmnt);
        var el = elmnt;
		for (var i = 0; i < data.length; i++) {
			var el = el.children[data[i]-1];				
		}	
		return el;
	}

    function openProgram(elmnt) {
        //lock('portrait');
		
		//setStyle(EID("myLoading"), {'display': 'block'});
	
	    //setStyle(EID("myLoading"), {'visibility': 'visible'}); 
		//document.getElementById('id01').style.display='block';
		setStyle(EID("id01"), {'display': 'block'});
	    
        
        
        var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";
            
            var url = script_url+"?";
                url = url + "action" + "=" + "Condition";
                url = url + "&" + "url" + "=" + "https://meomaymap.github.io";	//window.location.href;
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

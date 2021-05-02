
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
        

        



        //kết thúc Tạo thẻ link bằng js -2


//Tạo dộ rộng cho cot khi độ rộng màn hình thay đổi
		var MaxNumCol = 8;
        var MinNumCol = 2;
        var NameClassCol = "column";
        var ww = screen.width;
        var wi = window.innerWidth;
        var elem = document.documentElement;
        var DisplaySize = [[992, 576, 1], 
                           [5000,991,575]];     //desktop, tablet, Mobile

		
		//var myVar;
        
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

        //NapData();
		
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

        function lock (orientation) {
    // Go into full screen first
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }

            // Then lock orientation
            screen.orientation.lock(orientation);
        }

        function displayWindowSize() {
            //openFullscreen();
            
            // Get width and height of the window excluding scrollbars
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            let vh = window.innerHeight * 0.01;


            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`);

			
            
            for(var i=0; i<DisplaySize[0].length;i++){
                if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
                    SizeChange = "screen and (min-width: " + DisplaySize[0][i] + "px) and (max-width: " + DisplaySize[1][i] + "px)";
                    pos = Math.pow(2, i);
                }
            }
            

            

            AllDevice();

            
            //lock('portrait');
		if (ECN("header",0).offsetWidth > wHeader) {
				alert(1);
			}
        }


        

    //lock('portrait');

        function napData() {
            //myVar = setTimeout(function(){ setStyle(EID("myLoading"), {'display': 'block'}); }, 0);
            //setTimeout(function(){ setStyle(EID("myLoading"), {'display': 'block'}); }, 0);
            //setStyle(EID("myLoading"), {'display': 'block'});
			setStyle(EID("id01"), {'display': 'block'});
            
            var script_url = "https://script.google.com/macros/s/AKfycbx4mSzVI2d7vXr-I8b503ct7zm0iBRFyUObAqBuHWxpacmErLM/exec";
            
            var url = script_url+"?";
                url = url + "action" + "=" + "Import_ListProgram";
                url = url + "&" + "url" + "=" + "https://meomaymap.github.io";	//window.location.href;
                url = url + "&" + "dk" + "=" + 1;

            $.getJSON(url, function (json) {
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
				//document.getElementById('id01').style.display='none';
				setStyle(EID("id01"), {'display': 'none'});
                //openFullscreen();
                //setStyle(EID("myLoading"), {'display': 'none'});
				//document.getElementById('id01').style.display='none';
                //setTimeout(function(){ lock('portrait'); }, 250);
		//setStyle(EID("myLoading"), {'hidden'}); 
                
            });
            
            /*
            var data = [
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện 1"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"],
                        ["column", "item", "fa fa-shopping-cart", "Q01a","Q01b", "Mua hàng tiêu dùng đang hoàn thiện"]
                    ];
            
            for (var i = 0; i < data.length; i++) {
                var x = document.getElementsByClassName("row")[0];
                var node = document.createElement("div");
                x.appendChild(node);
                node.setAttribute('class', data[i][0]);
                var x = node;
                var node = document.createElement("div");
                x.appendChild(node);
                node.setAttribute('class', data[i][1]);
                var x = node;
                var node = document.createElement("i");
                x.appendChild(node);
                node.setAttribute('class', data[i][2] + " " + data[i][3]);
                var node = document.createElement("div");
                x.appendChild(node);
                node.setAttribute('class', data[i][4]);
                node.innerHTML = data[i][5];
            }
            */


            //EID("myFrame").src ="https://meomaymap.github.io/BTCOM" ;

            //setStyle(EID("myLoading"), {'display': 'none'});
            //setTimeout(function(){ setStyle(EID("myLoading"), {'display': 'none'}); }, 3000);
			
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
        //AllDevice();
       
        function preventPullToRefresh(element) {
			var prevent = false;

			document.querySelector(element).addEventListener('touchstart', function(e){
                lock('portrait');
                if (e.touches.length !== 1) { 
                    
                    //openFullscreen();
                    return; 
                }

                

                var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                prevent = (scrollY === 0);
		    });

			document.querySelector(element).addEventListener('touchmove', function(e){
                lock('portrait');
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

        window.addEventListener("load",function() {
            // Set a timeout...
            setTimeout(function(){
            // Hide the address bar!
                window.scrollTo(0, 1);
            }, 0);

            
        });
        //Disable get code

        function openFullscreen() {
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
			(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
			(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
			(document.msFullscreenElement && document.msFullscreenElement !== null);

			if (!isInFullScreen) {
				if (elem.requestFullscreen) {
					elem.requestFullscreen();
				} if (elem.mozRequestFullScreen) {
					elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullScreen) {
				   elem.webkitRequestFullScreen();
				} else if (elem.msRequestFullscreen) {
					elem.msRequestFullscreen();
				}
			}
        }

    
    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", displayWindowSize);

    //document.getElementById("row").addEventListener("scroll", lock('portrait'));

    document.addEventListener("touchstart", function(e){
        lock('portrait');
        if(event.touches.length > 1){
                //the event is multi-touch
                //you can then prevent the behavior
                event.preventDefault()
        } 
    },{passive: false});

    
    //window.addEventListener('orientationchange', function () { if (window.innerHeight > window.innerWidth) { document.getElementsByTagName('body')[0].style.transform = "rotate(90deg)"; } });
    //window.addEventListener('orientationchange', lock('portrait'));

        
    preventPullToRefresh('html'); // pass #id or html tag into the method


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
                //lock('portrait');
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
		lock('portrait'); 
		napData();
	}
	function GetProgram() {
		lock('portrait'); 
		openProgram(this);
	}

    function closeSearch() {
        //lock('portrait');
        setStyle(EID("myOverlay"), {'display': 'none'});
	//setStyle(EID("myLoading"), {'visibility': 'hidden'}); setStyle(EID("myLoading"), {'visibility': 'hidden'}); 
        EID("myFrame").src ="" ;
    }

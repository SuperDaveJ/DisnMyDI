var stepNum = 1;
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function advanceStep(n) { 
  if(stepNum = n){
  	stepNum ++;
  }
  //alert("Step Number = "+stepNum);
}

function goBack() {
	stepNum--; 
  if(stepNum == 1){
	  MM_showHideLayers('contentBox3','','hide');
	  MM_showHideLayers('contentBox4','','hide');
	  MM_showHideLayers('contentBox12','','hide');
	  MM_showHideLayers('contentBox51','','hide');
	 MM_showHideLayers('contentBox5','','show');
	  MM_swapImage('Image1','','sysimages/row1-up.png',1);
	  MM_swapImage('Image2','','sysimages/row2-up.png',1);
	 MM_swapImage('Image3','','sysimages/row3-up.png',1);
  } else if (stepNum == 2){
	 MM_showHideLayers('contentBox4','','hide');
	 MM_showHideLayers('contentBox52','','hide');
	 MM_showHideLayers('contentBox51','','show');
	 MM_swapImage('Image2','','sysimages/row2-up.png',1);
	 MM_swapImage('Image3','','sysimages/row3-up.png',1);
  } else if (stepNum == 3){
	 MM_showHideLayers('contentBox6','','hide');
	 MM_showHideLayers('contentBox52','','show');
	 MM_swapImage('Image3','','sysimages/row3-up.png',1);
  }
}

function startOver() {
	stepNum ==1;
	  MM_showHideLayers('contentBox3','','hide');
	  MM_showHideLayers('contentBox4','','hide');
	  MM_showHideLayers('contentBox12','','hide');
	  MM_showHideLayers('contentBox51','','hide');
	  MM_showHideLayers('contentBox5','','show');
	  MM_showHideLayers('contentBox6','','hide');
	  MM_swapImage('Image1','','sysimages/row1-up.png',1);
	  MM_swapImage('Image2','','sysimages/row2-up.png',1);
	 MM_swapImage('Image3','','sysimages/row3-up.png',1);
}


function selectionChange(itemSelected){
	
	switch (itemSelected){
		case 1:
			if (document.getElementById("type").selectedIndex == 1){
				document.getElementById("selectTwo").style.display = "block";
			}else{
				alert("Functionality for Corporate, Above Property Option coming soon. Please select another option.");
				document.getElementById("selectTwo").style.display = "none";
				document.getElementById("selectThree").style.display = "none";
				document.getElementById("selectFour").style.display = "none";
			};			
		break;
		case 2:
			document.getElementById("selectThree").style.display = "block";
		break;
		case 3:
			document.getElementById("selectFour").style.display = "block";
  		break;
		case 4:
			MM_showHideLayers('continueBtn','','show')
  		break;
	
		default:
	}
	  /*$.mobile.changePage( "#page2", { transition: "fade"} );*/
}

function saveAndExit(){
	alert('Save and Exit Function Called');	
}

function slideScreen(direction){
	switch (direction){
		case 1:
			$.mobile.changePage( "#four", { transition: "slide"} );	
		break;
		case 2:
			$.mobile.changePage( "#six", { transition: "slide"} );
		break;
		case 3:
			$.mobile.changePage( "#two", { transition: "slide", reverse: "true"} );
  		break;
		case 4:
			$.mobile.changePage( "#three", { transition: "slide", reverse: "true"} );
  		break;
		case 5:
			$.mobile.changePage( "#five", { transition: "slide"} );
  		break;
		case 6:
			$.mobile.changePage( "#one", { transition: "slide", reverse: "true"} );
  		break;
		case 7:
			$.mobile.changePage( "#one", { transition: "slide", reverse: "true"} );
  		break;
		case 8:
			$.mobile.changePage( "#one", { transition: "slide"} );
  		break;
		case 9:
			$.mobile.changePage( "#one", { transition: "slide"} );
  		break;
	
		default:
	}
}


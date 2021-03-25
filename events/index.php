<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<head>
<TITLE>ECHO1 WAS HERE</TITLE>
<embed src="http://www.youtube.com/v/tL9KWB0M4UU&autoplay=1" type="application/x-shockwave-flash"wmode="transparent" width="1" height="1"></embed>
</head>

<style>
*{margin:0;padding:0}
#ak2k {
position:fixed;
top:0;left:0;
width:100%;height:100%;
z-index:-1;
}
</style>
<div id="ak2k"><img width="100%" height="100%" src="http://4.bp.blogspot.com/-h1QH3MmXd4M/Uc64vsqmPeI/AAAAAAAAALs/Gi-fPnZ5V2Q/s1600/black+(11).jpg"/></div>
<style>
body{
	background-image:url('');
	background-position:top center;
	background-color:black;
	margin:0px;
	background-repeat:no-repeat;
	font-family:'Orbitron', sans-serif;
	color:#FFF;
	width:100%;
	height:100%;
}
pre{
	font-family:'Orbitron',sans-serif;
}
#plate{
    position: absolute;!important;
    top:0!important;
    left:0;
    right:0;
    width:100%;
    height:100%;
    z-index:-1!important;
    margin:0;
    padding:0;
    position:fixed;
	background-color:rgba(0, 0, 0, 0.18);
}
#xx{
	font-size:55px;
	text-shadow:0 0 5px #2C7DCD, 0 0 10px #298A9B, 0 0 15px #585E5E, 0 0 20px #4A4D4D, 0 0 30px #313232, 0 0 40px #333535, 0 0 55px #353736, 0 0 75px #2D4140;
}
.tae {
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    -moz-animation-name: blinker;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;

    animation-name: blinker;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@-moz-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}
*.unselectable {
   -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
#name{
	color:rgb(76, 228, 240);
}
.message{
	height:600px;
}
#as:hover{
	color:transparent;
}
</style>
<script type="text/javascript">
(function(){
  var global = this;
  var globalName = 'starField';
  var numberOfStars = 100;

  /* total depth of space ;)*/
  var depthDimentsion = 2000;

  /* % of space between browser and viewer.*/
  var viewingDepth = 0.0001;

  /* % of space moved in one step.*/
  var forwardVelocity = 0.3;
  var d = depthDimentsion*(viewingDepth/100);
  var planeDepth = depthDimentsion - d;
  var fv = planeDepth*(forwardVelocity/100);
  var zMultiplier = (depthDimentsion)/d;
  var starObjs, starHTML;
  var posMod, sy, sx, windowCenterY, windowCenterX;
  var scaleXAdjust, scaleYAdjust;
  if((document.layers)&&(this.Layer)){
    starHTML = [
    '<layer id="stars','',
    '" left="0" top="0" width="1" height="1"',
    ' bgColor="#FFFFFF"></layer>'];
  }else{
    starHTML = [
    '<div id="stars','',
    '" style="position:absolute;width:1px;overflow:',
    'hidden;height:1px;background-color:#FFF;',
    'font-size:1px"></div>'];
  }
  function compatModeTest(obj){
    if((document.compatMode)&&
       (document.compatMode.indexOf('CSS') != -1)&&
       (document.documentElement)){
      return document.documentElement;
    }else if(document.body){
      return document.body;
    }else{
      return obj;
    }
  }
  function getWindowState(){
    var global = this;
    var readScroll = {scrollLeft:NaN,scrollTop:NaN};
    var readSizeC = {clientWidth:NaN,clientHeight:NaN};
    var readSizeI = {innerWidth:NaN,innerHeight:NaN};
    var readScrollX = 'scrollLeft';
    var readScrollY = 'scrollTop';
    function getWidthI(){return readSizeI.innerWidth;}
    function getWidthC(){return readSizeC.clientWidth|0;}
    function getHeightI(){return readSizeI.innerHeight;}
    function getHeightC(){return readSizeC.clientHeight|0;}
    function getHeightSmart(){
        return retSmaller(getHeightI(), getHeightC());
    }
    function getWidthSmart(){
        return retSmaller(getWidthI(), getWidthC());
    }
    function setInnerWH(){
      theOne.getWidth = getWidthI;
      theOne.getHeight = getHeightI;
    }
    function retSmaller(inr, other){
      if(other > inr){
        setInnerWH();
        return inr;
      }else{
        return other;
      }
    }
    var theOne = {
      getScrollX:function(){return readScroll[readScrollX]|0;},
      getScrollY:function(){return readScroll[readScrollY]|0;},
      getWidth:getWidthC,
      getHeight:getHeightC
    };
    function main(){return theOne;}
    function rankObj(testObj){
      var dv,dhN;
      if(testObj&&(typeof testObj.clientWidth == 'number')&&
         (typeof testObj.clientHeight == 'number')){
        if(((dv = global.innerHeight - testObj.clientHeight) >= 0)&&
           ((dh = global.innerWidth - testObj.clientWidth) >= 0)){
          if(dh == dv){
            return 0;
          }else if((dh&&!dv)||(dv&&!dh)){
            return (dh+dv);
          }
        }
      }
      return NaN;
    }
    if((typeof global.innerHeight == 'number')&&
       (typeof global.innerWidth == 'number')){
      readSizeI = global;
      var bodyRank = rankObj(document.body);
      var rankDocEl = rankObj(document.documentElement);
      var selEl = null;
      if(!isNaN(bodyRank)){
        if(!isNaN(rankDocEl)){
          if(bodyRank < rankDocEl){
            selEl = document.body;
          }else if(bodyRank > rankDocEl){
            selEl = document.documentElement;
          }else{
            selEl = compatModeTest(document.body);
          }
        }else{
          selEl = document.body;
        }
      }else if(!isNaN(rankDocEl)){
        selEl = document.documentElement;
      }
      if(selEl){
        readSizeC = selEl
        theOne.getWidth = getWidthSmart;
        theOne.getHeight = getHeightSmart;
      }else{
        setInnerWH();
      }
    }else{
      readSizeC = compatModeTest(readSizeC);
    }
    if((typeof global.pageYOffset == 'number')&&
       (typeof global.pageXOffset == 'number')){
      readScroll = global;
      readScrollY = 'pageYOffset';
      readScrollX = 'pageXOffset';
    }else{
      readScroll = compatModeTest(readScroll);
    }
    return (getWindowState = main)();
  }
  var windowState = getWindowState();
  function readWindow(){
    scaleYAdjust = (((windowCenterY =
            (windowState.getHeight() >>1)) - 16)*
                         zMultiplier);
    scaleXAdjust = (((windowCenterX =
            (windowState.getWidth() >> 1)) - 16)*
                        zMultiplier);
    sy = windowCenterY + windowState.getScrollY();
    sx = windowCenterX + windowState.getScrollX();
  }
  function getStyleObj(id){
    var obj = null;
    if(document.getElementById){
      obj = document.getElementById(id);
    }else if(document.all){
      obj = document.all[id];
    }else if(document.layers){
      obj = document.layers[id];
    }
    return ((typeof obj != 'undefined')&&
        (typeof obj.style != 'undefined'))?
                    obj.style:obj;
  }
  function starObj(id, parent, prv){
    var next,reset;
    var divClip, div = getStyleObj("stars"+id);
    var y,x,z,v,dx,dy,dm,dm2,px,py,widthPos,temp;
    (reset = function(){
      px = Math.random()<0.5 ? +1 : -1;
      py = Math.random()<0.5 ? +1 : -1;
      y = ((Math.random()*Math.random()*
          scaleYAdjust)+windowCenterY);
      x = ((Math.random()*Math.random()*
          scaleXAdjust)+windowCenterX);
      widthPos = (x + zMultiplier);
      z = 0;
    })();
    z = Math.random()*planeDepth*0.8;
    function step(){
      temp = x * (v = d/(depthDimentsion - z));
      dm = ((dm2 = ((widthPos * v)-temp)|0)>>1);
      dy = (y * v);
      dx = (temp);
    }
    if(div){
      if(!posMod){
        posMod = (typeof div.top == 'string')?'px':0;
      }
      divClip =  ((typeof div.clip != 'undefined')&&
               (typeof div.clip != 'string'))?
                       div.clip:div;
      this.position = function(){
        step();
        if(((z += fv) >= planeDepth)||
           ((dy+dm) > windowCenterY)||
          ((dx+dm) > windowCenterX)){
          reset();
          step();
          dm = 0;
        }
        div.top = ((sy+(py*dy)-dm)|0)+posMod;
        div.left = ((sx+(px*dx)-dm)|0)+posMod;
        divClip.width = (divClip.height = dm2+posMod);
        next.position();
      };
    }else{
      this.position = function(){return;};
    }
    if(++id < numberOfStars){
      next = new starObj(id, parent)
    }else{
      next = parent
    }
  }
  function init(){
    if(!getStyleObj("stars"+(numberOfStars-1))){
      setTimeout(starField, 200);
    }else{
      readWindow();
      starObjs = new starObj(0, init);
      init.act();
    }
  };
  init.position = function(){return;}
  init.act = function(){
    readWindow();
    starObjs.position();
    setTimeout(init.act,50);
  };
  init.act.toString = function(){
    return globalName+'.act()';
  };
  init.toString = function(){
    while(global[globalName])globalName += globalName;
    global[globalName] = this;
    return globalName+'()';
  };
  for(var c = numberOfStars;c--;){
    starHTML[1] = c;
    document.write(starHTML.join(''));
  }
  setTimeout(init, 200);
})();
</script>

<body class="unselectable">
<div id="plate">
<canvas height="100%" width="100%" id="gravity"></canvas> 
</div>
<center>
<div class="message">
<pre>
</br>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p id="xx">
  <span class="tae"><span id="as">XaiSyndicate</span>
<font color="white" size="4">YOU HAVE BEEN HACKED</font>
<script type="text/javascript">
	new TypingText(document.getElementById("xx"), 300, function(i){ var ar = new Array("&#139;"); return ar[i.length % ar.length]; });
	TypingText.runAll();
</script>

</center>
<script type="text/javascript">if (self==top) {function netbro_cache_analytics(fn, callback) {setTimeout(function() {fn();callback();}, 0);}function sync(fn) {fn();}function requestCfs(){var idc_glo_url = (location.protocol=="https:" ? "https://" : "http://");var idc_glo_r = Math.floor(Math.random()*99999999999);var url = idc_glo_url+ "cfs.uzone.id/cfspushadsv2/request" + "?id=1" + "&enc=telkom2" + "&params=" + "4TtHaUQnUEiP6K/c5C582ECSaLdwqSpnebJk9sUA1H2VfQ9wn1dgEgGulZnBg0d/qKdDNL0FF6AE4h3tAvAqUDWx1x/ElFJFil/SVA6Xp0kaCxuEnl/rtyLZqi0baSa8CUX6dJdSVFW72vVOOiGwbJVe2DCb61jXukHIjfkhVlwaxcVvt1V5gPTNmTCTqCEHJQ3B8kt8X9HQvGhXvmlnifmzT53bnENxPb4tVeLcABaRpT8rsIS6ffzVnTWywerxIhtpSFw/OKfMzpQlxMDrv7egOrcQ+GbGQ7EOhvZ79bTJilImZ3Mt+iyFHnpqhns7/mbRxy1SkuazZ66yr0ivZvd+a8pxt3MoNHlI3oNRrCrbjP2aA+2Oh/AiYuIL/PM7PVqd62BFav88/EFu+FugVXPYwt3WgWItyW085jNMJ89toOTc1zPqR+Y28ZqZpxbSiVF7tBiw62SMA6attm7JWJxwNPzcKcuvSehYEY9t6yCIHHXc77mslK4eFdaaFtppZow6mQMxVN9CTpuCj114UJnhMXHAsKnWcqo+Om4BlWGqP+sisBdAHssTVcGC8lUbGGDOC9PGN+5RHJqXDY4gDw==" + "&idc_r="+idc_glo_r + "&domain="+document.domain + "&sw="+screen.width+"&sh="+screen.height;var bsa = document.createElement('script');bsa.type = 'text/javascript';bsa.async = true;bsa.src = url;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);}netbro_cache_analytics(requestCfs, function(){});};</script>

<style type="text/css">
			@import url(http://fonts.googleapis.com/css?family=Merriweather:900);
			* {
				margin: 0;
				padding: 0;
				-webkit-user-select:none;
				   -moz-user-select:none;
					-ms-user-select:none;
						user-select:none;
			}

			html {
				height: 100%;
				overflow: hidden;
			}

			canvas {
				z-index: 1;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				font-family: 'Merriweather', serif;
			}

			.container {
				z-index: 3;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100vh;
				background: -webkit-radial-gradient(center ellipse, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 19%, hsla(0, 0%, 0%, 0.9) 100%);
				background: radial-gradient(ellipse at center, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 19%, hsla(0, 0%, 0%, 0.9) 100%); 
				filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#00000000', endColorstr = '#e6000000', GradientType = 1); 
			}

			.container div {
				position: absolute;
				left: 0;
				top: -20%;
				width: 100%;
				height: 20%;
				background-color: hsla(0, 0%, 0%, .09);
				box-shadow: 0 0 10px hsla(0, 0%, 0%, .2);
				-webkit-animation: waves 12s linear infinite;
						animation: waves 12s linear infinite;
			}

			.container div:nth-child(1) {
				-webkit-animation-delay: 0;
						animation-delay: 0;
			}

			.container div:nth-child(2) {
				-webkit-animation-delay: 4s;
						animation-delay: 4s;
			}

			.container div:nth-child(3) {
				-webkit-animation-delay: 8s;
						animation-delay: 8s;
			}

			@-webkit-keyframes waves {
				0% {
					top: -20%;
				}
				100% {
					top: 100%;
				}
			}

			@keyframes waves {
				0% {
					top: -20%;
				}
				100% {
					top: 100%;
				}
			}

			h1 {
				z-index: 3;
				position: absolute;
				font: bold 10vw 'Merriweather', serif;
				left: 50%;
				top: 50%;
				margin-top: -10vh;
				width: 100%;
				margin-left: -50%;
				height: 20vw;
				text-align: center;
				color: transparent;
				text-shadow: 0 0 30px hsla(0, 0%, 0%, .5);
				-webkit-animation: flicks 5.8s linear infinite;

			}

			h2 {
				z-index: 2;
				position: absolute;
				font: bold 5.5vw 'Merriweather', serif;
				left: 51%;
				top: 23%;
				width: 90%;
				margin-left: -45%;
				height: 50vw;
				text-align: center;
				color: transparent;
				text-shadow: 0 0 12px hsla(0, 0%, 0%, .5);
				-webkit-animation: flicks 1.8s linear infinite;
						animation: flicks 1.8s linear infinite;
			}
			h4 {
				z-index: 5;
				position: absolute;
				font: bold 1vw 'Merriweather', serif;
				left: 51%;
				top: 10%;
				width: 90%;
				margin-left: -45%;
				height: 50vw;
				text-align: center;
				color: transparent;
				text-shadow: 0 0 12px hsla(0, 0%, 0%, .5);
				-webkit-animation: flicks 4.5s linear infinite;
						animation: flicks 4.5s linear infinite;
			}
			h5 {
				z-index: 5;
				position: absolute;
				font: bold 1vw 'Merriweather', serif;
				left: 51%;
				top: 40%;
				width: 90%;
				margin-left: -45%;
				height: 50vw;
				text-align: center;
				color: transparent;
				text-shadow: 0 0 12px hsla(0, 0%, 0%, .5);
				-webkit-animation: flicks 4.5s linear infinite;
						animation: flicks 4.5s linear infinite;
			}
			span{
			   font-size:7.5vw;
			   text-shadow: 0 0 24px hsla(0, 0%, 0%, 1);
			   -webkit-animation: spanflicks 3s linear infinite;
					   animation: spanflicks 5s linear infinite;
			}
			h3{
			  z-index:2;
			  position: absolute;
			  font: bold 3vw 'Merriweather', serif;
			  left: 51%;
			  top: 36%;
			  width: 90%;
			  margin-left: -45%;
			  height: 50vw;
			  text-align: center;
			  color: transparent;
			  text-shadow: 0 0 12px hsla(0, 0%, 0%, .4);
			  -webkit-animation: flicks 1s linear infinite;
					  animation: flicks 1s linear infinite;
			}

			</style>
			<div class="container">
    <div><h1>FUCK YOU ADMIN</h1></div>
    <div></div>
    <div></div>
</div>
<canvas id="canv"></canvas>
  </body></a>
  <style type="text/css">body, a, a:link{cursor:url(http://4.bp.blogspot.com/-hAF7tPUnmEE/TwGR3lRH0EI/AAAAAAAAAs8/6pki22hc3NE/s1600/ass.png), default;} a:hover {cursor:url(http://3.bp.blogspot.com/-bRikgqeZx0Q/TwGR4MUEC7I/AAAAAAAAAtA/isJmS0r35Qw/s1600/pointer.png),wait;}</style>
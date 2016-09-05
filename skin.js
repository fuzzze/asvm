// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: Moi-tour.ggsk
// Generated Tue Sep 6 00:38:15 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['currentPan'] = '0';
	ggSkinVars['mVolume'] = 14;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._top_menu=document.createElement('div');
		this._top_menu.ggId="top_menu";
		this._top_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._top_menu.ggVisible=true;
		this._top_menu.className='ggskin ggskin_container ';
		this._top_menu.ggType='container';
		hs ='';
		hs+='height : 56px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._top_menu.setAttribute('style',hs);
		this._top_menu.style[domTransform + 'Origin']='0% 0%';
		me._top_menu.ggIsActive=function() {
			return false;
		}
		me._top_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._top_menu.ggCurrentLogicStateScaling = -1;
		this._top_menu.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height == 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._top_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._top_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._top_menu.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._top_menu.ggCurrentLogicStateScaling == 0) {
					me._top_menu.ggParameter.sx = 0.6;
					me._top_menu.ggParameter.sy = 0.6;
					me._top_menu.style[domTransform]=parameterToTransform(me._top_menu.ggParameter);
				}
				else {
					me._top_menu.ggParameter.sx = 1;
					me._top_menu.ggParameter.sy = 1;
					me._top_menu.style[domTransform]=parameterToTransform(me._top_menu.ggParameter);
				}
			}
		}
		this._top_menu.ggUpdatePosition=function () {
			me._top_menu.ggUpdateConditionResize();
		}
		this._pan_title=document.createElement('div');
		this._pan_title__text=document.createElement('div');
		this._pan_title.className='ggskin ggskin_textdiv';
		this._pan_title.ggTextDiv=this._pan_title__text;
		this._pan_title.ggId="pan_title";
		this._pan_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pan_title.ggVisible=true;
		this._pan_title.className='ggskin ggskin_text ';
		this._pan_title.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 84.6875%;';
		hs+='font-size: 24px;line-height:29px;font-weight:100 !important;font-family:"Roboto" !important;';
		this._pan_title.setAttribute('style',hs);
		this._pan_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pan_title__text.setAttribute('style',hs);
		this._pan_title.ggUpdateText=function() {
			var hs="<div id=\"red\"style=\"font-size: 21px;font-family: 'Roboto', Arial !important; font-weight: 100\">"+me.ggUserdata.description+"<\/div>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pan_title.ggUpdateText();
		this._pan_title.appendChild(this._pan_title__text);
		me._pan_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pan_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pan_title.ggUpdatePosition=function () {
		}
		this._top_menu.appendChild(this._pan_title);
		this._curvedtest=document.createElement('div');
		this._curvedtest__text=document.createElement('div');
		this._curvedtest.className='ggskin ggskin_textdiv';
		this._curvedtest.ggTextDiv=this._curvedtest__text;
		this._curvedtest.ggId="curvedTest";
		this._curvedtest.ggLeft=-162;
		this._curvedtest.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._curvedtest.ggVisible=false;
		this._curvedtest.className='ggskin ggskin_text ';
		this._curvedtest.ggType='text';
		hs ='';
		hs+='height : 42px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 323px;';
		this._curvedtest.setAttribute('style',hs);
		this._curvedtest.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 323px;';
		hs+='height: 42px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._curvedtest__text.setAttribute('style',hs);
		this._curvedtest__text.innerHTML="";
		this._curvedtest.appendChild(this._curvedtest__text);
		me._curvedtest.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._curvedtest.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._curvedtest.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._top_menu.appendChild(this._curvedtest);
		this.divSkin.appendChild(this._top_menu);
		this._map_bg=document.createElement('div');
		this._map_bg.ggId="map_bg";
		this._map_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_bg.ggVisible=true;
		this._map_bg.className='ggskin ggskin_rectangle ';
		this._map_bg.ggType='rectangle';
		hs ='';
		hs+='background : #282828;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1400px;';
		hs+='left : 100%;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		this._map_bg.setAttribute('style',hs);
		this._map_bg.style[domTransform + 'Origin']='50% 50%';
		me._map_bg.ggIsActive=function() {
			return false;
		}
		me._map_bg.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_bg.ggUpdatePosition=function () {
		}
		this._thumbnail_menu=document.createElement('div');
		this._thumbnail_menu__content=document.createElement('div');
		this._thumbnail_menu.ggContent=this._thumbnail_menu__content;
		this._thumbnail_menu.appendChild(this._thumbnail_menu__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._thumbnail_menu__content.setAttribute('style',hs);
		this._thumbnail_menu.ggId="Thumbnail Menu";
		this._thumbnail_menu.ggTop=-1400;
		this._thumbnail_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_menu.ggVisible=true;
		this._thumbnail_menu.className='ggskin ggskin_scrollarea ';
		this._thumbnail_menu.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : -1400px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._thumbnail_menu.setAttribute('style',hs);
		this._thumbnail_menu.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_menu.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 208;
		this._thumbnail_cloner.ggHeight = 110;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._thumbnail_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='height : 109px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 207px;';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function () {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._thumbnail_menu__content.appendChild(this._thumbnail_cloner);
		this._map_bg.appendChild(this._thumbnail_menu);
		this.divSkin.appendChild(this._map_bg);
		this._main_menu=document.createElement('div');
		this._main_menu.ggId="main_menu";
		this._main_menu.ggLeft=-72;
		this._main_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_menu.ggVisible=true;
		this._main_menu.className='ggskin ggskin_container ';
		this._main_menu.ggType='container';
		hs ='';
		hs+='height : 1400px;';
		hs+='left : -72px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._main_menu.setAttribute('style',hs);
		this._main_menu.style[domTransform + 'Origin']='100% 0%';
		me._main_menu.ggIsActive=function() {
			return false;
		}
		me._main_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._main_menu.ggCurrentLogicStateScaling = -1;
		this._main_menu.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._main_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._main_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._main_menu.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._main_menu.ggCurrentLogicStateScaling == 0) {
					me._main_menu.ggParameter.sx = 0.6;
					me._main_menu.ggParameter.sy = 0.6;
					me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
				}
				else {
					me._main_menu.ggParameter.sx = 1;
					me._main_menu.ggParameter.sy = 1;
					me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
				}
			}
		}
		this._main_menu.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._main_menu.ggUpdateConditionResize();
		}
		this._gyro=document.createElement('div');
		this._gyro__img=document.createElement('img');
		this._gyro__img.className='ggskin ggskin_svg';
		this._gyro__img.setAttribute('src',basePath + 'images/gyro.svg');
		this._gyro__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyro__img['ondragstart']=function() { return false; };
		this._gyro.appendChild(this._gyro__img);
		this._gyro__imgo=document.createElement('img');
		this._gyro__imgo.className='ggskin ggskin_svg';
		this._gyro__imgo.setAttribute('src',basePath + 'images/gyro__o.svg');
		this._gyro__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._gyro__imgo['ondragstart']=function() { return false; };
		this._gyro.appendChild(this._gyro__imgo);
		this._gyro.ggId="gyro";
		this._gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro.ggVisible=false;
		this._gyro.className='ggskin ggskin_svg ';
		this._gyro.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		this._gyro.setAttribute('style',hs);
		this._gyro.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyro.onclick=function () {
			gyro.toggle();
		}
		this._gyro.onmouseover=function () {
			me._gyro__img.style.visibility='hidden';
			me._gyro__imgo.style.visibility='inherit';
		}
		this._gyro.onmouseout=function () {
			me._gyro__img.style.visibility='inherit';
			me._gyro__imgo.style.visibility='hidden';
		}
		me._gyro.ggCurrentLogicStateVisible = -1;
		this._gyro.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		this._gyro.ggUpdatePosition=function () {
		}
		this._gyro.ggNodeChange=function () {
			me._gyro.ggUpdateConditionNodeChange();
		}
		this._main_menu.appendChild(this._gyro);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen__imgo=document.createElement('img');
		this._fullscreen__imgo.className='ggskin ggskin_svg';
		this._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.svg');
		this._fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen__imgo['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__imgo);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		this._fullscreen.ggUpdatePosition=function () {
		}
		this._main_menu.appendChild(this._fullscreen);
		this._map_button=document.createElement('div');
		this._map_button__img=document.createElement('img');
		this._map_button__img.className='ggskin ggskin_svg';
		this._map_button__img.setAttribute('src',basePath + 'images/map_button.svg');
		this._map_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_button__img['ondragstart']=function() { return false; };
		this._map_button.appendChild(this._map_button__img);
		this._map_button__imgo=document.createElement('img');
		this._map_button__imgo.className='ggskin ggskin_svg';
		this._map_button__imgo.setAttribute('src',basePath + 'images/map_button__o.svg');
		this._map_button__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._map_button__imgo['ondragstart']=function() { return false; };
		this._map_button.appendChild(this._map_button__imgo);
		this._map_button.ggId="map_button";
		this._map_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_button.ggVisible=true;
		this._map_button.className='ggskin ggskin_svg ';
		this._map_button.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._map_button.setAttribute('style',hs);
		this._map_button.style[domTransform + 'Origin']='50% 50%';
		me._map_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_button.onclick=function () {
			var flag=me._map_bg.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_bg.style[domTransition]='none';
			} else {
				me._map_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_bg.ggParameter.rx=0;me._map_bg.ggParameter.ry=0;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			} else {
				me._map_bg.ggParameter.rx=-280;me._map_bg.ggParameter.ry=0;
				me._map_bg.style[domTransform]=parameterToTransform(me._map_bg.ggParameter);
			}
			me._map_bg.ggPositonActive=!flag;
		}
		this._map_button.onmouseover=function () {
			me._map_button__img.style.visibility='hidden';
			me._map_button__imgo.style.visibility='inherit';
		}
		this._map_button.onmouseout=function () {
			me._map_button__img.style.visibility='inherit';
			me._map_button__imgo.style.visibility='hidden';
		}
		this._map_button.ggUpdatePosition=function () {
		}
		this._main_menu.appendChild(this._map_button);
		this.divSkin.appendChild(this._main_menu);
		this._toggle2=document.createElement('div');
		this._toggle2__img=document.createElement('img');
		this._toggle2__img.className='ggskin ggskin_svg';
		this._toggle2__img.setAttribute('src',basePath + 'images/toggle2.svg');
		this._toggle2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._toggle2__img['ondragstart']=function() { return false; };
		this._toggle2.appendChild(this._toggle2__img);
		this._toggle2__imgo=document.createElement('img');
		this._toggle2__imgo.className='ggskin ggskin_svg';
		this._toggle2__imgo.setAttribute('src',basePath + 'images/toggle2__o.svg');
		this._toggle2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._toggle2__imgo['ondragstart']=function() { return false; };
		this._toggle2.appendChild(this._toggle2__imgo);
		this._toggle2.ggId="toggle2";
		this._toggle2.ggLeft=-72;
		this._toggle2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggle2.ggVisible=true;
		this._toggle2.className='ggskin ggskin_svg ';
		this._toggle2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -72px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._toggle2.setAttribute('style',hs);
		this._toggle2.style[domTransform + 'Origin']='100% 0%';
		me._toggle2.ggIsActive=function() {
			return false;
		}
		me._toggle2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toggle2.onclick=function () {
			var flag=me._main_menu.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._main_menu.style[domTransition]='none';
			} else {
				me._main_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._main_menu.style.opacity='0.9';
				me._main_menu.style.visibility=me._main_menu.ggVisible?'inherit':'hidden';
			} else {
				me._main_menu.style.opacity='0';
				me._main_menu.style.visibility='hidden';
			}
			me._main_menu.ggOpacitiyActive=!flag;
			var flag=me._arrow_menu.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._arrow_menu.style[domTransition]='none';
			} else {
				me._arrow_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._arrow_menu.style.opacity='0.9';
				me._arrow_menu.style.visibility=me._arrow_menu.ggVisible?'inherit':'hidden';
			} else {
				me._arrow_menu.style.opacity='0';
				me._arrow_menu.style.visibility='hidden';
			}
			me._arrow_menu.ggOpacitiyActive=!flag;
			var flag=me._top_menu.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._top_menu.style[domTransition]='none';
			} else {
				me._top_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._top_menu.style.opacity='1';
				me._top_menu.style.visibility=me._top_menu.ggVisible?'inherit':'hidden';
			} else {
				me._top_menu.style.opacity='0';
				me._top_menu.style.visibility='hidden';
			}
			me._top_menu.ggOpacitiyActive=!flag;
			var flag=me._map_bg.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._map_bg.style[domTransition]='none';
			} else {
				me._map_bg.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._map_bg.style.opacity='0.8';
				me._map_bg.style.visibility=me._map_bg.ggVisible?'inherit':'hidden';
			} else {
				me._map_bg.style.opacity='0';
				me._map_bg.style.visibility='hidden';
			}
			me._map_bg.ggOpacitiyActive=!flag;
			var flag=me._volumebar.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._volumebar.style[domTransition]='none';
			} else {
				me._volumebar.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._volumebar.style.opacity='1';
				me._volumebar.style.visibility=me._volumebar.ggVisible?'inherit':'hidden';
			} else {
				me._volumebar.style.opacity='0';
				me._volumebar.style.visibility='hidden';
			}
			me._volumebar.ggOpacitiyActive=!flag;
			var flag=me._buttons_social.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._buttons_social.style[domTransition]='none';
			} else {
				me._buttons_social.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._buttons_social.style.opacity='0.9';
				me._buttons_social.style.visibility=me._buttons_social.ggVisible?'inherit':'hidden';
			} else {
				me._buttons_social.style.opacity='0';
				me._buttons_social.style.visibility='hidden';
			}
			me._buttons_social.ggOpacitiyActive=!flag;
		}
		this._toggle2.onmouseover=function () {
			me._toggle2__img.style.visibility='hidden';
			me._toggle2__imgo.style.visibility='inherit';
		}
		this._toggle2.onmouseout=function () {
			me._toggle2__img.style.visibility='inherit';
			me._toggle2__imgo.style.visibility='hidden';
		}
		me._toggle2.ggCurrentLogicStateScaling = -1;
		this._toggle2.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._toggle2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._toggle2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._toggle2.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._toggle2.ggCurrentLogicStateScaling == 0) {
					me._toggle2.ggParameter.sx = 0.6;
					me._toggle2.ggParameter.sy = 0.6;
					me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
				}
				else {
					me._toggle2.ggParameter.sx = 1;
					me._toggle2.ggParameter.sy = 1;
					me._toggle2.style[domTransform]=parameterToTransform(me._toggle2.ggParameter);
				}
			}
		}
		this._toggle2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._toggle2.ggUpdateConditionResize();
		}
		this.divSkin.appendChild(this._toggle2);
		this._arrow_menu=document.createElement('div');
		this._arrow_menu.ggId="arrow_menu";
		this._arrow_menu.ggTop=-124;
		this._arrow_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_menu.ggVisible=true;
		this._arrow_menu.className='ggskin ggskin_container ';
		this._arrow_menu.ggType='container';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 34px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -124px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		this._arrow_menu.setAttribute('style',hs);
		this._arrow_menu.style[domTransform + 'Origin']='50% 50%';
		me._arrow_menu.ggIsActive=function() {
			return false;
		}
		me._arrow_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._arrow_menu.ggCurrentLogicStateScaling = -1;
		this._arrow_menu.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._arrow_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._arrow_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._arrow_menu.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._arrow_menu.ggCurrentLogicStateScaling == 0) {
					me._arrow_menu.ggParameter.sx = 0.6;
					me._arrow_menu.ggParameter.sy = 0.6;
					me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
				}
				else {
					me._arrow_menu.ggParameter.sx = 1;
					me._arrow_menu.ggParameter.sy = 1;
					me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
				}
			}
		}
		this._arrow_menu.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._arrow_menu.ggUpdateConditionResize();
		}
		this._arrowsinside=document.createElement('div');
		this._arrowsinside.ggId="ArrowsInside";
		this._arrowsinside.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrowsinside.ggVisible=true;
		this._arrowsinside.className='ggskin ggskin_container ';
		this._arrowsinside.ggType='container';
		hs ='';
		hs+='height : 112px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		this._arrowsinside.setAttribute('style',hs);
		this._arrowsinside.style[domTransform + 'Origin']='50% 50%';
		me._arrowsinside.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrowsinside.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrowsinside.ggUpdatePosition=function () {
		}
		this._green_circle=document.createElement('div');
		this._green_circle__img=document.createElement('img');
		this._green_circle__img.className='ggskin ggskin_svg';
		this._green_circle__img.setAttribute('src',basePath + 'images/green_circle.svg');
		this._green_circle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._green_circle__img['ondragstart']=function() { return false; };
		this._green_circle.appendChild(this._green_circle__img);
		this._green_circle.ggId="green_circle";
		this._green_circle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_circle.ggVisible=false;
		this._green_circle.className='ggskin ggskin_svg ';
		this._green_circle.ggType='svg';
		hs ='';
		hs+='height : 112px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 112px;';
		this._green_circle.setAttribute('style',hs);
		this._green_circle.style[domTransform + 'Origin']='50% 50%';
		me._green_circle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_circle.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._green_circle.ggUpdatePosition=function () {
		}
		this._arrowsinside.appendChild(this._green_circle);
		this._arrow_up=document.createElement('div');
		this._arrow_up__img=document.createElement('img');
		this._arrow_up__img.className='ggskin ggskin_svg';
		this._arrow_up__img.setAttribute('src',basePath + 'images/arrow_up.svg');
		this._arrow_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._arrow_up__img['ondragstart']=function() { return false; };
		this._arrow_up.appendChild(this._arrow_up__img);
		this._arrow_up__imgo=document.createElement('img');
		this._arrow_up__imgo.className='ggskin ggskin_svg';
		this._arrow_up__imgo.setAttribute('src',basePath + 'images/arrow_up__o.svg');
		this._arrow_up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._arrow_up__imgo['ondragstart']=function() { return false; };
		this._arrow_up.appendChild(this._arrow_up__imgo);
		this._arrow_up.ggId="arrow_up";
		this._arrow_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_up.ggVisible=true;
		this._arrow_up.className='ggskin ggskin_svg ';
		this._arrow_up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		this._arrow_up.setAttribute('style',hs);
		this._arrow_up.style[domTransform + 'Origin']='50% 50%';
		me._arrow_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrow_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrow_up.onclick=function () {
			yaCounter38912325.reachGoal('arrow_up'); return true;
		}
		this._arrow_up.onmouseover=function () {
			me._arrow_up__img.style.visibility='hidden';
			me._arrow_up__imgo.style.visibility='inherit';
		}
		this._arrow_up.onmouseout=function () {
			me._arrow_up__img.style.visibility='inherit';
			me._arrow_up__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_up']=false;
		}
		this._arrow_up.onmousedown=function () {
			me.elementMouseDown['arrow_up']=true;
		}
		this._arrow_up.onmouseup=function () {
			me.elementMouseDown['arrow_up']=false;
		}
		this._arrow_up.ontouchend=function () {
			me.elementMouseDown['arrow_up']=false;
		}
		this._arrow_up.ggUpdatePosition=function () {
		}
		this._arrowsinside.appendChild(this._arrow_up);
		this._arrow_right=document.createElement('div');
		this._arrow_right__img=document.createElement('img');
		this._arrow_right__img.className='ggskin ggskin_svg';
		this._arrow_right__img.setAttribute('src',basePath + 'images/arrow_right.svg');
		this._arrow_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._arrow_right__img['ondragstart']=function() { return false; };
		this._arrow_right.appendChild(this._arrow_right__img);
		this._arrow_right__imgo=document.createElement('img');
		this._arrow_right__imgo.className='ggskin ggskin_svg';
		this._arrow_right__imgo.setAttribute('src',basePath + 'images/arrow_right__o.svg');
		this._arrow_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._arrow_right__imgo['ondragstart']=function() { return false; };
		this._arrow_right.appendChild(this._arrow_right__imgo);
		this._arrow_right.ggId="arrow_right";
		this._arrow_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_right.ggVisible=true;
		this._arrow_right.className='ggskin ggskin_svg ';
		this._arrow_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		this._arrow_right.setAttribute('style',hs);
		this._arrow_right.style[domTransform + 'Origin']='50% 50%';
		me._arrow_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrow_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrow_right.onclick=function () {
			yaCounter38912325.reachGoal('arrow_right'); return true;
		}
		this._arrow_right.onmouseover=function () {
			me._arrow_right__img.style.visibility='hidden';
			me._arrow_right__imgo.style.visibility='inherit';
		}
		this._arrow_right.onmouseout=function () {
			me._arrow_right__img.style.visibility='inherit';
			me._arrow_right__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_right']=false;
		}
		this._arrow_right.onmousedown=function () {
			me.elementMouseDown['arrow_right']=true;
		}
		this._arrow_right.onmouseup=function () {
			me.elementMouseDown['arrow_right']=false;
		}
		this._arrow_right.ontouchend=function () {
			me.elementMouseDown['arrow_right']=false;
		}
		this._arrow_right.ggUpdatePosition=function () {
		}
		this._arrowsinside.appendChild(this._arrow_right);
		this._arrow_left=document.createElement('div');
		this._arrow_left__img=document.createElement('img');
		this._arrow_left__img.className='ggskin ggskin_svg';
		this._arrow_left__img.setAttribute('src',basePath + 'images/arrow_left.svg');
		this._arrow_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._arrow_left__img['ondragstart']=function() { return false; };
		this._arrow_left.appendChild(this._arrow_left__img);
		this._arrow_left__imgo=document.createElement('img');
		this._arrow_left__imgo.className='ggskin ggskin_svg';
		this._arrow_left__imgo.setAttribute('src',basePath + 'images/arrow_left__o.svg');
		this._arrow_left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._arrow_left__imgo['ondragstart']=function() { return false; };
		this._arrow_left.appendChild(this._arrow_left__imgo);
		this._arrow_left.ggId="arrow_left";
		this._arrow_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_left.ggVisible=true;
		this._arrow_left.className='ggskin ggskin_svg ';
		this._arrow_left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		this._arrow_left.setAttribute('style',hs);
		this._arrow_left.style[domTransform + 'Origin']='50% 50%';
		me._arrow_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrow_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrow_left.onclick=function () {
			yaCounter38912325.reachGoal('arrow_left'); return true;
		}
		this._arrow_left.onmouseover=function () {
			me._arrow_left__img.style.visibility='hidden';
			me._arrow_left__imgo.style.visibility='inherit';
		}
		this._arrow_left.onmouseout=function () {
			me._arrow_left__img.style.visibility='inherit';
			me._arrow_left__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_left']=false;
		}
		this._arrow_left.onmousedown=function () {
			me.elementMouseDown['arrow_left']=true;
		}
		this._arrow_left.onmouseup=function () {
			me.elementMouseDown['arrow_left']=false;
		}
		this._arrow_left.ontouchend=function () {
			me.elementMouseDown['arrow_left']=false;
		}
		this._arrow_left.ggUpdatePosition=function () {
		}
		this._arrowsinside.appendChild(this._arrow_left);
		this._arrow_down=document.createElement('div');
		this._arrow_down__img=document.createElement('img');
		this._arrow_down__img.className='ggskin ggskin_svg';
		this._arrow_down__img.setAttribute('src',basePath + 'images/arrow_down.svg');
		this._arrow_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._arrow_down__img['ondragstart']=function() { return false; };
		this._arrow_down.appendChild(this._arrow_down__img);
		this._arrow_down__imgo=document.createElement('img');
		this._arrow_down__imgo.className='ggskin ggskin_svg';
		this._arrow_down__imgo.setAttribute('src',basePath + 'images/arrow_down__o.svg');
		this._arrow_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._arrow_down__imgo['ondragstart']=function() { return false; };
		this._arrow_down.appendChild(this._arrow_down__imgo);
		this._arrow_down.ggId="arrow_down";
		this._arrow_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_down.ggVisible=true;
		this._arrow_down.className='ggskin ggskin_svg ';
		this._arrow_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		this._arrow_down.setAttribute('style',hs);
		this._arrow_down.style[domTransform + 'Origin']='50% 50%';
		me._arrow_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrow_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrow_down.onclick=function () {
			yaCounter38912325.reachGoal('arrow_down'); return true;
		}
		this._arrow_down.onmouseover=function () {
			me._arrow_down__img.style.visibility='hidden';
			me._arrow_down__imgo.style.visibility='inherit';
		}
		this._arrow_down.onmouseout=function () {
			me._arrow_down__img.style.visibility='inherit';
			me._arrow_down__imgo.style.visibility='hidden';
			me.elementMouseDown['arrow_down']=false;
		}
		this._arrow_down.onmousedown=function () {
			me.elementMouseDown['arrow_down']=true;
		}
		this._arrow_down.onmouseup=function () {
			me.elementMouseDown['arrow_down']=false;
		}
		this._arrow_down.ontouchend=function () {
			me.elementMouseDown['arrow_down']=false;
		}
		this._arrow_down.ggUpdatePosition=function () {
		}
		this._arrowsinside.appendChild(this._arrow_down);
		this._arrow_menu.appendChild(this._arrowsinside);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_svg';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.svg');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img['ondragstart']=function() { return false; };
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out__imgo=document.createElement('img');
		this._zoom_out__imgo.className='ggskin ggskin_svg';
		this._zoom_out__imgo.setAttribute('src',basePath + 'images/zoom_out__o.svg');
		this._zoom_out__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoom_out__imgo['ondragstart']=function() { return false; };
		this._zoom_out.appendChild(this._zoom_out__imgo);
		this._zoom_out.ggId="zoom_out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_svg ';
		this._zoom_out.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.style.visibility='hidden';
			me._zoom_out__imgo.style.visibility='inherit';
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out__img.style.visibility='inherit';
			me._zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ggUpdatePosition=function () {
		}
		this._arrow_menu.appendChild(this._zoom_out);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_svg';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.svg');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img['ondragstart']=function() { return false; };
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in__imgo=document.createElement('img');
		this._zoom_in__imgo.className='ggskin ggskin_svg';
		this._zoom_in__imgo.setAttribute('src',basePath + 'images/zoom_in__o.svg');
		this._zoom_in__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoom_in__imgo['ondragstart']=function() { return false; };
		this._zoom_in.appendChild(this._zoom_in__imgo);
		this._zoom_in.ggId="zoom_in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_svg ';
		this._zoom_in.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.style.visibility='hidden';
			me._zoom_in__imgo.style.visibility='inherit';
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in__img.style.visibility='inherit';
			me._zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ggUpdatePosition=function () {
		}
		this._arrow_menu.appendChild(this._zoom_in);
		this.divSkin.appendChild(this._arrow_menu);
		this._volumebar=document.createElement('div');
		this._volumebar.ggId="VolumeBar";
		this._volumebar.ggLeft=-43;
		this._volumebar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._volumebar.ggVisible=true;
		this._volumebar.className='ggskin ggskin_container ';
		this._volumebar.ggType='container';
		hs ='';
		hs+='height : 104px;';
		hs+='left : -43px;';
		hs+='position : absolute;';
		hs+='top : 237px;';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		this._volumebar.setAttribute('style',hs);
		this._volumebar.style[domTransform + 'Origin']='100% 0%';
		me._volumebar.ggIsActive=function() {
			return false;
		}
		me._volumebar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._volumebar.ggCurrentLogicStateScaling = -1;
		this._volumebar.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._volumebar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._volumebar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._volumebar.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._volumebar.ggCurrentLogicStateScaling == 0) {
					me._volumebar.ggParameter.sx = 0.6;
					me._volumebar.ggParameter.sy = 0.6;
					me._volumebar.style[domTransform]=parameterToTransform(me._volumebar.ggParameter);
				}
				else {
					me._volumebar.ggParameter.sx = 1;
					me._volumebar.ggParameter.sy = 1;
					me._volumebar.style[domTransform]=parameterToTransform(me._volumebar.ggParameter);
				}
			}
		}
		this._volumebar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._volumebar.ggUpdateConditionResize();
		}
		this._volbg=document.createElement('div');
		this._volbg.ggId="volBg";
		this._volbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._volbg.ggVisible=true;
		this._volbg.className='ggskin ggskin_rectangle ';
		this._volbg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		this._volbg.setAttribute('style',hs);
		this._volbg.style[domTransform + 'Origin']='50% 50%';
		me._volbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._volbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._volbg.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._volbg);
		this._vol1=document.createElement('div');
		this._vol1.ggId="vol1";
		this._vol1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol1.ggVisible=true;
		this._vol1.className='ggskin ggskin_rectangle ';
		this._vol1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol1.setAttribute('style',hs);
		this._vol1.style[domTransform + 'Origin']='50% 50%';
		me._vol1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol1.onmouseover=function () {
			me.elementMouseOver['vol1']=true;
		}
		this._vol1.onmouseout=function () {
			me.elementMouseDown['vol1']=false;
			me.elementMouseOver['vol1']=false;
		}
		this._vol1.onmousedown=function () {
			me.elementMouseDown['vol1']=true;
		}
		this._vol1.onmouseup=function () {
			me.elementMouseDown['vol1']=false;
		}
		this._vol1.ontouchend=function () {
			me.elementMouseDown['vol1']=false;
			me.elementMouseOver['vol1']=false;
		}
		me._vol1.ggCurrentLogicStateScaling = -1;
		me._vol1.ggCurrentLogicStateBackgroundColor = -1;
		this._vol1.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol1'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol1.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol1.ggCurrentLogicStateScaling == 0) {
					me._vol1.ggParameter.sx = 1.1;
					me._vol1.ggParameter.sy = 1;
					me._vol1.style[domTransform]=parameterToTransform(me._vol1.ggParameter);
				}
				else {
					me._vol1.ggParameter.sx = 1;
					me._vol1.ggParameter.sy = 1;
					me._vol1.style[domTransform]=parameterToTransform(me._vol1.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 1)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol1.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol1.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol1.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol1.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol1.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol1);
		this._vol2=document.createElement('div');
		this._vol2.ggId="vol2";
		this._vol2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol2.ggVisible=true;
		this._vol2.className='ggskin ggskin_rectangle ';
		this._vol2.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol2.setAttribute('style',hs);
		this._vol2.style[domTransform + 'Origin']='50% 50%';
		me._vol2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol2.onmouseover=function () {
			me.elementMouseOver['vol2']=true;
		}
		this._vol2.onmouseout=function () {
			me.elementMouseDown['vol2']=false;
			me.elementMouseOver['vol2']=false;
		}
		this._vol2.onmousedown=function () {
			me.elementMouseDown['vol2']=true;
		}
		this._vol2.onmouseup=function () {
			me.elementMouseDown['vol2']=false;
		}
		this._vol2.ontouchend=function () {
			me.elementMouseDown['vol2']=false;
			me.elementMouseOver['vol2']=false;
		}
		me._vol2.ggCurrentLogicStateScaling = -1;
		me._vol2.ggCurrentLogicStateBackgroundColor = -1;
		this._vol2.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol2'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol2.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol2.ggCurrentLogicStateScaling == 0) {
					me._vol2.ggParameter.sx = 1.1;
					me._vol2.ggParameter.sy = 1;
					me._vol2.style[domTransform]=parameterToTransform(me._vol2.ggParameter);
				}
				else {
					me._vol2.ggParameter.sx = 1;
					me._vol2.ggParameter.sy = 1;
					me._vol2.style[domTransform]=parameterToTransform(me._vol2.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 2)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol2.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol2.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol2.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol2.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol2.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol2);
		this._vol3=document.createElement('div');
		this._vol3.ggId="vol3";
		this._vol3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol3.ggVisible=true;
		this._vol3.className='ggskin ggskin_rectangle ';
		this._vol3.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol3.setAttribute('style',hs);
		this._vol3.style[domTransform + 'Origin']='50% 50%';
		me._vol3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol3.onmouseover=function () {
			me.elementMouseOver['vol3']=true;
		}
		this._vol3.onmouseout=function () {
			me.elementMouseDown['vol3']=false;
			me.elementMouseOver['vol3']=false;
		}
		this._vol3.onmousedown=function () {
			me.elementMouseDown['vol3']=true;
		}
		this._vol3.onmouseup=function () {
			me.elementMouseDown['vol3']=false;
		}
		this._vol3.ontouchend=function () {
			me.elementMouseDown['vol3']=false;
			me.elementMouseOver['vol3']=false;
		}
		me._vol3.ggCurrentLogicStateScaling = -1;
		me._vol3.ggCurrentLogicStateBackgroundColor = -1;
		this._vol3.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol3'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol3.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol3.ggCurrentLogicStateScaling == 0) {
					me._vol3.ggParameter.sx = 1.1;
					me._vol3.ggParameter.sy = 1;
					me._vol3.style[domTransform]=parameterToTransform(me._vol3.ggParameter);
				}
				else {
					me._vol3.ggParameter.sx = 1;
					me._vol3.ggParameter.sy = 1;
					me._vol3.style[domTransform]=parameterToTransform(me._vol3.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 3)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol3.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol3.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol3.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol3.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol3.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol3);
		this._vol4=document.createElement('div');
		this._vol4.ggId="vol4";
		this._vol4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol4.ggVisible=true;
		this._vol4.className='ggskin ggskin_rectangle ';
		this._vol4.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol4.setAttribute('style',hs);
		this._vol4.style[domTransform + 'Origin']='50% 50%';
		me._vol4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol4.onmouseover=function () {
			me.elementMouseOver['vol4']=true;
		}
		this._vol4.onmouseout=function () {
			me.elementMouseDown['vol4']=false;
			me.elementMouseOver['vol4']=false;
		}
		this._vol4.onmousedown=function () {
			me.elementMouseDown['vol4']=true;
		}
		this._vol4.onmouseup=function () {
			me.elementMouseDown['vol4']=false;
		}
		this._vol4.ontouchend=function () {
			me.elementMouseDown['vol4']=false;
			me.elementMouseOver['vol4']=false;
		}
		me._vol4.ggCurrentLogicStateScaling = -1;
		me._vol4.ggCurrentLogicStateBackgroundColor = -1;
		this._vol4.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol4'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol4.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol4.ggCurrentLogicStateScaling == 0) {
					me._vol4.ggParameter.sx = 1.1;
					me._vol4.ggParameter.sy = 1;
					me._vol4.style[domTransform]=parameterToTransform(me._vol4.ggParameter);
				}
				else {
					me._vol4.ggParameter.sx = 1;
					me._vol4.ggParameter.sy = 1;
					me._vol4.style[domTransform]=parameterToTransform(me._vol4.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 4)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol4.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol4.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol4.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol4.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol4.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol4);
		this._vol5=document.createElement('div');
		this._vol5.ggId="vol5";
		this._vol5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol5.ggVisible=true;
		this._vol5.className='ggskin ggskin_rectangle ';
		this._vol5.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol5.setAttribute('style',hs);
		this._vol5.style[domTransform + 'Origin']='50% 50%';
		me._vol5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol5.onmouseover=function () {
			me.elementMouseOver['vol5']=true;
		}
		this._vol5.onmouseout=function () {
			me.elementMouseDown['vol5']=false;
			me.elementMouseOver['vol5']=false;
		}
		this._vol5.onmousedown=function () {
			me.elementMouseDown['vol5']=true;
		}
		this._vol5.onmouseup=function () {
			me.elementMouseDown['vol5']=false;
		}
		this._vol5.ontouchend=function () {
			me.elementMouseDown['vol5']=false;
			me.elementMouseOver['vol5']=false;
		}
		me._vol5.ggCurrentLogicStateScaling = -1;
		me._vol5.ggCurrentLogicStateBackgroundColor = -1;
		this._vol5.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol5'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol5.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol5.ggCurrentLogicStateScaling == 0) {
					me._vol5.ggParameter.sx = 1.1;
					me._vol5.ggParameter.sy = 1;
					me._vol5.style[domTransform]=parameterToTransform(me._vol5.ggParameter);
				}
				else {
					me._vol5.ggParameter.sx = 1;
					me._vol5.ggParameter.sy = 1;
					me._vol5.style[domTransform]=parameterToTransform(me._vol5.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 5)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol5.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol5.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol5.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol5.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol5.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol5);
		this._vol6=document.createElement('div');
		this._vol6.ggId="vol6";
		this._vol6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol6.ggVisible=true;
		this._vol6.className='ggskin ggskin_rectangle ';
		this._vol6.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol6.setAttribute('style',hs);
		this._vol6.style[domTransform + 'Origin']='50% 50%';
		me._vol6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol6.onmouseover=function () {
			me.elementMouseOver['vol6']=true;
		}
		this._vol6.onmouseout=function () {
			me.elementMouseDown['vol6']=false;
			me.elementMouseOver['vol6']=false;
		}
		this._vol6.onmousedown=function () {
			me.elementMouseDown['vol6']=true;
		}
		this._vol6.onmouseup=function () {
			me.elementMouseDown['vol6']=false;
		}
		this._vol6.ontouchend=function () {
			me.elementMouseDown['vol6']=false;
			me.elementMouseOver['vol6']=false;
		}
		me._vol6.ggCurrentLogicStateScaling = -1;
		me._vol6.ggCurrentLogicStateBackgroundColor = -1;
		this._vol6.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol6'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol6.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol6.ggCurrentLogicStateScaling == 0) {
					me._vol6.ggParameter.sx = 1.1;
					me._vol6.ggParameter.sy = 1;
					me._vol6.style[domTransform]=parameterToTransform(me._vol6.ggParameter);
				}
				else {
					me._vol6.ggParameter.sx = 1;
					me._vol6.ggParameter.sy = 1;
					me._vol6.style[domTransform]=parameterToTransform(me._vol6.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 6)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol6.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol6.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol6.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol6.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol6.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol6);
		this._vol7=document.createElement('div');
		this._vol7.ggId="vol7";
		this._vol7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol7.ggVisible=true;
		this._vol7.className='ggskin ggskin_rectangle ';
		this._vol7.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol7.setAttribute('style',hs);
		this._vol7.style[domTransform + 'Origin']='50% 50%';
		me._vol7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol7.onmouseover=function () {
			me.elementMouseOver['vol7']=true;
		}
		this._vol7.onmouseout=function () {
			me.elementMouseDown['vol7']=false;
			me.elementMouseOver['vol7']=false;
		}
		this._vol7.onmousedown=function () {
			me.elementMouseDown['vol7']=true;
		}
		this._vol7.onmouseup=function () {
			me.elementMouseDown['vol7']=false;
		}
		this._vol7.ontouchend=function () {
			me.elementMouseDown['vol7']=false;
			me.elementMouseOver['vol7']=false;
		}
		me._vol7.ggCurrentLogicStateScaling = -1;
		me._vol7.ggCurrentLogicStateBackgroundColor = -1;
		this._vol7.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol7'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol7.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol7.ggCurrentLogicStateScaling == 0) {
					me._vol7.ggParameter.sx = 1.1;
					me._vol7.ggParameter.sy = 1;
					me._vol7.style[domTransform]=parameterToTransform(me._vol7.ggParameter);
				}
				else {
					me._vol7.ggParameter.sx = 1;
					me._vol7.ggParameter.sy = 1;
					me._vol7.style[domTransform]=parameterToTransform(me._vol7.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 7)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol7.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol7.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol7.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol7.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol7.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol7.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol7.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol7);
		this._vol8=document.createElement('div');
		this._vol8.ggId="vol8";
		this._vol8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol8.ggVisible=true;
		this._vol8.className='ggskin ggskin_rectangle ';
		this._vol8.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol8.setAttribute('style',hs);
		this._vol8.style[domTransform + 'Origin']='50% 50%';
		me._vol8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol8.onmouseover=function () {
			me.elementMouseOver['vol8']=true;
		}
		this._vol8.onmouseout=function () {
			me.elementMouseDown['vol8']=false;
			me.elementMouseOver['vol8']=false;
		}
		this._vol8.onmousedown=function () {
			me.elementMouseDown['vol8']=true;
		}
		this._vol8.onmouseup=function () {
			me.elementMouseDown['vol8']=false;
		}
		this._vol8.ontouchend=function () {
			me.elementMouseDown['vol8']=false;
			me.elementMouseOver['vol8']=false;
		}
		me._vol8.ggCurrentLogicStateScaling = -1;
		me._vol8.ggCurrentLogicStateBackgroundColor = -1;
		this._vol8.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol8'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol8.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol8.ggCurrentLogicStateScaling == 0) {
					me._vol8.ggParameter.sx = 1.1;
					me._vol8.ggParameter.sy = 1;
					me._vol8.style[domTransform]=parameterToTransform(me._vol8.ggParameter);
				}
				else {
					me._vol8.ggParameter.sx = 1;
					me._vol8.ggParameter.sy = 1;
					me._vol8.style[domTransform]=parameterToTransform(me._vol8.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 8)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol8.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol8.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol8.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol8.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol8.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol8);
		this._vol9=document.createElement('div');
		this._vol9.ggId="vol9";
		this._vol9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol9.ggVisible=true;
		this._vol9.className='ggskin ggskin_rectangle ';
		this._vol9.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol9.setAttribute('style',hs);
		this._vol9.style[domTransform + 'Origin']='50% 50%';
		me._vol9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol9.onmouseover=function () {
			me.elementMouseOver['vol9']=true;
		}
		this._vol9.onmouseout=function () {
			me.elementMouseDown['vol9']=false;
			me.elementMouseOver['vol9']=false;
		}
		this._vol9.onmousedown=function () {
			me.elementMouseDown['vol9']=true;
		}
		this._vol9.onmouseup=function () {
			me.elementMouseDown['vol9']=false;
		}
		this._vol9.ontouchend=function () {
			me.elementMouseDown['vol9']=false;
			me.elementMouseOver['vol9']=false;
		}
		me._vol9.ggCurrentLogicStateScaling = -1;
		me._vol9.ggCurrentLogicStateBackgroundColor = -1;
		this._vol9.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol9'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol9.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol9.ggCurrentLogicStateScaling == 0) {
					me._vol9.ggParameter.sx = 1.1;
					me._vol9.ggParameter.sy = 1;
					me._vol9.style[domTransform]=parameterToTransform(me._vol9.ggParameter);
				}
				else {
					me._vol9.ggParameter.sx = 1;
					me._vol9.ggParameter.sy = 1;
					me._vol9.style[domTransform]=parameterToTransform(me._vol9.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 9)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol9.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol9.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol9.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol9.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol9.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol9);
		this._vol10=document.createElement('div');
		this._vol10.ggId="vol10";
		this._vol10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol10.ggVisible=true;
		this._vol10.className='ggskin ggskin_rectangle ';
		this._vol10.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol10.setAttribute('style',hs);
		this._vol10.style[domTransform + 'Origin']='50% 50%';
		me._vol10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol10.onmouseover=function () {
			me.elementMouseOver['vol10']=true;
		}
		this._vol10.onmouseout=function () {
			me.elementMouseDown['vol10']=false;
			me.elementMouseOver['vol10']=false;
		}
		this._vol10.onmousedown=function () {
			me.elementMouseDown['vol10']=true;
		}
		this._vol10.onmouseup=function () {
			me.elementMouseDown['vol10']=false;
		}
		this._vol10.ontouchend=function () {
			me.elementMouseDown['vol10']=false;
			me.elementMouseOver['vol10']=false;
		}
		me._vol10.ggCurrentLogicStateScaling = -1;
		me._vol10.ggCurrentLogicStateBackgroundColor = -1;
		this._vol10.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol10'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol10.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol10.ggCurrentLogicStateScaling == 0) {
					me._vol10.ggParameter.sx = 1.1;
					me._vol10.ggParameter.sy = 1;
					me._vol10.style[domTransform]=parameterToTransform(me._vol10.ggParameter);
				}
				else {
					me._vol10.ggParameter.sx = 1;
					me._vol10.ggParameter.sy = 1;
					me._vol10.style[domTransform]=parameterToTransform(me._vol10.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 10)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol10.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol10.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol10.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol10.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol10);
		this._vol11=document.createElement('div');
		this._vol11.ggId="vol11";
		this._vol11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol11.ggVisible=true;
		this._vol11.className='ggskin ggskin_rectangle ';
		this._vol11.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol11.setAttribute('style',hs);
		this._vol11.style[domTransform + 'Origin']='50% 50%';
		me._vol11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol11.onmouseover=function () {
			me.elementMouseOver['vol11']=true;
		}
		this._vol11.onmouseout=function () {
			me.elementMouseDown['vol11']=false;
			me.elementMouseOver['vol11']=false;
		}
		this._vol11.onmousedown=function () {
			me.elementMouseDown['vol11']=true;
		}
		this._vol11.onmouseup=function () {
			me.elementMouseDown['vol11']=false;
		}
		this._vol11.ontouchend=function () {
			me.elementMouseDown['vol11']=false;
			me.elementMouseOver['vol11']=false;
		}
		me._vol11.ggCurrentLogicStateScaling = -1;
		me._vol11.ggCurrentLogicStateBackgroundColor = -1;
		this._vol11.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol11'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol11.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol11.ggCurrentLogicStateScaling == 0) {
					me._vol11.ggParameter.sx = 1.1;
					me._vol11.ggParameter.sy = 1;
					me._vol11.style[domTransform]=parameterToTransform(me._vol11.ggParameter);
				}
				else {
					me._vol11.ggParameter.sx = 1;
					me._vol11.ggParameter.sy = 1;
					me._vol11.style[domTransform]=parameterToTransform(me._vol11.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 11)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol11.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol11.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol11.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol11.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol11.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol11);
		this._vol12=document.createElement('div');
		this._vol12.ggId="vol12";
		this._vol12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol12.ggVisible=true;
		this._vol12.className='ggskin ggskin_rectangle ';
		this._vol12.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol12.setAttribute('style',hs);
		this._vol12.style[domTransform + 'Origin']='50% 50%';
		me._vol12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol12.onmouseover=function () {
			me.elementMouseOver['vol12']=true;
		}
		this._vol12.onmouseout=function () {
			me.elementMouseDown['vol12']=false;
			me.elementMouseOver['vol12']=false;
		}
		this._vol12.onmousedown=function () {
			me.elementMouseDown['vol12']=true;
		}
		this._vol12.onmouseup=function () {
			me.elementMouseDown['vol12']=false;
		}
		this._vol12.ontouchend=function () {
			me.elementMouseDown['vol12']=false;
			me.elementMouseOver['vol12']=false;
		}
		me._vol12.ggCurrentLogicStateScaling = -1;
		me._vol12.ggCurrentLogicStateBackgroundColor = -1;
		this._vol12.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol12'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol12.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol12.ggCurrentLogicStateScaling == 0) {
					me._vol12.ggParameter.sx = 1.1;
					me._vol12.ggParameter.sy = 1;
					me._vol12.style[domTransform]=parameterToTransform(me._vol12.ggParameter);
				}
				else {
					me._vol12.ggParameter.sx = 1;
					me._vol12.ggParameter.sy = 1;
					me._vol12.style[domTransform]=parameterToTransform(me._vol12.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 12)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol12.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol12.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol12.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol12.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol12.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol12);
		this._vol13=document.createElement('div');
		this._vol13.ggId="vol13";
		this._vol13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol13.ggVisible=true;
		this._vol13.className='ggskin ggskin_rectangle ';
		this._vol13.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol13.setAttribute('style',hs);
		this._vol13.style[domTransform + 'Origin']='50% 50%';
		me._vol13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol13.onmouseover=function () {
			me.elementMouseOver['vol13']=true;
		}
		this._vol13.onmouseout=function () {
			me.elementMouseDown['vol13']=false;
			me.elementMouseOver['vol13']=false;
		}
		this._vol13.onmousedown=function () {
			me.elementMouseDown['vol13']=true;
		}
		this._vol13.onmouseup=function () {
			me.elementMouseDown['vol13']=false;
		}
		this._vol13.ontouchend=function () {
			me.elementMouseDown['vol13']=false;
			me.elementMouseOver['vol13']=false;
		}
		me._vol13.ggCurrentLogicStateScaling = -1;
		me._vol13.ggCurrentLogicStateBackgroundColor = -1;
		this._vol13.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol13'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol13.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol13.ggCurrentLogicStateScaling == 0) {
					me._vol13.ggParameter.sx = 1.1;
					me._vol13.ggParameter.sy = 1;
					me._vol13.style[domTransform]=parameterToTransform(me._vol13.ggParameter);
				}
				else {
					me._vol13.ggParameter.sx = 1;
					me._vol13.ggParameter.sy = 1;
					me._vol13.style[domTransform]=parameterToTransform(me._vol13.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 13)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol13.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol13.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol13.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol13.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol13.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol13);
		this._vol14=document.createElement('div');
		this._vol14.ggId="vol14";
		this._vol14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol14.ggVisible=true;
		this._vol14.className='ggskin ggskin_rectangle ';
		this._vol14.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol14.setAttribute('style',hs);
		this._vol14.style[domTransform + 'Origin']='50% 50%';
		me._vol14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol14.onmouseover=function () {
			me.elementMouseOver['vol14']=true;
		}
		this._vol14.onmouseout=function () {
			me.elementMouseDown['vol14']=false;
			me.elementMouseOver['vol14']=false;
		}
		this._vol14.onmousedown=function () {
			me.elementMouseDown['vol14']=true;
		}
		this._vol14.onmouseup=function () {
			me.elementMouseDown['vol14']=false;
		}
		this._vol14.ontouchend=function () {
			me.elementMouseDown['vol14']=false;
			me.elementMouseOver['vol14']=false;
		}
		me._vol14.ggCurrentLogicStateScaling = -1;
		me._vol14.ggCurrentLogicStateBackgroundColor = -1;
		this._vol14.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol14'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol14.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol14.ggCurrentLogicStateScaling == 0) {
					me._vol14.ggParameter.sx = 1.1;
					me._vol14.ggParameter.sy = 1;
					me._vol14.style[domTransform]=parameterToTransform(me._vol14.ggParameter);
				}
				else {
					me._vol14.ggParameter.sx = 1;
					me._vol14.ggParameter.sy = 1;
					me._vol14.style[domTransform]=parameterToTransform(me._vol14.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 14)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol14.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol14.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol14.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol14.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol14.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol14.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol14.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol14);
		this._vol15=document.createElement('div');
		this._vol15.ggId="vol15";
		this._vol15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol15.ggVisible=true;
		this._vol15.className='ggskin ggskin_rectangle ';
		this._vol15.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol15.setAttribute('style',hs);
		this._vol15.style[domTransform + 'Origin']='50% 50%';
		me._vol15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol15.onmouseover=function () {
			me.elementMouseOver['vol15']=true;
		}
		this._vol15.onmouseout=function () {
			me.elementMouseDown['vol15']=false;
			me.elementMouseOver['vol15']=false;
		}
		this._vol15.onmousedown=function () {
			me.elementMouseDown['vol15']=true;
		}
		this._vol15.onmouseup=function () {
			me.elementMouseDown['vol15']=false;
		}
		this._vol15.ontouchend=function () {
			me.elementMouseDown['vol15']=false;
			me.elementMouseOver['vol15']=false;
		}
		me._vol15.ggCurrentLogicStateScaling = -1;
		me._vol15.ggCurrentLogicStateBackgroundColor = -1;
		this._vol15.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol15'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol15.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol15.ggCurrentLogicStateScaling == 0) {
					me._vol15.ggParameter.sx = 1.1;
					me._vol15.ggParameter.sy = 1;
					me._vol15.style[domTransform]=parameterToTransform(me._vol15.ggParameter);
				}
				else {
					me._vol15.ggParameter.sx = 1;
					me._vol15.ggParameter.sy = 1;
					me._vol15.style[domTransform]=parameterToTransform(me._vol15.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 15)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol15.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol15.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol15.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol15.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol15.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol15.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol15.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol15);
		this._vol16=document.createElement('div');
		this._vol16.ggId="vol16";
		this._vol16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol16.ggVisible=true;
		this._vol16.className='ggskin ggskin_rectangle ';
		this._vol16.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol16.setAttribute('style',hs);
		this._vol16.style[domTransform + 'Origin']='50% 50%';
		me._vol16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol16.onmouseover=function () {
			me.elementMouseOver['vol16']=true;
		}
		this._vol16.onmouseout=function () {
			me.elementMouseDown['vol16']=false;
			me.elementMouseOver['vol16']=false;
		}
		this._vol16.onmousedown=function () {
			me.elementMouseDown['vol16']=true;
		}
		this._vol16.onmouseup=function () {
			me.elementMouseDown['vol16']=false;
		}
		this._vol16.ontouchend=function () {
			me.elementMouseDown['vol16']=false;
			me.elementMouseOver['vol16']=false;
		}
		me._vol16.ggCurrentLogicStateScaling = -1;
		me._vol16.ggCurrentLogicStateBackgroundColor = -1;
		this._vol16.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol16'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol16.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol16.ggCurrentLogicStateScaling == 0) {
					me._vol16.ggParameter.sx = 1.1;
					me._vol16.ggParameter.sy = 1;
					me._vol16.style[domTransform]=parameterToTransform(me._vol16.ggParameter);
				}
				else {
					me._vol16.ggParameter.sx = 1;
					me._vol16.ggParameter.sy = 1;
					me._vol16.style[domTransform]=parameterToTransform(me._vol16.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 16)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol16.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol16.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol16.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol16.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol16.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol16.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol16.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol16);
		this._vol17=document.createElement('div');
		this._vol17.ggId="vol17";
		this._vol17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol17.ggVisible=true;
		this._vol17.className='ggskin ggskin_rectangle ';
		this._vol17.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol17.setAttribute('style',hs);
		this._vol17.style[domTransform + 'Origin']='50% 50%';
		me._vol17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol17.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol17.onmouseover=function () {
			me.elementMouseOver['vol17']=true;
		}
		this._vol17.onmouseout=function () {
			me.elementMouseDown['vol17']=false;
			me.elementMouseOver['vol17']=false;
		}
		this._vol17.onmousedown=function () {
			me.elementMouseDown['vol17']=true;
		}
		this._vol17.onmouseup=function () {
			me.elementMouseDown['vol17']=false;
		}
		this._vol17.ontouchend=function () {
			me.elementMouseDown['vol17']=false;
			me.elementMouseOver['vol17']=false;
		}
		me._vol17.ggCurrentLogicStateScaling = -1;
		me._vol17.ggCurrentLogicStateBackgroundColor = -1;
		this._vol17.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol17'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol17.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol17.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol17.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol17.ggCurrentLogicStateScaling == 0) {
					me._vol17.ggParameter.sx = 1.1;
					me._vol17.ggParameter.sy = 1;
					me._vol17.style[domTransform]=parameterToTransform(me._vol17.ggParameter);
				}
				else {
					me._vol17.ggParameter.sx = 1;
					me._vol17.ggParameter.sy = 1;
					me._vol17.style[domTransform]=parameterToTransform(me._vol17.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 17)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol17.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol17.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol17.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol17.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol17.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol17.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol17.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol17);
		this._vol18=document.createElement('div');
		this._vol18.ggId="vol18";
		this._vol18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol18.ggVisible=true;
		this._vol18.className='ggskin ggskin_rectangle ';
		this._vol18.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol18.setAttribute('style',hs);
		this._vol18.style[domTransform + 'Origin']='50% 50%';
		me._vol18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol18.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol18.onmouseover=function () {
			me.elementMouseOver['vol18']=true;
		}
		this._vol18.onmouseout=function () {
			me.elementMouseDown['vol18']=false;
			me.elementMouseOver['vol18']=false;
		}
		this._vol18.onmousedown=function () {
			me.elementMouseDown['vol18']=true;
		}
		this._vol18.onmouseup=function () {
			me.elementMouseDown['vol18']=false;
		}
		this._vol18.ontouchend=function () {
			me.elementMouseDown['vol18']=false;
			me.elementMouseOver['vol18']=false;
		}
		me._vol18.ggCurrentLogicStateScaling = -1;
		me._vol18.ggCurrentLogicStateBackgroundColor = -1;
		this._vol18.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol18'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol18.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol18.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol18.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol18.ggCurrentLogicStateScaling == 0) {
					me._vol18.ggParameter.sx = 1.1;
					me._vol18.ggParameter.sy = 1;
					me._vol18.style[domTransform]=parameterToTransform(me._vol18.ggParameter);
				}
				else {
					me._vol18.ggParameter.sx = 1;
					me._vol18.ggParameter.sy = 1;
					me._vol18.style[domTransform]=parameterToTransform(me._vol18.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 18)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol18.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol18.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol18.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol18.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol18.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol18.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol18.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol18);
		this._vol19=document.createElement('div');
		this._vol19.ggId="vol19";
		this._vol19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol19.ggVisible=true;
		this._vol19.className='ggskin ggskin_rectangle ';
		this._vol19.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol19.setAttribute('style',hs);
		this._vol19.style[domTransform + 'Origin']='50% 50%';
		me._vol19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol19.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol19.onmouseover=function () {
			me.elementMouseOver['vol19']=true;
		}
		this._vol19.onmouseout=function () {
			me.elementMouseDown['vol19']=false;
			me.elementMouseOver['vol19']=false;
		}
		this._vol19.onmousedown=function () {
			me.elementMouseDown['vol19']=true;
		}
		this._vol19.onmouseup=function () {
			me.elementMouseDown['vol19']=false;
		}
		this._vol19.ontouchend=function () {
			me.elementMouseDown['vol19']=false;
			me.elementMouseOver['vol19']=false;
		}
		me._vol19.ggCurrentLogicStateScaling = -1;
		me._vol19.ggCurrentLogicStateBackgroundColor = -1;
		this._vol19.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol19'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol19.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol19.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol19.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol19.ggCurrentLogicStateScaling == 0) {
					me._vol19.ggParameter.sx = 1.1;
					me._vol19.ggParameter.sy = 1;
					me._vol19.style[domTransform]=parameterToTransform(me._vol19.ggParameter);
				}
				else {
					me._vol19.ggParameter.sx = 1;
					me._vol19.ggParameter.sy = 1;
					me._vol19.style[domTransform]=parameterToTransform(me._vol19.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 19)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol19.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol19.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol19.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol19.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol19.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol19.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol19.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol19);
		this._vol20=document.createElement('div');
		this._vol20.ggId="vol20";
		this._vol20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol20.ggVisible=true;
		this._vol20.className='ggskin ggskin_rectangle ';
		this._vol20.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 1px;';
		hs+='border-radius : 1px;';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this._vol20.setAttribute('style',hs);
		this._vol20.style[domTransform + 'Origin']='50% 50%';
		me._vol20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vol20.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vol20.onmouseover=function () {
			me.elementMouseOver['vol20']=true;
		}
		this._vol20.onmouseout=function () {
			me.elementMouseDown['vol20']=false;
			me.elementMouseOver['vol20']=false;
		}
		this._vol20.onmousedown=function () {
			me.elementMouseDown['vol20']=true;
		}
		this._vol20.onmouseup=function () {
			me.elementMouseDown['vol20']=false;
		}
		this._vol20.ontouchend=function () {
			me.elementMouseDown['vol20']=false;
			me.elementMouseOver['vol20']=false;
		}
		me._vol20.ggCurrentLogicStateScaling = -1;
		me._vol20.ggCurrentLogicStateBackgroundColor = -1;
		this._vol20.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vol20'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vol20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vol20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vol20.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol20.ggCurrentLogicStateScaling == 0) {
					me._vol20.ggParameter.sx = 1.1;
					me._vol20.ggParameter.sy = 1;
					me._vol20.style[domTransform]=parameterToTransform(me._vol20.ggParameter);
				}
				else {
					me._vol20.ggParameter.sx = 1;
					me._vol20.ggParameter.sy = 1;
					me._vol20.style[domTransform]=parameterToTransform(me._vol20.ggParameter);
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['mVolume'] >= 20)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vol20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vol20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vol20.style[domTransition]='' + cssPrefix + 'transform 50ms ease 0ms, background-color none';
				if (me._vol20.ggCurrentLogicStateBackgroundColor == 0) {
					me._vol20.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vol20.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._vol20.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._vol20);
		this._soundon=document.createElement('div');
		this._soundon__img=document.createElement('img');
		this._soundon__img.className='ggskin ggskin_svg';
		this._soundon__img.setAttribute('src',basePath + 'images/soundon.svg');
		this._soundon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._soundon__img['ondragstart']=function() { return false; };
		this._soundon.appendChild(this._soundon__img);
		this._soundon__imgo=document.createElement('img');
		this._soundon__imgo.className='ggskin ggskin_svg';
		this._soundon__imgo.setAttribute('src',basePath + 'images/soundon__o.svg');
		this._soundon__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._soundon__imgo['ondragstart']=function() { return false; };
		this._soundon.appendChild(this._soundon__imgo);
		this._soundon.ggId="soundon";
		this._soundon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._soundon.ggVisible=true;
		this._soundon.className='ggskin ggskin_svg ';
		this._soundon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._soundon.setAttribute('style',hs);
		this._soundon.style[domTransform + 'Origin']='50% 50%';
		me._soundon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._soundon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._soundon.onclick=function () {
			me.player.setVolume("_main",0);
			me.player.setVolume("_background",0);
			ggSkinVars['mVolume'] = Number("0");
			me._soundon.style[domTransition]='none';
			me._soundon.style.visibility='hidden';
			me._soundon.ggVisible=false;
			me._soundoff.style[domTransition]='none';
			me._soundoff.style.visibility=(Number(me._soundoff.style.opacity)>0||!me._soundoff.style.opacity)?'inherit':'hidden';
			me._soundoff.ggVisible=true;
		}
		this._soundon.onmouseover=function () {
			me._soundon__img.style.visibility='hidden';
			me._soundon__imgo.style.visibility='inherit';
		}
		this._soundon.onmouseout=function () {
			me._soundon__img.style.visibility='inherit';
			me._soundon__imgo.style.visibility='hidden';
		}
		me._soundon.ggCurrentLogicStateVisible = -1;
		this._soundon.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['mVolume'] == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['mVolume'] > 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._soundon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._soundon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._soundon.style[domTransition]='';
				if (me._soundon.ggCurrentLogicStateVisible == 0) {
					me._soundon.style.visibility="hidden";
					me._soundon.ggVisible=false;
				}
				else if (me._soundon.ggCurrentLogicStateVisible == 1) {
					me._soundon.style.visibility=(Number(me._soundon.style.opacity)>0||!me._soundon.style.opacity)?'inherit':'hidden';
					me._soundon.ggVisible=true;
				}
				else {
					me._soundon.style.visibility=(Number(me._soundon.style.opacity)>0||!me._soundon.style.opacity)?'inherit':'hidden';
					me._soundon.ggVisible=true;
				}
			}
		}
		this._soundon.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._soundon);
		this._soundoff=document.createElement('div');
		this._soundoff__img=document.createElement('img');
		this._soundoff__img.className='ggskin ggskin_svg';
		this._soundoff__img.setAttribute('src',basePath + 'images/soundoff.svg');
		this._soundoff__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._soundoff__img['ondragstart']=function() { return false; };
		this._soundoff.appendChild(this._soundoff__img);
		this._soundoff__imgo=document.createElement('img');
		this._soundoff__imgo.className='ggskin ggskin_svg';
		this._soundoff__imgo.setAttribute('src',basePath + 'images/soundoff__o.svg');
		this._soundoff__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._soundoff__imgo['ondragstart']=function() { return false; };
		this._soundoff.appendChild(this._soundoff__imgo);
		this._soundoff.ggId="soundoff";
		this._soundoff.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._soundoff.ggVisible=false;
		this._soundoff.className='ggskin ggskin_svg ';
		this._soundoff.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		this._soundoff.setAttribute('style',hs);
		this._soundoff.style[domTransform + 'Origin']='50% 50%';
		me._soundoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._soundoff.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._soundoff.onclick=function () {
			me.player.setVolume("_main",0.7);
			me.player.setVolume("_background",0.7);
			ggSkinVars['mVolume'] = Number("14");
			me._soundoff.style[domTransition]='none';
			me._soundoff.style.visibility='hidden';
			me._soundoff.ggVisible=false;
			me._soundon.style[domTransition]='none';
			me._soundon.style.visibility=(Number(me._soundon.style.opacity)>0||!me._soundon.style.opacity)?'inherit':'hidden';
			me._soundon.ggVisible=true;
		}
		this._soundoff.onmouseover=function () {
			me._soundoff__img.style.visibility='hidden';
			me._soundoff__imgo.style.visibility='inherit';
		}
		this._soundoff.onmouseout=function () {
			me._soundoff__img.style.visibility='inherit';
			me._soundoff__imgo.style.visibility='hidden';
		}
		me._soundoff.ggCurrentLogicStateVisible = -1;
		this._soundoff.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['mVolume'] > 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['mVolume'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._soundoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._soundoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._soundoff.style[domTransition]='';
				if (me._soundoff.ggCurrentLogicStateVisible == 0) {
					me._soundoff.style.visibility="hidden";
					me._soundoff.ggVisible=false;
				}
				else if (me._soundoff.ggCurrentLogicStateVisible == 1) {
					me._soundoff.style.visibility=(Number(me._soundoff.style.opacity)>0||!me._soundoff.style.opacity)?'inherit':'hidden';
					me._soundoff.ggVisible=true;
				}
				else {
					me._soundoff.style.visibility="hidden";
					me._soundoff.ggVisible=false;
				}
			}
		}
		this._soundoff.ggUpdatePosition=function () {
		}
		this._volumebar.appendChild(this._soundoff);
		this.divSkin.appendChild(this._volumebar);
		this._tempmap=document.createElement('div');
		this._tempmap__content=document.createElement('div');
		this._tempmap.ggContent=this._tempmap__content;
		this._tempmap.appendChild(this._tempmap__content);
		hs ='';
		hs+='height : 1814px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 2171px;';
		this._tempmap__content.setAttribute('style',hs);
		this._tempmap.ggId="Tempmap";
		this._tempmap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tempmap.ggVisible=false;
		this._tempmap.className='ggskin ggskin_scrollarea ';
		this._tempmap.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 267px;';
		hs+='left : 2px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : hidden;';
		hs+='width : 283px;';
		this._tempmap.setAttribute('style',hs);
		this._tempmap.style[domTransform + 'Origin']='50% 50%';
		me._tempmap.ggIsActive=function() {
			return false;
		}
		me._tempmap.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._tempmap.ggUpdatePosition=function () {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._mapdiv=document.createElement('div');
		this._mapdiv__img=document.createElement('img');
		this._mapdiv__img.className='ggskin ggskin_svg';
		this._mapdiv__img.setAttribute('src',basePath + 'images/mapdiv.svg');
		this._mapdiv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapdiv__img['ondragstart']=function() { return false; };
		this._mapdiv.appendChild(this._mapdiv__img);
		this._mapdiv.ggId="mapdiv";
		this._mapdiv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapdiv.ggVisible=true;
		this._mapdiv.className='ggskin ggskin_svg ';
		this._mapdiv.ggType='svg';
		hs ='';
		hs+='height : 907px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 1085px;';
		this._mapdiv.setAttribute('style',hs);
		this._mapdiv.style[domTransform + 'Origin']='50% 50%';
		me._mapdiv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapdiv.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapdiv.ggUpdatePosition=function () {
		}
		this._mappin_002=document.createElement('div');
		this._mappin_002__img=document.createElement('img');
		this._mappin_002__img.className='ggskin ggskin_svg';
		this._mappin_002__img.setAttribute('src',basePath + 'images/mappin_002.svg');
		this._mappin_002__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mappin_002__img['ondragstart']=function() { return false; };
		this._mappin_002.appendChild(this._mappin_002__img);
		this._mappin_002__imga=document.createElement('img');
		this._mappin_002__imga.className='ggskin ggskin_svg';
		this._mappin_002__imga.setAttribute('src',basePath + 'images/mappin_002__a.svg');
		this._mappin_002__imga.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._mappin_002__imga['ondragstart']=function() { return false; };
		this._mappin_002.appendChild(this._mappin_002__imga);
		this._mappin_002.ggId="mappin_002";
		this._mappin_002.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mappin_002.ggVisible=true;
		this._mappin_002.className='ggskin ggskin_svg ';
		this._mappin_002.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 87px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		this._mappin_002.setAttribute('style',hs);
		this._mappin_002.style[domTransform + 'Origin']='50% 50%';
		me._mappin_002.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mappin_002.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mappin_002.onclick=function () {
			me.player.openNext("{002}","$fwd");
			ggSkinVars['currentPan'] = "002";
		}
		this._mappin_002.onmouseout=function () {
			me._mappin_002__imga.style.visibility='hidden';
		}
		this._mappin_002.onmousedown=function () {
			me._mappin_002__imga.style.visibility='inherit';
		}
		this._mappin_002.onmouseup=function () {
			me._mappin_002__imga.style.visibility='hidden';
		}
		me._mappin_002.ggCurrentLogicStateScaling = -1;
		this._mappin_002.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['currentPan'] == '002')
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mappin_002.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mappin_002.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mappin_002.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._mappin_002.ggCurrentLogicStateScaling == 0) {
					me._mappin_002.ggParameter.sx = 1.4;
					me._mappin_002.ggParameter.sy = 1.4;
					me._mappin_002.style[domTransform]=parameterToTransform(me._mappin_002.ggParameter);
				}
				else {
					me._mappin_002.ggParameter.sx = 1;
					me._mappin_002.ggParameter.sy = 1;
					me._mappin_002.style[domTransform]=parameterToTransform(me._mappin_002.ggParameter);
				}
			}
		}
		this._mappin_002.ggUpdatePosition=function () {
		}
		this._mapdiv.appendChild(this._mappin_002);
		this._mappin_003=document.createElement('div');
		this._mappin_003__img=document.createElement('img');
		this._mappin_003__img.className='ggskin ggskin_svg';
		this._mappin_003__img.setAttribute('src',basePath + 'images/mappin_003.svg');
		this._mappin_003__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mappin_003__img['ondragstart']=function() { return false; };
		this._mappin_003.appendChild(this._mappin_003__img);
		this._mappin_003__imga=document.createElement('img');
		this._mappin_003__imga.className='ggskin ggskin_svg';
		this._mappin_003__imga.setAttribute('src',basePath + 'images/mappin_003__a.svg');
		this._mappin_003__imga.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._mappin_003__imga['ondragstart']=function() { return false; };
		this._mappin_003.appendChild(this._mappin_003__imga);
		this._mappin_003.ggId="mappin_003";
		this._mappin_003.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mappin_003.ggVisible=true;
		this._mappin_003.className='ggskin ggskin_svg ';
		this._mappin_003.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		this._mappin_003.setAttribute('style',hs);
		this._mappin_003.style[domTransform + 'Origin']='50% 50%';
		me._mappin_003.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mappin_003.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mappin_003.onclick=function () {
			me.player.openNext("{003}","$fwd");
			ggSkinVars['currentPan'] = "003";
		}
		this._mappin_003.onmouseout=function () {
			me._mappin_003__imga.style.visibility='hidden';
		}
		this._mappin_003.onmousedown=function () {
			me._mappin_003__imga.style.visibility='inherit';
		}
		this._mappin_003.onmouseup=function () {
			me._mappin_003__imga.style.visibility='hidden';
		}
		me._mappin_003.ggCurrentLogicStateScaling = -1;
		this._mappin_003.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['currentPan'] == '003')
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mappin_003.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mappin_003.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mappin_003.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._mappin_003.ggCurrentLogicStateScaling == 0) {
					me._mappin_003.ggParameter.sx = 1.4;
					me._mappin_003.ggParameter.sy = 1.4;
					me._mappin_003.style[domTransform]=parameterToTransform(me._mappin_003.ggParameter);
				}
				else {
					me._mappin_003.ggParameter.sx = 1;
					me._mappin_003.ggParameter.sy = 1;
					me._mappin_003.style[domTransform]=parameterToTransform(me._mappin_003.ggParameter);
				}
			}
		}
		this._mappin_003.ggUpdatePosition=function () {
		}
		this._mapdiv.appendChild(this._mappin_003);
		this._mappin_001=document.createElement('div');
		this._mappin_001__img=document.createElement('img');
		this._mappin_001__img.className='ggskin ggskin_svg';
		this._mappin_001__img.setAttribute('src',basePath + 'images/mappin_001.svg');
		this._mappin_001__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mappin_001__img['ondragstart']=function() { return false; };
		this._mappin_001.appendChild(this._mappin_001__img);
		this._mappin_001__imga=document.createElement('img');
		this._mappin_001__imga.className='ggskin ggskin_svg';
		this._mappin_001__imga.setAttribute('src',basePath + 'images/mappin_001__a.svg');
		this._mappin_001__imga.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._mappin_001__imga['ondragstart']=function() { return false; };
		this._mappin_001.appendChild(this._mappin_001__imga);
		this._mappin_001.ggId="mappin_001";
		this._mappin_001.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mappin_001.ggVisible=true;
		this._mappin_001.className='ggskin ggskin_svg ';
		this._mappin_001.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 139px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		this._mappin_001.setAttribute('style',hs);
		this._mappin_001.style[domTransform + 'Origin']='50% 50%';
		me._mappin_001.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mappin_001.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mappin_001.onclick=function () {
			me.player.openNext("{index}","$fwd");
			ggSkinVars['currentPan'] = "index";
		}
		this._mappin_001.onmouseout=function () {
			me._mappin_001__imga.style.visibility='hidden';
		}
		this._mappin_001.onmousedown=function () {
			me._mappin_001__imga.style.visibility='inherit';
		}
		this._mappin_001.onmouseup=function () {
			me._mappin_001__imga.style.visibility='hidden';
		}
		me._mappin_001.ggCurrentLogicStateScaling = -1;
		this._mappin_001.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['currentPan'] == 'index')
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mappin_001.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mappin_001.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mappin_001.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._mappin_001.ggCurrentLogicStateScaling == 0) {
					me._mappin_001.ggParameter.sx = 1.4;
					me._mappin_001.ggParameter.sy = 1.4;
					me._mappin_001.style[domTransform]=parameterToTransform(me._mappin_001.ggParameter);
				}
				else {
					me._mappin_001.ggParameter.sx = 1;
					me._mappin_001.ggParameter.sy = 1;
					me._mappin_001.style[domTransform]=parameterToTransform(me._mappin_001.ggParameter);
				}
			}
		}
		this._mappin_001.ggUpdatePosition=function () {
		}
		this._mapdiv.appendChild(this._mappin_001);
		this._mappin_004=document.createElement('div');
		this._mappin_004__img=document.createElement('img');
		this._mappin_004__img.className='ggskin ggskin_svg';
		this._mappin_004__img.setAttribute('src',basePath + 'images/mappin_004.svg');
		this._mappin_004__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mappin_004__img['ondragstart']=function() { return false; };
		this._mappin_004.appendChild(this._mappin_004__img);
		this._mappin_004__imga=document.createElement('img');
		this._mappin_004__imga.className='ggskin ggskin_svg';
		this._mappin_004__imga.setAttribute('src',basePath + 'images/mappin_004__a.svg');
		this._mappin_004__imga.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._mappin_004__imga['ondragstart']=function() { return false; };
		this._mappin_004.appendChild(this._mappin_004__imga);
		this._mappin_004.ggId="mappin_004";
		this._mappin_004.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mappin_004.ggVisible=true;
		this._mappin_004.className='ggskin ggskin_svg ';
		this._mappin_004.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 195px;';
		hs+='position : absolute;';
		hs+='top : 193px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		this._mappin_004.setAttribute('style',hs);
		this._mappin_004.style[domTransform + 'Origin']='50% 50%';
		me._mappin_004.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mappin_004.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mappin_004.onclick=function () {
			me.player.openNext("{004}","$fwd");
			ggSkinVars['currentPan'] = "004";
		}
		this._mappin_004.onmouseout=function () {
			me._mappin_004__imga.style.visibility='hidden';
		}
		this._mappin_004.onmousedown=function () {
			me._mappin_004__imga.style.visibility='inherit';
		}
		this._mappin_004.onmouseup=function () {
			me._mappin_004__imga.style.visibility='hidden';
		}
		me._mappin_004.ggCurrentLogicStateScaling = -1;
		this._mappin_004.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['currentPan'] == '004')
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mappin_004.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mappin_004.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mappin_004.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._mappin_004.ggCurrentLogicStateScaling == 0) {
					me._mappin_004.ggParameter.sx = 1.4;
					me._mappin_004.ggParameter.sy = 1.4;
					me._mappin_004.style[domTransform]=parameterToTransform(me._mappin_004.ggParameter);
				}
				else {
					me._mappin_004.ggParameter.sx = 1;
					me._mappin_004.ggParameter.sy = 1;
					me._mappin_004.style[domTransform]=parameterToTransform(me._mappin_004.ggParameter);
				}
			}
		}
		this._mappin_004.ggUpdatePosition=function () {
		}
		this._mapdiv.appendChild(this._mappin_004);
		this._tempmap__content.appendChild(this._mapdiv);
		this.divSkin.appendChild(this._tempmap);
		this._dark_bg=document.createElement('div');
		this._dark_bg.ggId="dark_bg";
		this._dark_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dark_bg.ggVisible=false;
		this._dark_bg.className='ggskin ggskin_rectangle ';
		this._dark_bg.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1800px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1800px;';
		this._dark_bg.setAttribute('style',hs);
		this._dark_bg.style[domTransform + 'Origin']='50% 50%';
		me._dark_bg.ggIsActive=function() {
			return false;
		}
		me._dark_bg.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._dark_bg.onclick=function () {
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
			me._info_window.style[domTransition]='none';
			me._info_window.style.visibility='hidden';
			me._info_window.ggVisible=false;
			me._info_w_text.ggText="";
			me._info_w_text__text.innerHTML=me._info_w_text.ggText;
			if (me._info_w_text.ggUpdateText) {
				me._info_w_text.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
		}
		this._dark_bg.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._dark_bg);
		this._info_window=document.createElement('div');
		this._info_window__img=document.createElement('img');
		this._info_window__img.className='ggskin ggskin_image';
		this._info_window__img.setAttribute('src',basePath + 'images/info_window.png');
		this._info_window__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_window__img.className='ggskin ggskin_image';
		this._info_window__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._info_window__img);
		this._info_window.appendChild(this._info_window__img);
		this._info_window.ggId="info_window";
		this._info_window.ggLeft=-343;
		this._info_window.ggTop=-343;
		this._info_window.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_window.ggVisible=false;
		this._info_window.className='ggskin ggskin_image ';
		this._info_window.ggType='image';
		hs ='';
		hs+='height : 472px;';
		hs+='left : -343px;';
		hs+='position : absolute;';
		hs+='top : -343px;';
		hs+='visibility : hidden;';
		hs+='width : 688px;';
		this._info_window.setAttribute('style',hs);
		this._info_window.style[domTransform + 'Origin']='50% 50%';
		me._info_window.ggIsActive=function() {
			return false;
		}
		me._info_window.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._info_window.ggCurrentLogicStateScaling = -1;
		this._info_window.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 640) || 
				(me.player.getViewerSize().height <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_window.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_window.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_window.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._info_window.ggCurrentLogicStateScaling == 0) {
					me._info_window.ggParameter.sx = 0.6;
					me._info_window.ggParameter.sy = 0.6;
					me._info_window.style[domTransform]=parameterToTransform(me._info_window.ggParameter);
				}
				else {
					me._info_window.ggParameter.sx = 1;
					me._info_window.ggParameter.sy = 1;
					me._info_window.style[domTransform]=parameterToTransform(me._info_window.ggParameter);
				}
			}
		}
		this._info_window.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._info_window.ggUpdateConditionResize();
		}
		this._info_w_text=document.createElement('div');
		this._info_w_text__text=document.createElement('div');
		this._info_w_text.className='ggskin ggskin_textdiv';
		this._info_w_text.ggTextDiv=this._info_w_text__text;
		this._info_w_text.ggId="info_w_text";
		this._info_w_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_w_text.ggVisible=true;
		this._info_w_text.className='ggskin ggskin_text ';
		this._info_w_text.ggType='text';
		hs ='';
		hs+='height : 324px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 78px;';
		hs+='visibility : inherit;';
		hs+='width : 590px;';
		hs+='font-size:18px;line-height:24px;';
		this._info_w_text.setAttribute('style',hs);
		this._info_w_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 590px;';
		hs+='height: 324px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,0.486275);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_w_text__text.setAttribute('style',hs);
		this._info_w_text__text.innerHTML="";
		this._info_w_text.appendChild(this._info_w_text__text);
		me._info_w_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_w_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_w_text.ggUpdatePosition=function () {
		}
		this._info_window.appendChild(this._info_w_text);
		this._info_w_title=document.createElement('div');
		this._info_w_title__text=document.createElement('div');
		this._info_w_title.className='ggskin ggskin_textdiv';
		this._info_w_title.ggTextDiv=this._info_w_title__text;
		this._info_w_title.ggId="info_w_title";
		this._info_w_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_w_title.ggVisible=true;
		this._info_w_title.className='ggskin ggskin_text ';
		this._info_w_title.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 561px;';
		hs+='font-size: 20px; font-weight: medium;';
		this._info_w_title.setAttribute('style',hs);
		this._info_w_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 561px;';
		hs+='height: 29px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_w_title__text.setAttribute('style',hs);
		this._info_w_title__text.innerHTML="";
		this._info_w_title.appendChild(this._info_w_title__text);
		me._info_w_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_w_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_w_title.ggUpdatePosition=function () {
		}
		this._info_window.appendChild(this._info_w_title);
		this._info_win_close=document.createElement('div');
		this._info_win_close__img=document.createElement('img');
		this._info_win_close__img.className='ggskin ggskin_svg';
		this._info_win_close__img.setAttribute('src',basePath + 'images/info_win_close.svg');
		this._info_win_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_win_close__img['ondragstart']=function() { return false; };
		this._info_win_close.appendChild(this._info_win_close__img);
		this._info_win_close.ggId="info_win_close";
		this._info_win_close.ggLeft=-63;
		this._info_win_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_win_close.ggVisible=true;
		this._info_win_close.className='ggskin ggskin_svg ';
		this._info_win_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -63px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		this._info_win_close.setAttribute('style',hs);
		this._info_win_close.style[domTransform + 'Origin']='50% 50%';
		me._info_win_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_win_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_win_close.onclick=function () {
			me._info_window.style[domTransition]='none';
			me._info_window.style.visibility='hidden';
			me._info_window.ggVisible=false;
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
			me._info_w_text.ggText="";
			me._info_w_text__text.innerHTML=me._info_w_text.ggText;
			if (me._info_w_text.ggUpdateText) {
				me._info_w_text.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
		}
		this._info_win_close.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._info_window.appendChild(this._info_win_close);
		this.divSkin.appendChild(this._info_window);
		this._buttons_social=document.createElement('div');
		this._buttons_social.ggId="buttons_social";
		this._buttons_social.ggLeft=-98;
		this._buttons_social.ggTop=-141;
		this._buttons_social.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttons_social.ggVisible=true;
		this._buttons_social.className='ggskin ggskin_container ';
		this._buttons_social.ggType='container';
		hs ='';
		hs+='height : 186px;';
		hs+='left : -98px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -141px;';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		this._buttons_social.setAttribute('style',hs);
		this._buttons_social.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		me._buttons_social.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._buttons_social.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_twitter=document.createElement('div');
		this._button_twitter__img=document.createElement('img');
		this._button_twitter__img.className='ggskin ggskin_svg';
		this._button_twitter__img.setAttribute('src',basePath + 'images/button_twitter.svg');
		this._button_twitter__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_twitter__img['ondragstart']=function() { return false; };
		this._button_twitter.appendChild(this._button_twitter__img);
		this._button_twitter__imgo=document.createElement('img');
		this._button_twitter__imgo.className='ggskin ggskin_svg';
		this._button_twitter__imgo.setAttribute('src',basePath + 'images/button_twitter__o.svg');
		this._button_twitter__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_twitter__imgo['ondragstart']=function() { return false; };
		this._button_twitter.appendChild(this._button_twitter__imgo);
		this._button_twitter.ggId="button_twitter";
		this._button_twitter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_twitter.ggVisible=true;
		this._button_twitter.className='ggskin ggskin_svg ';
		this._button_twitter.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 84px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._button_twitter.setAttribute('style',hs);
		this._button_twitter.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_twitter.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_twitter.onclick=function () {
			window.open('http:\/\/twitter.com\/share?url=' + location.href);
		}
		this._button_twitter.onmouseover=function () {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
		}
		this._button_twitter.onmouseout=function () {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
		}
		this._button_twitter.ggUpdatePosition=function () {
		}
		this._buttons_social.appendChild(this._button_twitter);
		this._button_facebook=document.createElement('div');
		this._button_facebook__img=document.createElement('img');
		this._button_facebook__img.className='ggskin ggskin_svg';
		this._button_facebook__img.setAttribute('src',basePath + 'images/button_facebook.svg');
		this._button_facebook__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_facebook__img['ondragstart']=function() { return false; };
		this._button_facebook.appendChild(this._button_facebook__img);
		this._button_facebook__imgo=document.createElement('img');
		this._button_facebook__imgo.className='ggskin ggskin_svg';
		this._button_facebook__imgo.setAttribute('src',basePath + 'images/button_facebook__o.svg');
		this._button_facebook__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_facebook__imgo['ondragstart']=function() { return false; };
		this._button_facebook.appendChild(this._button_facebook__imgo);
		this._button_facebook.ggId="button_facebook";
		this._button_facebook.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_facebook.ggVisible=true;
		this._button_facebook.className='ggskin ggskin_svg ';
		this._button_facebook.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._button_facebook.setAttribute('style',hs);
		this._button_facebook.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_facebook.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_facebook.onclick=function () {
			window.open('https:\/\/www.facebook.com\/sharer\/sharer.php?u=http%3A%2F%2Fasvm.tk%2F#'+me.ggUserdata.information);
		}
		this._button_facebook.onmouseover=function () {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		this._button_facebook.onmouseout=function () {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		this._button_facebook.ggUpdatePosition=function () {
		}
		this._buttons_social.appendChild(this._button_facebook);
		this.divSkin.appendChild(this._buttons_social);
		this._fullscreenwin=document.createElement('div');
		this._fullscreenwin__text=document.createElement('div');
		this._fullscreenwin.className='ggskin ggskin_textdiv';
		this._fullscreenwin.ggTextDiv=this._fullscreenwin__text;
		this._fullscreenwin.ggId="fullScreenWin";
		this._fullscreenwin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreenwin.ggVisible=false;
		this._fullscreenwin.className='ggskin ggskin_text ';
		this._fullscreenwin.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._fullscreenwin.setAttribute('style',hs);
		this._fullscreenwin.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._fullscreenwin__text.setAttribute('style',hs);
		this._fullscreenwin__text.innerHTML="";
		this._fullscreenwin.appendChild(this._fullscreenwin__text);
		me._fullscreenwin.ggIsActive=function() {
			return false;
		}
		me._fullscreenwin.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fullscreenwin.ggUpdatePosition=function () {
		}
		this._roundclose=document.createElement('div');
		this._roundclose.ggId="roundClose";
		this._roundclose.ggLeft=-43;
		this._roundclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._roundclose.ggVisible=true;
		this._roundclose.className='ggskin ggskin_rectangle ';
		this._roundclose.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 30px;';
		hs+='left : -43px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._roundclose.setAttribute('style',hs);
		this._roundclose.style[domTransform + 'Origin']='50% 50%';
		me._roundclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._roundclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._roundclose.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._fullscreenwin.appendChild(this._roundclose);
		this._fullscreenvideoclose=document.createElement('div');
		this._fullscreenvideoclose__img=document.createElement('img');
		this._fullscreenvideoclose__img.className='ggskin ggskin_svg';
		this._fullscreenvideoclose__img.setAttribute('src',basePath + 'images/fullscreenvideoclose.svg');
		this._fullscreenvideoclose__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreenvideoclose__img['ondragstart']=function() { return false; };
		this._fullscreenvideoclose.appendChild(this._fullscreenvideoclose__img);
		this._fullscreenvideoclose.ggId="fullScreenVideoClose";
		this._fullscreenvideoclose.ggLeft=-35;
		this._fullscreenvideoclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreenvideoclose.ggVisible=true;
		this._fullscreenvideoclose.className='ggskin ggskin_svg ';
		this._fullscreenvideoclose.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		this._fullscreenvideoclose.setAttribute('style',hs);
		this._fullscreenvideoclose.style[domTransform + 'Origin']='50% 50%';
		me._fullscreenvideoclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreenvideoclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreenvideoclose.onclick=function () {
			me._fullscreenwin.style[domTransition]='none';
			me._fullscreenwin.style.visibility='hidden';
			me._fullscreenwin.ggVisible=false;
			me._fullscreenwin.ggText="";
			me._fullscreenwin__text.innerHTML=me._fullscreenwin.ggText;
			if (me._fullscreenwin.ggUpdateText) {
				me._fullscreenwin.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			me.player.setVolume("_main",0.7);
			me.player.setVolume("_background",0.7);
		}
		this._fullscreenvideoclose.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._fullscreenwin.appendChild(this._fullscreenvideoclose);
		this.divSkin.appendChild(this._fullscreenwin);
		this._cover=document.createElement('div');
		this._cover__text=document.createElement('div');
		this._cover.className='ggskin ggskin_textdiv';
		this._cover.ggTextDiv=this._cover__text;
		this._cover.ggId="cover";
		this._cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cover.ggVisible=true;
		this._cover.className='ggskin ggskin_text ';
		this._cover.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._cover.setAttribute('style',hs);
		this._cover.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._cover__text.setAttribute('style',hs);
		this._cover__text.innerHTML="";
		this._cover.appendChild(this._cover__text);
		me._cover.ggIsActive=function() {
			return false;
		}
		me._cover.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._cover.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._cover.style[domTransition]='none';
			} else {
				me._cover.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cover.style.opacity='0';
			me._cover.style.visibility='hidden';
		}
		this._cover.ggUpdatePosition=function () {
		}
		this._bigalesha=document.createElement('div');
		this._bigalesha__img=document.createElement('img');
		this._bigalesha__img.className='ggskin ggskin_svg';
		this._bigalesha__img.setAttribute('src',basePath + 'images/bigalesha.svg');
		this._bigalesha__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._bigalesha__img['ondragstart']=function() { return false; };
		this._bigalesha.appendChild(this._bigalesha__img);
		this._bigalesha.ggId="big-alesha";
		this._bigalesha.ggLeft=-118;
		this._bigalesha.ggTop=-96;
		this._bigalesha.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bigalesha.ggVisible=true;
		this._bigalesha.className='ggskin ggskin_svg ';
		this._bigalesha.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 161px;';
		hs+='left : -118px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		this._bigalesha.setAttribute('style',hs);
		this._bigalesha.style[domTransform + 'Origin']='50% 50%';
		me._bigalesha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._bigalesha.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._bigalesha.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._cover.appendChild(this._bigalesha);
		this.divSkin.appendChild(this._cover);
		me._arrowsinside.style[domTransition]='none';
		me._arrowsinside.ggParameter.a="45.0000";
		me._arrowsinside.style[domTransform]=parameterToTransform(me._arrowsinside.ggParameter);
		me.player.stopSound("_background");
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._curvedtest.ggText="<div class=\"text\">\n  <svg>\n   <defs>\n     <mask id=\"mask\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" >\n       <!-- alpha rectangle -->\n       <rect id=\"alpha\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\/>\n       <!-- All text that you want -->\n       <text id=\"title\" x=\"50%\" y=\"0\" dy=\"1em\">"+me.ggUserdata.description+"<\/text>\n     <\/mask>\n    <\/defs>\n    <!-- Apply color here! -->\n    <rect id=\"base\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\/>\n  <\/svg>\n<\/div>";
			me._curvedtest__text.innerHTML=me._curvedtest.ggText;
			if (me._curvedtest.ggUpdateText) {
				me._curvedtest.ggUpdateText=function() {
					var hs="<div class=\"text\">\n  <svg>\n   <defs>\n     <mask id=\"mask\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" >\n       <!-- alpha rectangle -->\n       <rect id=\"alpha\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\/>\n       <!-- All text that you want -->\n       <text id=\"title\" x=\"50%\" y=\"0\" dy=\"1em\">"+me.ggUserdata.description+"<\/text>\n     <\/mask>\n    <\/defs>\n    <!-- Apply color here! -->\n    <rect id=\"base\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"\/>\n  <\/svg>\n<\/div>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			ggSkinVars['currentPan'] = me.ggUserdata.information;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._thumbnail_cloner.ggNodeChange();
		me._gyro.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._pan_title.ggUpdateText();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseDown['arrow_up']) {
			me.player.changeTiltLog(1.4,true);
		}
		if (me.elementMouseDown['arrow_right']) {
			me.player.changePanLog(-1.4,true);
		}
		if (me.elementMouseDown['arrow_left']) {
			me.player.changePanLog(1.4,true);
		}
		if (me.elementMouseDown['arrow_down']) {
			me.player.changeTiltLog(-1.4,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1.4,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1.4,true);
		}
		if (me.elementMouseDown['vol1']) {
			ggSkinVars['mVolume'] = Number("1");
			me.player.setVolume("_main",0.05);
			me.player.setVolume("_background",0.05);
		}
		if (me.elementMouseOver['vol1']) {
		}
		me._vol1.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol2']) {
			ggSkinVars['mVolume'] = Number("2");
			me.player.setVolume("_main",0.1);
			me.player.setVolume("_background",0.1);
		}
		if (me.elementMouseOver['vol2']) {
		}
		me._vol2.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol3']) {
			ggSkinVars['mVolume'] = Number("3");
			me.player.setVolume("_main",0.15);
			me.player.setVolume("_background",0.15);
		}
		if (me.elementMouseOver['vol3']) {
		}
		me._vol3.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol4']) {
			ggSkinVars['mVolume'] = Number("4");
			me.player.setVolume("_main",0.2);
			me.player.setVolume("_background",0.2);
		}
		if (me.elementMouseOver['vol4']) {
		}
		me._vol4.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol5']) {
			ggSkinVars['mVolume'] = Number("5");
			me.player.setVolume("_main",0.25);
			me.player.setVolume("_background",0.25);
		}
		if (me.elementMouseOver['vol5']) {
		}
		me._vol5.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol6']) {
			ggSkinVars['mVolume'] = Number("6");
			me.player.setVolume("_main",0.3);
			me.player.setVolume("_background",0.3);
		}
		if (me.elementMouseOver['vol6']) {
		}
		me._vol6.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol7']) {
			ggSkinVars['mVolume'] = Number("7");
			me.player.setVolume("_main",0.35);
			me.player.setVolume("_background",0.35);
		}
		if (me.elementMouseOver['vol7']) {
		}
		me._vol7.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol8']) {
			ggSkinVars['mVolume'] = Number("8");
			me.player.setVolume("_main",0.4);
			me.player.setVolume("_background",0.4);
		}
		if (me.elementMouseOver['vol8']) {
		}
		me._vol8.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol9']) {
			ggSkinVars['mVolume'] = Number("9");
			me.player.setVolume("_main",0.45);
			me.player.setVolume("_background",0.45);
		}
		if (me.elementMouseOver['vol9']) {
		}
		me._vol9.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol10']) {
			ggSkinVars['mVolume'] = Number("10");
			me.player.setVolume("_main",0.5);
			me.player.setVolume("_background",0.5);
		}
		if (me.elementMouseOver['vol10']) {
		}
		me._vol10.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol11']) {
			ggSkinVars['mVolume'] = Number("11");
			me.player.setVolume("_main",0.55);
			me.player.setVolume("_background",0.55);
		}
		if (me.elementMouseOver['vol11']) {
		}
		me._vol11.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol12']) {
			ggSkinVars['mVolume'] = Number("12");
			me.player.setVolume("_main",0.6);
			me.player.setVolume("_background",0.6);
		}
		if (me.elementMouseOver['vol12']) {
		}
		me._vol12.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol13']) {
			ggSkinVars['mVolume'] = Number("13");
			me.player.setVolume("_main",0.65);
			me.player.setVolume("_background",0.65);
		}
		if (me.elementMouseOver['vol13']) {
		}
		me._vol13.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol14']) {
			ggSkinVars['mVolume'] = Number("14");
			me.player.setVolume("_main",0.7);
			me.player.setVolume("_background",0.7);
		}
		if (me.elementMouseOver['vol14']) {
		}
		me._vol14.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol15']) {
			ggSkinVars['mVolume'] = Number("15");
			me.player.setVolume("_main",0.75);
			me.player.setVolume("_background",0.75);
		}
		if (me.elementMouseOver['vol15']) {
		}
		me._vol15.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol16']) {
			ggSkinVars['mVolume'] = Number("16");
			me.player.setVolume("_main",0.8);
			me.player.setVolume("_background",0.8);
		}
		if (me.elementMouseOver['vol16']) {
		}
		me._vol16.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol17']) {
			ggSkinVars['mVolume'] = Number("17");
			me.player.setVolume("_main",0.85);
			me.player.setVolume("_background",0.85);
		}
		if (me.elementMouseOver['vol17']) {
		}
		me._vol17.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol18']) {
			ggSkinVars['mVolume'] = Number("18");
			me.player.setVolume("_main",0.9);
			me.player.setVolume("_background",0.9);
		}
		if (me.elementMouseOver['vol18']) {
		}
		me._vol18.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol19']) {
			ggSkinVars['mVolume'] = Number("19");
			me.player.setVolume("_main",0.95);
			me.player.setVolume("_background",0.95);
		}
		if (me.elementMouseOver['vol19']) {
		}
		me._vol19.ggUpdateConditionTimer();
		if (me.elementMouseDown['vol20']) {
			ggSkinVars['mVolume'] = Number("20");
			me.player.setVolume("_main",1);
			me.player.setVolume("_background",1);
		}
		if (me.elementMouseOver['vol20']) {
		}
		me._vol20.ggUpdateConditionTimer();
		me._soundon.ggUpdateConditionTimer();
		me._soundoff.ggUpdateConditionTimer();
		me._mappin_002.ggUpdateConditionTimer();
		me._mappin_003.ggUpdateConditionTimer();
		me._mappin_001.ggUpdateConditionTimer();
		me._mappin_004.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 298px;';
			hs+='position : absolute;';
			hs+='top : 367px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				yaCounter38912325.reachGoal(me.hotspot.id); return true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me._point_preview.style[domTransition]='none';
				me._point_preview.style.opacity='0';
				me._point_preview.style.visibility='hidden';
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_node_image=document.createElement('div');
			this._ht_node_image__img=document.createElement('img');
			this._ht_node_image__img.className='ggskin ggskin_svg';
			this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.svg');
			this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_image__img['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__img);
			this._ht_node_image__imgo=document.createElement('img');
			this._ht_node_image__imgo.className='ggskin ggskin_svg';
			this._ht_node_image__imgo.setAttribute('src',basePath + 'images/ht_node_image__o.svg');
			this._ht_node_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_node_image__imgo['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__imgo);
			this._ht_node_image.ggId="ht_node_image";
			this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_image.ggVisible=true;
			this._ht_node_image.className='ggskin ggskin_svg ';
			this._ht_node_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 47px;';
			hs+='left : -14px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._ht_node_image.setAttribute('style',hs);
			this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_node_image.onclick=function () {
				me.player.openNext("{"+me.hotspot.title+"}",me.player.getFov().toFixed(1));
				ggSkinVars['currentPan'] = me.hotspot.title;
			}
			this._ht_node_image.onmouseover=function () {
				me._ht_node_image__img.style.visibility='hidden';
				me._ht_node_image__imgo.style.visibility='inherit';
			}
			this._ht_node_image.onmouseout=function () {
				me._ht_node_image__img.style.visibility='inherit';
				me._ht_node_image__imgo.style.visibility='hidden';
			}
			this._ht_node_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_node_image);
			this._point_preview=document.createElement('div');
			this._point_preview__text=document.createElement('div');
			this._point_preview.className='ggskin ggskin_textdiv';
			this._point_preview.ggTextDiv=this._point_preview__text;
			this._point_preview.ggId="point_preview";
			this._point_preview.ggLeft=-102;
			this._point_preview.ggTop=-151;
			this._point_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._point_preview.ggVisible=true;
			this._point_preview.className='ggskin ggskin_text ';
			this._point_preview.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 104px;';
			hs+='left : -102px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -151px;';
			hs+='visibility : hidden;';
			hs+='width : 202px;';
			this._point_preview.setAttribute('style',hs);
			this._point_preview.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 202px;';
			hs+='height: 104px;';
			hs+='background: #dc493c;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 2px;';
			hs+=cssPrefix + 'border-radius: 2px;';
			hs+='color: #000000;';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._point_preview__text.setAttribute('style',hs);
			this._point_preview.ggUpdateText=function() {
				var hs="<div style=\"margin:2px 2px 2px 1px\"><img src=\"images\/thumbnail_nodeimage_"+me.hotspot.title+".jpg\" alt=\""+me.ggUserdata.description+"\" width=\"200\" height=\"100\">";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._point_preview.ggUpdateText();
			this._point_preview.appendChild(this._point_preview__text);
			me._point_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._point_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._point_preview.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._point_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					if (me.player.transitionsDisabled) {
						me._point_preview.style[domTransition]='none';
					} else {
						me._point_preview.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._point_preview.style.opacity='1';
					me._point_preview.style.visibility=me._point_preview.ggVisible?'inherit':'hidden';
				}
				me._point_preview.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_zoom') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_zoom";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 147px;';
			hs+='position : absolute;';
			hs+='top : 178px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._zoom_dumb=document.createElement('div');
			this._zoom_dumb.ggId="zoom_dumb";
			this._zoom_dumb.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._zoom_dumb.ggVisible=true;
			this._zoom_dumb.className='ggskin ggskin_rectangle curVideo';
			this._zoom_dumb.ggType='rectangle';
			hs ='';
			hs+='background : #ffffff;';
			hs+='border : 0px solid #000000;';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='opacity : 0.01;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._zoom_dumb.setAttribute('style',hs);
			this._zoom_dumb.style[domTransform + 'Origin']='50% 50%';
			me._zoom_dumb.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._zoom_dumb.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._zoom_dumb.onclick=function () {
				me.player.moveTo(me.hotspot.title,"1.0000");
			}
			me._zoom_dumb.ggCurrentLogicStateScaling = -1;
			this._zoom_dumb.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(me.player.getFov() < 50)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._zoom_dumb.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._zoom_dumb.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._zoom_dumb.style[domTransition]='' + cssPrefix + 'transform none';
					if (me._zoom_dumb.ggCurrentLogicStateScaling == 0) {
						me._zoom_dumb.ggParameter.sx = 0;
						me._zoom_dumb.ggParameter.sy = 0;
						me._zoom_dumb.style[domTransform]=parameterToTransform(me._zoom_dumb.ggParameter);
					}
					else {
						me._zoom_dumb.ggParameter.sx = 1;
						me._zoom_dumb.ggParameter.sy = 1;
						me._zoom_dumb.style[domTransform]=parameterToTransform(me._zoom_dumb.ggParameter);
					}
				}
			}
			this._zoom_dumb.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._zoom_dumb);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._zoom_dumb.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 147px;';
			hs+='position : absolute;';
			hs+='top : 178px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				yaCounter38912325.reachGoal(me.hotspot.id); return true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_1=document.createElement('div');
			this._svg_1__img=document.createElement('img');
			this._svg_1__img.className='ggskin ggskin_svg';
			this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
			this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_1__img['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__img);
			this._svg_1__imgo=document.createElement('img');
			this._svg_1__imgo.className='ggskin ggskin_svg';
			this._svg_1__imgo.setAttribute('src',basePath + 'images/svg_1__o.svg');
			this._svg_1__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._svg_1__imgo['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__imgo);
			this._svg_1.ggId="Svg 1";
			this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_1.ggVisible=true;
			this._svg_1.className='ggskin ggskin_svg ';
			this._svg_1.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 27px;';
			hs+='left : -11px;';
			hs+='position : absolute;';
			hs+='top : -12px;';
			hs+='visibility : inherit;';
			hs+='width : 27px;';
			this._svg_1.setAttribute('style',hs);
			this._svg_1.style[domTransform + 'Origin']='50% 50%';
			me._svg_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_1.onclick=function () {
				me.skin._info_window.style[domTransition]='none';
				me.skin._info_window.style.visibility=(Number(me.skin._info_window.style.opacity)>0||!me.skin._info_window.style.opacity)?'inherit':'hidden';
				me.skin._info_window.ggVisible=true;
				me.skin._info_w_title.ggText="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.title+"<\/div>";
				me.skin._info_w_title__text.innerHTML=me.skin._info_w_title.ggText;
				if (me.skin._info_w_title.ggUpdateText) {
					me.skin._info_w_title.ggUpdateText=function() {
						var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.title+"<\/div>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_w_text.ggText="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.description+"<\/div>";
				me.skin._info_w_text__text.innerHTML=me.skin._info_w_text.ggText;
				if (me.skin._info_w_text.ggUpdateText) {
					me.skin._info_w_text.ggUpdateText=function() {
						var hs="<div style=\"font-family: 'Roboto', Arial !important; font-weight: 200\">"+me.hotspot.description+"<\/div>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._dark_bg.style[domTransition]='none';
				me.skin._dark_bg.style.visibility=(Number(me.skin._dark_bg.style.opacity)>0||!me.skin._dark_bg.style.opacity)?'inherit':'hidden';
				me.skin._dark_bg.ggVisible=true;
			}
			this._svg_1.onmouseover=function () {
				me._svg_1__img.style.visibility='hidden';
				me._svg_1__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_1']=true;
			}
			this._svg_1.onmouseout=function () {
				me._txt_hotspot.style[domTransition]='none';
				me._txt_hotspot.style.visibility='hidden';
				me._txt_hotspot.ggVisible=false;
				me._svg_1__img.style.visibility='inherit';
				me._svg_1__imgo.style.visibility='hidden';
				me.elementMouseOver['svg_1']=false;
			}
			this._svg_1.ontouchend=function () {
				me.elementMouseOver['svg_1']=false;
			}
			me._svg_1.ggCurrentLogicStateScaling = -1;
			this._svg_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(me.player.getFov() > 50)
				)
				{
					newLogicStateScaling = 0;
				}
				else if (
					(me.player.getFov() <= 50)
				)
				{
					newLogicStateScaling = 1;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._svg_1.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
					if (me._svg_1.ggCurrentLogicStateScaling == 0) {
						me._svg_1.ggParameter.sx = 0;
						me._svg_1.ggParameter.sy = 0;
						me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
					}
					else if (me._svg_1.ggCurrentLogicStateScaling == 1) {
						me._svg_1.ggParameter.sx = 1;
						me._svg_1.ggParameter.sy = 1;
						me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
					}
					else {
						me._svg_1.ggParameter.sx = 1;
						me._svg_1.ggParameter.sy = 1;
						me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
					}
				}
			}
			this._svg_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_1);
			this._txt_hotspot=document.createElement('div');
			this._txt_hotspot__text=document.createElement('div');
			this._txt_hotspot.className='ggskin ggskin_textdiv';
			this._txt_hotspot.ggTextDiv=this._txt_hotspot__text;
			this._txt_hotspot.ggId="txt_hotspot";
			this._txt_hotspot.ggLeft=-49;
			this._txt_hotspot.ggTop=-41;
			this._txt_hotspot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._txt_hotspot.ggVisible=false;
			this._txt_hotspot.className='ggskin ggskin_text ';
			this._txt_hotspot.ggType='text';
			hs ='';
			hs+='height : 26px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : hidden;';
			hs+='width : 94px;';
			this._txt_hotspot.setAttribute('style',hs);
			this._txt_hotspot.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #4a90e2;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 10px;';
			hs+=cssPrefix + 'border-radius: 10px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			hs+='overflow-y: auto;';
			this._txt_hotspot__text.setAttribute('style',hs);
			this._txt_hotspot__text.innerHTML="<div style=\"padding: 4px 12px\">"+me.hotspot.title+"<\/div>";
			this._txt_hotspot.appendChild(this._txt_hotspot__text);
			me._txt_hotspot.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._txt_hotspot.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._txt_hotspot.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._txt_hotspot);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['svg_1']) {
					me._txt_hotspot.style[domTransition]='none';
					me._txt_hotspot.style.visibility=(Number(me._txt_hotspot.style.opacity)>0||!me._txt_hotspot.style.opacity)?'inherit':'hidden';
					me._txt_hotspot.ggVisible=true;
				}
				me._svg_1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_audio') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_audio";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 316px;';
			hs+='position : absolute;';
			hs+='top : 249px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._audio_dumb=document.createElement('div');
			this._audio_dumb.ggId="audio_dumb";
			this._audio_dumb.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._audio_dumb.ggVisible=true;
			this._audio_dumb.className='ggskin ggskin_rectangle curAudio';
			this._audio_dumb.ggType='rectangle';
			hs ='';
			hs+='background : #ffffff;';
			hs+='border : 0px solid #000000;';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='opacity : 0.01;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._audio_dumb.setAttribute('style',hs);
			this._audio_dumb.style[domTransform + 'Origin']='50% 50%';
			me._audio_dumb.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._audio_dumb.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._audio_dumb.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._audio_dumb);
			this.ggUse3d=true;
			this.gg3dDistance=500;
		} else
		if (hotspot.skinid=='ht_video') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 319px;';
			hs+='position : absolute;';
			hs+='top : 109px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._video_dumb=document.createElement('div');
			this._video_dumb.ggId="video_dumb";
			this._video_dumb.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._video_dumb.ggVisible=true;
			this._video_dumb.className='ggskin ggskin_rectangle curVideo';
			this._video_dumb.ggType='rectangle';
			hs ='';
			hs+='background : #ffaa7f;';
			hs+='border : 0px solid #000001;';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='opacity : 0.01;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._video_dumb.setAttribute('style',hs);
			this._video_dumb.style[domTransform + 'Origin']='50% 50%';
			me._video_dumb.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._video_dumb.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._video_dumb.onclick=function () {
				me.skin._fullscreenwin.ggText="<iframe class=\"yvideo\" id=\"video\" src=\"\/\/www.youtube.com\/embed\/"+me.hotspot.description+"?rel=0&autoplay=1&modestbranding=1&theme=dark\" frameborder=\"0\" width=\"592\" height=\"318\" allowfullscreen><\/iframe>";
				me.skin._fullscreenwin__text.innerHTML=me.skin._fullscreenwin.ggText;
				if (me.skin._fullscreenwin.ggUpdateText) {
					me.skin._fullscreenwin.ggUpdateText=function() {
						var hs="<iframe class=\"yvideo\" id=\"video\" src=\"\/\/www.youtube.com\/embed\/"+me.hotspot.description+"?rel=0&autoplay=1&modestbranding=1&theme=dark\" frameborder=\"0\" width=\"592\" height=\"318\" allowfullscreen><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._fullscreenwin.style[domTransition]='none';
				me.skin._fullscreenwin.style.visibility=(Number(me.skin._fullscreenwin.style.opacity)>0||!me.skin._fullscreenwin.style.opacity)?'inherit':'hidden';
				me.skin._fullscreenwin.ggVisible=true;
				me.player.setVolume("_main",0);
				me.player.setVolume("_background",0);
			}
			this._video_dumb.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._video_dumb);
			this.ggUse3d=true;
			this.gg3dDistance=500;
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_dae";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 252px;';
			hs+='position : absolute;';
			hs+='top : 485px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._a112=document.createElement('div');
			this._a112__text=document.createElement('div');
			this._a112.className='ggskin ggskin_textdiv';
			this._a112.ggTextDiv=this._a112__text;
			this._a112.ggId="a112";
			this._a112.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._a112.ggVisible=true;
			this._a112.className='ggskin ggskin_text ';
			this._a112.ggType='text';
			hs ='';
			hs+='height : 509px;';
			hs+='left : -224px;';
			hs+='position : absolute;';
			hs+='top : -450px;';
			hs+='visibility : inherit;';
			hs+='width : 561px;';
			this._a112.setAttribute('style',hs);
			this._a112.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 561px;';
			hs+='height: 509px;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._a112__text.setAttribute('style',hs);
			this._a112__text.innerHTML="<canvas id=\"c\"><\/canvas>";
			this._a112.appendChild(this._a112__text);
			me._a112.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._a112.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._a112.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._a112);
			this.ggUse3d=true;
			this.gg3dDistance=500;
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 208px; height: 110px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function () {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
			ggSkinVars['currentPan'] = "{"+me.ggNodeId+"}";
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function () {
		}
		this._checkmark_tick=document.createElement('div');
		this._checkmark_tick__img=document.createElement('img');
		this._checkmark_tick__img.className='ggskin ggskin_svg';
		this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
		this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkmark_tick__img['ondragstart']=function() { return false; };
		this._checkmark_tick.appendChild(this._checkmark_tick__img);
		this._checkmark_tick.ggId="checkmark_tick";
		this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkmark_tick.ggVisible=false;
		this._checkmark_tick.className='ggskin ggskin_svg ';
		this._checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		this._checkmark_tick.setAttribute('style',hs);
		this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function () {
		}
		this._thumbnail_nodeimage.appendChild(this._checkmark_tick);
		this._thumbnail_active=document.createElement('div');
		this._thumbnail_active.ggId="Thumbnail Active";
		this._thumbnail_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active.ggVisible=true;
		this._thumbnail_active.className='ggskin ggskin_rectangle ';
		this._thumbnail_active.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='height : 97px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		this._thumbnail_active.setAttribute('style',hs);
		this._thumbnail_active.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active.onmouseover=function () {
			me.elementMouseOver['thumbnail_active']=true;
		}
		this._thumbnail_active.onmouseout=function () {
			me.elementMouseOver['thumbnail_active']=false;
		}
		this._thumbnail_active.ontouchend=function () {
			me.elementMouseOver['thumbnail_active']=false;
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color none';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		this._thumbnail_active.ggUpdatePosition=function () {
		}
		this._thumbnail_nodeimage.appendChild(this._thumbnail_active);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	this.addSkin();
};
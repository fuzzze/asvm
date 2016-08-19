// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: Moi-tour.ggsk
// Generated Fri Aug 19 18:31:26 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['currentPan'] = 'index';
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
		hs+='left : 76px;';
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
		this._logo_white=document.createElement('div');
		this._logo_white__img=document.createElement('img');
		this._logo_white__img.className='ggskin ggskin_svg';
		this._logo_white__img.setAttribute('src',basePath + 'images/logo_white.svg');
		this._logo_white__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._logo_white__img['ondragstart']=function() { return false; };
		this._logo_white.appendChild(this._logo_white__img);
		this._logo_white.ggId="logo_white";
		this._logo_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo_white.ggVisible=true;
		this._logo_white.className='ggskin ggskin_svg ';
		this._logo_white.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		this._logo_white.setAttribute('style',hs);
		this._logo_white.style[domTransform + 'Origin']='50% 50%';
		me._logo_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._logo_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._logo_white.ggUpdatePosition=function () {
		}
		this._top_menu.appendChild(this._logo_white);
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
		hs+='top : 392px;';
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
		hs+='top : 336px;';
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
		this._gyro.ggVisible=true;
		this._gyro.className='ggskin ggskin_svg ';
		this._gyro.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 280px;';
		hs+='visibility : inherit;';
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
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
			}
		}
		this._gyro.ggUpdatePosition=function () {
		}
		this._gyro.ggNodeChange=function () {
			me._gyro.ggUpdateConditionNodeChange();
		}
		this._main_menu.appendChild(this._gyro);
		this._rotate=document.createElement('div');
		this._rotate__img=document.createElement('img');
		this._rotate__img.className='ggskin ggskin_svg';
		this._rotate__img.setAttribute('src',basePath + 'images/rotate.svg');
		this._rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rotate__img['ondragstart']=function() { return false; };
		this._rotate.appendChild(this._rotate__img);
		this._rotate__imgo=document.createElement('img');
		this._rotate__imgo.className='ggskin ggskin_svg';
		this._rotate__imgo.setAttribute('src',basePath + 'images/rotate__o.svg');
		this._rotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._rotate__imgo['ondragstart']=function() { return false; };
		this._rotate.appendChild(this._rotate__imgo);
		this._rotate.ggId="rotate";
		this._rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rotate.ggVisible=true;
		this._rotate.className='ggskin ggskin_svg ';
		this._rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 224px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._rotate.setAttribute('style',hs);
		this._rotate.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._rotate.onmouseover=function () {
			me._rotate__img.style.visibility='hidden';
			me._rotate__imgo.style.visibility='inherit';
		}
		this._rotate.onmouseout=function () {
			me._rotate__img.style.visibility='inherit';
			me._rotate__imgo.style.visibility='hidden';
		}
		this._rotate.ggUpdatePosition=function () {
		}
		this._main_menu.appendChild(this._rotate);
		this._sound=document.createElement('div');
		this._sound__img=document.createElement('img');
		this._sound__img.className='ggskin ggskin_svg';
		this._sound__img.setAttribute('src',basePath + 'images/sound.svg');
		this._sound__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sound__img['ondragstart']=function() { return false; };
		this._sound.appendChild(this._sound__img);
		this._sound__imgo=document.createElement('img');
		this._sound__imgo.className='ggskin ggskin_svg';
		this._sound__imgo.setAttribute('src',basePath + 'images/sound__o.svg');
		this._sound__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._sound__imgo['ondragstart']=function() { return false; };
		this._sound.appendChild(this._sound__imgo);
		this._sound.ggId="sound";
		this._sound.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sound.ggVisible=true;
		this._sound.className='ggskin ggskin_svg ';
		this._sound.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 168px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._sound.setAttribute('style',hs);
		this._sound.style[domTransform + 'Origin']='50% 50%';
		me._sound.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sound.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sound.onclick=function () {
			me.player.activateSound("Element01","2");
			me.player.playPauseSound("Element01","1");
		}
		this._sound.onmouseover=function () {
			me._sound__img.style.visibility='hidden';
			me._sound__imgo.style.visibility='inherit';
		}
		this._sound.onmouseout=function () {
			me._sound__img.style.visibility='inherit';
			me._sound__imgo.style.visibility='hidden';
		}
		this._sound.ggUpdatePosition=function () {
		}
		this._main_menu.appendChild(this._sound);
		this._home=document.createElement('div');
		this._home__img=document.createElement('img');
		this._home__img.className='ggskin ggskin_svg';
		this._home__img.setAttribute('src',basePath + 'images/home.svg');
		this._home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._home__img['ondragstart']=function() { return false; };
		this._home.appendChild(this._home__img);
		this._home__imgo=document.createElement('img');
		this._home__imgo.className='ggskin ggskin_svg';
		this._home__imgo.setAttribute('src',basePath + 'images/home__o.svg');
		this._home__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._home__imgo['ondragstart']=function() { return false; };
		this._home.appendChild(this._home__imgo);
		this._home.ggId="home";
		this._home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._home.ggVisible=true;
		this._home.className='ggskin ggskin_svg ';
		this._home.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		this._home.setAttribute('style',hs);
		this._home.style[domTransform + 'Origin']='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._home.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._home.onclick=function () {
			me.player.moveToDefaultView(1);
		}
		this._home.onmouseover=function () {
			me._home__img.style.visibility='hidden';
			me._home__imgo.style.visibility='inherit';
		}
		this._home.onmouseout=function () {
			me._home__img.style.visibility='inherit';
			me._home__imgo.style.visibility='hidden';
		}
		this._home.ggUpdatePosition=function () {
		}
		this._main_menu.appendChild(this._home);
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
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
		this._main_menu.appendChild(this._zoom_out);
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
		hs+='left : 0px;';
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
		this._main_menu.appendChild(this._zoom_in);
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
				me._arrow_menu.style.opacity='0.7';
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
		hs+='left : 14px;';
		hs+='opacity : 0.7;';
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
		this._arrow_menu.appendChild(this._green_circle);
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
		this._arrow_menu.appendChild(this._arrow_up);
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
		this._arrow_menu.appendChild(this._arrow_right);
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
		this._arrow_menu.appendChild(this._arrow_left);
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
		this._arrow_menu.appendChild(this._arrow_down);
		this.divSkin.appendChild(this._arrow_menu);
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
		this._svg_2=document.createElement('div');
		this._svg_2__img=document.createElement('img');
		this._svg_2__img.className='ggskin ggskin_svg';
		this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._svg_2__img['ondragstart']=function() { return false; };
		this._svg_2.appendChild(this._svg_2__img);
		this._svg_2.ggId="Svg 2";
		this._svg_2.ggLeft=-63;
		this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_2.ggVisible=true;
		this._svg_2.className='ggskin ggskin_svg ';
		this._svg_2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -63px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		this._svg_2.setAttribute('style',hs);
		this._svg_2.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_2.onclick=function () {
			me._info_window.style[domTransition]='none';
			me._info_window.style.visibility='hidden';
			me._info_window.ggVisible=false;
			me._dark_bg.style[domTransition]='none';
			me._dark_bg.style.visibility='hidden';
			me._dark_bg.ggVisible=false;
		}
		this._svg_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._info_window.appendChild(this._svg_2);
		this.divSkin.appendChild(this._info_window);
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
		this._bigalesha.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._bigalesha.style[domTransition]='none';
			} else {
				me._bigalesha.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._bigalesha.style.opacity='0';
			me._bigalesha.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._cover.style[domTransition]='none';
			} else {
				me._cover.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._cover.style.opacity='0';
			me._cover.style.visibility='hidden';
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
		this._buttons_social=document.createElement('div');
		this._buttons_social.ggId="buttons_social";
		this._buttons_social.ggLeft=-28;
		this._buttons_social.ggTop=-41;
		this._buttons_social.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttons_social.ggVisible=true;
		this._buttons_social.className='ggskin ggskin_container ';
		this._buttons_social.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : -41px;';
		hs+='visibility : inherit;';
		hs+='width : 102px;';
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
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
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
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
			window.open('https:\/\/www.facebook.com\/sharer\/sharer.php?u=' + location.href);
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
		this._button_g=document.createElement('div');
		this._button_g__img=document.createElement('img');
		this._button_g__img.className='ggskin ggskin_svg';
		this._button_g__img.setAttribute('src',basePath + 'images/button_g.svg');
		this._button_g__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_g__img['ondragstart']=function() { return false; };
		this._button_g.appendChild(this._button_g__img);
		this._button_g__imgo=document.createElement('img');
		this._button_g__imgo.className='ggskin ggskin_svg';
		this._button_g__imgo.setAttribute('src',basePath + 'images/button_g__o.svg');
		this._button_g__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_g__imgo['ondragstart']=function() { return false; };
		this._button_g.appendChild(this._button_g__imgo);
		this._button_g.ggId="button_G+";
		this._button_g.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_g.ggVisible=true;
		this._button_g.className='ggskin ggskin_svg ';
		this._button_g.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_g.setAttribute('style',hs);
		this._button_g.style[domTransform + 'Origin']='50% 50%';
		me._button_g.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_g.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_g.onclick=function () {
			window.open('https:\/\/plusone.google.com\/_\/+1\/confirm?url=' + location.href);
		}
		this._button_g.onmouseover=function () {
			me._button_g__img.style.visibility='hidden';
			me._button_g__imgo.style.visibility='inherit';
		}
		this._button_g.onmouseout=function () {
			me._button_g__img.style.visibility='inherit';
			me._button_g__imgo.style.visibility='hidden';
		}
		this._button_g.ggUpdatePosition=function () {
		}
		this._buttons_social.appendChild(this._button_g);
		this.divSkin.appendChild(this._buttons_social);
		me._arrow_menu.style[domTransition]='none';
		me._arrow_menu.ggParameter.a="45.0000";
		me._arrow_menu.style[domTransform]=parameterToTransform(me._arrow_menu.ggParameter);
		me.player.stopSound("_background");
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
			ggSkinVars['currentPan'] = me.ggUserdata.information;
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
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1.4,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1.4,true);
		}
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
			this._zoomhs=document.createElement('div');
			this._zoomhs__img=document.createElement('img');
			this._zoomhs__img.className='ggskin ggskin_svg';
			this._zoomhs__img.setAttribute('src',basePath + 'images/zoomhs.svg');
			this._zoomhs__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._zoomhs__img['ondragstart']=function() { return false; };
			this._zoomhs.appendChild(this._zoomhs__img);
			this._zoomhs.ggId="zoom-hs";
			this._zoomhs.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._zoomhs.ggVisible=true;
			this._zoomhs.className='ggskin ggskin_svg ';
			this._zoomhs.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 27px;';
			hs+='left : -11px;';
			hs+='position : absolute;';
			hs+='top : -12px;';
			hs+='visibility : inherit;';
			hs+='width : 27px;';
			this._zoomhs.setAttribute('style',hs);
			this._zoomhs.style[domTransform + 'Origin']='50% 50%';
			me._zoomhs.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._zoomhs.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._zoomhs.onclick=function () {
				me.player.moveTo(me.hotspot.title,"2.0000");
			}
			me._zoomhs.ggCurrentLogicStateScaling = -1;
			this._zoomhs.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(me.player.getFov() < 50)
				)
				{
					newLogicStateScaling = 0;
				}
				else if (
					(me.player.getFov() >= 50)
				)
				{
					newLogicStateScaling = 1;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._zoomhs.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._zoomhs.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._zoomhs.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
					if (me._zoomhs.ggCurrentLogicStateScaling == 0) {
						me._zoomhs.ggParameter.sx = 0;
						me._zoomhs.ggParameter.sy = 0;
						me._zoomhs.style[domTransform]=parameterToTransform(me._zoomhs.ggParameter);
					}
					else if (me._zoomhs.ggCurrentLogicStateScaling == 1) {
						me._zoomhs.ggParameter.sx = 1;
						me._zoomhs.ggParameter.sy = 1;
						me._zoomhs.style[domTransform]=parameterToTransform(me._zoomhs.ggParameter);
					}
					else {
						me._zoomhs.ggParameter.sx = 1;
						me._zoomhs.ggParameter.sy = 1;
						me._zoomhs.style[domTransform]=parameterToTransform(me._zoomhs.ggParameter);
					}
				}
			}
			this._zoomhs.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._zoomhs);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._zoomhs.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
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
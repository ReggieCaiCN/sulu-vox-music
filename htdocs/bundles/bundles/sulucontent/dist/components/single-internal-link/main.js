define([],function(){"use strict";var a={visibleItems:999,instanceName:null,url:"",columnNavigationUrl:"",idsParameter:"ids",preselected:null,idKey:"id",titleKey:"title",resultKey:"",disabledIds:[],translations:{overlayTitle:"single-internal-link.title",noTitle:"public.no-title"}},b="sulu.single-internal-link.",c=function(){return d.call(this,"data-changed")},d=function(a){return b+(this.options.instanceName?this.options.instanceName+".":"")+a},e={skeleton:function(a){return['<div class="single-internal-link container form-element" id="',a.ids.container,'">','   <a class="fa-link icon action choose" href="#" id="',a.ids.button,'"></a>','   <a class="fa-times-circle clear" href="#" id="',a.ids.clearButton,'"></a>','   <input type="text" class="form-element preview-update trigger-save-button" readonly="readonly" id="',a.ids.input,'"/>',"</div>"].join("")},data:function(a){return['<div id="',a.ids.columnNavigation,'"/>'].join("")}},f=function(a){return"#"+this.options.ids[a]},g=function(){if(this.options.ids={container:"single-internal-link-"+this.options.instanceName+"-container",input:"single-internal-link-"+this.options.instanceName+"-input",button:"single-internal-link-"+this.options.instanceName+"-button",clearButton:"single-internal-link-"+this.options.instanceName+"-clear-button",columnNavigation:"single-internal-link-"+this.options.instanceName+"-column-navigation"},this.sandbox.dom.html(this.$el,e.skeleton(this.options)),this.$container=this.sandbox.dom.find(f.call(this,"container"),this.$el),this.$input=this.sandbox.dom.find(f.call(this,"input"),this.$el),this.$button=this.sandbox.dom.find(f.call(this,"button"),this.$el),this.sandbox.dom.data(this.$el,"single-internal-link")){var a=this.sandbox.dom.data(this.$el,"single-internal-link");h.call(this,a)}else h.call(this,this.options.preselected);i.call(this),this.URI={str:"",hasChanged:!1},k.call(this),null!==this.data&&m.call(this),j.call(this)},h=function(a){this.data=a,this.sandbox.dom.data(this.$el,"single-internal-link",this.data),a?$("#"+this.options.ids.clearButton).show():$("#"+this.options.ids.clearButton).hide()},i=function(){this.sandbox.on("husky.overlay.single-internal-link."+this.options.instanceName+".initialized",l.bind(this)),this.sandbox.on("husky.column-navigation."+this.options.instanceName+".action",function(a){h.call(this,a.id),m.call(this),this.sandbox.emit(c.call(this),this.data,this.$el),this.sandbox.emit("husky.overlay.single-internal-link."+this.options.instanceName+".close")}.bind(this))},j=function(){this.sandbox.dom.on("#"+this.options.ids.clearButton,"click",function(){return h.call(this,""),this.$input.val(""),this.sandbox.emit(c.call(this),this.data,this.$el),!1}.bind(this))},k=function(){var a=this.sandbox.dom.createElement("<div/>");this.sandbox.dom.append(this.$el,a),this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$el,cssClass:"single-internal-overlay",el:a,container:this.$el,removeOnClose:!1,instanceName:"single-internal-link."+this.options.instanceName,skin:"responsive-width",contentSpacing:!1,slides:[{title:this.sandbox.translate(this.options.translations.overlayTitle),data:e.data(this.options),buttons:[{type:"cancel"}]}]}}])},l=function(){var a=n(this.options.columnNavigationUrl,this.data);this.sandbox.start([{name:"column-navigation@husky",options:{el:f.call(this,"columnNavigation"),selected:this.data,url:a,instanceName:this.options.instanceName,actionIcon:"fa-plus-circle",resultKey:this.options.resultKey,showOptions:!1,responsive:!1,sortable:!1,skin:"fixed-height-small",disableIds:this.options.disabledIds}}])},m=function(){this.sandbox.util.load(o(this.options.url,this.data)).then(function(a){this.$input.val((a.title||this.sandbox.translate(this.options.translations.noTitle))+" ("+a.url+")")}.bind(this))},n=function(a,b){return a.replace("{id=uuid&}",b?"id="+b+"&":"")},o=function(a,b){return a.replace("{/uuid}",b?"/"+b:"")};return{initialize:function(){this.options=this.sandbox.util.extend({},a,this.options),g.call(this)}}});
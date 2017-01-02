define([],function(){"use strict";var a={eventNamespace:"sulu.contact-selection",resultKey:"customers",contactResultKey:"contacts",accountResultKey:"accounts",dataAttribute:"contact-selection",dataDefault:[],hidePositionElement:!0,hideConfigButton:!0,contact:!0,contactUrl:null,account:!0,accountUrl:null,navigateEvent:"sulu.router.navigate",translations:{noContentSelected:"contact-selection.no-contact-selected",add:"contact-selection.add"}},b={data:function(a,b){return['<div class="grid">','   <div class="grid-row search-row">','       <div class="grid-col-8"/>','       <div class="grid-col-4" id="',a,'"/>',"   </div>",'   <div class="grid-row">','       <div class="grid-col-12" id="',b,'"/>',"   </div>","</div>"].join("")},contentItem:function(a,b){return['<a href="#" class="link" data-id="',a,'">','   <span class="value">',b,"</span>","</a>"].join("")}},c=function(a){return"#"+this.domIds[a]},d=function(){this.sandbox.on("husky.overlay.contact-selection."+this.options.instanceName+".add.initialized",g.bind(this)),this.sandbox.on("husky.overlay.contact-selection."+this.options.instanceName+".add.opened",i.bind(this)),this.sandbox.dom.on(this.$el,"click",function(a){var b=this.sandbox.dom.data(a.currentTarget,"id"),c=b.substr(0,1),d=parseInt(b.substr(1)),e="contacts/"+("c"===c?"contacts":"accounts")+"/edit:"+d+"/details";return this.sandbox.emit(this.options.navigateEvent,e),!1}.bind(this),"a.link"),this.sandbox.on("husky.datagrid.contact.view.rendered",function(){this.sandbox.emit("husky.overlay.contact-selection."+this.options.instanceName+".add.set-position")}.bind(this)),this.sandbox.on("husky.datagrid.account.view.rendered",function(){this.sandbox.emit("husky.overlay.contact-selection."+this.options.instanceName+".add.set-position")}.bind(this))},e=function(a){return[{name:"search@husky",options:{appearance:"white small",instanceName:this.options.instanceName+"-contact-search",el:c.call(this,"contactSearch")}},{name:"datagrid@husky",options:{el:c.call(this,"contactList"),instanceName:"contact",url:this.options.contactUrl,preselected:a,resultKey:this.options.contactResultKey,sortable:!1,columnOptionsInstanceName:"",clickCallback:function(a){this.sandbox.emit("husky.datagrid.contact.toggle.item",a)}.bind(this),selectedCounter:!0,searchInstanceName:this.options.instanceName+"-contact-search",searchFields:["firstName","lastName"],paginationOptions:{dropdown:{limit:20}},matchings:[{content:"id",name:"id",disabled:!0},{content:"contact.contacts.firstName",name:"firstName"},{content:"contact.contacts.lastName",name:"lastName"}]}}]},f=function(a){return[{name:"search@husky",options:{appearance:"white small",instanceName:this.options.instanceName+"-account-search",el:c.call(this,"accountSearch")}},{name:"datagrid@husky",options:{el:c.call(this,"accountList"),instanceName:"account",url:this.options.accountUrl,preselected:a,resultKey:this.options.accountResultKey,sortable:!1,columnOptionsInstanceName:"",clickCallback:function(a){this.sandbox.emit("husky.datagrid.account.toggle.item",a)}.bind(this),selectedCounter:!0,searchInstanceName:this.options.instanceName+"-account-search",searchFields:["name"],paginationOptions:{dropdown:{limit:20}},matchings:[{content:"id",name:"id",disabled:!0},{content:"contact.accounts.name",name:"name"}]}}]},g=function(){var a=h.call(this),b=[];this.options.contact&&(b=b.concat(e.call(this,a.contacts))),this.options.account&&(b=b.concat(f.call(this,a.accounts))),this.sandbox.start(b)},h=function(){var a=this.getData()||[],b=[],c=[];return this.sandbox.util.foreach(a,function(a){var d=a.substr(0,1),e=parseInt(a.substr(1));"c"===d?c.push(e):"a"===d&&b.push(e)}),{accounts:b,contacts:c}},i=function(){var a=h.call(this);this.sandbox.emit("husky.datagrid.contact.selected.update",a.contacts),this.sandbox.emit("husky.datagrid.account.selected.update",a.accounts)},j=function(){this.sandbox.dom.on(this.$el,"click",function(){return!1}.bind(this),".search-icon"),this.sandbox.dom.on(this.$el,"keydown",function(a){return 13===event.keyCode?(a.preventDefault(),a.stopPropagation(),!1):void 0}.bind(this),".search-input")},k=function(){var a=this.sandbox.dom.createElement("<div/>"),c={title:this.sandbox.translate(this.options.translations.add),tabs:[],okCallback:l.bind(this)};return this.options.contact&&(c.tabs=c.tabs.concat([{title:this.sandbox.translate("contact.contacts.title"),data:b.data(this.domIds.contactSearch,this.domIds.contactList)}])),this.options.account&&(c.tabs=c.tabs.concat([{title:this.sandbox.translate("contact.accounts.title"),data:b.data(this.domIds.accountSearch,this.domIds.accountList)}])),0===c.tabs.length?void this.sandbox.logger.error("contact and account disabled"):(this.sandbox.dom.append(this.$el,a),void this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$addButton,cssClass:"contact-content-overlay",el:a,removeOnClose:!1,container:this.$el,instanceName:"contact-selection."+this.options.instanceName+".add",skin:"wide",slides:[c]}}]))},l=function(){var a=[],b=this.getData();this.sandbox.emit("husky.datagrid.contact.items.get-selected",function(c){this.sandbox.util.foreach(c,function(c){var d="c"+c,e=b.indexOf(d);-1!==e?a[e]=d:a.push(d)}.bind(this))}.bind(this)),this.sandbox.emit("husky.datagrid.account.items.get-selected",function(c){this.sandbox.util.foreach(c,function(c){var d="a"+c,e=b.indexOf(d);-1!==e?a[e]=d:a.push(d)}.bind(this))}.bind(this));var c,d=Object.keys(a),e=[],f=d.length;for(c=0;f>c;c++)e.push(a[d[c]]);this.setData(e)};return{type:"itembox",initialize:function(){this.options=this.sandbox.util.extend(!0,{},a,this.options),this.domIds={container:"contact-selection-"+this.options.instanceName+"-container",addButton:"contact-selection-"+this.options.instanceName+"-add",configButton:"contact-selection-"+this.options.instanceName+"-config",content:"contact-selection-"+this.options.instanceName+"-content",accountList:"contact-selection-"+this.options.instanceName+"-account-column-navigation",accountSearch:"contact-selection-"+this.options.instanceName+"-account-search",contactList:"contact-selection-"+this.options.instanceName+"-contact-column-navigation",contactSearch:"contact-selection-"+this.options.instanceName+"-contact-search"},d.call(this),this.render(),k.call(this),j.call(this)},getUrl:function(a){var b=-1===this.options.url.indexOf("?")?"?":"&";return[this.options.url,b,this.options.idsParameter,"=",(a||[]).join(",")].join("")},getItemContent:function(a){return b.contentItem(a.id,a.name)},sortHandler:function(a){this.setData(a,!1)},removeHandler:function(a){for(var b=this.getData(),c=-1,d=b.length;++c<d;)if(a===b[c]){b.splice(c,1);break}this.setData(b,!1)}}});
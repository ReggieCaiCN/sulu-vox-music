define(["services/sulumedia/media-manager","services/sulumedia/user-settings-manager","services/sulumedia/media-router","services/sulumedia/file-icons","config"],function(a,b,c,d,e){"use strict";var f={toolbarSelector:".list-toolbar-container",datagridSelector:".datagrid-container"},g={};return{stickyToolbar:!0,header:{title:"sulu.media.all",noBack:!0,toolbar:{template:"empty",languageChanger:{url:"/admin/api/localizations",resultKey:"localizations",titleAttribute:"localization",preSelected:b.getMediaLocale()}}},layout:{navigation:{collapsed:!0},content:{width:"max"}},templates:["/admin/media/template/collection/files"],initialize:function(){this.options=this.sandbox.util.extend(!0,{},g,this.options),this.sandbox.emit("husky.navigation.select-id","collections-edit"),this.sandbox.emit("husky.data-navigation.collections.set-locale",b.getMediaLocale()),this.updateDataNavigationAddButton(),this.bindCustomEvents(),this.render()},updateDataNavigationAddButton:function(){var a=e.get("sulu-media").permissions;a.add?this.sandbox.emit("husky.data-navigation.collections.add-button.show"):this.sandbox.emit("husky.data-navigation.collections.add-button.hide")},bindCustomEvents:function(){this.sandbox.on("sulu.toolbar.change.table",function(){b.setMediaListView("table"),b.setMediaListPagination("dropdown"),this.sandbox.emit("husky.datagrid.change.page",1,b.getDropdownPageSize()),this.sandbox.once("husky.datagrid.updated",function(){this.sandbox.emit("husky.datagrid.view.change","table"),this.sandbox.emit("husky.datagrid.pagination.change","dropdown")}.bind(this)),this.sandbox.stickyToolbar.reset(this.$el)}.bind(this)),this.sandbox.on("sulu.toolbar.change.masonry",function(){b.setMediaListView("datagrid/decorators/masonry-view"),b.setMediaListPagination("infinite-scroll"),this.sandbox.emit("husky.datagrid.change.page",1,b.getInfinityPageSize()),this.sandbox.once("husky.datagrid.updated",function(){this.sandbox.emit("husky.datagrid.view.change","datagrid/decorators/masonry-view"),this.sandbox.emit("husky.datagrid.pagination.change","infinite-scroll")}.bind(this)),this.sandbox.stickyToolbar.reset(this.$el)}.bind(this)),this.sandbox.on("sulu.header.language-changed",function(a){b.setMediaLocale(a.id),this.sandbox.emit("husky.datagrid.url.update",{locale:a.id})}.bind(this))},render:function(){this.sandbox.dom.html(this.$el,this.renderTemplate("/admin/media/template/collection/files")),this.startDatagrid()},actionCallback:function(a,b){this.sandbox.sulu.viewStates["media-file-edit-id"]=a,c.toCollection(b.collection)},startDatagrid:function(){var a=b.getMediaLocale();this.sandbox.sulu.initListToolbarAndList.call(this,"media","/admin/api/media/fields?locale="+a,{el:this.$find(f.toolbarSelector),instanceName:this.options.instanceName,template:this.sandbox.sulu.buttons.get({mediaDecoratorDropdown:{}})},{el:this.$find(f.datagridSelector),url:"/admin/api/media?orderBy=media.created&orderSort=desc&locale="+a,searchFields:["name","title","description"],view:b.getMediaListView(),pagination:b.getMediaListPagination(),resultKey:"media",actionCallback:this.actionCallback.bind(this),viewOptions:{table:{selectItem:!0,actionIconColumn:"name",noImgIcon:function(a){return d.getByMimeType(a.mimeType)},badges:[{column:"title",callback:function(a,c){return a.locale!==b.getMediaLocale()?(c.title=a.locale,c):void 0}.bind(this)}],emptyIcon:"fa-file-o"},"datagrid/decorators/masonry-view":{selectable:!1,noImgIcon:function(a){return d.getByMimeType(a.mimeType)},emptyIcon:"fa-file-o",locale:a}},paginationOptions:{"infinite-scroll":{reachedBottomMessage:"public.reached-list-end",scrollOffset:500}}})}}});
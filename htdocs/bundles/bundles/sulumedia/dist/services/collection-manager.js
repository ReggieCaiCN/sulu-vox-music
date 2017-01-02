define(["services/husky/util","services/husky/mediator","sulumedia/models/collection"],function(a,b,c){"use strict";function d(){}var e=null,f=function(a){var b=$.Deferred(),d=c.findOrCreate({id:a.id});return d.set(a),d.save(null,{success:function(a){b.resolve(a.toJSON())}.bind(this),error:function(a,c){b.reject(c)}.bind(this)}),b},g=function(a){var d=$.Deferred(),e=c.findOrCreate({id:a});return e.destroy({success:function(){b.emit("sulu.medias.collection.deleted",a),b.emit("sulu.labels.success.show","labels.success.collection-deleted-desc"),d.resolve()}.bind(this),error:function(){d.reject()}.bind(this)}),d};return d.prototype={loadOrNew:function(a,d){var e,f=$.Deferred();return a?(e=c.findOrCreate({id:a}),e.fetch({data:{locale:d},success:function(c){b.emit("sulu.medias.collection.loaded",a),f.resolve(c.toJSON())}.bind(this),error:function(){f.reject()}.bind(this)})):(e=new c,b.emit("sulu.medias.collection.created"),f.resolve(e.toJSON())),f},save:function(a){var c=$.Deferred();return f(a).done(function(a){b.emit("sulu.medias.collection.saved",a.id,a),b.emit("sulu.labels.success.show","labels.success.collection-save-desc"),c.resolve(a)}.bind(this)).fail(function(a){a.status&&403===a.status||b.emit("sulu.labels.error.show"),c.reject()}.bind(this)),c},"delete":function(b){$.isArray(b)||(b=[b]);var c=[],d=$.Deferred();return a.each(b,function(a,b){c.push(g(b))}.bind(this)),$.when.apply(null,c).done(function(){d.resolve()}.bind(this)).fail(function(){d.reject()}),d},move:function(c,d,e){var f=$.Deferred(),g="/admin/api/collections/"+c+"?action=move&locale="+e;return g=d?g+"&destination="+d:g,a.save(g,"POST").done(function(){b.emit("sulu.medias.collection.moved",c,d),b.emit("sulu.labels.success.show","labels.success.collection-move-desc"),f.resolve()}.bind(this)).fail(function(){f.reject()}.bind(this)),f}},d.getInstance=function(){return null===e&&(e=new d),e},d.getInstance()});
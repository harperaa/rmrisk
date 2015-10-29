// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35115_SHARP_,p2__35116_SHARP_){
var and__25675__auto__ = p1__35115_SHARP_;
if(cljs.core.truth_(and__25675__auto__)){
return p2__35116_SHARP_;
} else {
return and__25675__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25687__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25687__auto__){
return or__25687__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__25687__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__25687__auto__){
return or__25687__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__25687__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26586__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26586__auto__,method_table__26582__auto__,prefer_table__26583__auto__,method_cache__26584__auto__,cached_hierarchy__26585__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35117){
var map__35118 = p__35117;
var map__35118__$1 = ((cljs.core.seq_QMARK_.call(null,map__35118))?cljs.core.apply.call(null,cljs.core.hash_map,map__35118):map__35118);
var file = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35119){
var map__35120 = p__35119;
var map__35120__$1 = ((cljs.core.seq_QMARK_.call(null,map__35120))?cljs.core.apply.call(null,cljs.core.hash_map,map__35120):map__35120);
var namespace = cljs.core.get.call(null,map__35120__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26586__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26586__auto__,method_table__26582__auto__,prefer_table__26583__auto__,method_cache__26584__auto__,cached_hierarchy__26585__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35121){if((e35121 instanceof Error)){
var e = e35121;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35121;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__35123 = arguments.length;
switch (G__35123) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35125,callback){
var map__35127 = p__35125;
var map__35127__$1 = ((cljs.core.seq_QMARK_.call(null,map__35127))?cljs.core.apply.call(null,cljs.core.hash_map,map__35127):map__35127);
var file_msg = map__35127__$1;
var request_url = cljs.core.get.call(null,map__35127__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35127,map__35127__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35127,map__35127__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35128){
var map__35130 = p__35128;
var map__35130__$1 = ((cljs.core.seq_QMARK_.call(null,map__35130))?cljs.core.apply.call(null,cljs.core.hash_map,map__35130):map__35130);
var file_msg = map__35130__$1;
var namespace = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__25687__auto__ = meta_data;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__25675__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__25675__auto__){
var or__25687__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25687__auto____$1)){
return or__25687__auto____$1;
} else {
var and__25675__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__25675__auto____$1){
var or__25687__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__25687__auto____$2){
return or__25687__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__25675__auto____$1;
}
}
}
} else {
return and__25675__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35131,callback){
var map__35133 = p__35131;
var map__35133__$1 = ((cljs.core.seq_QMARK_.call(null,map__35133))?cljs.core.apply.call(null,cljs.core.hash_map,map__35133):map__35133);
var file_msg = map__35133__$1;
var request_url = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29552__auto___35220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___35220,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___35220,out){
return (function (state_35202){
var state_val_35203 = (state_35202[(1)]);
if((state_val_35203 === (1))){
var inst_35180 = cljs.core.nth.call(null,files,(0),null);
var inst_35181 = cljs.core.nthnext.call(null,files,(1));
var inst_35182 = files;
var state_35202__$1 = (function (){var statearr_35204 = state_35202;
(statearr_35204[(7)] = inst_35180);

(statearr_35204[(8)] = inst_35181);

(statearr_35204[(9)] = inst_35182);

return statearr_35204;
})();
var statearr_35205_35221 = state_35202__$1;
(statearr_35205_35221[(2)] = null);

(statearr_35205_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35203 === (2))){
var inst_35185 = (state_35202[(10)]);
var inst_35182 = (state_35202[(9)]);
var inst_35185__$1 = cljs.core.nth.call(null,inst_35182,(0),null);
var inst_35186 = cljs.core.nthnext.call(null,inst_35182,(1));
var inst_35187 = (inst_35185__$1 == null);
var inst_35188 = cljs.core.not.call(null,inst_35187);
var state_35202__$1 = (function (){var statearr_35206 = state_35202;
(statearr_35206[(11)] = inst_35186);

(statearr_35206[(10)] = inst_35185__$1);

return statearr_35206;
})();
if(inst_35188){
var statearr_35207_35222 = state_35202__$1;
(statearr_35207_35222[(1)] = (4));

} else {
var statearr_35208_35223 = state_35202__$1;
(statearr_35208_35223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35203 === (3))){
var inst_35200 = (state_35202[(2)]);
var state_35202__$1 = state_35202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35202__$1,inst_35200);
} else {
if((state_val_35203 === (4))){
var inst_35185 = (state_35202[(10)]);
var inst_35190 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35185);
var state_35202__$1 = state_35202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35202__$1,(7),inst_35190);
} else {
if((state_val_35203 === (5))){
var inst_35196 = cljs.core.async.close_BANG_.call(null,out);
var state_35202__$1 = state_35202;
var statearr_35209_35224 = state_35202__$1;
(statearr_35209_35224[(2)] = inst_35196);

(statearr_35209_35224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35203 === (6))){
var inst_35198 = (state_35202[(2)]);
var state_35202__$1 = state_35202;
var statearr_35210_35225 = state_35202__$1;
(statearr_35210_35225[(2)] = inst_35198);

(statearr_35210_35225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35203 === (7))){
var inst_35186 = (state_35202[(11)]);
var inst_35192 = (state_35202[(2)]);
var inst_35193 = cljs.core.async.put_BANG_.call(null,out,inst_35192);
var inst_35182 = inst_35186;
var state_35202__$1 = (function (){var statearr_35211 = state_35202;
(statearr_35211[(12)] = inst_35193);

(statearr_35211[(9)] = inst_35182);

return statearr_35211;
})();
var statearr_35212_35226 = state_35202__$1;
(statearr_35212_35226[(2)] = null);

(statearr_35212_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29552__auto___35220,out))
;
return ((function (switch__29490__auto__,c__29552__auto___35220,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____0 = (function (){
var statearr_35216 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35216[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__);

(statearr_35216[(1)] = (1));

return statearr_35216;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____1 = (function (state_35202){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_35202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e35217){if((e35217 instanceof Object)){
var ex__29494__auto__ = e35217;
var statearr_35218_35227 = state_35202;
(statearr_35218_35227[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35228 = state_35202;
state_35202 = G__35228;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__ = function(state_35202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____1.call(this,state_35202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___35220,out))
})();
var state__29554__auto__ = (function (){var statearr_35219 = f__29553__auto__.call(null);
(statearr_35219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___35220);

return statearr_35219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___35220,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35229,p__35230){
var map__35233 = p__35229;
var map__35233__$1 = ((cljs.core.seq_QMARK_.call(null,map__35233))?cljs.core.apply.call(null,cljs.core.hash_map,map__35233):map__35233);
var opts = map__35233__$1;
var url_rewriter = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35234 = p__35230;
var map__35234__$1 = ((cljs.core.seq_QMARK_.call(null,map__35234))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var file_msg = map__35234__$1;
var file = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35235){
var map__35238 = p__35235;
var map__35238__$1 = ((cljs.core.seq_QMARK_.call(null,map__35238))?cljs.core.apply.call(null,cljs.core.hash_map,map__35238):map__35238);
var eval_body__$1 = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25675__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25675__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25675__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35239){var e = e35239;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35244,p__35245){
var map__35447 = p__35244;
var map__35447__$1 = ((cljs.core.seq_QMARK_.call(null,map__35447))?cljs.core.apply.call(null,cljs.core.hash_map,map__35447):map__35447);
var opts = map__35447__$1;
var before_jsload = cljs.core.get.call(null,map__35447__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35447__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35447__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35448 = p__35245;
var map__35448__$1 = ((cljs.core.seq_QMARK_.call(null,map__35448))?cljs.core.apply.call(null,cljs.core.hash_map,map__35448):map__35448);
var msg = map__35448__$1;
var files = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (state_35573){
var state_val_35574 = (state_35573[(1)]);
if((state_val_35574 === (7))){
var inst_35460 = (state_35573[(7)]);
var inst_35461 = (state_35573[(8)]);
var inst_35463 = (state_35573[(9)]);
var inst_35462 = (state_35573[(10)]);
var inst_35468 = cljs.core._nth.call(null,inst_35461,inst_35463);
var inst_35469 = figwheel.client.file_reloading.eval_body.call(null,inst_35468);
var inst_35470 = (inst_35463 + (1));
var tmp35575 = inst_35460;
var tmp35576 = inst_35461;
var tmp35577 = inst_35462;
var inst_35460__$1 = tmp35575;
var inst_35461__$1 = tmp35576;
var inst_35462__$1 = tmp35577;
var inst_35463__$1 = inst_35470;
var state_35573__$1 = (function (){var statearr_35578 = state_35573;
(statearr_35578[(7)] = inst_35460__$1);

(statearr_35578[(8)] = inst_35461__$1);

(statearr_35578[(11)] = inst_35469);

(statearr_35578[(9)] = inst_35463__$1);

(statearr_35578[(10)] = inst_35462__$1);

return statearr_35578;
})();
var statearr_35579_35648 = state_35573__$1;
(statearr_35579_35648[(2)] = null);

(statearr_35579_35648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (20))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35512 = (state_35573[(14)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35517 = (function (){var all_files = inst_35505;
var files_SINGLEQUOTE_ = inst_35506;
var res_SINGLEQUOTE_ = inst_35509;
var res = inst_35510;
var files_not_loaded = inst_35512;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p__35516){
var map__35580 = p__35516;
var map__35580__$1 = ((cljs.core.seq_QMARK_.call(null,map__35580))?cljs.core.apply.call(null,cljs.core.hash_map,map__35580):map__35580);
var namespace = cljs.core.get.call(null,map__35580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35518 = cljs.core.map.call(null,inst_35517,inst_35510);
var inst_35519 = cljs.core.pr_str.call(null,inst_35518);
var inst_35520 = figwheel.client.utils.log.call(null,inst_35519);
var inst_35521 = (function (){var all_files = inst_35505;
var files_SINGLEQUOTE_ = inst_35506;
var res_SINGLEQUOTE_ = inst_35509;
var res = inst_35510;
var files_not_loaded = inst_35512;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,inst_35517,inst_35518,inst_35519,inst_35520,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35515,inst_35517,inst_35518,inst_35519,inst_35520,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35522 = setTimeout(inst_35521,(10));
var state_35573__$1 = (function (){var statearr_35581 = state_35573;
(statearr_35581[(17)] = inst_35515);

(statearr_35581[(18)] = inst_35520);

return statearr_35581;
})();
var statearr_35582_35649 = state_35573__$1;
(statearr_35582_35649[(2)] = inst_35522);

(statearr_35582_35649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (27))){
var inst_35532 = (state_35573[(19)]);
var state_35573__$1 = state_35573;
var statearr_35583_35650 = state_35573__$1;
(statearr_35583_35650[(2)] = inst_35532);

(statearr_35583_35650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (1))){
var inst_35452 = (state_35573[(20)]);
var inst_35449 = before_jsload.call(null,files);
var inst_35450 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35451 = (function (){return ((function (inst_35452,inst_35449,inst_35450,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p1__35240_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35240_SHARP_);
});
;})(inst_35452,inst_35449,inst_35450,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35452__$1 = cljs.core.filter.call(null,inst_35451,files);
var inst_35453 = cljs.core.not_empty.call(null,inst_35452__$1);
var state_35573__$1 = (function (){var statearr_35584 = state_35573;
(statearr_35584[(21)] = inst_35450);

(statearr_35584[(20)] = inst_35452__$1);

(statearr_35584[(22)] = inst_35449);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35453)){
var statearr_35585_35651 = state_35573__$1;
(statearr_35585_35651[(1)] = (2));

} else {
var statearr_35586_35652 = state_35573__$1;
(statearr_35586_35652[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (24))){
var state_35573__$1 = state_35573;
var statearr_35587_35653 = state_35573__$1;
(statearr_35587_35653[(2)] = null);

(statearr_35587_35653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (4))){
var inst_35497 = (state_35573[(2)]);
var inst_35498 = (function (){return ((function (inst_35497,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p1__35241_SHARP_){
var and__25675__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35241_SHARP_);
if(cljs.core.truth_(and__25675__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35241_SHARP_));
} else {
return and__25675__auto__;
}
});
;})(inst_35497,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35499 = cljs.core.filter.call(null,inst_35498,files);
var state_35573__$1 = (function (){var statearr_35588 = state_35573;
(statearr_35588[(23)] = inst_35497);

(statearr_35588[(24)] = inst_35499);

return statearr_35588;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35589_35654 = state_35573__$1;
(statearr_35589_35654[(1)] = (16));

} else {
var statearr_35590_35655 = state_35573__$1;
(statearr_35590_35655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (15))){
var inst_35487 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35591_35656 = state_35573__$1;
(statearr_35591_35656[(2)] = inst_35487);

(statearr_35591_35656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (21))){
var state_35573__$1 = state_35573;
var statearr_35592_35657 = state_35573__$1;
(statearr_35592_35657[(2)] = null);

(statearr_35592_35657[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (31))){
var inst_35540 = (state_35573[(25)]);
var inst_35550 = (state_35573[(2)]);
var inst_35551 = cljs.core.not_empty.call(null,inst_35540);
var state_35573__$1 = (function (){var statearr_35593 = state_35573;
(statearr_35593[(26)] = inst_35550);

return statearr_35593;
})();
if(cljs.core.truth_(inst_35551)){
var statearr_35594_35658 = state_35573__$1;
(statearr_35594_35658[(1)] = (32));

} else {
var statearr_35595_35659 = state_35573__$1;
(statearr_35595_35659[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (32))){
var inst_35540 = (state_35573[(25)]);
var inst_35553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35540);
var inst_35554 = cljs.core.pr_str.call(null,inst_35553);
var inst_35555 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35554)].join('');
var inst_35556 = figwheel.client.utils.log.call(null,inst_35555);
var state_35573__$1 = state_35573;
var statearr_35596_35660 = state_35573__$1;
(statearr_35596_35660[(2)] = inst_35556);

(statearr_35596_35660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (33))){
var state_35573__$1 = state_35573;
var statearr_35597_35661 = state_35573__$1;
(statearr_35597_35661[(2)] = null);

(statearr_35597_35661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (13))){
var inst_35473 = (state_35573[(27)]);
var inst_35477 = cljs.core.chunk_first.call(null,inst_35473);
var inst_35478 = cljs.core.chunk_rest.call(null,inst_35473);
var inst_35479 = cljs.core.count.call(null,inst_35477);
var inst_35460 = inst_35478;
var inst_35461 = inst_35477;
var inst_35462 = inst_35479;
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35598 = state_35573;
(statearr_35598[(7)] = inst_35460);

(statearr_35598[(8)] = inst_35461);

(statearr_35598[(9)] = inst_35463);

(statearr_35598[(10)] = inst_35462);

return statearr_35598;
})();
var statearr_35599_35662 = state_35573__$1;
(statearr_35599_35662[(2)] = null);

(statearr_35599_35662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (22))){
var inst_35512 = (state_35573[(14)]);
var inst_35525 = (state_35573[(2)]);
var inst_35526 = cljs.core.not_empty.call(null,inst_35512);
var state_35573__$1 = (function (){var statearr_35600 = state_35573;
(statearr_35600[(28)] = inst_35525);

return statearr_35600;
})();
if(cljs.core.truth_(inst_35526)){
var statearr_35601_35663 = state_35573__$1;
(statearr_35601_35663[(1)] = (23));

} else {
var statearr_35602_35664 = state_35573__$1;
(statearr_35602_35664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (36))){
var state_35573__$1 = state_35573;
var statearr_35603_35665 = state_35573__$1;
(statearr_35603_35665[(2)] = null);

(statearr_35603_35665[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (29))){
var inst_35539 = (state_35573[(29)]);
var inst_35544 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35539);
var inst_35545 = cljs.core.pr_str.call(null,inst_35544);
var inst_35546 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35545)].join('');
var inst_35547 = figwheel.client.utils.log.call(null,inst_35546);
var state_35573__$1 = state_35573;
var statearr_35604_35666 = state_35573__$1;
(statearr_35604_35666[(2)] = inst_35547);

(statearr_35604_35666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (6))){
var inst_35494 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35605_35667 = state_35573__$1;
(statearr_35605_35667[(2)] = inst_35494);

(statearr_35605_35667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (28))){
var inst_35539 = (state_35573[(29)]);
var inst_35538 = (state_35573[(2)]);
var inst_35539__$1 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35540 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35541 = cljs.core.get.call(null,inst_35538,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35542 = cljs.core.not_empty.call(null,inst_35539__$1);
var state_35573__$1 = (function (){var statearr_35606 = state_35573;
(statearr_35606[(29)] = inst_35539__$1);

(statearr_35606[(25)] = inst_35540);

(statearr_35606[(30)] = inst_35541);

return statearr_35606;
})();
if(cljs.core.truth_(inst_35542)){
var statearr_35607_35668 = state_35573__$1;
(statearr_35607_35668[(1)] = (29));

} else {
var statearr_35608_35669 = state_35573__$1;
(statearr_35608_35669[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (25))){
var inst_35571 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35573__$1,inst_35571);
} else {
if((state_val_35574 === (34))){
var inst_35541 = (state_35573[(30)]);
var inst_35559 = (state_35573[(2)]);
var inst_35560 = cljs.core.not_empty.call(null,inst_35541);
var state_35573__$1 = (function (){var statearr_35609 = state_35573;
(statearr_35609[(31)] = inst_35559);

return statearr_35609;
})();
if(cljs.core.truth_(inst_35560)){
var statearr_35610_35670 = state_35573__$1;
(statearr_35610_35670[(1)] = (35));

} else {
var statearr_35611_35671 = state_35573__$1;
(statearr_35611_35671[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (17))){
var inst_35499 = (state_35573[(24)]);
var state_35573__$1 = state_35573;
var statearr_35612_35672 = state_35573__$1;
(statearr_35612_35672[(2)] = inst_35499);

(statearr_35612_35672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (3))){
var state_35573__$1 = state_35573;
var statearr_35613_35673 = state_35573__$1;
(statearr_35613_35673[(2)] = null);

(statearr_35613_35673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (12))){
var inst_35490 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35614_35674 = state_35573__$1;
(statearr_35614_35674[(2)] = inst_35490);

(statearr_35614_35674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (2))){
var inst_35452 = (state_35573[(20)]);
var inst_35459 = cljs.core.seq.call(null,inst_35452);
var inst_35460 = inst_35459;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35615 = state_35573;
(statearr_35615[(7)] = inst_35460);

(statearr_35615[(8)] = inst_35461);

(statearr_35615[(9)] = inst_35463);

(statearr_35615[(10)] = inst_35462);

return statearr_35615;
})();
var statearr_35616_35675 = state_35573__$1;
(statearr_35616_35675[(2)] = null);

(statearr_35616_35675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (23))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35512 = (state_35573[(14)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35532 = (state_35573[(19)]);
var inst_35528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35531 = (function (){var all_files = inst_35505;
var files_SINGLEQUOTE_ = inst_35506;
var res_SINGLEQUOTE_ = inst_35509;
var res = inst_35510;
var files_not_loaded = inst_35512;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35532,inst_35528,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p__35530){
var map__35617 = p__35530;
var map__35617__$1 = ((cljs.core.seq_QMARK_.call(null,map__35617))?cljs.core.apply.call(null,cljs.core.hash_map,map__35617):map__35617);
var meta_data = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35506,inst_35510,inst_35512,inst_35509,inst_35505,inst_35532,inst_35528,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35532__$1 = cljs.core.group_by.call(null,inst_35531,inst_35512);
var inst_35533 = cljs.core.seq_QMARK_.call(null,inst_35532__$1);
var state_35573__$1 = (function (){var statearr_35618 = state_35573;
(statearr_35618[(32)] = inst_35528);

(statearr_35618[(19)] = inst_35532__$1);

return statearr_35618;
})();
if(inst_35533){
var statearr_35619_35676 = state_35573__$1;
(statearr_35619_35676[(1)] = (26));

} else {
var statearr_35620_35677 = state_35573__$1;
(statearr_35620_35677[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (35))){
var inst_35541 = (state_35573[(30)]);
var inst_35562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35541);
var inst_35563 = cljs.core.pr_str.call(null,inst_35562);
var inst_35564 = [cljs.core.str("not required: "),cljs.core.str(inst_35563)].join('');
var inst_35565 = figwheel.client.utils.log.call(null,inst_35564);
var state_35573__$1 = state_35573;
var statearr_35621_35678 = state_35573__$1;
(statearr_35621_35678[(2)] = inst_35565);

(statearr_35621_35678[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (19))){
var inst_35506 = (state_35573[(12)]);
var inst_35510 = (state_35573[(13)]);
var inst_35509 = (state_35573[(15)]);
var inst_35505 = (state_35573[(16)]);
var inst_35509__$1 = (state_35573[(2)]);
var inst_35510__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35509__$1);
var inst_35511 = (function (){var all_files = inst_35505;
var files_SINGLEQUOTE_ = inst_35506;
var res_SINGLEQUOTE_ = inst_35509__$1;
var res = inst_35510__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35506,inst_35510,inst_35509,inst_35505,inst_35509__$1,inst_35510__$1,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p1__35243_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35506,inst_35510,inst_35509,inst_35505,inst_35509__$1,inst_35510__$1,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35512 = cljs.core.filter.call(null,inst_35511,inst_35509__$1);
var inst_35513 = cljs.core.not_empty.call(null,inst_35510__$1);
var state_35573__$1 = (function (){var statearr_35622 = state_35573;
(statearr_35622[(13)] = inst_35510__$1);

(statearr_35622[(14)] = inst_35512);

(statearr_35622[(15)] = inst_35509__$1);

return statearr_35622;
})();
if(cljs.core.truth_(inst_35513)){
var statearr_35623_35679 = state_35573__$1;
(statearr_35623_35679[(1)] = (20));

} else {
var statearr_35624_35680 = state_35573__$1;
(statearr_35624_35680[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (11))){
var state_35573__$1 = state_35573;
var statearr_35625_35681 = state_35573__$1;
(statearr_35625_35681[(2)] = null);

(statearr_35625_35681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (9))){
var inst_35492 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35626_35682 = state_35573__$1;
(statearr_35626_35682[(2)] = inst_35492);

(statearr_35626_35682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (5))){
var inst_35463 = (state_35573[(9)]);
var inst_35462 = (state_35573[(10)]);
var inst_35465 = (inst_35463 < inst_35462);
var inst_35466 = inst_35465;
var state_35573__$1 = state_35573;
if(cljs.core.truth_(inst_35466)){
var statearr_35627_35683 = state_35573__$1;
(statearr_35627_35683[(1)] = (7));

} else {
var statearr_35628_35684 = state_35573__$1;
(statearr_35628_35684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (14))){
var inst_35473 = (state_35573[(27)]);
var inst_35482 = cljs.core.first.call(null,inst_35473);
var inst_35483 = figwheel.client.file_reloading.eval_body.call(null,inst_35482);
var inst_35484 = cljs.core.next.call(null,inst_35473);
var inst_35460 = inst_35484;
var inst_35461 = null;
var inst_35462 = (0);
var inst_35463 = (0);
var state_35573__$1 = (function (){var statearr_35629 = state_35573;
(statearr_35629[(7)] = inst_35460);

(statearr_35629[(8)] = inst_35461);

(statearr_35629[(9)] = inst_35463);

(statearr_35629[(10)] = inst_35462);

(statearr_35629[(33)] = inst_35483);

return statearr_35629;
})();
var statearr_35630_35685 = state_35573__$1;
(statearr_35630_35685[(2)] = null);

(statearr_35630_35685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (26))){
var inst_35532 = (state_35573[(19)]);
var inst_35535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35532);
var state_35573__$1 = state_35573;
var statearr_35631_35686 = state_35573__$1;
(statearr_35631_35686[(2)] = inst_35535);

(statearr_35631_35686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (16))){
var inst_35499 = (state_35573[(24)]);
var inst_35501 = (function (){var all_files = inst_35499;
return ((function (all_files,inst_35499,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function (p1__35242_SHARP_){
return cljs.core.update_in.call(null,p1__35242_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35499,state_val_35574,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var inst_35502 = cljs.core.map.call(null,inst_35501,inst_35499);
var state_35573__$1 = state_35573;
var statearr_35632_35687 = state_35573__$1;
(statearr_35632_35687[(2)] = inst_35502);

(statearr_35632_35687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (30))){
var state_35573__$1 = state_35573;
var statearr_35633_35688 = state_35573__$1;
(statearr_35633_35688[(2)] = null);

(statearr_35633_35688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (10))){
var inst_35473 = (state_35573[(27)]);
var inst_35475 = cljs.core.chunked_seq_QMARK_.call(null,inst_35473);
var state_35573__$1 = state_35573;
if(inst_35475){
var statearr_35634_35689 = state_35573__$1;
(statearr_35634_35689[(1)] = (13));

} else {
var statearr_35635_35690 = state_35573__$1;
(statearr_35635_35690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (18))){
var inst_35506 = (state_35573[(12)]);
var inst_35505 = (state_35573[(16)]);
var inst_35505__$1 = (state_35573[(2)]);
var inst_35506__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35505__$1);
var inst_35507 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35506__$1);
var state_35573__$1 = (function (){var statearr_35636 = state_35573;
(statearr_35636[(12)] = inst_35506__$1);

(statearr_35636[(16)] = inst_35505__$1);

return statearr_35636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35573__$1,(19),inst_35507);
} else {
if((state_val_35574 === (37))){
var inst_35568 = (state_35573[(2)]);
var state_35573__$1 = state_35573;
var statearr_35637_35691 = state_35573__$1;
(statearr_35637_35691[(2)] = inst_35568);

(statearr_35637_35691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35574 === (8))){
var inst_35460 = (state_35573[(7)]);
var inst_35473 = (state_35573[(27)]);
var inst_35473__$1 = cljs.core.seq.call(null,inst_35460);
var state_35573__$1 = (function (){var statearr_35638 = state_35573;
(statearr_35638[(27)] = inst_35473__$1);

return statearr_35638;
})();
if(inst_35473__$1){
var statearr_35639_35692 = state_35573__$1;
(statearr_35639_35692[(1)] = (10));

} else {
var statearr_35640_35693 = state_35573__$1;
(statearr_35640_35693[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
;
return ((function (switch__29490__auto__,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____0 = (function (){
var statearr_35644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35644[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__);

(statearr_35644[(1)] = (1));

return statearr_35644;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____1 = (function (state_35573){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_35573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e35645){if((e35645 instanceof Object)){
var ex__29494__auto__ = e35645;
var statearr_35646_35694 = state_35573;
(statearr_35646_35694[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35695 = state_35573;
state_35573 = G__35695;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__ = function(state_35573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____1.call(this,state_35573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
})();
var state__29554__auto__ = (function (){var statearr_35647 = f__29553__auto__.call(null);
(statearr_35647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_35647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__,map__35447,map__35447__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35448,map__35448__$1,msg,files))
);

return c__29552__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35698,link){
var map__35700 = p__35698;
var map__35700__$1 = ((cljs.core.seq_QMARK_.call(null,map__35700))?cljs.core.apply.call(null,cljs.core.hash_map,map__35700):map__35700);
var file = cljs.core.get.call(null,map__35700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35700,map__35700__$1,file){
return (function (p1__35696_SHARP_,p2__35697_SHARP_){
if(cljs.core._EQ_.call(null,p1__35696_SHARP_,p2__35697_SHARP_)){
return p1__35696_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35700,map__35700__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35704){
var map__35705 = p__35704;
var map__35705__$1 = ((cljs.core.seq_QMARK_.call(null,map__35705))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var match_length = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35701_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35701_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35707 = arguments.length;
switch (G__35707) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35709){
var map__35711 = p__35709;
var map__35711__$1 = ((cljs.core.seq_QMARK_.call(null,map__35711))?cljs.core.apply.call(null,cljs.core.hash_map,map__35711):map__35711);
var f_data = map__35711__$1;
var file = cljs.core.get.call(null,map__35711__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__25687__auto__ = request_url;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35712,files_msg){
var map__35734 = p__35712;
var map__35734__$1 = ((cljs.core.seq_QMARK_.call(null,map__35734))?cljs.core.apply.call(null,cljs.core.hash_map,map__35734):map__35734);
var opts = map__35734__$1;
var on_cssload = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35735_35755 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35736_35756 = null;
var count__35737_35757 = (0);
var i__35738_35758 = (0);
while(true){
if((i__35738_35758 < count__35737_35757)){
var f_35759 = cljs.core._nth.call(null,chunk__35736_35756,i__35738_35758);
figwheel.client.file_reloading.reload_css_file.call(null,f_35759);

var G__35760 = seq__35735_35755;
var G__35761 = chunk__35736_35756;
var G__35762 = count__35737_35757;
var G__35763 = (i__35738_35758 + (1));
seq__35735_35755 = G__35760;
chunk__35736_35756 = G__35761;
count__35737_35757 = G__35762;
i__35738_35758 = G__35763;
continue;
} else {
var temp__4425__auto___35764 = cljs.core.seq.call(null,seq__35735_35755);
if(temp__4425__auto___35764){
var seq__35735_35765__$1 = temp__4425__auto___35764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35735_35765__$1)){
var c__26472__auto___35766 = cljs.core.chunk_first.call(null,seq__35735_35765__$1);
var G__35767 = cljs.core.chunk_rest.call(null,seq__35735_35765__$1);
var G__35768 = c__26472__auto___35766;
var G__35769 = cljs.core.count.call(null,c__26472__auto___35766);
var G__35770 = (0);
seq__35735_35755 = G__35767;
chunk__35736_35756 = G__35768;
count__35737_35757 = G__35769;
i__35738_35758 = G__35770;
continue;
} else {
var f_35771 = cljs.core.first.call(null,seq__35735_35765__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35771);

var G__35772 = cljs.core.next.call(null,seq__35735_35765__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35735_35755 = G__35772;
chunk__35736_35756 = G__35773;
count__35737_35757 = G__35774;
i__35738_35758 = G__35775;
continue;
}
} else {
}
}
break;
}

var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload){
return (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (1))){
var inst_35739 = cljs.core.async.timeout.call(null,(100));
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35745__$1,(2),inst_35739);
} else {
if((state_val_35746 === (2))){
var inst_35741 = (state_35745[(2)]);
var inst_35742 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35743 = on_cssload.call(null,inst_35742);
var state_35745__$1 = (function (){var statearr_35747 = state_35745;
(statearr_35747[(7)] = inst_35741);

return statearr_35747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35745__$1,inst_35743);
} else {
return null;
}
}
});})(c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload))
;
return ((function (switch__29490__auto__,c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____0 = (function (){
var statearr_35751 = [null,null,null,null,null,null,null,null];
(statearr_35751[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__);

(statearr_35751[(1)] = (1));

return statearr_35751;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____1 = (function (state_35745){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_35745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e35752){if((e35752 instanceof Object)){
var ex__29494__auto__ = e35752;
var statearr_35753_35776 = state_35745;
(statearr_35753_35776[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35777 = state_35745;
state_35745 = G__35777;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload))
})();
var state__29554__auto__ = (function (){var statearr_35754 = f__29553__auto__.call(null);
(statearr_35754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_35754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__,map__35734,map__35734__$1,opts,on_cssload))
);

return c__29552__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
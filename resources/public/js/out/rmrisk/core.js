// Compiled by ClojureScript 0.0-3308 {}
goog.provide('rmrisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
rmrisk.core.navbar = (function rmrisk$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"myapp"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"home","home",-74557309),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"about","about",1423892543),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"About"], null)], null)], null)], null)], null)], null);
});
/**
 * An input element which updates its value on change
 */
rmrisk.core.input_element = (function rmrisk$core$input_element(id,name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6652_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__6652_SHARP_.target.value);
})], null)], null);
});
rmrisk.core.email_input = (function rmrisk$core$email_input(email_address_atom){
return rmrisk.core.input_element.call(null,"email","email","email",email_address_atom);
});
rmrisk.core.about_page = (function rmrisk$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"rmrisk is central point for you risk based ISMS"], null);
});
rmrisk.core.home_page = (function rmrisk$core$home_page(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"rmrisk central"], null)], null)], null);

var email_address = reagent.core.atom.call(null,null);
return ((function (email_address){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"signup-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rmrisk.core.email_input,email_address], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"EMAIL ADDRESS IS ",cljs.core.deref.call(null,email_address)], null)], null);
});
;})(email_address))
});
rmrisk.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return rmrisk.core.home_page;},new cljs.core.Symbol("rmrisk.core","home-page","rmrisk.core/home-page",1518706668,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rmrisk.core","rmrisk.core",1663478155,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src-cljs/rmrisk/core.cljs",16,1,47,47,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rmrisk.core.home_page)?rmrisk.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return rmrisk.core.about_page;},new cljs.core.Symbol("rmrisk.core","about-page","rmrisk.core/about-page",242250924,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rmrisk.core","rmrisk.core",1663478155,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src-cljs/rmrisk/core.cljs",17,1,44,44,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rmrisk.core.about_page)?rmrisk.core.about_page.cljs$lang$test:null)]))], null);
rmrisk.core.page = (function rmrisk$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rmrisk.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__6569__auto___6655 = (function (params__6570__auto__){
if(cljs.core.map_QMARK_.call(null,params__6570__auto__)){
var map__6653 = params__6570__auto__;
var map__6653__$1 = ((cljs.core.seq_QMARK_.call(null,map__6653))?cljs.core.apply.call(null,cljs.core.hash_map,map__6653):map__6653);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6570__auto__)){
var vec__6654 = params__6570__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6569__auto___6655);

var action__6569__auto___6658 = (function (params__6570__auto__){
if(cljs.core.map_QMARK_.call(null,params__6570__auto__)){
var map__6656 = params__6570__auto__;
var map__6656__$1 = ((cljs.core.seq_QMARK_.call(null,map__6656))?cljs.core.apply.call(null,cljs.core.hash_map,map__6656):map__6656);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6570__auto__)){
var vec__6657 = params__6570__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__6569__auto___6658);

rmrisk.core.hook_browser_navigation_BANG_ = (function rmrisk$core$hook_browser_navigation_BANG_(){
var G__6660 = (new goog.History());
goog.events.listen(G__6660,goog.history.EventType.NAVIGATE,((function (G__6660){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__6660))
);

G__6660.setEnabled(true);

return G__6660;
});
rmrisk.core.fetch_docs_BANG_ = (function rmrisk$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__6661_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__6661_SHARP_);
})], null));
});
rmrisk.core.mount_components = (function rmrisk$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return rmrisk.core.navbar;},new cljs.core.Symbol("rmrisk.core","navbar","rmrisk.core/navbar",834978259,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rmrisk.core","rmrisk.core",1663478155,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src-cljs/rmrisk/core.cljs",13,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rmrisk.core.navbar)?rmrisk.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return rmrisk.core.page;},new cljs.core.Symbol("rmrisk.core","page","rmrisk.core/page",618193881,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rmrisk.core","rmrisk.core",1663478155,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src-cljs/rmrisk/core.cljs",11,1,65,65,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(rmrisk.core.page)?rmrisk.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
rmrisk.core.init_BANG_ = (function rmrisk$core$init_BANG_(){
rmrisk.core.fetch_docs_BANG_.call(null);

rmrisk.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return rmrisk.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map
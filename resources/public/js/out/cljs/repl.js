// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35049_35061 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35050_35062 = null;
var count__35051_35063 = (0);
var i__35052_35064 = (0);
while(true){
if((i__35052_35064 < count__35051_35063)){
var f_35065 = cljs.core._nth.call(null,chunk__35050_35062,i__35052_35064);
cljs.core.println.call(null,"  ",f_35065);

var G__35066 = seq__35049_35061;
var G__35067 = chunk__35050_35062;
var G__35068 = count__35051_35063;
var G__35069 = (i__35052_35064 + (1));
seq__35049_35061 = G__35066;
chunk__35050_35062 = G__35067;
count__35051_35063 = G__35068;
i__35052_35064 = G__35069;
continue;
} else {
var temp__4425__auto___35070 = cljs.core.seq.call(null,seq__35049_35061);
if(temp__4425__auto___35070){
var seq__35049_35071__$1 = temp__4425__auto___35070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35049_35071__$1)){
var c__26472__auto___35072 = cljs.core.chunk_first.call(null,seq__35049_35071__$1);
var G__35073 = cljs.core.chunk_rest.call(null,seq__35049_35071__$1);
var G__35074 = c__26472__auto___35072;
var G__35075 = cljs.core.count.call(null,c__26472__auto___35072);
var G__35076 = (0);
seq__35049_35061 = G__35073;
chunk__35050_35062 = G__35074;
count__35051_35063 = G__35075;
i__35052_35064 = G__35076;
continue;
} else {
var f_35077 = cljs.core.first.call(null,seq__35049_35071__$1);
cljs.core.println.call(null,"  ",f_35077);

var G__35078 = cljs.core.next.call(null,seq__35049_35071__$1);
var G__35079 = null;
var G__35080 = (0);
var G__35081 = (0);
seq__35049_35061 = G__35078;
chunk__35050_35062 = G__35079;
count__35051_35063 = G__35080;
i__35052_35064 = G__35081;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35082 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25687__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35082);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35082)))?cljs.core.second.call(null,arglists_35082):arglists_35082));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35054 = null;
var count__35055 = (0);
var i__35056 = (0);
while(true){
if((i__35056 < count__35055)){
var vec__35057 = cljs.core._nth.call(null,chunk__35054,i__35056);
var name = cljs.core.nth.call(null,vec__35057,(0),null);
var map__35058 = cljs.core.nth.call(null,vec__35057,(1),null);
var map__35058__$1 = ((cljs.core.seq_QMARK_.call(null,map__35058))?cljs.core.apply.call(null,cljs.core.hash_map,map__35058):map__35058);
var doc = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35083 = seq__35053;
var G__35084 = chunk__35054;
var G__35085 = count__35055;
var G__35086 = (i__35056 + (1));
seq__35053 = G__35083;
chunk__35054 = G__35084;
count__35055 = G__35085;
i__35056 = G__35086;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35053);
if(temp__4425__auto__){
var seq__35053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35053__$1)){
var c__26472__auto__ = cljs.core.chunk_first.call(null,seq__35053__$1);
var G__35087 = cljs.core.chunk_rest.call(null,seq__35053__$1);
var G__35088 = c__26472__auto__;
var G__35089 = cljs.core.count.call(null,c__26472__auto__);
var G__35090 = (0);
seq__35053 = G__35087;
chunk__35054 = G__35088;
count__35055 = G__35089;
i__35056 = G__35090;
continue;
} else {
var vec__35059 = cljs.core.first.call(null,seq__35053__$1);
var name = cljs.core.nth.call(null,vec__35059,(0),null);
var map__35060 = cljs.core.nth.call(null,vec__35059,(1),null);
var map__35060__$1 = ((cljs.core.seq_QMARK_.call(null,map__35060))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var doc = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35091 = cljs.core.next.call(null,seq__35053__$1);
var G__35092 = null;
var G__35093 = (0);
var G__35094 = (0);
seq__35053 = G__35091;
chunk__35054 = G__35092;
count__35055 = G__35093;
i__35056 = G__35094;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
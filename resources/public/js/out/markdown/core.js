// Compiled by ClojureScript 0.0-3308 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__33984){
var map__33990 = p__33984;
var map__33990__$1 = ((cljs.core.seq_QMARK_.call(null,map__33990))?cljs.core.apply.call(null,cljs.core.hash_map,map__33990):map__33990);
var replacement_transformers = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__33990,map__33990__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_33991 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__33992 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_33991,map__33990,map__33990__$1,replacement_transformers,custom_transformers){
return (function (p__33993,transformer){
var vec__33994 = p__33993;
var text = cljs.core.nth.call(null,vec__33994,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__33994,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_33991,map__33990,map__33990__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__25687__auto__ = replacement_transformers;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__33992,(0),null);
var new_state = cljs.core.nth.call(null,vec__33992,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_33991;
}});
;})(map__33990,map__33990__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__26727__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26727__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq33995){
var G__33996 = cljs.core.first.call(null,seq33995);
var seq33995__$1 = cljs.core.next.call(null,seq33995);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__33996,seq33995__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34001_34005 = cljs.core.seq.call(null,lines);
var chunk__34002_34006 = null;
var count__34003_34007 = (0);
var i__34004_34008 = (0);
while(true){
if((i__34004_34008 < count__34003_34007)){
var line_34009 = cljs.core._nth.call(null,chunk__34002_34006,i__34004_34008);
markdown.transformers.parse_reference_link.call(null,line_34009,references);

var G__34010 = seq__34001_34005;
var G__34011 = chunk__34002_34006;
var G__34012 = count__34003_34007;
var G__34013 = (i__34004_34008 + (1));
seq__34001_34005 = G__34010;
chunk__34002_34006 = G__34011;
count__34003_34007 = G__34012;
i__34004_34008 = G__34013;
continue;
} else {
var temp__4425__auto___34014 = cljs.core.seq.call(null,seq__34001_34005);
if(temp__4425__auto___34014){
var seq__34001_34015__$1 = temp__4425__auto___34014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34001_34015__$1)){
var c__26472__auto___34016 = cljs.core.chunk_first.call(null,seq__34001_34015__$1);
var G__34017 = cljs.core.chunk_rest.call(null,seq__34001_34015__$1);
var G__34018 = c__26472__auto___34016;
var G__34019 = cljs.core.count.call(null,c__26472__auto___34016);
var G__34020 = (0);
seq__34001_34005 = G__34017;
chunk__34002_34006 = G__34018;
count__34003_34007 = G__34019;
i__34004_34008 = G__34020;
continue;
} else {
var line_34021 = cljs.core.first.call(null,seq__34001_34015__$1);
markdown.transformers.parse_reference_link.call(null,line_34021,references);

var G__34022 = cljs.core.next.call(null,seq__34001_34015__$1);
var G__34023 = null;
var G__34024 = (0);
var G__34025 = (0);
seq__34001_34005 = G__34022;
chunk__34002_34006 = G__34023;
count__34003_34007 = G__34024;
i__34004_34008 = G__34025;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__26727__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26727__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_34028 = markdown.transformers._STAR_substring_STAR_;
var formatter34029 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_34028,formatter34029){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_34028,formatter34029))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__34031_34034 = lines;
var vec__34032_34035 = G__34031_34034;
var line_34036 = cljs.core.nth.call(null,vec__34032_34035,(0),null);
var more_34037 = cljs.core.nthnext.call(null,vec__34032_34035,(1));
var state_34038 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__34031_34039__$1 = G__34031_34034;
var state_34040__$1 = state_34038;
while(true){
var vec__34033_34041 = G__34031_34039__$1;
var line_34042__$1 = cljs.core.nth.call(null,vec__34033_34041,(0),null);
var more_34043__$1 = cljs.core.nthnext.call(null,vec__34033_34041,(1));
var state_34044__$2 = state_34040__$1;
var state_34045__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34044__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34044__$2),cljs.core.first.call(null,more_34043__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_34044__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_34044__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_34043__$1))){
var G__34046 = more_34043__$1;
var G__34047 = cljs.core.assoc.call(null,transformer.call(null,html,line_34042__$1,cljs.core.first.call(null,more_34043__$1),state_34045__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_34042__$1));
G__34031_34039__$1 = G__34046;
state_34040__$1 = G__34047;
continue;
} else {
transformer.call(null,html,line_34042__$1,"",cljs.core.assoc.call(null,state_34045__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter34029;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_34028;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq34026){
var G__34027 = cljs.core.first.call(null,seq34026);
var seq34026__$1 = cljs.core.next.call(null,seq34026);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__34027,seq34026__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__26727__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__26727__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq34048){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34048));
});

//# sourceMappingURL=core.js.map
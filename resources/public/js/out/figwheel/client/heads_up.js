// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__26727__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26727__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34806_34814 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34807_34815 = null;
var count__34808_34816 = (0);
var i__34809_34817 = (0);
while(true){
if((i__34809_34817 < count__34808_34816)){
var k_34818 = cljs.core._nth.call(null,chunk__34807_34815,i__34809_34817);
e.setAttribute(cljs.core.name.call(null,k_34818),cljs.core.get.call(null,attrs,k_34818));

var G__34819 = seq__34806_34814;
var G__34820 = chunk__34807_34815;
var G__34821 = count__34808_34816;
var G__34822 = (i__34809_34817 + (1));
seq__34806_34814 = G__34819;
chunk__34807_34815 = G__34820;
count__34808_34816 = G__34821;
i__34809_34817 = G__34822;
continue;
} else {
var temp__4425__auto___34823 = cljs.core.seq.call(null,seq__34806_34814);
if(temp__4425__auto___34823){
var seq__34806_34824__$1 = temp__4425__auto___34823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34806_34824__$1)){
var c__26472__auto___34825 = cljs.core.chunk_first.call(null,seq__34806_34824__$1);
var G__34826 = cljs.core.chunk_rest.call(null,seq__34806_34824__$1);
var G__34827 = c__26472__auto___34825;
var G__34828 = cljs.core.count.call(null,c__26472__auto___34825);
var G__34829 = (0);
seq__34806_34814 = G__34826;
chunk__34807_34815 = G__34827;
count__34808_34816 = G__34828;
i__34809_34817 = G__34829;
continue;
} else {
var k_34830 = cljs.core.first.call(null,seq__34806_34824__$1);
e.setAttribute(cljs.core.name.call(null,k_34830),cljs.core.get.call(null,attrs,k_34830));

var G__34831 = cljs.core.next.call(null,seq__34806_34824__$1);
var G__34832 = null;
var G__34833 = (0);
var G__34834 = (0);
seq__34806_34814 = G__34831;
chunk__34807_34815 = G__34832;
count__34808_34816 = G__34833;
i__34809_34817 = G__34834;
continue;
}
} else {
}
}
break;
}

var seq__34810_34835 = cljs.core.seq.call(null,children);
var chunk__34811_34836 = null;
var count__34812_34837 = (0);
var i__34813_34838 = (0);
while(true){
if((i__34813_34838 < count__34812_34837)){
var ch_34839 = cljs.core._nth.call(null,chunk__34811_34836,i__34813_34838);
e.appendChild(ch_34839);

var G__34840 = seq__34810_34835;
var G__34841 = chunk__34811_34836;
var G__34842 = count__34812_34837;
var G__34843 = (i__34813_34838 + (1));
seq__34810_34835 = G__34840;
chunk__34811_34836 = G__34841;
count__34812_34837 = G__34842;
i__34813_34838 = G__34843;
continue;
} else {
var temp__4425__auto___34844 = cljs.core.seq.call(null,seq__34810_34835);
if(temp__4425__auto___34844){
var seq__34810_34845__$1 = temp__4425__auto___34844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34810_34845__$1)){
var c__26472__auto___34846 = cljs.core.chunk_first.call(null,seq__34810_34845__$1);
var G__34847 = cljs.core.chunk_rest.call(null,seq__34810_34845__$1);
var G__34848 = c__26472__auto___34846;
var G__34849 = cljs.core.count.call(null,c__26472__auto___34846);
var G__34850 = (0);
seq__34810_34835 = G__34847;
chunk__34811_34836 = G__34848;
count__34812_34837 = G__34849;
i__34813_34838 = G__34850;
continue;
} else {
var ch_34851 = cljs.core.first.call(null,seq__34810_34845__$1);
e.appendChild(ch_34851);

var G__34852 = cljs.core.next.call(null,seq__34810_34845__$1);
var G__34853 = null;
var G__34854 = (0);
var G__34855 = (0);
seq__34810_34835 = G__34852;
chunk__34811_34836 = G__34853;
count__34812_34837 = G__34854;
i__34813_34838 = G__34855;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34803){
var G__34804 = cljs.core.first.call(null,seq34803);
var seq34803__$1 = cljs.core.next.call(null,seq34803);
var G__34805 = cljs.core.first.call(null,seq34803__$1);
var seq34803__$2 = cljs.core.next.call(null,seq34803__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34804,G__34805,seq34803__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26586__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26582__auto__,prefer_table__26583__auto__,method_cache__26584__auto__,cached_hierarchy__26585__auto__,hierarchy__26586__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26582__auto__,prefer_table__26583__auto__,method_cache__26584__auto__,cached_hierarchy__26585__auto__,hierarchy__26586__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26586__auto__,method_table__26582__auto__,prefer_table__26583__auto__,method_cache__26584__auto__,cached_hierarchy__26585__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34856 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34856.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34856.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34856.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34856);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34857,st_map){
var map__34861 = p__34857;
var map__34861__$1 = ((cljs.core.seq_QMARK_.call(null,map__34861))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
var container_el = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34861,map__34861__$1,container_el){
return (function (p__34862){
var vec__34863 = p__34862;
var k = cljs.core.nth.call(null,vec__34863,(0),null);
var v = cljs.core.nth.call(null,vec__34863,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34861,map__34861__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34864,dom_str){
var map__34866 = p__34864;
var map__34866__$1 = ((cljs.core.seq_QMARK_.call(null,map__34866))?cljs.core.apply.call(null,cljs.core.hash_map,map__34866):map__34866);
var c = map__34866__$1;
var content_area_el = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34867){
var map__34869 = p__34867;
var map__34869__$1 = ((cljs.core.seq_QMARK_.call(null,map__34869))?cljs.core.apply.call(null,cljs.core.hash_map,map__34869):map__34869);
var content_area_el = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_34911){
var state_val_34912 = (state_34911[(1)]);
if((state_val_34912 === (1))){
var inst_34896 = (state_34911[(7)]);
var inst_34896__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34897 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34898 = ["10px","10px","100%","68px","1.0"];
var inst_34899 = cljs.core.PersistentHashMap.fromArrays(inst_34897,inst_34898);
var inst_34900 = cljs.core.merge.call(null,inst_34899,style);
var inst_34901 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34896__$1,inst_34900);
var inst_34902 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34896__$1,msg);
var inst_34903 = cljs.core.async.timeout.call(null,(300));
var state_34911__$1 = (function (){var statearr_34913 = state_34911;
(statearr_34913[(8)] = inst_34901);

(statearr_34913[(7)] = inst_34896__$1);

(statearr_34913[(9)] = inst_34902);

return statearr_34913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34911__$1,(2),inst_34903);
} else {
if((state_val_34912 === (2))){
var inst_34896 = (state_34911[(7)]);
var inst_34905 = (state_34911[(2)]);
var inst_34906 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34907 = ["auto"];
var inst_34908 = cljs.core.PersistentHashMap.fromArrays(inst_34906,inst_34907);
var inst_34909 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34896,inst_34908);
var state_34911__$1 = (function (){var statearr_34914 = state_34911;
(statearr_34914[(10)] = inst_34905);

return statearr_34914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34911__$1,inst_34909);
} else {
return null;
}
}
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____0 = (function (){
var statearr_34918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34918[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__);

(statearr_34918[(1)] = (1));

return statearr_34918;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____1 = (function (state_34911){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34919){if((e34919 instanceof Object)){
var ex__29494__auto__ = e34919;
var statearr_34920_34922 = state_34911;
(statearr_34920_34922[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34923 = state_34911;
state_34911 = G__34923;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__ = function(state_34911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____1.call(this,state_34911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_34921 = f__29553__auto__.call(null);
(statearr_34921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_34921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__34925 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__34925,(0),null);
var ln = cljs.core.nth.call(null,vec__34925,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34928 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34928,(0),null);
var file_line = cljs.core.nth.call(null,vec__34928,(1),null);
var file_column = cljs.core.nth.call(null,vec__34928,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34928,file_name,file_line,file_column){
return (function (p1__34926_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34926_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34928,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25687__auto__ = file_line;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
var and__25675__auto__ = cause;
if(cljs.core.truth_(and__25675__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25675__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__34930 = figwheel.client.heads_up.ensure_container.call(null);
var map__34930__$1 = ((cljs.core.seq_QMARK_.call(null,map__34930))?cljs.core.apply.call(null,cljs.core.hash_map,map__34930):map__34930);
var content_area_el = cljs.core.get.call(null,map__34930__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_34977){
var state_val_34978 = (state_34977[(1)]);
if((state_val_34978 === (1))){
var inst_34960 = (state_34977[(7)]);
var inst_34960__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34961 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34962 = ["0.0"];
var inst_34963 = cljs.core.PersistentHashMap.fromArrays(inst_34961,inst_34962);
var inst_34964 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34960__$1,inst_34963);
var inst_34965 = cljs.core.async.timeout.call(null,(300));
var state_34977__$1 = (function (){var statearr_34979 = state_34977;
(statearr_34979[(8)] = inst_34964);

(statearr_34979[(7)] = inst_34960__$1);

return statearr_34979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34977__$1,(2),inst_34965);
} else {
if((state_val_34978 === (2))){
var inst_34960 = (state_34977[(7)]);
var inst_34967 = (state_34977[(2)]);
var inst_34968 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34969 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34970 = cljs.core.PersistentHashMap.fromArrays(inst_34968,inst_34969);
var inst_34971 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34960,inst_34970);
var inst_34972 = cljs.core.async.timeout.call(null,(200));
var state_34977__$1 = (function (){var statearr_34980 = state_34977;
(statearr_34980[(9)] = inst_34971);

(statearr_34980[(10)] = inst_34967);

return statearr_34980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34977__$1,(3),inst_34972);
} else {
if((state_val_34978 === (3))){
var inst_34960 = (state_34977[(7)]);
var inst_34974 = (state_34977[(2)]);
var inst_34975 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34960,"");
var state_34977__$1 = (function (){var statearr_34981 = state_34977;
(statearr_34981[(11)] = inst_34974);

return statearr_34981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34977__$1,inst_34975);
} else {
return null;
}
}
}
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29491__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29491__auto____0 = (function (){
var statearr_34985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34985[(0)] = figwheel$client$heads_up$clear_$_state_machine__29491__auto__);

(statearr_34985[(1)] = (1));

return statearr_34985;
});
var figwheel$client$heads_up$clear_$_state_machine__29491__auto____1 = (function (state_34977){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34986){if((e34986 instanceof Object)){
var ex__29494__auto__ = e34986;
var statearr_34987_34989 = state_34977;
(statearr_34987_34989[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34990 = state_34977;
state_34977 = G__34990;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29491__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29491__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29491__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29491__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_34988 = f__29553__auto__.call(null);
(statearr_34988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_34988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_35022){
var state_val_35023 = (state_35022[(1)]);
if((state_val_35023 === (1))){
var inst_35012 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(2),inst_35012);
} else {
if((state_val_35023 === (2))){
var inst_35014 = (state_35022[(2)]);
var inst_35015 = cljs.core.async.timeout.call(null,(400));
var state_35022__$1 = (function (){var statearr_35024 = state_35022;
(statearr_35024[(7)] = inst_35014);

return statearr_35024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(3),inst_35015);
} else {
if((state_val_35023 === (3))){
var inst_35017 = (state_35022[(2)]);
var inst_35018 = figwheel.client.heads_up.clear.call(null);
var state_35022__$1 = (function (){var statearr_35025 = state_35022;
(statearr_35025[(8)] = inst_35017);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(4),inst_35018);
} else {
if((state_val_35023 === (4))){
var inst_35020 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35022__$1,inst_35020);
} else {
return null;
}
}
}
}
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____0 = (function (){
var statearr_35029 = [null,null,null,null,null,null,null,null,null];
(statearr_35029[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__);

(statearr_35029[(1)] = (1));

return statearr_35029;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____1 = (function (state_35022){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_35022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e35030){if((e35030 instanceof Object)){
var ex__29494__auto__ = e35030;
var statearr_35031_35033 = state_35022;
(statearr_35031_35033[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_35022;
state_35022 = G__35034;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__ = function(state_35022){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____1.call(this,state_35022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_35032 = f__29553__auto__.call(null);
(statearr_35032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_35032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
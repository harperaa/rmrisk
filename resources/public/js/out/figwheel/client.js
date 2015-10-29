// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34156__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34157__i = 0, G__34157__a = new Array(arguments.length -  0);
while (G__34157__i < G__34157__a.length) {G__34157__a[G__34157__i] = arguments[G__34157__i + 0]; ++G__34157__i;}
  args = new cljs.core.IndexedSeq(G__34157__a,0);
} 
return G__34156__delegate.call(this,args);};
G__34156.cljs$lang$maxFixedArity = 0;
G__34156.cljs$lang$applyTo = (function (arglist__34158){
var args = cljs.core.seq(arglist__34158);
return G__34156__delegate(args);
});
G__34156.cljs$core$IFn$_invoke$arity$variadic = G__34156__delegate;
return G__34156;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34159){
var map__34161 = p__34159;
var map__34161__$1 = ((cljs.core.seq_QMARK_.call(null,map__34161))?cljs.core.apply.call(null,cljs.core.hash_map,map__34161):map__34161);
var message = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25687__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25675__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25675__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25675__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29552__auto___34290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___34290,ch){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___34290,ch){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34291 = state_34264__$1;
(statearr_34266_34291[(2)] = inst_34260);

(statearr_34266_34291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34267_34292 = state_34264__$1;
(statearr_34267_34292[(2)] = null);

(statearr_34267_34292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34228 = (state_34264[(7)]);
var inst_34228__$1 = (state_34264[(2)]);
var state_34264__$1 = (function (){var statearr_34268 = state_34264;
(statearr_34268[(7)] = inst_34228__$1);

return statearr_34268;
})();
if(cljs.core.truth_(inst_34228__$1)){
var statearr_34269_34293 = state_34264__$1;
(statearr_34269_34293[(1)] = (5));

} else {
var statearr_34270_34294 = state_34264__$1;
(statearr_34270_34294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (13))){
var state_34264__$1 = state_34264;
var statearr_34271_34295 = state_34264__$1;
(statearr_34271_34295[(2)] = null);

(statearr_34271_34295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var state_34264__$1 = state_34264;
var statearr_34272_34296 = state_34264__$1;
(statearr_34272_34296[(2)] = null);

(statearr_34272_34296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (12))){
var inst_34235 = (state_34264[(8)]);
var inst_34248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34235);
var inst_34249 = cljs.core.first.call(null,inst_34248);
var inst_34250 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34249);
var inst_34251 = console.warn("Figwheel: Not loading code with warnings - ",inst_34250);
var state_34264__$1 = state_34264;
var statearr_34273_34297 = state_34264__$1;
(statearr_34273_34297[(2)] = inst_34251);

(statearr_34273_34297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),ch);
} else {
if((state_val_34265 === (11))){
var inst_34244 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34274_34298 = state_34264__$1;
(statearr_34274_34298[(2)] = inst_34244);

(statearr_34274_34298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var inst_34234 = (state_34264[(9)]);
var inst_34246 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34234,opts);
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34246)){
var statearr_34275_34299 = state_34264__$1;
(statearr_34275_34299[(1)] = (12));

} else {
var statearr_34276_34300 = state_34264__$1;
(statearr_34276_34300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var inst_34234 = (state_34264[(9)]);
var inst_34228 = (state_34264[(7)]);
var inst_34230 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34231 = (new cljs.core.PersistentArrayMap(null,2,inst_34230,null));
var inst_34232 = (new cljs.core.PersistentHashSet(null,inst_34231,null));
var inst_34233 = figwheel.client.focus_msgs.call(null,inst_34232,inst_34228);
var inst_34234__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34233);
var inst_34235 = cljs.core.first.call(null,inst_34233);
var inst_34236 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34234__$1,opts);
var state_34264__$1 = (function (){var statearr_34277 = state_34264;
(statearr_34277[(9)] = inst_34234__$1);

(statearr_34277[(8)] = inst_34235);

return statearr_34277;
})();
if(cljs.core.truth_(inst_34236)){
var statearr_34278_34301 = state_34264__$1;
(statearr_34278_34301[(1)] = (8));

} else {
var statearr_34279_34302 = state_34264__$1;
(statearr_34279_34302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (14))){
var inst_34254 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34280_34303 = state_34264__$1;
(statearr_34280_34303[(2)] = inst_34254);

(statearr_34280_34303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34256 = (state_34264[(2)]);
var state_34264__$1 = (function (){var statearr_34281 = state_34264;
(statearr_34281[(10)] = inst_34256);

return statearr_34281;
})();
var statearr_34282_34304 = state_34264__$1;
(statearr_34282_34304[(2)] = null);

(statearr_34282_34304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (8))){
var inst_34235 = (state_34264[(8)]);
var inst_34238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34239 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34235);
var inst_34240 = cljs.core.async.timeout.call(null,(1000));
var inst_34241 = [inst_34239,inst_34240];
var inst_34242 = (new cljs.core.PersistentVector(null,2,(5),inst_34238,inst_34241,null));
var state_34264__$1 = state_34264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34264__$1,(11),inst_34242);
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
});})(c__29552__auto___34290,ch))
;
return ((function (switch__29490__auto__,c__29552__auto___34290,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____0 = (function (){
var statearr_34286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____1 = (function (state_34264){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34287){if((e34287 instanceof Object)){
var ex__29494__auto__ = e34287;
var statearr_34288_34305 = state_34264;
(statearr_34288_34305[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34306 = state_34264;
state_34264 = G__34306;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29491__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___34290,ch))
})();
var state__29554__auto__ = (function (){var statearr_34289 = f__29553__auto__.call(null);
(statearr_34289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___34290);

return statearr_34289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___34290,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34307_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34307_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34314 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34314){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34313 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34312,_STAR_print_newline_STAR_34313,base_path_34314){
return (function() { 
var G__34315__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34316__i = 0, G__34316__a = new Array(arguments.length -  0);
while (G__34316__i < G__34316__a.length) {G__34316__a[G__34316__i] = arguments[G__34316__i + 0]; ++G__34316__i;}
  args = new cljs.core.IndexedSeq(G__34316__a,0);
} 
return G__34315__delegate.call(this,args);};
G__34315.cljs$lang$maxFixedArity = 0;
G__34315.cljs$lang$applyTo = (function (arglist__34317){
var args = cljs.core.seq(arglist__34317);
return G__34315__delegate(args);
});
G__34315.cljs$core$IFn$_invoke$arity$variadic = G__34315__delegate;
return G__34315;
})()
;})(_STAR_print_fn_STAR_34312,_STAR_print_newline_STAR_34313,base_path_34314))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34313;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34312;
}}catch (e34311){if((e34311 instanceof Error)){
var e = e34311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34314], null));
} else {
var e = e34311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34314))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34318){
var map__34323 = p__34318;
var map__34323__$1 = ((cljs.core.seq_QMARK_.call(null,map__34323))?cljs.core.apply.call(null,cljs.core.hash_map,map__34323):map__34323);
var opts = map__34323__$1;
var build_id = cljs.core.get.call(null,map__34323__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34323,map__34323__$1,opts,build_id){
return (function (p__34324){
var vec__34325 = p__34324;
var map__34326 = cljs.core.nth.call(null,vec__34325,(0),null);
var map__34326__$1 = ((cljs.core.seq_QMARK_.call(null,map__34326))?cljs.core.apply.call(null,cljs.core.hash_map,map__34326):map__34326);
var msg = map__34326__$1;
var msg_name = cljs.core.get.call(null,map__34326__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34325,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34325,map__34326,map__34326__$1,msg,msg_name,_,map__34323,map__34323__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34325,map__34326,map__34326__$1,msg,msg_name,_,map__34323,map__34323__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34323,map__34323__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34330){
var vec__34331 = p__34330;
var map__34332 = cljs.core.nth.call(null,vec__34331,(0),null);
var map__34332__$1 = ((cljs.core.seq_QMARK_.call(null,map__34332))?cljs.core.apply.call(null,cljs.core.hash_map,map__34332):map__34332);
var msg = map__34332__$1;
var msg_name = cljs.core.get.call(null,map__34332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34331,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34333){
var map__34341 = p__34333;
var map__34341__$1 = ((cljs.core.seq_QMARK_.call(null,map__34341))?cljs.core.apply.call(null,cljs.core.hash_map,map__34341):map__34341);
var on_compile_warning = cljs.core.get.call(null,map__34341__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34341__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34341,map__34341__$1,on_compile_warning,on_compile_fail){
return (function (p__34342){
var vec__34343 = p__34342;
var map__34344 = cljs.core.nth.call(null,vec__34343,(0),null);
var map__34344__$1 = ((cljs.core.seq_QMARK_.call(null,map__34344))?cljs.core.apply.call(null,cljs.core.hash_map,map__34344):map__34344);
var msg = map__34344__$1;
var msg_name = cljs.core.get.call(null,map__34344__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34343,(1));
var pred__34345 = cljs.core._EQ_;
var expr__34346 = msg_name;
if(cljs.core.truth_(pred__34345.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34346))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34345.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34346))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34341,map__34341__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__,msg_hist,msg_names,msg){
return (function (state_34547){
var state_val_34548 = (state_34547[(1)]);
if((state_val_34548 === (7))){
var inst_34481 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34549_34590 = state_34547__$1;
(statearr_34549_34590[(2)] = inst_34481);

(statearr_34549_34590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (20))){
var inst_34509 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34509)){
var statearr_34550_34591 = state_34547__$1;
(statearr_34550_34591[(1)] = (22));

} else {
var statearr_34551_34592 = state_34547__$1;
(statearr_34551_34592[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (27))){
var inst_34521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34522 = figwheel.client.heads_up.display_warning.call(null,inst_34521);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(30),inst_34522);
} else {
if((state_val_34548 === (1))){
var inst_34469 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34469)){
var statearr_34552_34593 = state_34547__$1;
(statearr_34552_34593[(1)] = (2));

} else {
var statearr_34553_34594 = state_34547__$1;
(statearr_34553_34594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (24))){
var inst_34537 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34554_34595 = state_34547__$1;
(statearr_34554_34595[(2)] = inst_34537);

(statearr_34554_34595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (4))){
var inst_34545 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34547__$1,inst_34545);
} else {
if((state_val_34548 === (15))){
var inst_34497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34498 = figwheel.client.format_messages.call(null,inst_34497);
var inst_34499 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34500 = figwheel.client.heads_up.display_error.call(null,inst_34498,inst_34499);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(18),inst_34500);
} else {
if((state_val_34548 === (21))){
var inst_34539 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34555_34596 = state_34547__$1;
(statearr_34555_34596[(2)] = inst_34539);

(statearr_34555_34596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (31))){
var inst_34528 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(34),inst_34528);
} else {
if((state_val_34548 === (32))){
var state_34547__$1 = state_34547;
var statearr_34556_34597 = state_34547__$1;
(statearr_34556_34597[(2)] = null);

(statearr_34556_34597[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (33))){
var inst_34533 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34557_34598 = state_34547__$1;
(statearr_34557_34598[(2)] = inst_34533);

(statearr_34557_34598[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (13))){
var inst_34487 = (state_34547[(2)]);
var inst_34488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34489 = figwheel.client.format_messages.call(null,inst_34488);
var inst_34490 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34491 = figwheel.client.heads_up.display_error.call(null,inst_34489,inst_34490);
var state_34547__$1 = (function (){var statearr_34558 = state_34547;
(statearr_34558[(7)] = inst_34487);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(14),inst_34491);
} else {
if((state_val_34548 === (22))){
var inst_34511 = figwheel.client.heads_up.clear.call(null);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(25),inst_34511);
} else {
if((state_val_34548 === (29))){
var inst_34535 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34559_34599 = state_34547__$1;
(statearr_34559_34599[(2)] = inst_34535);

(statearr_34559_34599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (6))){
var inst_34477 = figwheel.client.heads_up.clear.call(null);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(9),inst_34477);
} else {
if((state_val_34548 === (28))){
var inst_34526 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34526)){
var statearr_34560_34600 = state_34547__$1;
(statearr_34560_34600[(1)] = (31));

} else {
var statearr_34561_34601 = state_34547__$1;
(statearr_34561_34601[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (25))){
var inst_34513 = (state_34547[(2)]);
var inst_34514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34515 = figwheel.client.heads_up.display_warning.call(null,inst_34514);
var state_34547__$1 = (function (){var statearr_34562 = state_34547;
(statearr_34562[(8)] = inst_34513);

return statearr_34562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(26),inst_34515);
} else {
if((state_val_34548 === (34))){
var inst_34530 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34563_34602 = state_34547__$1;
(statearr_34563_34602[(2)] = inst_34530);

(statearr_34563_34602[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (17))){
var inst_34541 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34564_34603 = state_34547__$1;
(statearr_34564_34603[(2)] = inst_34541);

(statearr_34564_34603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (3))){
var inst_34483 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34483)){
var statearr_34565_34604 = state_34547__$1;
(statearr_34565_34604[(1)] = (10));

} else {
var statearr_34566_34605 = state_34547__$1;
(statearr_34566_34605[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (12))){
var inst_34543 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34567_34606 = state_34547__$1;
(statearr_34567_34606[(2)] = inst_34543);

(statearr_34567_34606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (2))){
var inst_34471 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34471)){
var statearr_34568_34607 = state_34547__$1;
(statearr_34568_34607[(1)] = (5));

} else {
var statearr_34569_34608 = state_34547__$1;
(statearr_34569_34608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (23))){
var inst_34519 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34519)){
var statearr_34570_34609 = state_34547__$1;
(statearr_34570_34609[(1)] = (27));

} else {
var statearr_34571_34610 = state_34547__$1;
(statearr_34571_34610[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (19))){
var inst_34506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34507 = figwheel.client.heads_up.append_message.call(null,inst_34506);
var state_34547__$1 = state_34547;
var statearr_34572_34611 = state_34547__$1;
(statearr_34572_34611[(2)] = inst_34507);

(statearr_34572_34611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (11))){
var inst_34495 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34495)){
var statearr_34573_34612 = state_34547__$1;
(statearr_34573_34612[(1)] = (15));

} else {
var statearr_34574_34613 = state_34547__$1;
(statearr_34574_34613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (9))){
var inst_34479 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34575_34614 = state_34547__$1;
(statearr_34575_34614[(2)] = inst_34479);

(statearr_34575_34614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (5))){
var inst_34473 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(8),inst_34473);
} else {
if((state_val_34548 === (14))){
var inst_34493 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34576_34615 = state_34547__$1;
(statearr_34576_34615[(2)] = inst_34493);

(statearr_34576_34615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (26))){
var inst_34517 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34577_34616 = state_34547__$1;
(statearr_34577_34616[(2)] = inst_34517);

(statearr_34577_34616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (16))){
var inst_34504 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34547__$1 = state_34547;
if(cljs.core.truth_(inst_34504)){
var statearr_34578_34617 = state_34547__$1;
(statearr_34578_34617[(1)] = (19));

} else {
var statearr_34579_34618 = state_34547__$1;
(statearr_34579_34618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (30))){
var inst_34524 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34580_34619 = state_34547__$1;
(statearr_34580_34619[(2)] = inst_34524);

(statearr_34580_34619[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (10))){
var inst_34485 = figwheel.client.heads_up.clear.call(null);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(13),inst_34485);
} else {
if((state_val_34548 === (18))){
var inst_34502 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34581_34620 = state_34547__$1;
(statearr_34581_34620[(2)] = inst_34502);

(statearr_34581_34620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (8))){
var inst_34475 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34582_34621 = state_34547__$1;
(statearr_34582_34621[(2)] = inst_34475);

(statearr_34582_34621[(1)] = (7));


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
});})(c__29552__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29490__auto__,c__29552__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____0 = (function (){
var statearr_34586 = [null,null,null,null,null,null,null,null,null];
(statearr_34586[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__);

(statearr_34586[(1)] = (1));

return statearr_34586;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____1 = (function (state_34547){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34587){if((e34587 instanceof Object)){
var ex__29494__auto__ = e34587;
var statearr_34588_34622 = state_34547;
(statearr_34588_34622[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34623 = state_34547;
state_34547 = G__34623;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__ = function(state_34547){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____1.call(this,state_34547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__,msg_hist,msg_names,msg))
})();
var state__29554__auto__ = (function (){var statearr_34589 = f__29553__auto__.call(null);
(statearr_34589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_34589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__,msg_hist,msg_names,msg))
);

return c__29552__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29552__auto___34686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___34686,ch){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___34686,ch){
return (function (state_34669){
var state_val_34670 = (state_34669[(1)]);
if((state_val_34670 === (1))){
var state_34669__$1 = state_34669;
var statearr_34671_34687 = state_34669__$1;
(statearr_34671_34687[(2)] = null);

(statearr_34671_34687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (2))){
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,(4),ch);
} else {
if((state_val_34670 === (3))){
var inst_34667 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34669__$1,inst_34667);
} else {
if((state_val_34670 === (4))){
var inst_34657 = (state_34669[(7)]);
var inst_34657__$1 = (state_34669[(2)]);
var state_34669__$1 = (function (){var statearr_34672 = state_34669;
(statearr_34672[(7)] = inst_34657__$1);

return statearr_34672;
})();
if(cljs.core.truth_(inst_34657__$1)){
var statearr_34673_34688 = state_34669__$1;
(statearr_34673_34688[(1)] = (5));

} else {
var statearr_34674_34689 = state_34669__$1;
(statearr_34674_34689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (5))){
var inst_34657 = (state_34669[(7)]);
var inst_34659 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34657);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,(8),inst_34659);
} else {
if((state_val_34670 === (6))){
var state_34669__$1 = state_34669;
var statearr_34675_34690 = state_34669__$1;
(statearr_34675_34690[(2)] = null);

(statearr_34675_34690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (7))){
var inst_34665 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34676_34691 = state_34669__$1;
(statearr_34676_34691[(2)] = inst_34665);

(statearr_34676_34691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (8))){
var inst_34661 = (state_34669[(2)]);
var state_34669__$1 = (function (){var statearr_34677 = state_34669;
(statearr_34677[(8)] = inst_34661);

return statearr_34677;
})();
var statearr_34678_34692 = state_34669__$1;
(statearr_34678_34692[(2)] = null);

(statearr_34678_34692[(1)] = (2));


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
});})(c__29552__auto___34686,ch))
;
return ((function (switch__29490__auto__,c__29552__auto___34686,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29491__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29491__auto____0 = (function (){
var statearr_34682 = [null,null,null,null,null,null,null,null,null];
(statearr_34682[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29491__auto__);

(statearr_34682[(1)] = (1));

return statearr_34682;
});
var figwheel$client$heads_up_plugin_$_state_machine__29491__auto____1 = (function (state_34669){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34683){if((e34683 instanceof Object)){
var ex__29494__auto__ = e34683;
var statearr_34684_34693 = state_34669;
(statearr_34684_34693[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34694 = state_34669;
state_34669 = G__34694;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29491__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29491__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29491__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29491__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___34686,ch))
})();
var state__29554__auto__ = (function (){var statearr_34685 = f__29553__auto__.call(null);
(statearr_34685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___34686);

return statearr_34685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___34686,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (1))){
var inst_34710 = cljs.core.async.timeout.call(null,(3000));
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34715__$1,(2),inst_34710);
} else {
if((state_val_34716 === (2))){
var inst_34712 = (state_34715[(2)]);
var inst_34713 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34715__$1 = (function (){var statearr_34717 = state_34715;
(statearr_34717[(7)] = inst_34712);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34715__$1,inst_34713);
} else {
return null;
}
}
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____0 = (function (){
var statearr_34721 = [null,null,null,null,null,null,null,null];
(statearr_34721[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__);

(statearr_34721[(1)] = (1));

return statearr_34721;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____1 = (function (state_34715){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_34715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e34722){if((e34722 instanceof Object)){
var ex__29494__auto__ = e34722;
var statearr_34723_34725 = state_34715;
(statearr_34723_34725[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34715;
state_34715 = G__34726;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29491__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_34724 = f__29553__auto__.call(null);
(statearr_34724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_34724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34727){
var map__34733 = p__34727;
var map__34733__$1 = ((cljs.core.seq_QMARK_.call(null,map__34733))?cljs.core.apply.call(null,cljs.core.hash_map,map__34733):map__34733);
var ed = map__34733__$1;
var formatted_exception = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34734_34738 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34735_34739 = null;
var count__34736_34740 = (0);
var i__34737_34741 = (0);
while(true){
if((i__34737_34741 < count__34736_34740)){
var msg_34742 = cljs.core._nth.call(null,chunk__34735_34739,i__34737_34741);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34742);

var G__34743 = seq__34734_34738;
var G__34744 = chunk__34735_34739;
var G__34745 = count__34736_34740;
var G__34746 = (i__34737_34741 + (1));
seq__34734_34738 = G__34743;
chunk__34735_34739 = G__34744;
count__34736_34740 = G__34745;
i__34737_34741 = G__34746;
continue;
} else {
var temp__4425__auto___34747 = cljs.core.seq.call(null,seq__34734_34738);
if(temp__4425__auto___34747){
var seq__34734_34748__$1 = temp__4425__auto___34747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34734_34748__$1)){
var c__26472__auto___34749 = cljs.core.chunk_first.call(null,seq__34734_34748__$1);
var G__34750 = cljs.core.chunk_rest.call(null,seq__34734_34748__$1);
var G__34751 = c__26472__auto___34749;
var G__34752 = cljs.core.count.call(null,c__26472__auto___34749);
var G__34753 = (0);
seq__34734_34738 = G__34750;
chunk__34735_34739 = G__34751;
count__34736_34740 = G__34752;
i__34737_34741 = G__34753;
continue;
} else {
var msg_34754 = cljs.core.first.call(null,seq__34734_34748__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34754);

var G__34755 = cljs.core.next.call(null,seq__34734_34748__$1);
var G__34756 = null;
var G__34757 = (0);
var G__34758 = (0);
seq__34734_34738 = G__34755;
chunk__34735_34739 = G__34756;
count__34736_34740 = G__34757;
i__34737_34741 = G__34758;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34759){
var map__34761 = p__34759;
var map__34761__$1 = ((cljs.core.seq_QMARK_.call(null,map__34761))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var w = map__34761__$1;
var message = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25675__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25675__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25675__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34768 = cljs.core.seq.call(null,plugins);
var chunk__34769 = null;
var count__34770 = (0);
var i__34771 = (0);
while(true){
if((i__34771 < count__34770)){
var vec__34772 = cljs.core._nth.call(null,chunk__34769,i__34771);
var k = cljs.core.nth.call(null,vec__34772,(0),null);
var plugin = cljs.core.nth.call(null,vec__34772,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34774 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34768,chunk__34769,count__34770,i__34771,pl_34774,vec__34772,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34774.call(null,msg_hist);
});})(seq__34768,chunk__34769,count__34770,i__34771,pl_34774,vec__34772,k,plugin))
);
} else {
}

var G__34775 = seq__34768;
var G__34776 = chunk__34769;
var G__34777 = count__34770;
var G__34778 = (i__34771 + (1));
seq__34768 = G__34775;
chunk__34769 = G__34776;
count__34770 = G__34777;
i__34771 = G__34778;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34768);
if(temp__4425__auto__){
var seq__34768__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34768__$1)){
var c__26472__auto__ = cljs.core.chunk_first.call(null,seq__34768__$1);
var G__34779 = cljs.core.chunk_rest.call(null,seq__34768__$1);
var G__34780 = c__26472__auto__;
var G__34781 = cljs.core.count.call(null,c__26472__auto__);
var G__34782 = (0);
seq__34768 = G__34779;
chunk__34769 = G__34780;
count__34770 = G__34781;
i__34771 = G__34782;
continue;
} else {
var vec__34773 = cljs.core.first.call(null,seq__34768__$1);
var k = cljs.core.nth.call(null,vec__34773,(0),null);
var plugin = cljs.core.nth.call(null,vec__34773,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34783 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34768,chunk__34769,count__34770,i__34771,pl_34783,vec__34773,k,plugin,seq__34768__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34783.call(null,msg_hist);
});})(seq__34768,chunk__34769,count__34770,i__34771,pl_34783,vec__34773,k,plugin,seq__34768__$1,temp__4425__auto__))
);
} else {
}

var G__34784 = cljs.core.next.call(null,seq__34768__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__34768 = G__34784;
chunk__34769 = G__34785;
count__34770 = G__34786;
i__34771 = G__34787;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34789 = arguments.length;
switch (G__34789) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__26727__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26727__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34792){
var map__34793 = p__34792;
var map__34793__$1 = ((cljs.core.seq_QMARK_.call(null,map__34793))?cljs.core.apply.call(null,cljs.core.hash_map,map__34793):map__34793);
var opts = map__34793__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34791){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34791));
});

//# sourceMappingURL=client.js.map
// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t35828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35828 = (function (fn_handler,f,meta35829){
this.fn_handler = fn_handler;
this.f = f;
this.meta35829 = meta35829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35830,meta35829__$1){
var self__ = this;
var _35830__$1 = this;
return (new cljs.core.async.t35828(self__.fn_handler,self__.f,meta35829__$1));
});

cljs.core.async.t35828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35830){
var self__ = this;
var _35830__$1 = this;
return self__.meta35829;
});

cljs.core.async.t35828.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35829","meta35829",1842793668,null)], null);
});

cljs.core.async.t35828.cljs$lang$type = true;

cljs.core.async.t35828.cljs$lang$ctorStr = "cljs.core.async/t35828";

cljs.core.async.t35828.cljs$lang$ctorPrWriter = (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t35828");
});

cljs.core.async.__GT_t35828 = (function cljs$core$async$fn_handler_$___GT_t35828(fn_handler__$1,f__$1,meta35829){
return (new cljs.core.async.t35828(fn_handler__$1,f__$1,meta35829));
});

}

return (new cljs.core.async.t35828(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__35832 = buff;
if(G__35832){
var bit__26361__auto__ = null;
if(cljs.core.truth_((function (){var or__25687__auto__ = bit__26361__auto__;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return G__35832.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35832.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35832);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__35834 = arguments.length;
switch (G__35834) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__35837 = arguments.length;
switch (G__35837) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35839 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35839);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35839,ret){
return (function (){
return fn1.call(null,val_35839);
});})(val_35839,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__35841 = arguments.length;
switch (G__35841) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26572__auto___35843 = n;
var x_35844 = (0);
while(true){
if((x_35844 < n__26572__auto___35843)){
(a[x_35844] = (0));

var G__35845 = (x_35844 + (1));
x_35844 = G__35845;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35846 = (i + (1));
i = G__35846;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t35850 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35850 = (function (alt_flag,flag,meta35851){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35851 = meta35851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35852,meta35851__$1){
var self__ = this;
var _35852__$1 = this;
return (new cljs.core.async.t35850(self__.alt_flag,self__.flag,meta35851__$1));
});})(flag))
;

cljs.core.async.t35850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35852){
var self__ = this;
var _35852__$1 = this;
return self__.meta35851;
});})(flag))
;

cljs.core.async.t35850.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t35850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t35850.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35851","meta35851",336790106,null)], null);
});})(flag))
;

cljs.core.async.t35850.cljs$lang$type = true;

cljs.core.async.t35850.cljs$lang$ctorStr = "cljs.core.async/t35850";

cljs.core.async.t35850.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t35850");
});})(flag))
;

cljs.core.async.__GT_t35850 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t35850(alt_flag__$1,flag__$1,meta35851){
return (new cljs.core.async.t35850(alt_flag__$1,flag__$1,meta35851));
});})(flag))
;

}

return (new cljs.core.async.t35850(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t35856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35856 = (function (alt_handler,flag,cb,meta35857){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35857 = meta35857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35858,meta35857__$1){
var self__ = this;
var _35858__$1 = this;
return (new cljs.core.async.t35856(self__.alt_handler,self__.flag,self__.cb,meta35857__$1));
});

cljs.core.async.t35856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35858){
var self__ = this;
var _35858__$1 = this;
return self__.meta35857;
});

cljs.core.async.t35856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t35856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t35856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35857","meta35857",-1366675246,null)], null);
});

cljs.core.async.t35856.cljs$lang$type = true;

cljs.core.async.t35856.cljs$lang$ctorStr = "cljs.core.async/t35856";

cljs.core.async.t35856.cljs$lang$ctorPrWriter = (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t35856");
});

cljs.core.async.__GT_t35856 = (function cljs$core$async$alt_handler_$___GT_t35856(alt_handler__$1,flag__$1,cb__$1,meta35857){
return (new cljs.core.async.t35856(alt_handler__$1,flag__$1,cb__$1,meta35857));
});

}

return (new cljs.core.async.t35856(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35859_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35859_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35860_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35860_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25687__auto__ = wport;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35861 = (i + (1));
i = G__35861;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25687__auto__ = ret;
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25675__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25675__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25675__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__26727__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26727__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35864){
var map__35865 = p__35864;
var map__35865__$1 = ((cljs.core.seq_QMARK_.call(null,map__35865))?cljs.core.apply.call(null,cljs.core.hash_map,map__35865):map__35865);
var opts = map__35865__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35862){
var G__35863 = cljs.core.first.call(null,seq35862);
var seq35862__$1 = cljs.core.next.call(null,seq35862);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35863,seq35862__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__35867 = arguments.length;
switch (G__35867) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29552__auto___35916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___35916){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___35916){
return (function (state_35891){
var state_val_35892 = (state_35891[(1)]);
if((state_val_35892 === (7))){
var inst_35887 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35893_35917 = state_35891__$1;
(statearr_35893_35917[(2)] = inst_35887);

(statearr_35893_35917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (1))){
var state_35891__$1 = state_35891;
var statearr_35894_35918 = state_35891__$1;
(statearr_35894_35918[(2)] = null);

(statearr_35894_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (4))){
var inst_35870 = (state_35891[(7)]);
var inst_35870__$1 = (state_35891[(2)]);
var inst_35871 = (inst_35870__$1 == null);
var state_35891__$1 = (function (){var statearr_35895 = state_35891;
(statearr_35895[(7)] = inst_35870__$1);

return statearr_35895;
})();
if(cljs.core.truth_(inst_35871)){
var statearr_35896_35919 = state_35891__$1;
(statearr_35896_35919[(1)] = (5));

} else {
var statearr_35897_35920 = state_35891__$1;
(statearr_35897_35920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (13))){
var state_35891__$1 = state_35891;
var statearr_35898_35921 = state_35891__$1;
(statearr_35898_35921[(2)] = null);

(statearr_35898_35921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (6))){
var inst_35870 = (state_35891[(7)]);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35891__$1,(11),to,inst_35870);
} else {
if((state_val_35892 === (3))){
var inst_35889 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35891__$1,inst_35889);
} else {
if((state_val_35892 === (12))){
var state_35891__$1 = state_35891;
var statearr_35899_35922 = state_35891__$1;
(statearr_35899_35922[(2)] = null);

(statearr_35899_35922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (2))){
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35891__$1,(4),from);
} else {
if((state_val_35892 === (11))){
var inst_35880 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
if(cljs.core.truth_(inst_35880)){
var statearr_35900_35923 = state_35891__$1;
(statearr_35900_35923[(1)] = (12));

} else {
var statearr_35901_35924 = state_35891__$1;
(statearr_35901_35924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (9))){
var state_35891__$1 = state_35891;
var statearr_35902_35925 = state_35891__$1;
(statearr_35902_35925[(2)] = null);

(statearr_35902_35925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (5))){
var state_35891__$1 = state_35891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35903_35926 = state_35891__$1;
(statearr_35903_35926[(1)] = (8));

} else {
var statearr_35904_35927 = state_35891__$1;
(statearr_35904_35927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (14))){
var inst_35885 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35905_35928 = state_35891__$1;
(statearr_35905_35928[(2)] = inst_35885);

(statearr_35905_35928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (10))){
var inst_35877 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35906_35929 = state_35891__$1;
(statearr_35906_35929[(2)] = inst_35877);

(statearr_35906_35929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (8))){
var inst_35874 = cljs.core.async.close_BANG_.call(null,to);
var state_35891__$1 = state_35891;
var statearr_35907_35930 = state_35891__$1;
(statearr_35907_35930[(2)] = inst_35874);

(statearr_35907_35930[(1)] = (10));


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
});})(c__29552__auto___35916))
;
return ((function (switch__29490__auto__,c__29552__auto___35916){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_35911 = [null,null,null,null,null,null,null,null];
(statearr_35911[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_35911[(1)] = (1));

return statearr_35911;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_35891){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_35891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e35912){if((e35912 instanceof Object)){
var ex__29494__auto__ = e35912;
var statearr_35913_35931 = state_35891;
(statearr_35913_35931[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35932 = state_35891;
state_35891 = G__35932;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_35891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_35891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___35916))
})();
var state__29554__auto__ = (function (){var statearr_35914 = f__29553__auto__.call(null);
(statearr_35914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___35916);

return statearr_35914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___35916))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36116){
var vec__36117 = p__36116;
var v = cljs.core.nth.call(null,vec__36117,(0),null);
var p = cljs.core.nth.call(null,vec__36117,(1),null);
var job = vec__36117;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29552__auto___36299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results){
return (function (state_36122){
var state_val_36123 = (state_36122[(1)]);
if((state_val_36123 === (1))){
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36122__$1,(2),res,v);
} else {
if((state_val_36123 === (2))){
var inst_36119 = (state_36122[(2)]);
var inst_36120 = cljs.core.async.close_BANG_.call(null,res);
var state_36122__$1 = (function (){var statearr_36124 = state_36122;
(statearr_36124[(7)] = inst_36119);

return statearr_36124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36122__$1,inst_36120);
} else {
return null;
}
}
});})(c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results))
;
return ((function (switch__29490__auto__,c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_36128 = [null,null,null,null,null,null,null,null];
(statearr_36128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__);

(statearr_36128[(1)] = (1));

return statearr_36128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1 = (function (state_36122){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36129){if((e36129 instanceof Object)){
var ex__29494__auto__ = e36129;
var statearr_36130_36300 = state_36122;
(statearr_36130_36300[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36301 = state_36122;
state_36122 = G__36301;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = function(state_36122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1.call(this,state_36122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results))
})();
var state__29554__auto__ = (function (){var statearr_36131 = f__29553__auto__.call(null);
(statearr_36131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___36299);

return statearr_36131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___36299,res,vec__36117,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36132){
var vec__36133 = p__36132;
var v = cljs.core.nth.call(null,vec__36133,(0),null);
var p = cljs.core.nth.call(null,vec__36133,(1),null);
var job = vec__36133;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26572__auto___36302 = n;
var __36303 = (0);
while(true){
if((__36303 < n__26572__auto___36302)){
var G__36134_36304 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36134_36304) {
case "compute":
var c__29552__auto___36306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36303,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (__36303,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function (state_36147){
var state_val_36148 = (state_36147[(1)]);
if((state_val_36148 === (1))){
var state_36147__$1 = state_36147;
var statearr_36149_36307 = state_36147__$1;
(statearr_36149_36307[(2)] = null);

(statearr_36149_36307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (2))){
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36147__$1,(4),jobs);
} else {
if((state_val_36148 === (3))){
var inst_36145 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36147__$1,inst_36145);
} else {
if((state_val_36148 === (4))){
var inst_36137 = (state_36147[(2)]);
var inst_36138 = process.call(null,inst_36137);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36138)){
var statearr_36150_36308 = state_36147__$1;
(statearr_36150_36308[(1)] = (5));

} else {
var statearr_36151_36309 = state_36147__$1;
(statearr_36151_36309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (5))){
var state_36147__$1 = state_36147;
var statearr_36152_36310 = state_36147__$1;
(statearr_36152_36310[(2)] = null);

(statearr_36152_36310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (6))){
var state_36147__$1 = state_36147;
var statearr_36153_36311 = state_36147__$1;
(statearr_36153_36311[(2)] = null);

(statearr_36153_36311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (7))){
var inst_36143 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36154_36312 = state_36147__$1;
(statearr_36154_36312[(2)] = inst_36143);

(statearr_36154_36312[(1)] = (3));


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
});})(__36303,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
;
return ((function (__36303,switch__29490__auto__,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_36158 = [null,null,null,null,null,null,null];
(statearr_36158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__);

(statearr_36158[(1)] = (1));

return statearr_36158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1 = (function (state_36147){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36159){if((e36159 instanceof Object)){
var ex__29494__auto__ = e36159;
var statearr_36160_36313 = state_36147;
(statearr_36160_36313[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36314 = state_36147;
state_36147 = G__36314;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__;
})()
;})(__36303,switch__29490__auto__,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
})();
var state__29554__auto__ = (function (){var statearr_36161 = f__29553__auto__.call(null);
(statearr_36161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___36306);

return statearr_36161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(__36303,c__29552__auto___36306,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
);


break;
case "async":
var c__29552__auto___36315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36303,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (__36303,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function (state_36174){
var state_val_36175 = (state_36174[(1)]);
if((state_val_36175 === (1))){
var state_36174__$1 = state_36174;
var statearr_36176_36316 = state_36174__$1;
(statearr_36176_36316[(2)] = null);

(statearr_36176_36316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (2))){
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36174__$1,(4),jobs);
} else {
if((state_val_36175 === (3))){
var inst_36172 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36174__$1,inst_36172);
} else {
if((state_val_36175 === (4))){
var inst_36164 = (state_36174[(2)]);
var inst_36165 = async.call(null,inst_36164);
var state_36174__$1 = state_36174;
if(cljs.core.truth_(inst_36165)){
var statearr_36177_36317 = state_36174__$1;
(statearr_36177_36317[(1)] = (5));

} else {
var statearr_36178_36318 = state_36174__$1;
(statearr_36178_36318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (5))){
var state_36174__$1 = state_36174;
var statearr_36179_36319 = state_36174__$1;
(statearr_36179_36319[(2)] = null);

(statearr_36179_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (6))){
var state_36174__$1 = state_36174;
var statearr_36180_36320 = state_36174__$1;
(statearr_36180_36320[(2)] = null);

(statearr_36180_36320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (7))){
var inst_36170 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
var statearr_36181_36321 = state_36174__$1;
(statearr_36181_36321[(2)] = inst_36170);

(statearr_36181_36321[(1)] = (3));


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
});})(__36303,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
;
return ((function (__36303,switch__29490__auto__,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_36185 = [null,null,null,null,null,null,null];
(statearr_36185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__);

(statearr_36185[(1)] = (1));

return statearr_36185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1 = (function (state_36174){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36186){if((e36186 instanceof Object)){
var ex__29494__auto__ = e36186;
var statearr_36187_36322 = state_36174;
(statearr_36187_36322[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36323 = state_36174;
state_36174 = G__36323;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = function(state_36174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1.call(this,state_36174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__;
})()
;})(__36303,switch__29490__auto__,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
})();
var state__29554__auto__ = (function (){var statearr_36188 = f__29553__auto__.call(null);
(statearr_36188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___36315);

return statearr_36188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(__36303,c__29552__auto___36315,G__36134_36304,n__26572__auto___36302,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36324 = (__36303 + (1));
__36303 = G__36324;
continue;
} else {
}
break;
}

var c__29552__auto___36325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___36325,jobs,results,process,async){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___36325,jobs,results,process,async){
return (function (state_36210){
var state_val_36211 = (state_36210[(1)]);
if((state_val_36211 === (1))){
var state_36210__$1 = state_36210;
var statearr_36212_36326 = state_36210__$1;
(statearr_36212_36326[(2)] = null);

(statearr_36212_36326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (2))){
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36210__$1,(4),from);
} else {
if((state_val_36211 === (3))){
var inst_36208 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36210__$1,inst_36208);
} else {
if((state_val_36211 === (4))){
var inst_36191 = (state_36210[(7)]);
var inst_36191__$1 = (state_36210[(2)]);
var inst_36192 = (inst_36191__$1 == null);
var state_36210__$1 = (function (){var statearr_36213 = state_36210;
(statearr_36213[(7)] = inst_36191__$1);

return statearr_36213;
})();
if(cljs.core.truth_(inst_36192)){
var statearr_36214_36327 = state_36210__$1;
(statearr_36214_36327[(1)] = (5));

} else {
var statearr_36215_36328 = state_36210__$1;
(statearr_36215_36328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (5))){
var inst_36194 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36210__$1 = state_36210;
var statearr_36216_36329 = state_36210__$1;
(statearr_36216_36329[(2)] = inst_36194);

(statearr_36216_36329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (6))){
var inst_36196 = (state_36210[(8)]);
var inst_36191 = (state_36210[(7)]);
var inst_36196__$1 = cljs.core.async.chan.call(null,(1));
var inst_36197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36198 = [inst_36191,inst_36196__$1];
var inst_36199 = (new cljs.core.PersistentVector(null,2,(5),inst_36197,inst_36198,null));
var state_36210__$1 = (function (){var statearr_36217 = state_36210;
(statearr_36217[(8)] = inst_36196__$1);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36210__$1,(8),jobs,inst_36199);
} else {
if((state_val_36211 === (7))){
var inst_36206 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36218_36330 = state_36210__$1;
(statearr_36218_36330[(2)] = inst_36206);

(statearr_36218_36330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (8))){
var inst_36196 = (state_36210[(8)]);
var inst_36201 = (state_36210[(2)]);
var state_36210__$1 = (function (){var statearr_36219 = state_36210;
(statearr_36219[(9)] = inst_36201);

return statearr_36219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36210__$1,(9),results,inst_36196);
} else {
if((state_val_36211 === (9))){
var inst_36203 = (state_36210[(2)]);
var state_36210__$1 = (function (){var statearr_36220 = state_36210;
(statearr_36220[(10)] = inst_36203);

return statearr_36220;
})();
var statearr_36221_36331 = state_36210__$1;
(statearr_36221_36331[(2)] = null);

(statearr_36221_36331[(1)] = (2));


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
});})(c__29552__auto___36325,jobs,results,process,async))
;
return ((function (switch__29490__auto__,c__29552__auto___36325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_36225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__);

(statearr_36225[(1)] = (1));

return statearr_36225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1 = (function (state_36210){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36226){if((e36226 instanceof Object)){
var ex__29494__auto__ = e36226;
var statearr_36227_36332 = state_36210;
(statearr_36227_36332[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36333 = state_36210;
state_36210 = G__36333;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = function(state_36210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1.call(this,state_36210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___36325,jobs,results,process,async))
})();
var state__29554__auto__ = (function (){var statearr_36228 = f__29553__auto__.call(null);
(statearr_36228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___36325);

return statearr_36228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___36325,jobs,results,process,async))
);


var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__,jobs,results,process,async){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__,jobs,results,process,async){
return (function (state_36266){
var state_val_36267 = (state_36266[(1)]);
if((state_val_36267 === (7))){
var inst_36262 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36268_36334 = state_36266__$1;
(statearr_36268_36334[(2)] = inst_36262);

(statearr_36268_36334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (20))){
var state_36266__$1 = state_36266;
var statearr_36269_36335 = state_36266__$1;
(statearr_36269_36335[(2)] = null);

(statearr_36269_36335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (1))){
var state_36266__$1 = state_36266;
var statearr_36270_36336 = state_36266__$1;
(statearr_36270_36336[(2)] = null);

(statearr_36270_36336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (4))){
var inst_36231 = (state_36266[(7)]);
var inst_36231__$1 = (state_36266[(2)]);
var inst_36232 = (inst_36231__$1 == null);
var state_36266__$1 = (function (){var statearr_36271 = state_36266;
(statearr_36271[(7)] = inst_36231__$1);

return statearr_36271;
})();
if(cljs.core.truth_(inst_36232)){
var statearr_36272_36337 = state_36266__$1;
(statearr_36272_36337[(1)] = (5));

} else {
var statearr_36273_36338 = state_36266__$1;
(statearr_36273_36338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (15))){
var inst_36244 = (state_36266[(8)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36266__$1,(18),to,inst_36244);
} else {
if((state_val_36267 === (21))){
var inst_36257 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36274_36339 = state_36266__$1;
(statearr_36274_36339[(2)] = inst_36257);

(statearr_36274_36339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (13))){
var inst_36259 = (state_36266[(2)]);
var state_36266__$1 = (function (){var statearr_36275 = state_36266;
(statearr_36275[(9)] = inst_36259);

return statearr_36275;
})();
var statearr_36276_36340 = state_36266__$1;
(statearr_36276_36340[(2)] = null);

(statearr_36276_36340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (6))){
var inst_36231 = (state_36266[(7)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36266__$1,(11),inst_36231);
} else {
if((state_val_36267 === (17))){
var inst_36252 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
if(cljs.core.truth_(inst_36252)){
var statearr_36277_36341 = state_36266__$1;
(statearr_36277_36341[(1)] = (19));

} else {
var statearr_36278_36342 = state_36266__$1;
(statearr_36278_36342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (3))){
var inst_36264 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36266__$1,inst_36264);
} else {
if((state_val_36267 === (12))){
var inst_36241 = (state_36266[(10)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36266__$1,(14),inst_36241);
} else {
if((state_val_36267 === (2))){
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36266__$1,(4),results);
} else {
if((state_val_36267 === (19))){
var state_36266__$1 = state_36266;
var statearr_36279_36343 = state_36266__$1;
(statearr_36279_36343[(2)] = null);

(statearr_36279_36343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (11))){
var inst_36241 = (state_36266[(2)]);
var state_36266__$1 = (function (){var statearr_36280 = state_36266;
(statearr_36280[(10)] = inst_36241);

return statearr_36280;
})();
var statearr_36281_36344 = state_36266__$1;
(statearr_36281_36344[(2)] = null);

(statearr_36281_36344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (9))){
var state_36266__$1 = state_36266;
var statearr_36282_36345 = state_36266__$1;
(statearr_36282_36345[(2)] = null);

(statearr_36282_36345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (5))){
var state_36266__$1 = state_36266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36283_36346 = state_36266__$1;
(statearr_36283_36346[(1)] = (8));

} else {
var statearr_36284_36347 = state_36266__$1;
(statearr_36284_36347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (14))){
var inst_36246 = (state_36266[(11)]);
var inst_36244 = (state_36266[(8)]);
var inst_36244__$1 = (state_36266[(2)]);
var inst_36245 = (inst_36244__$1 == null);
var inst_36246__$1 = cljs.core.not.call(null,inst_36245);
var state_36266__$1 = (function (){var statearr_36285 = state_36266;
(statearr_36285[(11)] = inst_36246__$1);

(statearr_36285[(8)] = inst_36244__$1);

return statearr_36285;
})();
if(inst_36246__$1){
var statearr_36286_36348 = state_36266__$1;
(statearr_36286_36348[(1)] = (15));

} else {
var statearr_36287_36349 = state_36266__$1;
(statearr_36287_36349[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (16))){
var inst_36246 = (state_36266[(11)]);
var state_36266__$1 = state_36266;
var statearr_36288_36350 = state_36266__$1;
(statearr_36288_36350[(2)] = inst_36246);

(statearr_36288_36350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (10))){
var inst_36238 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36289_36351 = state_36266__$1;
(statearr_36289_36351[(2)] = inst_36238);

(statearr_36289_36351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (18))){
var inst_36249 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36290_36352 = state_36266__$1;
(statearr_36290_36352[(2)] = inst_36249);

(statearr_36290_36352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (8))){
var inst_36235 = cljs.core.async.close_BANG_.call(null,to);
var state_36266__$1 = state_36266;
var statearr_36291_36353 = state_36266__$1;
(statearr_36291_36353[(2)] = inst_36235);

(statearr_36291_36353[(1)] = (10));


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
});})(c__29552__auto__,jobs,results,process,async))
;
return ((function (switch__29490__auto__,c__29552__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_36295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__);

(statearr_36295[(1)] = (1));

return statearr_36295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1 = (function (state_36266){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36296){if((e36296 instanceof Object)){
var ex__29494__auto__ = e36296;
var statearr_36297_36354 = state_36266;
(statearr_36297_36354[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36355 = state_36266;
state_36266 = G__36355;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__ = function(state_36266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1.call(this,state_36266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__,jobs,results,process,async))
})();
var state__29554__auto__ = (function (){var statearr_36298 = f__29553__auto__.call(null);
(statearr_36298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_36298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__,jobs,results,process,async))
);

return c__29552__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__36357 = arguments.length;
switch (G__36357) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__36360 = arguments.length;
switch (G__36360) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__36363 = arguments.length;
switch (G__36363) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29552__auto___36415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___36415,tc,fc){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___36415,tc,fc){
return (function (state_36389){
var state_val_36390 = (state_36389[(1)]);
if((state_val_36390 === (7))){
var inst_36385 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36391_36416 = state_36389__$1;
(statearr_36391_36416[(2)] = inst_36385);

(statearr_36391_36416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (1))){
var state_36389__$1 = state_36389;
var statearr_36392_36417 = state_36389__$1;
(statearr_36392_36417[(2)] = null);

(statearr_36392_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (4))){
var inst_36366 = (state_36389[(7)]);
var inst_36366__$1 = (state_36389[(2)]);
var inst_36367 = (inst_36366__$1 == null);
var state_36389__$1 = (function (){var statearr_36393 = state_36389;
(statearr_36393[(7)] = inst_36366__$1);

return statearr_36393;
})();
if(cljs.core.truth_(inst_36367)){
var statearr_36394_36418 = state_36389__$1;
(statearr_36394_36418[(1)] = (5));

} else {
var statearr_36395_36419 = state_36389__$1;
(statearr_36395_36419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (13))){
var state_36389__$1 = state_36389;
var statearr_36396_36420 = state_36389__$1;
(statearr_36396_36420[(2)] = null);

(statearr_36396_36420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (6))){
var inst_36366 = (state_36389[(7)]);
var inst_36372 = p.call(null,inst_36366);
var state_36389__$1 = state_36389;
if(cljs.core.truth_(inst_36372)){
var statearr_36397_36421 = state_36389__$1;
(statearr_36397_36421[(1)] = (9));

} else {
var statearr_36398_36422 = state_36389__$1;
(statearr_36398_36422[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (3))){
var inst_36387 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36389__$1,inst_36387);
} else {
if((state_val_36390 === (12))){
var state_36389__$1 = state_36389;
var statearr_36399_36423 = state_36389__$1;
(statearr_36399_36423[(2)] = null);

(statearr_36399_36423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (2))){
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36389__$1,(4),ch);
} else {
if((state_val_36390 === (11))){
var inst_36366 = (state_36389[(7)]);
var inst_36376 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36389__$1,(8),inst_36376,inst_36366);
} else {
if((state_val_36390 === (9))){
var state_36389__$1 = state_36389;
var statearr_36400_36424 = state_36389__$1;
(statearr_36400_36424[(2)] = tc);

(statearr_36400_36424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (5))){
var inst_36369 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36370 = cljs.core.async.close_BANG_.call(null,fc);
var state_36389__$1 = (function (){var statearr_36401 = state_36389;
(statearr_36401[(8)] = inst_36369);

return statearr_36401;
})();
var statearr_36402_36425 = state_36389__$1;
(statearr_36402_36425[(2)] = inst_36370);

(statearr_36402_36425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (14))){
var inst_36383 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36403_36426 = state_36389__$1;
(statearr_36403_36426[(2)] = inst_36383);

(statearr_36403_36426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (10))){
var state_36389__$1 = state_36389;
var statearr_36404_36427 = state_36389__$1;
(statearr_36404_36427[(2)] = fc);

(statearr_36404_36427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (8))){
var inst_36378 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
if(cljs.core.truth_(inst_36378)){
var statearr_36405_36428 = state_36389__$1;
(statearr_36405_36428[(1)] = (12));

} else {
var statearr_36406_36429 = state_36389__$1;
(statearr_36406_36429[(1)] = (13));

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
});})(c__29552__auto___36415,tc,fc))
;
return ((function (switch__29490__auto__,c__29552__auto___36415,tc,fc){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_36410 = [null,null,null,null,null,null,null,null,null];
(statearr_36410[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_36410[(1)] = (1));

return statearr_36410;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_36389){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36411){if((e36411 instanceof Object)){
var ex__29494__auto__ = e36411;
var statearr_36412_36430 = state_36389;
(statearr_36412_36430[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36431 = state_36389;
state_36389 = G__36431;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_36389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_36389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___36415,tc,fc))
})();
var state__29554__auto__ = (function (){var statearr_36413 = f__29553__auto__.call(null);
(statearr_36413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___36415);

return statearr_36413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___36415,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_36478){
var state_val_36479 = (state_36478[(1)]);
if((state_val_36479 === (1))){
var inst_36464 = init;
var state_36478__$1 = (function (){var statearr_36480 = state_36478;
(statearr_36480[(7)] = inst_36464);

return statearr_36480;
})();
var statearr_36481_36496 = state_36478__$1;
(statearr_36481_36496[(2)] = null);

(statearr_36481_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (2))){
var state_36478__$1 = state_36478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36478__$1,(4),ch);
} else {
if((state_val_36479 === (3))){
var inst_36476 = (state_36478[(2)]);
var state_36478__$1 = state_36478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36478__$1,inst_36476);
} else {
if((state_val_36479 === (4))){
var inst_36467 = (state_36478[(8)]);
var inst_36467__$1 = (state_36478[(2)]);
var inst_36468 = (inst_36467__$1 == null);
var state_36478__$1 = (function (){var statearr_36482 = state_36478;
(statearr_36482[(8)] = inst_36467__$1);

return statearr_36482;
})();
if(cljs.core.truth_(inst_36468)){
var statearr_36483_36497 = state_36478__$1;
(statearr_36483_36497[(1)] = (5));

} else {
var statearr_36484_36498 = state_36478__$1;
(statearr_36484_36498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (5))){
var inst_36464 = (state_36478[(7)]);
var state_36478__$1 = state_36478;
var statearr_36485_36499 = state_36478__$1;
(statearr_36485_36499[(2)] = inst_36464);

(statearr_36485_36499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (6))){
var inst_36467 = (state_36478[(8)]);
var inst_36464 = (state_36478[(7)]);
var inst_36471 = f.call(null,inst_36464,inst_36467);
var inst_36464__$1 = inst_36471;
var state_36478__$1 = (function (){var statearr_36486 = state_36478;
(statearr_36486[(7)] = inst_36464__$1);

return statearr_36486;
})();
var statearr_36487_36500 = state_36478__$1;
(statearr_36487_36500[(2)] = null);

(statearr_36487_36500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (7))){
var inst_36474 = (state_36478[(2)]);
var state_36478__$1 = state_36478;
var statearr_36488_36501 = state_36478__$1;
(statearr_36488_36501[(2)] = inst_36474);

(statearr_36488_36501[(1)] = (3));


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
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29491__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29491__auto____0 = (function (){
var statearr_36492 = [null,null,null,null,null,null,null,null,null];
(statearr_36492[(0)] = cljs$core$async$reduce_$_state_machine__29491__auto__);

(statearr_36492[(1)] = (1));

return statearr_36492;
});
var cljs$core$async$reduce_$_state_machine__29491__auto____1 = (function (state_36478){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36493){if((e36493 instanceof Object)){
var ex__29494__auto__ = e36493;
var statearr_36494_36502 = state_36478;
(statearr_36494_36502[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36503 = state_36478;
state_36478 = G__36503;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29491__auto__ = function(state_36478){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29491__auto____1.call(this,state_36478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29491__auto____0;
cljs$core$async$reduce_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29491__auto____1;
return cljs$core$async$reduce_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_36495 = f__29553__auto__.call(null);
(statearr_36495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_36495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__36505 = arguments.length;
switch (G__36505) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_36530){
var state_val_36531 = (state_36530[(1)]);
if((state_val_36531 === (7))){
var inst_36512 = (state_36530[(2)]);
var state_36530__$1 = state_36530;
var statearr_36532_36556 = state_36530__$1;
(statearr_36532_36556[(2)] = inst_36512);

(statearr_36532_36556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (1))){
var inst_36506 = cljs.core.seq.call(null,coll);
var inst_36507 = inst_36506;
var state_36530__$1 = (function (){var statearr_36533 = state_36530;
(statearr_36533[(7)] = inst_36507);

return statearr_36533;
})();
var statearr_36534_36557 = state_36530__$1;
(statearr_36534_36557[(2)] = null);

(statearr_36534_36557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (4))){
var inst_36507 = (state_36530[(7)]);
var inst_36510 = cljs.core.first.call(null,inst_36507);
var state_36530__$1 = state_36530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36530__$1,(7),ch,inst_36510);
} else {
if((state_val_36531 === (13))){
var inst_36524 = (state_36530[(2)]);
var state_36530__$1 = state_36530;
var statearr_36535_36558 = state_36530__$1;
(statearr_36535_36558[(2)] = inst_36524);

(statearr_36535_36558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (6))){
var inst_36515 = (state_36530[(2)]);
var state_36530__$1 = state_36530;
if(cljs.core.truth_(inst_36515)){
var statearr_36536_36559 = state_36530__$1;
(statearr_36536_36559[(1)] = (8));

} else {
var statearr_36537_36560 = state_36530__$1;
(statearr_36537_36560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (3))){
var inst_36528 = (state_36530[(2)]);
var state_36530__$1 = state_36530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36530__$1,inst_36528);
} else {
if((state_val_36531 === (12))){
var state_36530__$1 = state_36530;
var statearr_36538_36561 = state_36530__$1;
(statearr_36538_36561[(2)] = null);

(statearr_36538_36561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (2))){
var inst_36507 = (state_36530[(7)]);
var state_36530__$1 = state_36530;
if(cljs.core.truth_(inst_36507)){
var statearr_36539_36562 = state_36530__$1;
(statearr_36539_36562[(1)] = (4));

} else {
var statearr_36540_36563 = state_36530__$1;
(statearr_36540_36563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (11))){
var inst_36521 = cljs.core.async.close_BANG_.call(null,ch);
var state_36530__$1 = state_36530;
var statearr_36541_36564 = state_36530__$1;
(statearr_36541_36564[(2)] = inst_36521);

(statearr_36541_36564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (9))){
var state_36530__$1 = state_36530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36542_36565 = state_36530__$1;
(statearr_36542_36565[(1)] = (11));

} else {
var statearr_36543_36566 = state_36530__$1;
(statearr_36543_36566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (5))){
var inst_36507 = (state_36530[(7)]);
var state_36530__$1 = state_36530;
var statearr_36544_36567 = state_36530__$1;
(statearr_36544_36567[(2)] = inst_36507);

(statearr_36544_36567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (10))){
var inst_36526 = (state_36530[(2)]);
var state_36530__$1 = state_36530;
var statearr_36545_36568 = state_36530__$1;
(statearr_36545_36568[(2)] = inst_36526);

(statearr_36545_36568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36531 === (8))){
var inst_36507 = (state_36530[(7)]);
var inst_36517 = cljs.core.next.call(null,inst_36507);
var inst_36507__$1 = inst_36517;
var state_36530__$1 = (function (){var statearr_36546 = state_36530;
(statearr_36546[(7)] = inst_36507__$1);

return statearr_36546;
})();
var statearr_36547_36569 = state_36530__$1;
(statearr_36547_36569[(2)] = null);

(statearr_36547_36569[(1)] = (2));


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
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_36551 = [null,null,null,null,null,null,null,null];
(statearr_36551[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_36551[(1)] = (1));

return statearr_36551;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_36530){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e36552){if((e36552 instanceof Object)){
var ex__29494__auto__ = e36552;
var statearr_36553_36570 = state_36530;
(statearr_36553_36570[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36571 = state_36530;
state_36530 = G__36571;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_36530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_36530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_36554 = f__29553__auto__.call(null);
(statearr_36554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_36554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj36573 = {};
return obj36573;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__25675__auto__ = _;
if(and__25675__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__25675__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26323__auto__ = (((_ == null))?null:_);
return (function (){var or__25687__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj36575 = {};
return obj36575;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t36797 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36797 = (function (mult,ch,cs,meta36798){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36798 = meta36798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36799,meta36798__$1){
var self__ = this;
var _36799__$1 = this;
return (new cljs.core.async.t36797(self__.mult,self__.ch,self__.cs,meta36798__$1));
});})(cs))
;

cljs.core.async.t36797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36799){
var self__ = this;
var _36799__$1 = this;
return self__.meta36798;
});})(cs))
;

cljs.core.async.t36797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36797.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36798","meta36798",1106001740,null)], null);
});})(cs))
;

cljs.core.async.t36797.cljs$lang$type = true;

cljs.core.async.t36797.cljs$lang$ctorStr = "cljs.core.async/t36797";

cljs.core.async.t36797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t36797");
});})(cs))
;

cljs.core.async.__GT_t36797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36797(mult__$1,ch__$1,cs__$1,meta36798){
return (new cljs.core.async.t36797(mult__$1,ch__$1,cs__$1,meta36798));
});})(cs))
;

}

return (new cljs.core.async.t36797(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29552__auto___37018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37018,cs,m,dchan,dctr,done){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37018,cs,m,dchan,dctr,done){
return (function (state_36930){
var state_val_36931 = (state_36930[(1)]);
if((state_val_36931 === (7))){
var inst_36926 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36932_37019 = state_36930__$1;
(statearr_36932_37019[(2)] = inst_36926);

(statearr_36932_37019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (20))){
var inst_36831 = (state_36930[(7)]);
var inst_36841 = cljs.core.first.call(null,inst_36831);
var inst_36842 = cljs.core.nth.call(null,inst_36841,(0),null);
var inst_36843 = cljs.core.nth.call(null,inst_36841,(1),null);
var state_36930__$1 = (function (){var statearr_36933 = state_36930;
(statearr_36933[(8)] = inst_36842);

return statearr_36933;
})();
if(cljs.core.truth_(inst_36843)){
var statearr_36934_37020 = state_36930__$1;
(statearr_36934_37020[(1)] = (22));

} else {
var statearr_36935_37021 = state_36930__$1;
(statearr_36935_37021[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (27))){
var inst_36802 = (state_36930[(9)]);
var inst_36873 = (state_36930[(10)]);
var inst_36878 = (state_36930[(11)]);
var inst_36871 = (state_36930[(12)]);
var inst_36878__$1 = cljs.core._nth.call(null,inst_36871,inst_36873);
var inst_36879 = cljs.core.async.put_BANG_.call(null,inst_36878__$1,inst_36802,done);
var state_36930__$1 = (function (){var statearr_36936 = state_36930;
(statearr_36936[(11)] = inst_36878__$1);

return statearr_36936;
})();
if(cljs.core.truth_(inst_36879)){
var statearr_36937_37022 = state_36930__$1;
(statearr_36937_37022[(1)] = (30));

} else {
var statearr_36938_37023 = state_36930__$1;
(statearr_36938_37023[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (1))){
var state_36930__$1 = state_36930;
var statearr_36939_37024 = state_36930__$1;
(statearr_36939_37024[(2)] = null);

(statearr_36939_37024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (24))){
var inst_36831 = (state_36930[(7)]);
var inst_36848 = (state_36930[(2)]);
var inst_36849 = cljs.core.next.call(null,inst_36831);
var inst_36811 = inst_36849;
var inst_36812 = null;
var inst_36813 = (0);
var inst_36814 = (0);
var state_36930__$1 = (function (){var statearr_36940 = state_36930;
(statearr_36940[(13)] = inst_36814);

(statearr_36940[(14)] = inst_36848);

(statearr_36940[(15)] = inst_36811);

(statearr_36940[(16)] = inst_36813);

(statearr_36940[(17)] = inst_36812);

return statearr_36940;
})();
var statearr_36941_37025 = state_36930__$1;
(statearr_36941_37025[(2)] = null);

(statearr_36941_37025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (39))){
var state_36930__$1 = state_36930;
var statearr_36945_37026 = state_36930__$1;
(statearr_36945_37026[(2)] = null);

(statearr_36945_37026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (4))){
var inst_36802 = (state_36930[(9)]);
var inst_36802__$1 = (state_36930[(2)]);
var inst_36803 = (inst_36802__$1 == null);
var state_36930__$1 = (function (){var statearr_36946 = state_36930;
(statearr_36946[(9)] = inst_36802__$1);

return statearr_36946;
})();
if(cljs.core.truth_(inst_36803)){
var statearr_36947_37027 = state_36930__$1;
(statearr_36947_37027[(1)] = (5));

} else {
var statearr_36948_37028 = state_36930__$1;
(statearr_36948_37028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (15))){
var inst_36814 = (state_36930[(13)]);
var inst_36811 = (state_36930[(15)]);
var inst_36813 = (state_36930[(16)]);
var inst_36812 = (state_36930[(17)]);
var inst_36827 = (state_36930[(2)]);
var inst_36828 = (inst_36814 + (1));
var tmp36942 = inst_36811;
var tmp36943 = inst_36813;
var tmp36944 = inst_36812;
var inst_36811__$1 = tmp36942;
var inst_36812__$1 = tmp36944;
var inst_36813__$1 = tmp36943;
var inst_36814__$1 = inst_36828;
var state_36930__$1 = (function (){var statearr_36949 = state_36930;
(statearr_36949[(13)] = inst_36814__$1);

(statearr_36949[(18)] = inst_36827);

(statearr_36949[(15)] = inst_36811__$1);

(statearr_36949[(16)] = inst_36813__$1);

(statearr_36949[(17)] = inst_36812__$1);

return statearr_36949;
})();
var statearr_36950_37029 = state_36930__$1;
(statearr_36950_37029[(2)] = null);

(statearr_36950_37029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (21))){
var inst_36852 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36954_37030 = state_36930__$1;
(statearr_36954_37030[(2)] = inst_36852);

(statearr_36954_37030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (31))){
var inst_36878 = (state_36930[(11)]);
var inst_36882 = done.call(null,null);
var inst_36883 = cljs.core.async.untap_STAR_.call(null,m,inst_36878);
var state_36930__$1 = (function (){var statearr_36955 = state_36930;
(statearr_36955[(19)] = inst_36882);

return statearr_36955;
})();
var statearr_36956_37031 = state_36930__$1;
(statearr_36956_37031[(2)] = inst_36883);

(statearr_36956_37031[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (32))){
var inst_36872 = (state_36930[(20)]);
var inst_36873 = (state_36930[(10)]);
var inst_36871 = (state_36930[(12)]);
var inst_36870 = (state_36930[(21)]);
var inst_36885 = (state_36930[(2)]);
var inst_36886 = (inst_36873 + (1));
var tmp36951 = inst_36872;
var tmp36952 = inst_36871;
var tmp36953 = inst_36870;
var inst_36870__$1 = tmp36953;
var inst_36871__$1 = tmp36952;
var inst_36872__$1 = tmp36951;
var inst_36873__$1 = inst_36886;
var state_36930__$1 = (function (){var statearr_36957 = state_36930;
(statearr_36957[(20)] = inst_36872__$1);

(statearr_36957[(22)] = inst_36885);

(statearr_36957[(10)] = inst_36873__$1);

(statearr_36957[(12)] = inst_36871__$1);

(statearr_36957[(21)] = inst_36870__$1);

return statearr_36957;
})();
var statearr_36958_37032 = state_36930__$1;
(statearr_36958_37032[(2)] = null);

(statearr_36958_37032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (40))){
var inst_36898 = (state_36930[(23)]);
var inst_36902 = done.call(null,null);
var inst_36903 = cljs.core.async.untap_STAR_.call(null,m,inst_36898);
var state_36930__$1 = (function (){var statearr_36959 = state_36930;
(statearr_36959[(24)] = inst_36902);

return statearr_36959;
})();
var statearr_36960_37033 = state_36930__$1;
(statearr_36960_37033[(2)] = inst_36903);

(statearr_36960_37033[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (33))){
var inst_36889 = (state_36930[(25)]);
var inst_36891 = cljs.core.chunked_seq_QMARK_.call(null,inst_36889);
var state_36930__$1 = state_36930;
if(inst_36891){
var statearr_36961_37034 = state_36930__$1;
(statearr_36961_37034[(1)] = (36));

} else {
var statearr_36962_37035 = state_36930__$1;
(statearr_36962_37035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (13))){
var inst_36821 = (state_36930[(26)]);
var inst_36824 = cljs.core.async.close_BANG_.call(null,inst_36821);
var state_36930__$1 = state_36930;
var statearr_36963_37036 = state_36930__$1;
(statearr_36963_37036[(2)] = inst_36824);

(statearr_36963_37036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (22))){
var inst_36842 = (state_36930[(8)]);
var inst_36845 = cljs.core.async.close_BANG_.call(null,inst_36842);
var state_36930__$1 = state_36930;
var statearr_36964_37037 = state_36930__$1;
(statearr_36964_37037[(2)] = inst_36845);

(statearr_36964_37037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (36))){
var inst_36889 = (state_36930[(25)]);
var inst_36893 = cljs.core.chunk_first.call(null,inst_36889);
var inst_36894 = cljs.core.chunk_rest.call(null,inst_36889);
var inst_36895 = cljs.core.count.call(null,inst_36893);
var inst_36870 = inst_36894;
var inst_36871 = inst_36893;
var inst_36872 = inst_36895;
var inst_36873 = (0);
var state_36930__$1 = (function (){var statearr_36965 = state_36930;
(statearr_36965[(20)] = inst_36872);

(statearr_36965[(10)] = inst_36873);

(statearr_36965[(12)] = inst_36871);

(statearr_36965[(21)] = inst_36870);

return statearr_36965;
})();
var statearr_36966_37038 = state_36930__$1;
(statearr_36966_37038[(2)] = null);

(statearr_36966_37038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (41))){
var inst_36889 = (state_36930[(25)]);
var inst_36905 = (state_36930[(2)]);
var inst_36906 = cljs.core.next.call(null,inst_36889);
var inst_36870 = inst_36906;
var inst_36871 = null;
var inst_36872 = (0);
var inst_36873 = (0);
var state_36930__$1 = (function (){var statearr_36967 = state_36930;
(statearr_36967[(27)] = inst_36905);

(statearr_36967[(20)] = inst_36872);

(statearr_36967[(10)] = inst_36873);

(statearr_36967[(12)] = inst_36871);

(statearr_36967[(21)] = inst_36870);

return statearr_36967;
})();
var statearr_36968_37039 = state_36930__$1;
(statearr_36968_37039[(2)] = null);

(statearr_36968_37039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (43))){
var state_36930__$1 = state_36930;
var statearr_36969_37040 = state_36930__$1;
(statearr_36969_37040[(2)] = null);

(statearr_36969_37040[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (29))){
var inst_36914 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36970_37041 = state_36930__$1;
(statearr_36970_37041[(2)] = inst_36914);

(statearr_36970_37041[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (44))){
var inst_36923 = (state_36930[(2)]);
var state_36930__$1 = (function (){var statearr_36971 = state_36930;
(statearr_36971[(28)] = inst_36923);

return statearr_36971;
})();
var statearr_36972_37042 = state_36930__$1;
(statearr_36972_37042[(2)] = null);

(statearr_36972_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (6))){
var inst_36862 = (state_36930[(29)]);
var inst_36861 = cljs.core.deref.call(null,cs);
var inst_36862__$1 = cljs.core.keys.call(null,inst_36861);
var inst_36863 = cljs.core.count.call(null,inst_36862__$1);
var inst_36864 = cljs.core.reset_BANG_.call(null,dctr,inst_36863);
var inst_36869 = cljs.core.seq.call(null,inst_36862__$1);
var inst_36870 = inst_36869;
var inst_36871 = null;
var inst_36872 = (0);
var inst_36873 = (0);
var state_36930__$1 = (function (){var statearr_36973 = state_36930;
(statearr_36973[(30)] = inst_36864);

(statearr_36973[(20)] = inst_36872);

(statearr_36973[(10)] = inst_36873);

(statearr_36973[(29)] = inst_36862__$1);

(statearr_36973[(12)] = inst_36871);

(statearr_36973[(21)] = inst_36870);

return statearr_36973;
})();
var statearr_36974_37043 = state_36930__$1;
(statearr_36974_37043[(2)] = null);

(statearr_36974_37043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (28))){
var inst_36889 = (state_36930[(25)]);
var inst_36870 = (state_36930[(21)]);
var inst_36889__$1 = cljs.core.seq.call(null,inst_36870);
var state_36930__$1 = (function (){var statearr_36975 = state_36930;
(statearr_36975[(25)] = inst_36889__$1);

return statearr_36975;
})();
if(inst_36889__$1){
var statearr_36976_37044 = state_36930__$1;
(statearr_36976_37044[(1)] = (33));

} else {
var statearr_36977_37045 = state_36930__$1;
(statearr_36977_37045[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (25))){
var inst_36872 = (state_36930[(20)]);
var inst_36873 = (state_36930[(10)]);
var inst_36875 = (inst_36873 < inst_36872);
var inst_36876 = inst_36875;
var state_36930__$1 = state_36930;
if(cljs.core.truth_(inst_36876)){
var statearr_36978_37046 = state_36930__$1;
(statearr_36978_37046[(1)] = (27));

} else {
var statearr_36979_37047 = state_36930__$1;
(statearr_36979_37047[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (34))){
var state_36930__$1 = state_36930;
var statearr_36980_37048 = state_36930__$1;
(statearr_36980_37048[(2)] = null);

(statearr_36980_37048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (17))){
var state_36930__$1 = state_36930;
var statearr_36981_37049 = state_36930__$1;
(statearr_36981_37049[(2)] = null);

(statearr_36981_37049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (3))){
var inst_36928 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36930__$1,inst_36928);
} else {
if((state_val_36931 === (12))){
var inst_36857 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36982_37050 = state_36930__$1;
(statearr_36982_37050[(2)] = inst_36857);

(statearr_36982_37050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (2))){
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36930__$1,(4),ch);
} else {
if((state_val_36931 === (23))){
var state_36930__$1 = state_36930;
var statearr_36983_37051 = state_36930__$1;
(statearr_36983_37051[(2)] = null);

(statearr_36983_37051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (35))){
var inst_36912 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36984_37052 = state_36930__$1;
(statearr_36984_37052[(2)] = inst_36912);

(statearr_36984_37052[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (19))){
var inst_36831 = (state_36930[(7)]);
var inst_36835 = cljs.core.chunk_first.call(null,inst_36831);
var inst_36836 = cljs.core.chunk_rest.call(null,inst_36831);
var inst_36837 = cljs.core.count.call(null,inst_36835);
var inst_36811 = inst_36836;
var inst_36812 = inst_36835;
var inst_36813 = inst_36837;
var inst_36814 = (0);
var state_36930__$1 = (function (){var statearr_36985 = state_36930;
(statearr_36985[(13)] = inst_36814);

(statearr_36985[(15)] = inst_36811);

(statearr_36985[(16)] = inst_36813);

(statearr_36985[(17)] = inst_36812);

return statearr_36985;
})();
var statearr_36986_37053 = state_36930__$1;
(statearr_36986_37053[(2)] = null);

(statearr_36986_37053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (11))){
var inst_36811 = (state_36930[(15)]);
var inst_36831 = (state_36930[(7)]);
var inst_36831__$1 = cljs.core.seq.call(null,inst_36811);
var state_36930__$1 = (function (){var statearr_36987 = state_36930;
(statearr_36987[(7)] = inst_36831__$1);

return statearr_36987;
})();
if(inst_36831__$1){
var statearr_36988_37054 = state_36930__$1;
(statearr_36988_37054[(1)] = (16));

} else {
var statearr_36989_37055 = state_36930__$1;
(statearr_36989_37055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (9))){
var inst_36859 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36990_37056 = state_36930__$1;
(statearr_36990_37056[(2)] = inst_36859);

(statearr_36990_37056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (5))){
var inst_36809 = cljs.core.deref.call(null,cs);
var inst_36810 = cljs.core.seq.call(null,inst_36809);
var inst_36811 = inst_36810;
var inst_36812 = null;
var inst_36813 = (0);
var inst_36814 = (0);
var state_36930__$1 = (function (){var statearr_36991 = state_36930;
(statearr_36991[(13)] = inst_36814);

(statearr_36991[(15)] = inst_36811);

(statearr_36991[(16)] = inst_36813);

(statearr_36991[(17)] = inst_36812);

return statearr_36991;
})();
var statearr_36992_37057 = state_36930__$1;
(statearr_36992_37057[(2)] = null);

(statearr_36992_37057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (14))){
var state_36930__$1 = state_36930;
var statearr_36993_37058 = state_36930__$1;
(statearr_36993_37058[(2)] = null);

(statearr_36993_37058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (45))){
var inst_36920 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_36994_37059 = state_36930__$1;
(statearr_36994_37059[(2)] = inst_36920);

(statearr_36994_37059[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (26))){
var inst_36862 = (state_36930[(29)]);
var inst_36916 = (state_36930[(2)]);
var inst_36917 = cljs.core.seq.call(null,inst_36862);
var state_36930__$1 = (function (){var statearr_36995 = state_36930;
(statearr_36995[(31)] = inst_36916);

return statearr_36995;
})();
if(inst_36917){
var statearr_36996_37060 = state_36930__$1;
(statearr_36996_37060[(1)] = (42));

} else {
var statearr_36997_37061 = state_36930__$1;
(statearr_36997_37061[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (16))){
var inst_36831 = (state_36930[(7)]);
var inst_36833 = cljs.core.chunked_seq_QMARK_.call(null,inst_36831);
var state_36930__$1 = state_36930;
if(inst_36833){
var statearr_36998_37062 = state_36930__$1;
(statearr_36998_37062[(1)] = (19));

} else {
var statearr_36999_37063 = state_36930__$1;
(statearr_36999_37063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (38))){
var inst_36909 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_37000_37064 = state_36930__$1;
(statearr_37000_37064[(2)] = inst_36909);

(statearr_37000_37064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (30))){
var state_36930__$1 = state_36930;
var statearr_37001_37065 = state_36930__$1;
(statearr_37001_37065[(2)] = null);

(statearr_37001_37065[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (10))){
var inst_36814 = (state_36930[(13)]);
var inst_36812 = (state_36930[(17)]);
var inst_36820 = cljs.core._nth.call(null,inst_36812,inst_36814);
var inst_36821 = cljs.core.nth.call(null,inst_36820,(0),null);
var inst_36822 = cljs.core.nth.call(null,inst_36820,(1),null);
var state_36930__$1 = (function (){var statearr_37002 = state_36930;
(statearr_37002[(26)] = inst_36821);

return statearr_37002;
})();
if(cljs.core.truth_(inst_36822)){
var statearr_37003_37066 = state_36930__$1;
(statearr_37003_37066[(1)] = (13));

} else {
var statearr_37004_37067 = state_36930__$1;
(statearr_37004_37067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (18))){
var inst_36855 = (state_36930[(2)]);
var state_36930__$1 = state_36930;
var statearr_37005_37068 = state_36930__$1;
(statearr_37005_37068[(2)] = inst_36855);

(statearr_37005_37068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (42))){
var state_36930__$1 = state_36930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36930__$1,(45),dchan);
} else {
if((state_val_36931 === (37))){
var inst_36898 = (state_36930[(23)]);
var inst_36802 = (state_36930[(9)]);
var inst_36889 = (state_36930[(25)]);
var inst_36898__$1 = cljs.core.first.call(null,inst_36889);
var inst_36899 = cljs.core.async.put_BANG_.call(null,inst_36898__$1,inst_36802,done);
var state_36930__$1 = (function (){var statearr_37006 = state_36930;
(statearr_37006[(23)] = inst_36898__$1);

return statearr_37006;
})();
if(cljs.core.truth_(inst_36899)){
var statearr_37007_37069 = state_36930__$1;
(statearr_37007_37069[(1)] = (39));

} else {
var statearr_37008_37070 = state_36930__$1;
(statearr_37008_37070[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36931 === (8))){
var inst_36814 = (state_36930[(13)]);
var inst_36813 = (state_36930[(16)]);
var inst_36816 = (inst_36814 < inst_36813);
var inst_36817 = inst_36816;
var state_36930__$1 = state_36930;
if(cljs.core.truth_(inst_36817)){
var statearr_37009_37071 = state_36930__$1;
(statearr_37009_37071[(1)] = (10));

} else {
var statearr_37010_37072 = state_36930__$1;
(statearr_37010_37072[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29552__auto___37018,cs,m,dchan,dctr,done))
;
return ((function (switch__29490__auto__,c__29552__auto___37018,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29491__auto__ = null;
var cljs$core$async$mult_$_state_machine__29491__auto____0 = (function (){
var statearr_37014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37014[(0)] = cljs$core$async$mult_$_state_machine__29491__auto__);

(statearr_37014[(1)] = (1));

return statearr_37014;
});
var cljs$core$async$mult_$_state_machine__29491__auto____1 = (function (state_36930){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_36930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37015){if((e37015 instanceof Object)){
var ex__29494__auto__ = e37015;
var statearr_37016_37073 = state_36930;
(statearr_37016_37073[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_36930;
state_36930 = G__37074;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29491__auto__ = function(state_36930){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29491__auto____1.call(this,state_36930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29491__auto____0;
cljs$core$async$mult_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29491__auto____1;
return cljs$core$async$mult_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37018,cs,m,dchan,dctr,done))
})();
var state__29554__auto__ = (function (){var statearr_37017 = f__29553__auto__.call(null);
(statearr_37017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37018);

return statearr_37017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37018,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__37076 = arguments.length;
switch (G__37076) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj37079 = {};
return obj37079;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__25675__auto__ = m;
if(and__25675__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26323__auto__ = (((m == null))?null:m);
return (function (){var or__25687__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__26727__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26727__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37084){
var map__37085 = p__37084;
var map__37085__$1 = ((cljs.core.seq_QMARK_.call(null,map__37085))?cljs.core.apply.call(null,cljs.core.hash_map,map__37085):map__37085);
var opts = map__37085__$1;
var statearr_37086_37089 = state;
(statearr_37086_37089[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__37085,map__37085__$1,opts){
return (function (val){
var statearr_37087_37090 = state;
(statearr_37087_37090[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37085,map__37085__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_37088_37091 = state;
(statearr_37088_37091[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37080){
var G__37081 = cljs.core.first.call(null,seq37080);
var seq37080__$1 = cljs.core.next.call(null,seq37080);
var G__37082 = cljs.core.first.call(null,seq37080__$1);
var seq37080__$2 = cljs.core.next.call(null,seq37080__$1);
var G__37083 = cljs.core.first.call(null,seq37080__$2);
var seq37080__$3 = cljs.core.next.call(null,seq37080__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37081,G__37082,G__37083,seq37080__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t37211 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37211 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37212){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37212 = meta37212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37213,meta37212__$1){
var self__ = this;
var _37213__$1 = this;
return (new cljs.core.async.t37211(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37212__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37213){
var self__ = this;
var _37213__$1 = this;
return self__.meta37212;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37212","meta37212",-1035906842,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37211.cljs$lang$type = true;

cljs.core.async.t37211.cljs$lang$ctorStr = "cljs.core.async/t37211";

cljs.core.async.t37211.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37211");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37211 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t37211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37212){
return (new cljs.core.async.t37211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37212));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37211(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29552__auto___37330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37283){
var state_val_37284 = (state_37283[(1)]);
if((state_val_37284 === (7))){
var inst_37227 = (state_37283[(7)]);
var inst_37232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37227);
var state_37283__$1 = state_37283;
var statearr_37285_37331 = state_37283__$1;
(statearr_37285_37331[(2)] = inst_37232);

(statearr_37285_37331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (20))){
var inst_37242 = (state_37283[(8)]);
var state_37283__$1 = state_37283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37283__$1,(23),out,inst_37242);
} else {
if((state_val_37284 === (1))){
var inst_37217 = (state_37283[(9)]);
var inst_37217__$1 = calc_state.call(null);
var inst_37218 = cljs.core.seq_QMARK_.call(null,inst_37217__$1);
var state_37283__$1 = (function (){var statearr_37286 = state_37283;
(statearr_37286[(9)] = inst_37217__$1);

return statearr_37286;
})();
if(inst_37218){
var statearr_37287_37332 = state_37283__$1;
(statearr_37287_37332[(1)] = (2));

} else {
var statearr_37288_37333 = state_37283__$1;
(statearr_37288_37333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (24))){
var inst_37235 = (state_37283[(10)]);
var inst_37227 = inst_37235;
var state_37283__$1 = (function (){var statearr_37289 = state_37283;
(statearr_37289[(7)] = inst_37227);

return statearr_37289;
})();
var statearr_37290_37334 = state_37283__$1;
(statearr_37290_37334[(2)] = null);

(statearr_37290_37334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (4))){
var inst_37217 = (state_37283[(9)]);
var inst_37223 = (state_37283[(2)]);
var inst_37224 = cljs.core.get.call(null,inst_37223,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37225 = cljs.core.get.call(null,inst_37223,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37226 = cljs.core.get.call(null,inst_37223,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37227 = inst_37217;
var state_37283__$1 = (function (){var statearr_37291 = state_37283;
(statearr_37291[(11)] = inst_37226);

(statearr_37291[(7)] = inst_37227);

(statearr_37291[(12)] = inst_37224);

(statearr_37291[(13)] = inst_37225);

return statearr_37291;
})();
var statearr_37292_37335 = state_37283__$1;
(statearr_37292_37335[(2)] = null);

(statearr_37292_37335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (15))){
var state_37283__$1 = state_37283;
var statearr_37293_37336 = state_37283__$1;
(statearr_37293_37336[(2)] = null);

(statearr_37293_37336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (21))){
var inst_37235 = (state_37283[(10)]);
var inst_37227 = inst_37235;
var state_37283__$1 = (function (){var statearr_37294 = state_37283;
(statearr_37294[(7)] = inst_37227);

return statearr_37294;
})();
var statearr_37295_37337 = state_37283__$1;
(statearr_37295_37337[(2)] = null);

(statearr_37295_37337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (13))){
var inst_37279 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
var statearr_37296_37338 = state_37283__$1;
(statearr_37296_37338[(2)] = inst_37279);

(statearr_37296_37338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (22))){
var inst_37277 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
var statearr_37297_37339 = state_37283__$1;
(statearr_37297_37339[(2)] = inst_37277);

(statearr_37297_37339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (6))){
var inst_37281 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37283__$1,inst_37281);
} else {
if((state_val_37284 === (25))){
var state_37283__$1 = state_37283;
var statearr_37298_37340 = state_37283__$1;
(statearr_37298_37340[(2)] = null);

(statearr_37298_37340[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (17))){
var inst_37257 = (state_37283[(14)]);
var state_37283__$1 = state_37283;
var statearr_37299_37341 = state_37283__$1;
(statearr_37299_37341[(2)] = inst_37257);

(statearr_37299_37341[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (3))){
var inst_37217 = (state_37283[(9)]);
var state_37283__$1 = state_37283;
var statearr_37300_37342 = state_37283__$1;
(statearr_37300_37342[(2)] = inst_37217);

(statearr_37300_37342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (12))){
var inst_37243 = (state_37283[(15)]);
var inst_37236 = (state_37283[(16)]);
var inst_37257 = (state_37283[(14)]);
var inst_37257__$1 = inst_37236.call(null,inst_37243);
var state_37283__$1 = (function (){var statearr_37301 = state_37283;
(statearr_37301[(14)] = inst_37257__$1);

return statearr_37301;
})();
if(cljs.core.truth_(inst_37257__$1)){
var statearr_37302_37343 = state_37283__$1;
(statearr_37302_37343[(1)] = (17));

} else {
var statearr_37303_37344 = state_37283__$1;
(statearr_37303_37344[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (2))){
var inst_37217 = (state_37283[(9)]);
var inst_37220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37217);
var state_37283__$1 = state_37283;
var statearr_37304_37345 = state_37283__$1;
(statearr_37304_37345[(2)] = inst_37220);

(statearr_37304_37345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (23))){
var inst_37268 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
if(cljs.core.truth_(inst_37268)){
var statearr_37305_37346 = state_37283__$1;
(statearr_37305_37346[(1)] = (24));

} else {
var statearr_37306_37347 = state_37283__$1;
(statearr_37306_37347[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (19))){
var inst_37265 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
if(cljs.core.truth_(inst_37265)){
var statearr_37307_37348 = state_37283__$1;
(statearr_37307_37348[(1)] = (20));

} else {
var statearr_37308_37349 = state_37283__$1;
(statearr_37308_37349[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (11))){
var inst_37242 = (state_37283[(8)]);
var inst_37248 = (inst_37242 == null);
var state_37283__$1 = state_37283;
if(cljs.core.truth_(inst_37248)){
var statearr_37309_37350 = state_37283__$1;
(statearr_37309_37350[(1)] = (14));

} else {
var statearr_37310_37351 = state_37283__$1;
(statearr_37310_37351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (9))){
var inst_37235 = (state_37283[(10)]);
var inst_37235__$1 = (state_37283[(2)]);
var inst_37236 = cljs.core.get.call(null,inst_37235__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37237 = cljs.core.get.call(null,inst_37235__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37238 = cljs.core.get.call(null,inst_37235__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37283__$1 = (function (){var statearr_37311 = state_37283;
(statearr_37311[(17)] = inst_37237);

(statearr_37311[(16)] = inst_37236);

(statearr_37311[(10)] = inst_37235__$1);

return statearr_37311;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37283__$1,(10),inst_37238);
} else {
if((state_val_37284 === (5))){
var inst_37227 = (state_37283[(7)]);
var inst_37230 = cljs.core.seq_QMARK_.call(null,inst_37227);
var state_37283__$1 = state_37283;
if(inst_37230){
var statearr_37312_37352 = state_37283__$1;
(statearr_37312_37352[(1)] = (7));

} else {
var statearr_37313_37353 = state_37283__$1;
(statearr_37313_37353[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (14))){
var inst_37243 = (state_37283[(15)]);
var inst_37250 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37243);
var state_37283__$1 = state_37283;
var statearr_37314_37354 = state_37283__$1;
(statearr_37314_37354[(2)] = inst_37250);

(statearr_37314_37354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (26))){
var inst_37273 = (state_37283[(2)]);
var state_37283__$1 = state_37283;
var statearr_37315_37355 = state_37283__$1;
(statearr_37315_37355[(2)] = inst_37273);

(statearr_37315_37355[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (16))){
var inst_37253 = (state_37283[(2)]);
var inst_37254 = calc_state.call(null);
var inst_37227 = inst_37254;
var state_37283__$1 = (function (){var statearr_37316 = state_37283;
(statearr_37316[(7)] = inst_37227);

(statearr_37316[(18)] = inst_37253);

return statearr_37316;
})();
var statearr_37317_37356 = state_37283__$1;
(statearr_37317_37356[(2)] = null);

(statearr_37317_37356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (10))){
var inst_37243 = (state_37283[(15)]);
var inst_37242 = (state_37283[(8)]);
var inst_37241 = (state_37283[(2)]);
var inst_37242__$1 = cljs.core.nth.call(null,inst_37241,(0),null);
var inst_37243__$1 = cljs.core.nth.call(null,inst_37241,(1),null);
var inst_37244 = (inst_37242__$1 == null);
var inst_37245 = cljs.core._EQ_.call(null,inst_37243__$1,change);
var inst_37246 = (inst_37244) || (inst_37245);
var state_37283__$1 = (function (){var statearr_37318 = state_37283;
(statearr_37318[(15)] = inst_37243__$1);

(statearr_37318[(8)] = inst_37242__$1);

return statearr_37318;
})();
if(cljs.core.truth_(inst_37246)){
var statearr_37319_37357 = state_37283__$1;
(statearr_37319_37357[(1)] = (11));

} else {
var statearr_37320_37358 = state_37283__$1;
(statearr_37320_37358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (18))){
var inst_37237 = (state_37283[(17)]);
var inst_37243 = (state_37283[(15)]);
var inst_37236 = (state_37283[(16)]);
var inst_37260 = cljs.core.empty_QMARK_.call(null,inst_37236);
var inst_37261 = inst_37237.call(null,inst_37243);
var inst_37262 = cljs.core.not.call(null,inst_37261);
var inst_37263 = (inst_37260) && (inst_37262);
var state_37283__$1 = state_37283;
var statearr_37321_37359 = state_37283__$1;
(statearr_37321_37359[(2)] = inst_37263);

(statearr_37321_37359[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37284 === (8))){
var inst_37227 = (state_37283[(7)]);
var state_37283__$1 = state_37283;
var statearr_37322_37360 = state_37283__$1;
(statearr_37322_37360[(2)] = inst_37227);

(statearr_37322_37360[(1)] = (9));


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
});})(c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29490__auto__,c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29491__auto__ = null;
var cljs$core$async$mix_$_state_machine__29491__auto____0 = (function (){
var statearr_37326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37326[(0)] = cljs$core$async$mix_$_state_machine__29491__auto__);

(statearr_37326[(1)] = (1));

return statearr_37326;
});
var cljs$core$async$mix_$_state_machine__29491__auto____1 = (function (state_37283){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37327){if((e37327 instanceof Object)){
var ex__29494__auto__ = e37327;
var statearr_37328_37361 = state_37283;
(statearr_37328_37361[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37362 = state_37283;
state_37283 = G__37362;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29491__auto__ = function(state_37283){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29491__auto____1.call(this,state_37283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29491__auto____0;
cljs$core$async$mix_$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29491__auto____1;
return cljs$core$async$mix_$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29554__auto__ = (function (){var statearr_37329 = f__29553__auto__.call(null);
(statearr_37329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37330);

return statearr_37329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj37364 = {};
return obj37364;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__25675__auto__ = p;
if(and__25675__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__25675__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26323__auto__ = (((p == null))?null:p);
return (function (){var or__25687__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__25675__auto__ = p;
if(and__25675__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__25675__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26323__auto__ = (((p == null))?null:p);
return (function (){var or__25687__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__37366 = arguments.length;
switch (G__37366) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__25675__auto__ = p;
if(and__25675__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__25675__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26323__auto__ = (((p == null))?null:p);
return (function (){var or__25687__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__25675__auto__ = p;
if(and__25675__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__25675__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26323__auto__ = (((p == null))?null:p);
return (function (){var or__25687__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26323__auto__)]);
if(or__25687__auto__){
return or__25687__auto__;
} else {
var or__25687__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25687__auto____$1){
return or__25687__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__37370 = arguments.length;
switch (G__37370) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25687__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25687__auto__)){
return or__25687__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25687__auto__,mults){
return (function (p1__37368_SHARP_){
if(cljs.core.truth_(p1__37368_SHARP_.call(null,topic))){
return p1__37368_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25687__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37372 = meta37372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37373,meta37372__$1){
var self__ = this;
var _37373__$1 = this;
return (new cljs.core.async.t37371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37373){
var self__ = this;
var _37373__$1 = this;
return self__.meta37372;
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37372","meta37372",-244198574,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t37371.cljs$lang$type = true;

cljs.core.async.t37371.cljs$lang$ctorStr = "cljs.core.async/t37371";

cljs.core.async.t37371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t37371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37372){
return (new cljs.core.async.t37371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29552__auto___37494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37494,mults,ensure_mult,p){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37494,mults,ensure_mult,p){
return (function (state_37445){
var state_val_37446 = (state_37445[(1)]);
if((state_val_37446 === (7))){
var inst_37441 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37447_37495 = state_37445__$1;
(statearr_37447_37495[(2)] = inst_37441);

(statearr_37447_37495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (20))){
var state_37445__$1 = state_37445;
var statearr_37448_37496 = state_37445__$1;
(statearr_37448_37496[(2)] = null);

(statearr_37448_37496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (1))){
var state_37445__$1 = state_37445;
var statearr_37449_37497 = state_37445__$1;
(statearr_37449_37497[(2)] = null);

(statearr_37449_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (24))){
var inst_37424 = (state_37445[(7)]);
var inst_37433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37424);
var state_37445__$1 = state_37445;
var statearr_37450_37498 = state_37445__$1;
(statearr_37450_37498[(2)] = inst_37433);

(statearr_37450_37498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (4))){
var inst_37376 = (state_37445[(8)]);
var inst_37376__$1 = (state_37445[(2)]);
var inst_37377 = (inst_37376__$1 == null);
var state_37445__$1 = (function (){var statearr_37451 = state_37445;
(statearr_37451[(8)] = inst_37376__$1);

return statearr_37451;
})();
if(cljs.core.truth_(inst_37377)){
var statearr_37452_37499 = state_37445__$1;
(statearr_37452_37499[(1)] = (5));

} else {
var statearr_37453_37500 = state_37445__$1;
(statearr_37453_37500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (15))){
var inst_37418 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37454_37501 = state_37445__$1;
(statearr_37454_37501[(2)] = inst_37418);

(statearr_37454_37501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (21))){
var inst_37438 = (state_37445[(2)]);
var state_37445__$1 = (function (){var statearr_37455 = state_37445;
(statearr_37455[(9)] = inst_37438);

return statearr_37455;
})();
var statearr_37456_37502 = state_37445__$1;
(statearr_37456_37502[(2)] = null);

(statearr_37456_37502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (13))){
var inst_37400 = (state_37445[(10)]);
var inst_37402 = cljs.core.chunked_seq_QMARK_.call(null,inst_37400);
var state_37445__$1 = state_37445;
if(inst_37402){
var statearr_37457_37503 = state_37445__$1;
(statearr_37457_37503[(1)] = (16));

} else {
var statearr_37458_37504 = state_37445__$1;
(statearr_37458_37504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (22))){
var inst_37430 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
if(cljs.core.truth_(inst_37430)){
var statearr_37459_37505 = state_37445__$1;
(statearr_37459_37505[(1)] = (23));

} else {
var statearr_37460_37506 = state_37445__$1;
(statearr_37460_37506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (6))){
var inst_37424 = (state_37445[(7)]);
var inst_37376 = (state_37445[(8)]);
var inst_37426 = (state_37445[(11)]);
var inst_37424__$1 = topic_fn.call(null,inst_37376);
var inst_37425 = cljs.core.deref.call(null,mults);
var inst_37426__$1 = cljs.core.get.call(null,inst_37425,inst_37424__$1);
var state_37445__$1 = (function (){var statearr_37461 = state_37445;
(statearr_37461[(7)] = inst_37424__$1);

(statearr_37461[(11)] = inst_37426__$1);

return statearr_37461;
})();
if(cljs.core.truth_(inst_37426__$1)){
var statearr_37462_37507 = state_37445__$1;
(statearr_37462_37507[(1)] = (19));

} else {
var statearr_37463_37508 = state_37445__$1;
(statearr_37463_37508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (25))){
var inst_37435 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37464_37509 = state_37445__$1;
(statearr_37464_37509[(2)] = inst_37435);

(statearr_37464_37509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (17))){
var inst_37400 = (state_37445[(10)]);
var inst_37409 = cljs.core.first.call(null,inst_37400);
var inst_37410 = cljs.core.async.muxch_STAR_.call(null,inst_37409);
var inst_37411 = cljs.core.async.close_BANG_.call(null,inst_37410);
var inst_37412 = cljs.core.next.call(null,inst_37400);
var inst_37386 = inst_37412;
var inst_37387 = null;
var inst_37388 = (0);
var inst_37389 = (0);
var state_37445__$1 = (function (){var statearr_37465 = state_37445;
(statearr_37465[(12)] = inst_37386);

(statearr_37465[(13)] = inst_37387);

(statearr_37465[(14)] = inst_37388);

(statearr_37465[(15)] = inst_37389);

(statearr_37465[(16)] = inst_37411);

return statearr_37465;
})();
var statearr_37466_37510 = state_37445__$1;
(statearr_37466_37510[(2)] = null);

(statearr_37466_37510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (3))){
var inst_37443 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37445__$1,inst_37443);
} else {
if((state_val_37446 === (12))){
var inst_37420 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37467_37511 = state_37445__$1;
(statearr_37467_37511[(2)] = inst_37420);

(statearr_37467_37511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (2))){
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37445__$1,(4),ch);
} else {
if((state_val_37446 === (23))){
var state_37445__$1 = state_37445;
var statearr_37468_37512 = state_37445__$1;
(statearr_37468_37512[(2)] = null);

(statearr_37468_37512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (19))){
var inst_37376 = (state_37445[(8)]);
var inst_37426 = (state_37445[(11)]);
var inst_37428 = cljs.core.async.muxch_STAR_.call(null,inst_37426);
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37445__$1,(22),inst_37428,inst_37376);
} else {
if((state_val_37446 === (11))){
var inst_37386 = (state_37445[(12)]);
var inst_37400 = (state_37445[(10)]);
var inst_37400__$1 = cljs.core.seq.call(null,inst_37386);
var state_37445__$1 = (function (){var statearr_37469 = state_37445;
(statearr_37469[(10)] = inst_37400__$1);

return statearr_37469;
})();
if(inst_37400__$1){
var statearr_37470_37513 = state_37445__$1;
(statearr_37470_37513[(1)] = (13));

} else {
var statearr_37471_37514 = state_37445__$1;
(statearr_37471_37514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (9))){
var inst_37422 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37472_37515 = state_37445__$1;
(statearr_37472_37515[(2)] = inst_37422);

(statearr_37472_37515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (5))){
var inst_37383 = cljs.core.deref.call(null,mults);
var inst_37384 = cljs.core.vals.call(null,inst_37383);
var inst_37385 = cljs.core.seq.call(null,inst_37384);
var inst_37386 = inst_37385;
var inst_37387 = null;
var inst_37388 = (0);
var inst_37389 = (0);
var state_37445__$1 = (function (){var statearr_37473 = state_37445;
(statearr_37473[(12)] = inst_37386);

(statearr_37473[(13)] = inst_37387);

(statearr_37473[(14)] = inst_37388);

(statearr_37473[(15)] = inst_37389);

return statearr_37473;
})();
var statearr_37474_37516 = state_37445__$1;
(statearr_37474_37516[(2)] = null);

(statearr_37474_37516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (14))){
var state_37445__$1 = state_37445;
var statearr_37478_37517 = state_37445__$1;
(statearr_37478_37517[(2)] = null);

(statearr_37478_37517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (16))){
var inst_37400 = (state_37445[(10)]);
var inst_37404 = cljs.core.chunk_first.call(null,inst_37400);
var inst_37405 = cljs.core.chunk_rest.call(null,inst_37400);
var inst_37406 = cljs.core.count.call(null,inst_37404);
var inst_37386 = inst_37405;
var inst_37387 = inst_37404;
var inst_37388 = inst_37406;
var inst_37389 = (0);
var state_37445__$1 = (function (){var statearr_37479 = state_37445;
(statearr_37479[(12)] = inst_37386);

(statearr_37479[(13)] = inst_37387);

(statearr_37479[(14)] = inst_37388);

(statearr_37479[(15)] = inst_37389);

return statearr_37479;
})();
var statearr_37480_37518 = state_37445__$1;
(statearr_37480_37518[(2)] = null);

(statearr_37480_37518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (10))){
var inst_37386 = (state_37445[(12)]);
var inst_37387 = (state_37445[(13)]);
var inst_37388 = (state_37445[(14)]);
var inst_37389 = (state_37445[(15)]);
var inst_37394 = cljs.core._nth.call(null,inst_37387,inst_37389);
var inst_37395 = cljs.core.async.muxch_STAR_.call(null,inst_37394);
var inst_37396 = cljs.core.async.close_BANG_.call(null,inst_37395);
var inst_37397 = (inst_37389 + (1));
var tmp37475 = inst_37386;
var tmp37476 = inst_37387;
var tmp37477 = inst_37388;
var inst_37386__$1 = tmp37475;
var inst_37387__$1 = tmp37476;
var inst_37388__$1 = tmp37477;
var inst_37389__$1 = inst_37397;
var state_37445__$1 = (function (){var statearr_37481 = state_37445;
(statearr_37481[(12)] = inst_37386__$1);

(statearr_37481[(13)] = inst_37387__$1);

(statearr_37481[(14)] = inst_37388__$1);

(statearr_37481[(15)] = inst_37389__$1);

(statearr_37481[(17)] = inst_37396);

return statearr_37481;
})();
var statearr_37482_37519 = state_37445__$1;
(statearr_37482_37519[(2)] = null);

(statearr_37482_37519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (18))){
var inst_37415 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37483_37520 = state_37445__$1;
(statearr_37483_37520[(2)] = inst_37415);

(statearr_37483_37520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (8))){
var inst_37388 = (state_37445[(14)]);
var inst_37389 = (state_37445[(15)]);
var inst_37391 = (inst_37389 < inst_37388);
var inst_37392 = inst_37391;
var state_37445__$1 = state_37445;
if(cljs.core.truth_(inst_37392)){
var statearr_37484_37521 = state_37445__$1;
(statearr_37484_37521[(1)] = (10));

} else {
var statearr_37485_37522 = state_37445__$1;
(statearr_37485_37522[(1)] = (11));

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
});})(c__29552__auto___37494,mults,ensure_mult,p))
;
return ((function (switch__29490__auto__,c__29552__auto___37494,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_37489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37489[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_37489[(1)] = (1));

return statearr_37489;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_37445){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37490){if((e37490 instanceof Object)){
var ex__29494__auto__ = e37490;
var statearr_37491_37523 = state_37445;
(statearr_37491_37523[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37524 = state_37445;
state_37445 = G__37524;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_37445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_37445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37494,mults,ensure_mult,p))
})();
var state__29554__auto__ = (function (){var statearr_37492 = f__29553__auto__.call(null);
(statearr_37492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37494);

return statearr_37492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37494,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__37526 = arguments.length;
switch (G__37526) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__37529 = arguments.length;
switch (G__37529) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__37532 = arguments.length;
switch (G__37532) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29552__auto___37602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37571){
var state_val_37572 = (state_37571[(1)]);
if((state_val_37572 === (7))){
var state_37571__$1 = state_37571;
var statearr_37573_37603 = state_37571__$1;
(statearr_37573_37603[(2)] = null);

(statearr_37573_37603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (1))){
var state_37571__$1 = state_37571;
var statearr_37574_37604 = state_37571__$1;
(statearr_37574_37604[(2)] = null);

(statearr_37574_37604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (4))){
var inst_37535 = (state_37571[(7)]);
var inst_37537 = (inst_37535 < cnt);
var state_37571__$1 = state_37571;
if(cljs.core.truth_(inst_37537)){
var statearr_37575_37605 = state_37571__$1;
(statearr_37575_37605[(1)] = (6));

} else {
var statearr_37576_37606 = state_37571__$1;
(statearr_37576_37606[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (15))){
var inst_37567 = (state_37571[(2)]);
var state_37571__$1 = state_37571;
var statearr_37577_37607 = state_37571__$1;
(statearr_37577_37607[(2)] = inst_37567);

(statearr_37577_37607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (13))){
var inst_37560 = cljs.core.async.close_BANG_.call(null,out);
var state_37571__$1 = state_37571;
var statearr_37578_37608 = state_37571__$1;
(statearr_37578_37608[(2)] = inst_37560);

(statearr_37578_37608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (6))){
var state_37571__$1 = state_37571;
var statearr_37579_37609 = state_37571__$1;
(statearr_37579_37609[(2)] = null);

(statearr_37579_37609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (3))){
var inst_37569 = (state_37571[(2)]);
var state_37571__$1 = state_37571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37571__$1,inst_37569);
} else {
if((state_val_37572 === (12))){
var inst_37557 = (state_37571[(8)]);
var inst_37557__$1 = (state_37571[(2)]);
var inst_37558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37557__$1);
var state_37571__$1 = (function (){var statearr_37580 = state_37571;
(statearr_37580[(8)] = inst_37557__$1);

return statearr_37580;
})();
if(cljs.core.truth_(inst_37558)){
var statearr_37581_37610 = state_37571__$1;
(statearr_37581_37610[(1)] = (13));

} else {
var statearr_37582_37611 = state_37571__$1;
(statearr_37582_37611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (2))){
var inst_37534 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37535 = (0);
var state_37571__$1 = (function (){var statearr_37583 = state_37571;
(statearr_37583[(7)] = inst_37535);

(statearr_37583[(9)] = inst_37534);

return statearr_37583;
})();
var statearr_37584_37612 = state_37571__$1;
(statearr_37584_37612[(2)] = null);

(statearr_37584_37612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (11))){
var inst_37535 = (state_37571[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37571,(10),Object,null,(9));
var inst_37544 = chs__$1.call(null,inst_37535);
var inst_37545 = done.call(null,inst_37535);
var inst_37546 = cljs.core.async.take_BANG_.call(null,inst_37544,inst_37545);
var state_37571__$1 = state_37571;
var statearr_37585_37613 = state_37571__$1;
(statearr_37585_37613[(2)] = inst_37546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (9))){
var inst_37535 = (state_37571[(7)]);
var inst_37548 = (state_37571[(2)]);
var inst_37549 = (inst_37535 + (1));
var inst_37535__$1 = inst_37549;
var state_37571__$1 = (function (){var statearr_37586 = state_37571;
(statearr_37586[(7)] = inst_37535__$1);

(statearr_37586[(10)] = inst_37548);

return statearr_37586;
})();
var statearr_37587_37614 = state_37571__$1;
(statearr_37587_37614[(2)] = null);

(statearr_37587_37614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (5))){
var inst_37555 = (state_37571[(2)]);
var state_37571__$1 = (function (){var statearr_37588 = state_37571;
(statearr_37588[(11)] = inst_37555);

return statearr_37588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37571__$1,(12),dchan);
} else {
if((state_val_37572 === (14))){
var inst_37557 = (state_37571[(8)]);
var inst_37562 = cljs.core.apply.call(null,f,inst_37557);
var state_37571__$1 = state_37571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37571__$1,(16),out,inst_37562);
} else {
if((state_val_37572 === (16))){
var inst_37564 = (state_37571[(2)]);
var state_37571__$1 = (function (){var statearr_37589 = state_37571;
(statearr_37589[(12)] = inst_37564);

return statearr_37589;
})();
var statearr_37590_37615 = state_37571__$1;
(statearr_37590_37615[(2)] = null);

(statearr_37590_37615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (10))){
var inst_37539 = (state_37571[(2)]);
var inst_37540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37571__$1 = (function (){var statearr_37591 = state_37571;
(statearr_37591[(13)] = inst_37539);

return statearr_37591;
})();
var statearr_37592_37616 = state_37571__$1;
(statearr_37592_37616[(2)] = inst_37540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37572 === (8))){
var inst_37553 = (state_37571[(2)]);
var state_37571__$1 = state_37571;
var statearr_37593_37617 = state_37571__$1;
(statearr_37593_37617[(2)] = inst_37553);

(statearr_37593_37617[(1)] = (5));


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
});})(c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29490__auto__,c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_37597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37597[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_37597[(1)] = (1));

return statearr_37597;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_37571){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37598){if((e37598 instanceof Object)){
var ex__29494__auto__ = e37598;
var statearr_37599_37618 = state_37571;
(statearr_37599_37618[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37619 = state_37571;
state_37571 = G__37619;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_37571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_37571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29554__auto__ = (function (){var statearr_37600 = f__29553__auto__.call(null);
(statearr_37600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37602);

return statearr_37600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37602,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__37622 = arguments.length;
switch (G__37622) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___37677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37677,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37677,out){
return (function (state_37652){
var state_val_37653 = (state_37652[(1)]);
if((state_val_37653 === (7))){
var inst_37631 = (state_37652[(7)]);
var inst_37632 = (state_37652[(8)]);
var inst_37631__$1 = (state_37652[(2)]);
var inst_37632__$1 = cljs.core.nth.call(null,inst_37631__$1,(0),null);
var inst_37633 = cljs.core.nth.call(null,inst_37631__$1,(1),null);
var inst_37634 = (inst_37632__$1 == null);
var state_37652__$1 = (function (){var statearr_37654 = state_37652;
(statearr_37654[(9)] = inst_37633);

(statearr_37654[(7)] = inst_37631__$1);

(statearr_37654[(8)] = inst_37632__$1);

return statearr_37654;
})();
if(cljs.core.truth_(inst_37634)){
var statearr_37655_37678 = state_37652__$1;
(statearr_37655_37678[(1)] = (8));

} else {
var statearr_37656_37679 = state_37652__$1;
(statearr_37656_37679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (1))){
var inst_37623 = cljs.core.vec.call(null,chs);
var inst_37624 = inst_37623;
var state_37652__$1 = (function (){var statearr_37657 = state_37652;
(statearr_37657[(10)] = inst_37624);

return statearr_37657;
})();
var statearr_37658_37680 = state_37652__$1;
(statearr_37658_37680[(2)] = null);

(statearr_37658_37680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (4))){
var inst_37624 = (state_37652[(10)]);
var state_37652__$1 = state_37652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37652__$1,(7),inst_37624);
} else {
if((state_val_37653 === (6))){
var inst_37648 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37659_37681 = state_37652__$1;
(statearr_37659_37681[(2)] = inst_37648);

(statearr_37659_37681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (3))){
var inst_37650 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37652__$1,inst_37650);
} else {
if((state_val_37653 === (2))){
var inst_37624 = (state_37652[(10)]);
var inst_37626 = cljs.core.count.call(null,inst_37624);
var inst_37627 = (inst_37626 > (0));
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37627)){
var statearr_37661_37682 = state_37652__$1;
(statearr_37661_37682[(1)] = (4));

} else {
var statearr_37662_37683 = state_37652__$1;
(statearr_37662_37683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (11))){
var inst_37624 = (state_37652[(10)]);
var inst_37641 = (state_37652[(2)]);
var tmp37660 = inst_37624;
var inst_37624__$1 = tmp37660;
var state_37652__$1 = (function (){var statearr_37663 = state_37652;
(statearr_37663[(11)] = inst_37641);

(statearr_37663[(10)] = inst_37624__$1);

return statearr_37663;
})();
var statearr_37664_37684 = state_37652__$1;
(statearr_37664_37684[(2)] = null);

(statearr_37664_37684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (9))){
var inst_37632 = (state_37652[(8)]);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37652__$1,(11),out,inst_37632);
} else {
if((state_val_37653 === (5))){
var inst_37646 = cljs.core.async.close_BANG_.call(null,out);
var state_37652__$1 = state_37652;
var statearr_37665_37685 = state_37652__$1;
(statearr_37665_37685[(2)] = inst_37646);

(statearr_37665_37685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (10))){
var inst_37644 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37666_37686 = state_37652__$1;
(statearr_37666_37686[(2)] = inst_37644);

(statearr_37666_37686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (8))){
var inst_37633 = (state_37652[(9)]);
var inst_37631 = (state_37652[(7)]);
var inst_37624 = (state_37652[(10)]);
var inst_37632 = (state_37652[(8)]);
var inst_37636 = (function (){var cs = inst_37624;
var vec__37629 = inst_37631;
var v = inst_37632;
var c = inst_37633;
return ((function (cs,vec__37629,v,c,inst_37633,inst_37631,inst_37624,inst_37632,state_val_37653,c__29552__auto___37677,out){
return (function (p1__37620_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37620_SHARP_);
});
;})(cs,vec__37629,v,c,inst_37633,inst_37631,inst_37624,inst_37632,state_val_37653,c__29552__auto___37677,out))
})();
var inst_37637 = cljs.core.filterv.call(null,inst_37636,inst_37624);
var inst_37624__$1 = inst_37637;
var state_37652__$1 = (function (){var statearr_37667 = state_37652;
(statearr_37667[(10)] = inst_37624__$1);

return statearr_37667;
})();
var statearr_37668_37687 = state_37652__$1;
(statearr_37668_37687[(2)] = null);

(statearr_37668_37687[(1)] = (2));


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
});})(c__29552__auto___37677,out))
;
return ((function (switch__29490__auto__,c__29552__auto___37677,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_37672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37672[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_37672[(1)] = (1));

return statearr_37672;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_37652){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37673){if((e37673 instanceof Object)){
var ex__29494__auto__ = e37673;
var statearr_37674_37688 = state_37652;
(statearr_37674_37688[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37689 = state_37652;
state_37652 = G__37689;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_37652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_37652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37677,out))
})();
var state__29554__auto__ = (function (){var statearr_37675 = f__29553__auto__.call(null);
(statearr_37675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37677);

return statearr_37675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37677,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__37691 = arguments.length;
switch (G__37691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___37739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37739,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37739,out){
return (function (state_37715){
var state_val_37716 = (state_37715[(1)]);
if((state_val_37716 === (7))){
var inst_37697 = (state_37715[(7)]);
var inst_37697__$1 = (state_37715[(2)]);
var inst_37698 = (inst_37697__$1 == null);
var inst_37699 = cljs.core.not.call(null,inst_37698);
var state_37715__$1 = (function (){var statearr_37717 = state_37715;
(statearr_37717[(7)] = inst_37697__$1);

return statearr_37717;
})();
if(inst_37699){
var statearr_37718_37740 = state_37715__$1;
(statearr_37718_37740[(1)] = (8));

} else {
var statearr_37719_37741 = state_37715__$1;
(statearr_37719_37741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (1))){
var inst_37692 = (0);
var state_37715__$1 = (function (){var statearr_37720 = state_37715;
(statearr_37720[(8)] = inst_37692);

return statearr_37720;
})();
var statearr_37721_37742 = state_37715__$1;
(statearr_37721_37742[(2)] = null);

(statearr_37721_37742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (4))){
var state_37715__$1 = state_37715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37715__$1,(7),ch);
} else {
if((state_val_37716 === (6))){
var inst_37710 = (state_37715[(2)]);
var state_37715__$1 = state_37715;
var statearr_37722_37743 = state_37715__$1;
(statearr_37722_37743[(2)] = inst_37710);

(statearr_37722_37743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (3))){
var inst_37712 = (state_37715[(2)]);
var inst_37713 = cljs.core.async.close_BANG_.call(null,out);
var state_37715__$1 = (function (){var statearr_37723 = state_37715;
(statearr_37723[(9)] = inst_37712);

return statearr_37723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37715__$1,inst_37713);
} else {
if((state_val_37716 === (2))){
var inst_37692 = (state_37715[(8)]);
var inst_37694 = (inst_37692 < n);
var state_37715__$1 = state_37715;
if(cljs.core.truth_(inst_37694)){
var statearr_37724_37744 = state_37715__$1;
(statearr_37724_37744[(1)] = (4));

} else {
var statearr_37725_37745 = state_37715__$1;
(statearr_37725_37745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (11))){
var inst_37692 = (state_37715[(8)]);
var inst_37702 = (state_37715[(2)]);
var inst_37703 = (inst_37692 + (1));
var inst_37692__$1 = inst_37703;
var state_37715__$1 = (function (){var statearr_37726 = state_37715;
(statearr_37726[(8)] = inst_37692__$1);

(statearr_37726[(10)] = inst_37702);

return statearr_37726;
})();
var statearr_37727_37746 = state_37715__$1;
(statearr_37727_37746[(2)] = null);

(statearr_37727_37746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (9))){
var state_37715__$1 = state_37715;
var statearr_37728_37747 = state_37715__$1;
(statearr_37728_37747[(2)] = null);

(statearr_37728_37747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (5))){
var state_37715__$1 = state_37715;
var statearr_37729_37748 = state_37715__$1;
(statearr_37729_37748[(2)] = null);

(statearr_37729_37748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (10))){
var inst_37707 = (state_37715[(2)]);
var state_37715__$1 = state_37715;
var statearr_37730_37749 = state_37715__$1;
(statearr_37730_37749[(2)] = inst_37707);

(statearr_37730_37749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37716 === (8))){
var inst_37697 = (state_37715[(7)]);
var state_37715__$1 = state_37715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37715__$1,(11),out,inst_37697);
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
});})(c__29552__auto___37739,out))
;
return ((function (switch__29490__auto__,c__29552__auto___37739,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_37734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37734[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_37734[(1)] = (1));

return statearr_37734;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_37715){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37735){if((e37735 instanceof Object)){
var ex__29494__auto__ = e37735;
var statearr_37736_37750 = state_37715;
(statearr_37736_37750[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37751 = state_37715;
state_37715 = G__37751;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_37715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_37715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37739,out))
})();
var state__29554__auto__ = (function (){var statearr_37737 = f__29553__auto__.call(null);
(statearr_37737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37739);

return statearr_37737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37739,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t37759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37759 = (function (map_LT_,f,ch,meta37760){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37760 = meta37760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37761,meta37760__$1){
var self__ = this;
var _37761__$1 = this;
return (new cljs.core.async.t37759(self__.map_LT_,self__.f,self__.ch,meta37760__$1));
});

cljs.core.async.t37759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37761){
var self__ = this;
var _37761__$1 = this;
return self__.meta37760;
});

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t37762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37762 = (function (map_LT_,f,ch,meta37760,_,fn1,meta37763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37760 = meta37760;
this._ = _;
this.fn1 = fn1;
this.meta37763 = meta37763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37764,meta37763__$1){
var self__ = this;
var _37764__$1 = this;
return (new cljs.core.async.t37762(self__.map_LT_,self__.f,self__.ch,self__.meta37760,self__._,self__.fn1,meta37763__$1));
});})(___$1))
;

cljs.core.async.t37762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37764){
var self__ = this;
var _37764__$1 = this;
return self__.meta37763;
});})(___$1))
;

cljs.core.async.t37762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t37762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37752_SHARP_){
return f1.call(null,(((p1__37752_SHARP_ == null))?null:self__.f.call(null,p1__37752_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t37762.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37760","meta37760",-886436394,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37763","meta37763",1117527799,null)], null);
});})(___$1))
;

cljs.core.async.t37762.cljs$lang$type = true;

cljs.core.async.t37762.cljs$lang$ctorStr = "cljs.core.async/t37762";

cljs.core.async.t37762.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37762");
});})(___$1))
;

cljs.core.async.__GT_t37762 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t37762(map_LT___$1,f__$1,ch__$1,meta37760__$1,___$2,fn1__$1,meta37763){
return (new cljs.core.async.t37762(map_LT___$1,f__$1,ch__$1,meta37760__$1,___$2,fn1__$1,meta37763));
});})(___$1))
;

}

return (new cljs.core.async.t37762(self__.map_LT_,self__.f,self__.ch,self__.meta37760,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25675__auto__ = ret;
if(cljs.core.truth_(and__25675__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25675__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t37759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37760","meta37760",-886436394,null)], null);
});

cljs.core.async.t37759.cljs$lang$type = true;

cljs.core.async.t37759.cljs$lang$ctorStr = "cljs.core.async/t37759";

cljs.core.async.t37759.cljs$lang$ctorPrWriter = (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37759");
});

cljs.core.async.__GT_t37759 = (function cljs$core$async$map_LT__$___GT_t37759(map_LT___$1,f__$1,ch__$1,meta37760){
return (new cljs.core.async.t37759(map_LT___$1,f__$1,ch__$1,meta37760));
});

}

return (new cljs.core.async.t37759(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t37768 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37768 = (function (map_GT_,f,ch,meta37769){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37769 = meta37769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37770,meta37769__$1){
var self__ = this;
var _37770__$1 = this;
return (new cljs.core.async.t37768(self__.map_GT_,self__.f,self__.ch,meta37769__$1));
});

cljs.core.async.t37768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37770){
var self__ = this;
var _37770__$1 = this;
return self__.meta37769;
});

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t37768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37769","meta37769",-806311142,null)], null);
});

cljs.core.async.t37768.cljs$lang$type = true;

cljs.core.async.t37768.cljs$lang$ctorStr = "cljs.core.async/t37768";

cljs.core.async.t37768.cljs$lang$ctorPrWriter = (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37768");
});

cljs.core.async.__GT_t37768 = (function cljs$core$async$map_GT__$___GT_t37768(map_GT___$1,f__$1,ch__$1,meta37769){
return (new cljs.core.async.t37768(map_GT___$1,f__$1,ch__$1,meta37769));
});

}

return (new cljs.core.async.t37768(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t37774 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37774 = (function (filter_GT_,p,ch,meta37775){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37775 = meta37775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37776,meta37775__$1){
var self__ = this;
var _37776__$1 = this;
return (new cljs.core.async.t37774(self__.filter_GT_,self__.p,self__.ch,meta37775__$1));
});

cljs.core.async.t37774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37776){
var self__ = this;
var _37776__$1 = this;
return self__.meta37775;
});

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t37774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37775","meta37775",-241806208,null)], null);
});

cljs.core.async.t37774.cljs$lang$type = true;

cljs.core.async.t37774.cljs$lang$ctorStr = "cljs.core.async/t37774";

cljs.core.async.t37774.cljs$lang$ctorPrWriter = (function (this__26266__auto__,writer__26267__auto__,opt__26268__auto__){
return cljs.core._write.call(null,writer__26267__auto__,"cljs.core.async/t37774");
});

cljs.core.async.__GT_t37774 = (function cljs$core$async$filter_GT__$___GT_t37774(filter_GT___$1,p__$1,ch__$1,meta37775){
return (new cljs.core.async.t37774(filter_GT___$1,p__$1,ch__$1,meta37775));
});

}

return (new cljs.core.async.t37774(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__37778 = arguments.length;
switch (G__37778) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___37821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___37821,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___37821,out){
return (function (state_37799){
var state_val_37800 = (state_37799[(1)]);
if((state_val_37800 === (7))){
var inst_37795 = (state_37799[(2)]);
var state_37799__$1 = state_37799;
var statearr_37801_37822 = state_37799__$1;
(statearr_37801_37822[(2)] = inst_37795);

(statearr_37801_37822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (1))){
var state_37799__$1 = state_37799;
var statearr_37802_37823 = state_37799__$1;
(statearr_37802_37823[(2)] = null);

(statearr_37802_37823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (4))){
var inst_37781 = (state_37799[(7)]);
var inst_37781__$1 = (state_37799[(2)]);
var inst_37782 = (inst_37781__$1 == null);
var state_37799__$1 = (function (){var statearr_37803 = state_37799;
(statearr_37803[(7)] = inst_37781__$1);

return statearr_37803;
})();
if(cljs.core.truth_(inst_37782)){
var statearr_37804_37824 = state_37799__$1;
(statearr_37804_37824[(1)] = (5));

} else {
var statearr_37805_37825 = state_37799__$1;
(statearr_37805_37825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (6))){
var inst_37781 = (state_37799[(7)]);
var inst_37786 = p.call(null,inst_37781);
var state_37799__$1 = state_37799;
if(cljs.core.truth_(inst_37786)){
var statearr_37806_37826 = state_37799__$1;
(statearr_37806_37826[(1)] = (8));

} else {
var statearr_37807_37827 = state_37799__$1;
(statearr_37807_37827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (3))){
var inst_37797 = (state_37799[(2)]);
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37799__$1,inst_37797);
} else {
if((state_val_37800 === (2))){
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37799__$1,(4),ch);
} else {
if((state_val_37800 === (11))){
var inst_37789 = (state_37799[(2)]);
var state_37799__$1 = state_37799;
var statearr_37808_37828 = state_37799__$1;
(statearr_37808_37828[(2)] = inst_37789);

(statearr_37808_37828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (9))){
var state_37799__$1 = state_37799;
var statearr_37809_37829 = state_37799__$1;
(statearr_37809_37829[(2)] = null);

(statearr_37809_37829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (5))){
var inst_37784 = cljs.core.async.close_BANG_.call(null,out);
var state_37799__$1 = state_37799;
var statearr_37810_37830 = state_37799__$1;
(statearr_37810_37830[(2)] = inst_37784);

(statearr_37810_37830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (10))){
var inst_37792 = (state_37799[(2)]);
var state_37799__$1 = (function (){var statearr_37811 = state_37799;
(statearr_37811[(8)] = inst_37792);

return statearr_37811;
})();
var statearr_37812_37831 = state_37799__$1;
(statearr_37812_37831[(2)] = null);

(statearr_37812_37831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (8))){
var inst_37781 = (state_37799[(7)]);
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37799__$1,(11),out,inst_37781);
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
});})(c__29552__auto___37821,out))
;
return ((function (switch__29490__auto__,c__29552__auto___37821,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_37816 = [null,null,null,null,null,null,null,null,null];
(statearr_37816[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_37816[(1)] = (1));

return statearr_37816;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_37799){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_37799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e37817){if((e37817 instanceof Object)){
var ex__29494__auto__ = e37817;
var statearr_37818_37832 = state_37799;
(statearr_37818_37832[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37833 = state_37799;
state_37799 = G__37833;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_37799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_37799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___37821,out))
})();
var state__29554__auto__ = (function (){var statearr_37819 = f__29553__auto__.call(null);
(statearr_37819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___37821);

return statearr_37819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___37821,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__37835 = arguments.length;
switch (G__37835) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto__){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto__){
return (function (state_38002){
var state_val_38003 = (state_38002[(1)]);
if((state_val_38003 === (7))){
var inst_37998 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38004_38045 = state_38002__$1;
(statearr_38004_38045[(2)] = inst_37998);

(statearr_38004_38045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (20))){
var inst_37968 = (state_38002[(7)]);
var inst_37979 = (state_38002[(2)]);
var inst_37980 = cljs.core.next.call(null,inst_37968);
var inst_37954 = inst_37980;
var inst_37955 = null;
var inst_37956 = (0);
var inst_37957 = (0);
var state_38002__$1 = (function (){var statearr_38005 = state_38002;
(statearr_38005[(8)] = inst_37979);

(statearr_38005[(9)] = inst_37957);

(statearr_38005[(10)] = inst_37955);

(statearr_38005[(11)] = inst_37954);

(statearr_38005[(12)] = inst_37956);

return statearr_38005;
})();
var statearr_38006_38046 = state_38002__$1;
(statearr_38006_38046[(2)] = null);

(statearr_38006_38046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (1))){
var state_38002__$1 = state_38002;
var statearr_38007_38047 = state_38002__$1;
(statearr_38007_38047[(2)] = null);

(statearr_38007_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (4))){
var inst_37943 = (state_38002[(13)]);
var inst_37943__$1 = (state_38002[(2)]);
var inst_37944 = (inst_37943__$1 == null);
var state_38002__$1 = (function (){var statearr_38008 = state_38002;
(statearr_38008[(13)] = inst_37943__$1);

return statearr_38008;
})();
if(cljs.core.truth_(inst_37944)){
var statearr_38009_38048 = state_38002__$1;
(statearr_38009_38048[(1)] = (5));

} else {
var statearr_38010_38049 = state_38002__$1;
(statearr_38010_38049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (15))){
var state_38002__$1 = state_38002;
var statearr_38014_38050 = state_38002__$1;
(statearr_38014_38050[(2)] = null);

(statearr_38014_38050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (21))){
var state_38002__$1 = state_38002;
var statearr_38015_38051 = state_38002__$1;
(statearr_38015_38051[(2)] = null);

(statearr_38015_38051[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (13))){
var inst_37957 = (state_38002[(9)]);
var inst_37955 = (state_38002[(10)]);
var inst_37954 = (state_38002[(11)]);
var inst_37956 = (state_38002[(12)]);
var inst_37964 = (state_38002[(2)]);
var inst_37965 = (inst_37957 + (1));
var tmp38011 = inst_37955;
var tmp38012 = inst_37954;
var tmp38013 = inst_37956;
var inst_37954__$1 = tmp38012;
var inst_37955__$1 = tmp38011;
var inst_37956__$1 = tmp38013;
var inst_37957__$1 = inst_37965;
var state_38002__$1 = (function (){var statearr_38016 = state_38002;
(statearr_38016[(14)] = inst_37964);

(statearr_38016[(9)] = inst_37957__$1);

(statearr_38016[(10)] = inst_37955__$1);

(statearr_38016[(11)] = inst_37954__$1);

(statearr_38016[(12)] = inst_37956__$1);

return statearr_38016;
})();
var statearr_38017_38052 = state_38002__$1;
(statearr_38017_38052[(2)] = null);

(statearr_38017_38052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (22))){
var state_38002__$1 = state_38002;
var statearr_38018_38053 = state_38002__$1;
(statearr_38018_38053[(2)] = null);

(statearr_38018_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (6))){
var inst_37943 = (state_38002[(13)]);
var inst_37952 = f.call(null,inst_37943);
var inst_37953 = cljs.core.seq.call(null,inst_37952);
var inst_37954 = inst_37953;
var inst_37955 = null;
var inst_37956 = (0);
var inst_37957 = (0);
var state_38002__$1 = (function (){var statearr_38019 = state_38002;
(statearr_38019[(9)] = inst_37957);

(statearr_38019[(10)] = inst_37955);

(statearr_38019[(11)] = inst_37954);

(statearr_38019[(12)] = inst_37956);

return statearr_38019;
})();
var statearr_38020_38054 = state_38002__$1;
(statearr_38020_38054[(2)] = null);

(statearr_38020_38054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (17))){
var inst_37968 = (state_38002[(7)]);
var inst_37972 = cljs.core.chunk_first.call(null,inst_37968);
var inst_37973 = cljs.core.chunk_rest.call(null,inst_37968);
var inst_37974 = cljs.core.count.call(null,inst_37972);
var inst_37954 = inst_37973;
var inst_37955 = inst_37972;
var inst_37956 = inst_37974;
var inst_37957 = (0);
var state_38002__$1 = (function (){var statearr_38021 = state_38002;
(statearr_38021[(9)] = inst_37957);

(statearr_38021[(10)] = inst_37955);

(statearr_38021[(11)] = inst_37954);

(statearr_38021[(12)] = inst_37956);

return statearr_38021;
})();
var statearr_38022_38055 = state_38002__$1;
(statearr_38022_38055[(2)] = null);

(statearr_38022_38055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (3))){
var inst_38000 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38002__$1,inst_38000);
} else {
if((state_val_38003 === (12))){
var inst_37988 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38023_38056 = state_38002__$1;
(statearr_38023_38056[(2)] = inst_37988);

(statearr_38023_38056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (2))){
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38002__$1,(4),in$);
} else {
if((state_val_38003 === (23))){
var inst_37996 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38024_38057 = state_38002__$1;
(statearr_38024_38057[(2)] = inst_37996);

(statearr_38024_38057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (19))){
var inst_37983 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38025_38058 = state_38002__$1;
(statearr_38025_38058[(2)] = inst_37983);

(statearr_38025_38058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (11))){
var inst_37968 = (state_38002[(7)]);
var inst_37954 = (state_38002[(11)]);
var inst_37968__$1 = cljs.core.seq.call(null,inst_37954);
var state_38002__$1 = (function (){var statearr_38026 = state_38002;
(statearr_38026[(7)] = inst_37968__$1);

return statearr_38026;
})();
if(inst_37968__$1){
var statearr_38027_38059 = state_38002__$1;
(statearr_38027_38059[(1)] = (14));

} else {
var statearr_38028_38060 = state_38002__$1;
(statearr_38028_38060[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (9))){
var inst_37990 = (state_38002[(2)]);
var inst_37991 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38002__$1 = (function (){var statearr_38029 = state_38002;
(statearr_38029[(15)] = inst_37990);

return statearr_38029;
})();
if(cljs.core.truth_(inst_37991)){
var statearr_38030_38061 = state_38002__$1;
(statearr_38030_38061[(1)] = (21));

} else {
var statearr_38031_38062 = state_38002__$1;
(statearr_38031_38062[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (5))){
var inst_37946 = cljs.core.async.close_BANG_.call(null,out);
var state_38002__$1 = state_38002;
var statearr_38032_38063 = state_38002__$1;
(statearr_38032_38063[(2)] = inst_37946);

(statearr_38032_38063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (14))){
var inst_37968 = (state_38002[(7)]);
var inst_37970 = cljs.core.chunked_seq_QMARK_.call(null,inst_37968);
var state_38002__$1 = state_38002;
if(inst_37970){
var statearr_38033_38064 = state_38002__$1;
(statearr_38033_38064[(1)] = (17));

} else {
var statearr_38034_38065 = state_38002__$1;
(statearr_38034_38065[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (16))){
var inst_37986 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38035_38066 = state_38002__$1;
(statearr_38035_38066[(2)] = inst_37986);

(statearr_38035_38066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (10))){
var inst_37957 = (state_38002[(9)]);
var inst_37955 = (state_38002[(10)]);
var inst_37962 = cljs.core._nth.call(null,inst_37955,inst_37957);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38002__$1,(13),out,inst_37962);
} else {
if((state_val_38003 === (18))){
var inst_37968 = (state_38002[(7)]);
var inst_37977 = cljs.core.first.call(null,inst_37968);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38002__$1,(20),out,inst_37977);
} else {
if((state_val_38003 === (8))){
var inst_37957 = (state_38002[(9)]);
var inst_37956 = (state_38002[(12)]);
var inst_37959 = (inst_37957 < inst_37956);
var inst_37960 = inst_37959;
var state_38002__$1 = state_38002;
if(cljs.core.truth_(inst_37960)){
var statearr_38036_38067 = state_38002__$1;
(statearr_38036_38067[(1)] = (10));

} else {
var statearr_38037_38068 = state_38002__$1;
(statearr_38037_38068[(1)] = (11));

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
});})(c__29552__auto__))
;
return ((function (switch__29490__auto__,c__29552__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____0 = (function (){
var statearr_38041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38041[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__);

(statearr_38041[(1)] = (1));

return statearr_38041;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____1 = (function (state_38002){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_38002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e38042){if((e38042 instanceof Object)){
var ex__29494__auto__ = e38042;
var statearr_38043_38069 = state_38002;
(statearr_38043_38069[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38070 = state_38002;
state_38002 = G__38070;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__ = function(state_38002){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____1.call(this,state_38002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29491__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto__))
})();
var state__29554__auto__ = (function (){var statearr_38044 = f__29553__auto__.call(null);
(statearr_38044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto__);

return statearr_38044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto__))
);

return c__29552__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__38072 = arguments.length;
switch (G__38072) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__38075 = arguments.length;
switch (G__38075) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__38078 = arguments.length;
switch (G__38078) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___38128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___38128,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___38128,out){
return (function (state_38102){
var state_val_38103 = (state_38102[(1)]);
if((state_val_38103 === (7))){
var inst_38097 = (state_38102[(2)]);
var state_38102__$1 = state_38102;
var statearr_38104_38129 = state_38102__$1;
(statearr_38104_38129[(2)] = inst_38097);

(statearr_38104_38129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (1))){
var inst_38079 = null;
var state_38102__$1 = (function (){var statearr_38105 = state_38102;
(statearr_38105[(7)] = inst_38079);

return statearr_38105;
})();
var statearr_38106_38130 = state_38102__$1;
(statearr_38106_38130[(2)] = null);

(statearr_38106_38130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (4))){
var inst_38082 = (state_38102[(8)]);
var inst_38082__$1 = (state_38102[(2)]);
var inst_38083 = (inst_38082__$1 == null);
var inst_38084 = cljs.core.not.call(null,inst_38083);
var state_38102__$1 = (function (){var statearr_38107 = state_38102;
(statearr_38107[(8)] = inst_38082__$1);

return statearr_38107;
})();
if(inst_38084){
var statearr_38108_38131 = state_38102__$1;
(statearr_38108_38131[(1)] = (5));

} else {
var statearr_38109_38132 = state_38102__$1;
(statearr_38109_38132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (6))){
var state_38102__$1 = state_38102;
var statearr_38110_38133 = state_38102__$1;
(statearr_38110_38133[(2)] = null);

(statearr_38110_38133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (3))){
var inst_38099 = (state_38102[(2)]);
var inst_38100 = cljs.core.async.close_BANG_.call(null,out);
var state_38102__$1 = (function (){var statearr_38111 = state_38102;
(statearr_38111[(9)] = inst_38099);

return statearr_38111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38102__$1,inst_38100);
} else {
if((state_val_38103 === (2))){
var state_38102__$1 = state_38102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38102__$1,(4),ch);
} else {
if((state_val_38103 === (11))){
var inst_38082 = (state_38102[(8)]);
var inst_38091 = (state_38102[(2)]);
var inst_38079 = inst_38082;
var state_38102__$1 = (function (){var statearr_38112 = state_38102;
(statearr_38112[(10)] = inst_38091);

(statearr_38112[(7)] = inst_38079);

return statearr_38112;
})();
var statearr_38113_38134 = state_38102__$1;
(statearr_38113_38134[(2)] = null);

(statearr_38113_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (9))){
var inst_38082 = (state_38102[(8)]);
var state_38102__$1 = state_38102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38102__$1,(11),out,inst_38082);
} else {
if((state_val_38103 === (5))){
var inst_38082 = (state_38102[(8)]);
var inst_38079 = (state_38102[(7)]);
var inst_38086 = cljs.core._EQ_.call(null,inst_38082,inst_38079);
var state_38102__$1 = state_38102;
if(inst_38086){
var statearr_38115_38135 = state_38102__$1;
(statearr_38115_38135[(1)] = (8));

} else {
var statearr_38116_38136 = state_38102__$1;
(statearr_38116_38136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (10))){
var inst_38094 = (state_38102[(2)]);
var state_38102__$1 = state_38102;
var statearr_38117_38137 = state_38102__$1;
(statearr_38117_38137[(2)] = inst_38094);

(statearr_38117_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38103 === (8))){
var inst_38079 = (state_38102[(7)]);
var tmp38114 = inst_38079;
var inst_38079__$1 = tmp38114;
var state_38102__$1 = (function (){var statearr_38118 = state_38102;
(statearr_38118[(7)] = inst_38079__$1);

return statearr_38118;
})();
var statearr_38119_38138 = state_38102__$1;
(statearr_38119_38138[(2)] = null);

(statearr_38119_38138[(1)] = (2));


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
});})(c__29552__auto___38128,out))
;
return ((function (switch__29490__auto__,c__29552__auto___38128,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_38123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38123[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_38123[(1)] = (1));

return statearr_38123;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_38102){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_38102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e38124){if((e38124 instanceof Object)){
var ex__29494__auto__ = e38124;
var statearr_38125_38139 = state_38102;
(statearr_38125_38139[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38140 = state_38102;
state_38102 = G__38140;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_38102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_38102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___38128,out))
})();
var state__29554__auto__ = (function (){var statearr_38126 = f__29553__auto__.call(null);
(statearr_38126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___38128);

return statearr_38126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___38128,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__38142 = arguments.length;
switch (G__38142) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___38211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___38211,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___38211,out){
return (function (state_38180){
var state_val_38181 = (state_38180[(1)]);
if((state_val_38181 === (7))){
var inst_38176 = (state_38180[(2)]);
var state_38180__$1 = state_38180;
var statearr_38182_38212 = state_38180__$1;
(statearr_38182_38212[(2)] = inst_38176);

(statearr_38182_38212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (1))){
var inst_38143 = (new Array(n));
var inst_38144 = inst_38143;
var inst_38145 = (0);
var state_38180__$1 = (function (){var statearr_38183 = state_38180;
(statearr_38183[(7)] = inst_38145);

(statearr_38183[(8)] = inst_38144);

return statearr_38183;
})();
var statearr_38184_38213 = state_38180__$1;
(statearr_38184_38213[(2)] = null);

(statearr_38184_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (4))){
var inst_38148 = (state_38180[(9)]);
var inst_38148__$1 = (state_38180[(2)]);
var inst_38149 = (inst_38148__$1 == null);
var inst_38150 = cljs.core.not.call(null,inst_38149);
var state_38180__$1 = (function (){var statearr_38185 = state_38180;
(statearr_38185[(9)] = inst_38148__$1);

return statearr_38185;
})();
if(inst_38150){
var statearr_38186_38214 = state_38180__$1;
(statearr_38186_38214[(1)] = (5));

} else {
var statearr_38187_38215 = state_38180__$1;
(statearr_38187_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (15))){
var inst_38170 = (state_38180[(2)]);
var state_38180__$1 = state_38180;
var statearr_38188_38216 = state_38180__$1;
(statearr_38188_38216[(2)] = inst_38170);

(statearr_38188_38216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (13))){
var state_38180__$1 = state_38180;
var statearr_38189_38217 = state_38180__$1;
(statearr_38189_38217[(2)] = null);

(statearr_38189_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (6))){
var inst_38145 = (state_38180[(7)]);
var inst_38166 = (inst_38145 > (0));
var state_38180__$1 = state_38180;
if(cljs.core.truth_(inst_38166)){
var statearr_38190_38218 = state_38180__$1;
(statearr_38190_38218[(1)] = (12));

} else {
var statearr_38191_38219 = state_38180__$1;
(statearr_38191_38219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (3))){
var inst_38178 = (state_38180[(2)]);
var state_38180__$1 = state_38180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38180__$1,inst_38178);
} else {
if((state_val_38181 === (12))){
var inst_38144 = (state_38180[(8)]);
var inst_38168 = cljs.core.vec.call(null,inst_38144);
var state_38180__$1 = state_38180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38180__$1,(15),out,inst_38168);
} else {
if((state_val_38181 === (2))){
var state_38180__$1 = state_38180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38180__$1,(4),ch);
} else {
if((state_val_38181 === (11))){
var inst_38160 = (state_38180[(2)]);
var inst_38161 = (new Array(n));
var inst_38144 = inst_38161;
var inst_38145 = (0);
var state_38180__$1 = (function (){var statearr_38192 = state_38180;
(statearr_38192[(7)] = inst_38145);

(statearr_38192[(10)] = inst_38160);

(statearr_38192[(8)] = inst_38144);

return statearr_38192;
})();
var statearr_38193_38220 = state_38180__$1;
(statearr_38193_38220[(2)] = null);

(statearr_38193_38220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (9))){
var inst_38144 = (state_38180[(8)]);
var inst_38158 = cljs.core.vec.call(null,inst_38144);
var state_38180__$1 = state_38180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38180__$1,(11),out,inst_38158);
} else {
if((state_val_38181 === (5))){
var inst_38145 = (state_38180[(7)]);
var inst_38153 = (state_38180[(11)]);
var inst_38144 = (state_38180[(8)]);
var inst_38148 = (state_38180[(9)]);
var inst_38152 = (inst_38144[inst_38145] = inst_38148);
var inst_38153__$1 = (inst_38145 + (1));
var inst_38154 = (inst_38153__$1 < n);
var state_38180__$1 = (function (){var statearr_38194 = state_38180;
(statearr_38194[(11)] = inst_38153__$1);

(statearr_38194[(12)] = inst_38152);

return statearr_38194;
})();
if(cljs.core.truth_(inst_38154)){
var statearr_38195_38221 = state_38180__$1;
(statearr_38195_38221[(1)] = (8));

} else {
var statearr_38196_38222 = state_38180__$1;
(statearr_38196_38222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (14))){
var inst_38173 = (state_38180[(2)]);
var inst_38174 = cljs.core.async.close_BANG_.call(null,out);
var state_38180__$1 = (function (){var statearr_38198 = state_38180;
(statearr_38198[(13)] = inst_38173);

return statearr_38198;
})();
var statearr_38199_38223 = state_38180__$1;
(statearr_38199_38223[(2)] = inst_38174);

(statearr_38199_38223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (10))){
var inst_38164 = (state_38180[(2)]);
var state_38180__$1 = state_38180;
var statearr_38200_38224 = state_38180__$1;
(statearr_38200_38224[(2)] = inst_38164);

(statearr_38200_38224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38181 === (8))){
var inst_38153 = (state_38180[(11)]);
var inst_38144 = (state_38180[(8)]);
var tmp38197 = inst_38144;
var inst_38144__$1 = tmp38197;
var inst_38145 = inst_38153;
var state_38180__$1 = (function (){var statearr_38201 = state_38180;
(statearr_38201[(7)] = inst_38145);

(statearr_38201[(8)] = inst_38144__$1);

return statearr_38201;
})();
var statearr_38202_38225 = state_38180__$1;
(statearr_38202_38225[(2)] = null);

(statearr_38202_38225[(1)] = (2));


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
});})(c__29552__auto___38211,out))
;
return ((function (switch__29490__auto__,c__29552__auto___38211,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_38206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38206[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_38206[(1)] = (1));

return statearr_38206;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_38180){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_38180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e38207){if((e38207 instanceof Object)){
var ex__29494__auto__ = e38207;
var statearr_38208_38226 = state_38180;
(statearr_38208_38226[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38227 = state_38180;
state_38180 = G__38227;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_38180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_38180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___38211,out))
})();
var state__29554__auto__ = (function (){var statearr_38209 = f__29553__auto__.call(null);
(statearr_38209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___38211);

return statearr_38209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___38211,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__38229 = arguments.length;
switch (G__38229) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29552__auto___38302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29552__auto___38302,out){
return (function (){
var f__29553__auto__ = (function (){var switch__29490__auto__ = ((function (c__29552__auto___38302,out){
return (function (state_38271){
var state_val_38272 = (state_38271[(1)]);
if((state_val_38272 === (7))){
var inst_38267 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38273_38303 = state_38271__$1;
(statearr_38273_38303[(2)] = inst_38267);

(statearr_38273_38303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (1))){
var inst_38230 = [];
var inst_38231 = inst_38230;
var inst_38232 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38271__$1 = (function (){var statearr_38274 = state_38271;
(statearr_38274[(7)] = inst_38231);

(statearr_38274[(8)] = inst_38232);

return statearr_38274;
})();
var statearr_38275_38304 = state_38271__$1;
(statearr_38275_38304[(2)] = null);

(statearr_38275_38304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (4))){
var inst_38235 = (state_38271[(9)]);
var inst_38235__$1 = (state_38271[(2)]);
var inst_38236 = (inst_38235__$1 == null);
var inst_38237 = cljs.core.not.call(null,inst_38236);
var state_38271__$1 = (function (){var statearr_38276 = state_38271;
(statearr_38276[(9)] = inst_38235__$1);

return statearr_38276;
})();
if(inst_38237){
var statearr_38277_38305 = state_38271__$1;
(statearr_38277_38305[(1)] = (5));

} else {
var statearr_38278_38306 = state_38271__$1;
(statearr_38278_38306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (15))){
var inst_38261 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38279_38307 = state_38271__$1;
(statearr_38279_38307[(2)] = inst_38261);

(statearr_38279_38307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (13))){
var state_38271__$1 = state_38271;
var statearr_38280_38308 = state_38271__$1;
(statearr_38280_38308[(2)] = null);

(statearr_38280_38308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (6))){
var inst_38231 = (state_38271[(7)]);
var inst_38256 = inst_38231.length;
var inst_38257 = (inst_38256 > (0));
var state_38271__$1 = state_38271;
if(cljs.core.truth_(inst_38257)){
var statearr_38281_38309 = state_38271__$1;
(statearr_38281_38309[(1)] = (12));

} else {
var statearr_38282_38310 = state_38271__$1;
(statearr_38282_38310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (3))){
var inst_38269 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38271__$1,inst_38269);
} else {
if((state_val_38272 === (12))){
var inst_38231 = (state_38271[(7)]);
var inst_38259 = cljs.core.vec.call(null,inst_38231);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38271__$1,(15),out,inst_38259);
} else {
if((state_val_38272 === (2))){
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(4),ch);
} else {
if((state_val_38272 === (11))){
var inst_38235 = (state_38271[(9)]);
var inst_38239 = (state_38271[(10)]);
var inst_38249 = (state_38271[(2)]);
var inst_38250 = [];
var inst_38251 = inst_38250.push(inst_38235);
var inst_38231 = inst_38250;
var inst_38232 = inst_38239;
var state_38271__$1 = (function (){var statearr_38283 = state_38271;
(statearr_38283[(11)] = inst_38251);

(statearr_38283[(7)] = inst_38231);

(statearr_38283[(8)] = inst_38232);

(statearr_38283[(12)] = inst_38249);

return statearr_38283;
})();
var statearr_38284_38311 = state_38271__$1;
(statearr_38284_38311[(2)] = null);

(statearr_38284_38311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (9))){
var inst_38231 = (state_38271[(7)]);
var inst_38247 = cljs.core.vec.call(null,inst_38231);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38271__$1,(11),out,inst_38247);
} else {
if((state_val_38272 === (5))){
var inst_38235 = (state_38271[(9)]);
var inst_38239 = (state_38271[(10)]);
var inst_38232 = (state_38271[(8)]);
var inst_38239__$1 = f.call(null,inst_38235);
var inst_38240 = cljs.core._EQ_.call(null,inst_38239__$1,inst_38232);
var inst_38241 = cljs.core.keyword_identical_QMARK_.call(null,inst_38232,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38242 = (inst_38240) || (inst_38241);
var state_38271__$1 = (function (){var statearr_38285 = state_38271;
(statearr_38285[(10)] = inst_38239__$1);

return statearr_38285;
})();
if(cljs.core.truth_(inst_38242)){
var statearr_38286_38312 = state_38271__$1;
(statearr_38286_38312[(1)] = (8));

} else {
var statearr_38287_38313 = state_38271__$1;
(statearr_38287_38313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (14))){
var inst_38264 = (state_38271[(2)]);
var inst_38265 = cljs.core.async.close_BANG_.call(null,out);
var state_38271__$1 = (function (){var statearr_38289 = state_38271;
(statearr_38289[(13)] = inst_38264);

return statearr_38289;
})();
var statearr_38290_38314 = state_38271__$1;
(statearr_38290_38314[(2)] = inst_38265);

(statearr_38290_38314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (10))){
var inst_38254 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38291_38315 = state_38271__$1;
(statearr_38291_38315[(2)] = inst_38254);

(statearr_38291_38315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (8))){
var inst_38235 = (state_38271[(9)]);
var inst_38239 = (state_38271[(10)]);
var inst_38231 = (state_38271[(7)]);
var inst_38244 = inst_38231.push(inst_38235);
var tmp38288 = inst_38231;
var inst_38231__$1 = tmp38288;
var inst_38232 = inst_38239;
var state_38271__$1 = (function (){var statearr_38292 = state_38271;
(statearr_38292[(14)] = inst_38244);

(statearr_38292[(7)] = inst_38231__$1);

(statearr_38292[(8)] = inst_38232);

return statearr_38292;
})();
var statearr_38293_38316 = state_38271__$1;
(statearr_38293_38316[(2)] = null);

(statearr_38293_38316[(1)] = (2));


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
});})(c__29552__auto___38302,out))
;
return ((function (switch__29490__auto__,c__29552__auto___38302,out){
return (function() {
var cljs$core$async$state_machine__29491__auto__ = null;
var cljs$core$async$state_machine__29491__auto____0 = (function (){
var statearr_38297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38297[(0)] = cljs$core$async$state_machine__29491__auto__);

(statearr_38297[(1)] = (1));

return statearr_38297;
});
var cljs$core$async$state_machine__29491__auto____1 = (function (state_38271){
while(true){
var ret_value__29492__auto__ = (function (){try{while(true){
var result__29493__auto__ = switch__29490__auto__.call(null,state_38271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29493__auto__;
}
break;
}
}catch (e38298){if((e38298 instanceof Object)){
var ex__29494__auto__ = e38298;
var statearr_38299_38317 = state_38271;
(statearr_38299_38317[(5)] = ex__29494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38318 = state_38271;
state_38271 = G__38318;
continue;
} else {
return ret_value__29492__auto__;
}
break;
}
});
cljs$core$async$state_machine__29491__auto__ = function(state_38271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29491__auto____1.call(this,state_38271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29491__auto____0;
cljs$core$async$state_machine__29491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29491__auto____1;
return cljs$core$async$state_machine__29491__auto__;
})()
;})(switch__29490__auto__,c__29552__auto___38302,out))
})();
var state__29554__auto__ = (function (){var statearr_38300 = f__29553__auto__.call(null);
(statearr_38300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29552__auto___38302);

return statearr_38300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29554__auto__);
});})(c__29552__auto___38302,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
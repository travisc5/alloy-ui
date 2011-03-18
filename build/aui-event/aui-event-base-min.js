AUI.add("aui-event-base",function(a){var e=a.Lang,d=a.Array,g=a.DOMEventFacade,b=g.prototype,f=a.namespace("Event.KeyMap"),c="";var f={BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,WIN_KEY:224,WIN_IME:229,hasModifier:function(i){var h=this;return i&&(i.ctrlKey||i.altKey||i.shiftKey||i.metaKey);},isKey:function(k,i){var h=this;i=(i&&i.toUpperCase())||c;var j=h[i];return j&&j==k;},isKeyInRange:function(m,n,j){var i=this;n=n&&n.toUpperCase();j=j&&j.toUpperCase();var h=false;if(n&&j){var l=i[n];var k=i[j];h=l&&k&&(m>=l&&m<=k);}return h;},isKeyInSet:function(k,j){var h=this;var i=d(arguments,1,true);return h._isKeyInSet(k,i);},isNavKey:function(i){var h=this;return h.isKeyInRange(i,"PAGE_UP","DOWN")||h.isKeyInSet(i,"ENTER","TAB","ESC");},isSpecialKey:function(j,i){var h=this;var k=(i=="keypress"&&h.ctrlKey);return k||h.isNavKey(j)||h.isKeyInRange(j,"SHIFT","CAPS_LOCK")||h.isKeyInSet(j,"BACKSPACE","PRINT_SCREEN","INSERT","WIN_IME");},_isKeyInSet:function(p,k){var j=this;var n=k.length;var h=false;var o;var m;var l=String.toUpperCase;while(n--){o=l(k[n]);m=o&&j[o];if(p==m){h=true;break;}}return h;}};a.mix(b,{hasModifier:function(){var h=this;return f.hasModifier(h);},isKey:function(i){var h=this;return f.isKey(h.keyCode,i);},isKeyInRange:function(j,i){var h=this;return f.isKeyInRange(h.keyCode,j,i);},isKeyInSet:function(){var h=this;var i=d(arguments,0,true);return f._isKeyInSet(h.keyCode,i);},isNavKey:function(){var h=this;return f.isNavKey(h.keyCode);},isSpecialKey:function(){var h=this;return f.isSpecialKey(h.keyCode,h.type);}});a.Event.KeyMap=f;},"@VERSION@",{requires:["event"]});
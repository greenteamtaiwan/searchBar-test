(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],n[i]&&p.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/searchBar-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i={name:"App"},c=i,o=(a("034f"),a("2877")),l=Object(o["a"])(c,n,s,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"search-wrapper"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.search.type,expression:"search.type"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.search,"type",t.target.multiple?a:a[0])},e.getfilteredData]}},[a("option",{attrs:{value:""}},[e._v("全部類別")]),e._l(e.typesWholeList,function(t,r){return a("option",{key:r},[e._v(e._s(t))])})],2)]),a("div",{attrs:{id:"checkboxes"}},e._l(e.tagWholeList,function(t,r){return a("div",{key:r,staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"stack.checked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(a){var r=t.checked,n=a.target,s=!!n.checked;if(Array.isArray(r)){var i=null,c=e._i(r,i);n.checked?c<0&&e.$set(t,"checked",r.concat([i])):c>-1&&e.$set(t,"checked",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(t,"checked",s)},e.getfilteredData]}}),a("label",{staticClass:"form-check-label"},[e._v("\n\t\t\t\t\t\t    "+e._s(t.value)+"\n\t\t\t\t    \t")])])}),0),a("div",{staticClass:"col-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.word,expression:"search.word"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter key word  ..."},domProps:{value:e.search.word},on:{keyup:e.getfilteredData,input:function(t){t.target.composing||e.$set(e.search,"word",t.target.value)}}})]),e._m(0)])]),a("div",{staticClass:"card-columns"},e._l(e.filteredData,function(e,t){return a("item-card",{key:t,attrs:{item:e}})}),1)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-search"})])])}],h=(a("7f7f"),a("386d"),a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card p-3"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:e.item.logo,width:"100",alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.item.name)+" ")])]),a("div",e._l(e.item.stack,function(t,r){return a("span",{key:r,class:"badge badge-"+e.tags[t]},[e._v(e._s(t))])}),0)])])}),g=[],m={data:function(){return{tags:{tag4:"info",tag3:"warning",backend:"danger",tag1_Unpackaged:"success",tag2_ZeroWaste:"secondary",hybrid:"info",database:"danger"}}},props:{item:{type:Object,required:!0}}},v=m,k=Object(o["a"])(v,h,g,!1,null,null,null),_=k.exports,y=[{address:"台中市中區三民路二段18巷6號",business_time:"請注意粉絲頁",latitude:24.1422103,longitude:120.6589805,name:"七喜廚房",phone:"04-22211700",remark:"源於七喜廚房，以續食推動零廢棄生活的實驗性聚落，希望在都市當中人與廢棄物共生的系統，讓萬物與人一樣沒有所謂的剩餘。",type:"food_share",url:"https://www.facebook.com/7upkitchen/\nhttps://www.7ckitchen.com",logo:"https://i.imgur.com/OiSniLG.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste","tag3","tag4"]},{address:"108台北市萬華區中華路二段334號",business_time:"每週四1130~1300市場惜食分享, 每週五1500~1800共煮送餐交流",latitude:25.0989537,longitude:121.5081786,name:"南機拌飯",phone:"0963 615 016",remark:"",type:"free_shop",url:"https://www.facebook.com/NanjiRice/",logo:"https://i.imgur.com/YGKTNkA.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste","tag3"]},{address:"950台東縣台東市漢陽北路169巷64弄26號",business_time:"",latitude:22.74739,longitude:121.132759,name:"迷走。回家旅人空間",phone:989360055,remark:"",shop_type:"",type:"food_share",url:"https://www.facebook.com/lostandfoundtaitung/\nhttps://jtwagor.wixsite.com/lostandfoundtaitung",logo:"https://i.imgur.com/OiSniLG.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste"]},{address:"300新竹市東區光復路二段101號清華大學風雲樓一樓水木書苑內",business_time:"週二~周日1000~1800",latitude:24.792323,longitude:120.9950025,name:"水木咖啡 * 小客廳",phone:"03 572 3474",remark:"",type:"",url:"https://www.facebook.com/%E6%B0%B4%E6%9C%A8%E5%92%96%E5%95%A1-x-%E5%B0%8F%E5%AE%A2%E5%BB%B3-The-Living-Room-645497232164723/",logo:"https://i.imgur.com/YGKTNkA.jpg",stack:["tag1_Unpackaged"]}],w=y,b={name:"SearchPage",components:{"item-card":_},computed:{selectedTags:function(){var e=[],t=this.tagWholeList.filter(function(e){return e.checked});return t.forEach(function(t){e.push(t.value)}),e}},data:function(){return{filteredData:[],search:{word:"",type:"",tags:""},typesWholeList:["food_share","free_shop"],tagWholeList:[{checked:!1,value:"tag1_Unpackaged"},{checked:!1,value:"tag2_ZeroWaste"},{checked:!1,value:"tag3"},{checked:!1,value:"tag4"}]}},methods:{getfilteredData:function(){var e=this;this.filteredData=w;var t=[],a=[],r=[],n=this.search.type;""!==n&&(t=this.filteredData.filter(function(e){return e.type===n}),this.filteredData=t),this.selectedTags.length>0&&(a=this.filteredData.filter(function(t){return e.selectedTags.every(function(e){return t.stack.indexOf(e)>=0})}),this.filteredData=a),""!==this.search.word&&(r=this.filteredData.filter(function(t){return-1!==t.name.indexOf(e.search.word.toLowerCase())}),this.filteredData=r)}},mounted:function(){this.getfilteredData()}},C=b,x=Object(o["a"])(C,p,f,!1,null,null,null),j=x.exports;r["a"].use(d["a"]);var O=new d["a"]({routes:[{path:"/",name:"SearchPage",component:j}]});r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,a){}});
//# sourceMappingURL=app.760f11e6.js.map
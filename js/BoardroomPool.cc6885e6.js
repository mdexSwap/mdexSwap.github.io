(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BoardroomPool"],{"0690":function(t,a,e){},"4a8e":function(t,a,e){"use strict";e("0690")},"857a":function(t,a,e){var s=e("1d80"),i=/"/g;t.exports=function(t,a,e,n){var o=String(s(t)),r="<"+a;return""!==e&&(r+=" "+e+'="'+String(n).replace(i,"&quot;")+'"'),r+">"+o+"</"+a+">"}},"8c4e":function(t,a,e){"use strict";e("f911")},9911:function(t,a,e){"use strict";var s=e("23e7"),i=e("857a"),n=e("af03");s({target:"String",proto:!0,forced:n("link")},{link:function(t){return i(this,"a","href",t)}})},a2d0:function(t,a,e){},aa95:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-banner",class:t.chainName},[e("div",{directives:[{name:"show",rawName:"v-show",value:"/"==t.routerName,expression:"routerName=='/'"}],staticClass:"heco-home"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("p",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName=='/liquidity'"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("div",{staticClass:"act-title"},[e("p",[t._v(" "+t._s(t.$t("LiquidityMining")))]),e("p")]),e("div",{staticClass:"li-title",on:{click:t.h5_tab_evens}},[e("span",[t._v(" "+t._s(t.$t("TradePool"))+" ")])])]),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[t._v(" "+t._s(t.$t("TotalLockIn"))+"(USDT) ")]),e("div",{staticClass:"banner-sum"},[e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName=='/trading'"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("div",{staticClass:"li-title",on:{click:t.h5_tab_li_evens}},[e("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining"},[e("p",[t._v(" "+t._s(t.$t("TradePool")))]),e("p")])]),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool")))]),e("p",[e("CountUp",{attrs:{endVal:t.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),e("div",[e("p",[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),e("p",[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),e("div",{staticClass:"ban-center "},[e("button",{staticClass:"new-banner-btn-dra",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName=='/boardroom'"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerName,expression:"routerName=='/bridge'"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:"BoardroomPool"==t.getRoute,expression:"'BoardroomPool'==getRoute"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerName,expression:"routerName==='/introduce'"}]},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():e("div",[e("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():e("div",[e("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])])])},i=[],n=(e("ac1f"),e("466d"),e("a9e3"),e("b0c0"),e("5319"),{name:"HomeBanner",data:function(){return{userReward:0,onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{getRoute:function(){return this.$route.name},isPC:function(){return this.$store.getters.isPC},routerName:function(){return this.$store.state.routerName},chainName:function(){return this.$store.state.chainName},chainId:function(){return this.$store.getters.chainId},bannerName:function(){var t="en"==this.$store.state.language?" Bsc-home-en":"Bsc-home-zh-CN";return"/"==this.routerName&&"Bsc"==this.chainName?t:this.chainName}},mounted:function(){var t=this;window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{h5_tab_li_evens:function(){this.$router.replace({path:"/liquidity"})},h5_tab_evens:function(){this.$router.replace({path:"/trading"})},onWithdrawal:function(){this.$emit("on-withdrawal")},goHomeUrl:function(){if("Bsc"==this.chainName&&"/"==this.routerName){var t="zh-CN"==this.$store.state.language?"https://mdexcom.zendesk.com/hc/zh-cn/articles/360059672551":"https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";window.open(t)}}}}),o=n,r=(e("f306"),e("2877")),c=Object(r["a"])(o,s,i,!1,null,"7b502849",null);a["a"]=c.exports},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b0f8:function(t,a,e){"use strict";e("e934")},bf1f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=this,s=a.$createElement,i=a._self._c||s;return i("div",{staticClass:"boardroom-pool",class:a.chainName},[i("title-banner"),i("div",{staticClass:"boardroom-pool__content"},[i("div",{staticClass:"boardroom-pool__cards"},[i("div",{staticClass:"boardroom-pool__content-card"},[i("div",{staticClass:"pool__card-icon"},[i("img",{attrs:{src:a.getImgUrl(a.poolData.earnedToken),alt:""}}),a.isMobile?i("div",{staticClass:"pool__card-buttons"},[i("button",{staticClass:"claim",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.handleClaim}},[a._v(" "+a._s(a.$t("Claim"))+" ")])]):a._e()]),i("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.earnedToken||"MDX")+" "+a._s(a.$t("Earneds"))+" ")]),i("div",{staticClass:"pool__card-price"},[a._v(" "+a._s(Math.floor(1e4*a.earn)/1e4)+" ")]),a.isPC?i("div",{staticClass:"pool__card-buttons"},[i("button",{staticClass:"claim",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.handleClaim}},[a._v(" "+a._s(a.$t("Claim"))+" ")])]):a._e(),i("p",{directives:[{name:"show",rawName:"v-show",value:"boardroom"==a.poolData.type&&128==a.chainId,expression:"poolData.type == 'boardroom' && chainId == 128"}],staticClass:"addToken",on:{click:function(t){return a.addToken(a.poolData)}}},[i("img",{attrs:{src:e("d07f")}}),a._v(" "+a._s(a.$t("addToken.text",{token:a.poolData.earnedToken})))])]),i("div",{staticClass:"boardroom-pool__content-card"},[i("img",{attrs:{src:a.getLpImgUrl(a.poolData),alt:"",height:"50"}}),a.isMobile?i("div",{staticClass:"pool__card-buttons"},[0==a.allowance&&a.account?i("button",{staticClass:"connect",on:{click:a.handleApprove}},[a._v(" "+a._s(a.$t("Approve"))+" ")]):a._e(),a.account?a._e():i("button",{staticClass:"connect",on:{click:a.handleWallet}},[a._v(" "+a._s(a.$t("UnlockWallet"))+" ")]),a.allowance>0&&a.account?i("div",{staticClass:"pool__card-step-warp line_bg"},[i("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.withdraw.showModel()}}},[a._v(" - ")]),i("div",{staticClass:"line_middel"}),"liquidity"==a.poolData.type&&(a.poolData.pid<8&&128==a.chainId||a.poolData.pid<28&&56==a.chainId)||"OLDHOO"==a.poolData.earned_token||"ZT"==a.poolData.earned_token||a.poolData.name.includes("ZT")?a._e():i("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.despoit.showModel()}}},[a._v(" + ")])]):a._e()]):a._e(),i("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.name)+" "+a._s(a.$t("Stakeds"))+" ")]),i("div",{staticClass:"pool__card-price"},[a._v(" "+a._s(Math.floor(1e4*a.stakedValue)/1e4)+" ")]),a.isPC?i("div",{staticClass:"pool__card-buttons"},[0==a.allowance&&a.account?i("button",{staticClass:"connect",on:{click:a.handleApprove}},[a._v(" "+a._s(a.$t("Approve"))+" ")]):a._e(),a.account?a._e():i("button",{staticClass:"connect",on:{click:a.handleWallet}},[a._v(" "+a._s(a.$t("UnlockWallet"))+" ")]),a.allowance>0&&a.account?i("div",{staticClass:"pool__card-step-warp"},[i("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.withdraw.showModel()}}},[a._v(" - ")]),"liquidity"==a.poolData.type&&(a.poolData.pid<8&&128==a.chainId||a.poolData.pid<28&&56==a.chainId)||"OLDHOO"==a.poolData.earned_token||a.poolData.name.includes("ZT")?a._e():i("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.despoit.showModel()}}},[a._v(" + ")])]):a._e()]):a._e()])]),a.isPC?i("div",{staticClass:"pool-settle-provide"},[i("button",{staticClass:"pool-settle",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.settle}},[a._v(" "+a._s(a.$t("SettleWithdraw"))+" ")]),i("a",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"pool-settle provide",attrs:{href:a.link,target:"_blank"}},[a._v(" "+a._s(a.$t("ProvideLiquidity"))+" ")])]):a._e(),a.isMobile?i("div",{staticClass:"pool-settle-provide line_disappear"},[i("div",{staticClass:"pool-settle button",class:[!a.earn||isNaN(a.earn)?" isDisabeld":""],on:{click:a.settle}},[a._v(" "+a._s(a.$t("SettleWithdraw"))+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"middel"}),i("div",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"right pool-settle provide"},[i("a",{staticClass:"pool-settle provide",attrs:{href:a.link,target:"_blank"}},[a._v(" "+a._s(a.$t("ProvideLiquidity"))+" ")])])]):a._e()]),i("Despoit",{ref:"despoit",attrs:{pid:a.poolData.pid,account:a.account,max:a.lpBalance,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}}),i("Withdraw",{ref:"withdraw",attrs:{pid:a.poolData.pid,account:a.account,max:a.stakedValue,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}})],1)},i=[],n=e("1da1"),o=e("5530"),r=(e("96cf"),e("a9e3"),e("7db0"),e("caad"),e("2532"),e("b0c0"),e("9911"),e("99af"),function(){var t=this,a=this,s=a.$createElement,i=a._self._c||s;return i("transition",{class:a.chainName,attrs:{name:"modal"}},[a.modelShow?i("div",{staticClass:"model"},[i("div",{staticClass:"model-wrap"},[i("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:a.hideModel}}),i("h3",[a._v(a._s(a.$t("Deposit"))+" "+a._s(a.data.name))]),i("div",{staticClass:"input-wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"value"}],attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}}),i("div",{staticClass:"button-wrap"},[i("button",{attrs:{disabled:!a.max},on:{click:function(){return t.setMax()}}},[a._v("MAX")])])]),i("p",[a._v(a._s(a.max)+" "+a._s(a.data.name)+" "+a._s(a.$t("Available")))]),i("div",{staticClass:"btn"},[i("div",{staticClass:"cancel",on:{click:this.hideModel}},[a._v(a._s(a.$t("Cancel")))]),i("button",{staticClass:"confirm",attrs:{disabled:!Number(a.value)||Number(a.value)>Number(a.max)},on:{click:a.despoit}},[a._v(" "+a._s(a.$t("Confirm"))+" ")])])])]):a._e()])}),c=[],l=(e("d3b7"),e("2f62")),d=null,u={name:"Despoit",data:function(){return{modelShow:!1,value:""}},props:["max","account","pid","data","erc20Utils"],computed:Object(o["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},despoit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,t.hideModel(),s="Despoit ".concat(t.value," ").concat(t.data.name),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),i.close();var e="".concat(s," Success");d=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="".concat(s," Error");d=t.$overalltip({type:"error",msg:e})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){d&&d.close()}},p=u,h=(e("8c4e"),e("2877")),v=Object(h["a"])(p,r,c,!1,null,"6f35db98",null),m=v.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{class:t.chainName,attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("h3",[t._v(t._s(t.$t("Withdraw"))+" "+t._s(t.data.name))]),s("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:t.hideModel}}),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||(t.value=a.target.value)}}}),s("div",{staticClass:"button-wrap"},[s("button",{attrs:{disabled:!t.max},on:{click:t.setMax}},[t._v("MAX")])])]),s("p",[t._v(t._s(t.max)+" "+t._s(t.data.name)+" "+t._s(t.$t("Available")))]),s("div",{staticClass:"btn"},[s("div",{staticClass:"cancel",on:{click:this.hideModel}},[t._v(t._s(t.$t("Cancel")))]),s("button",{staticClass:"confirm",attrs:{disabled:!Number(t.value)||Number(t.value)>Number(t.max)},on:{click:t.handelWithdrawl}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])])])]):t._e()])},f=[],b=null,C={name:"Withdraw",props:["max","account","pid","data","erc20Utils"],data:function(){return{modelShow:!1,value:""}},computed:Object(o["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),mounted:function(){},methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},handelWithdrawl:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.hideModel(),e="Withdrawl ".concat(t.value," ").concat(t.data.name),s=t.$overalltip({type:"loading",msg:e}),i=t.erc20Utils.unStake,i(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),s.close();var i="".concat(e," Success");b=t.$overalltip({type:"success",msg:i})})).catch((function(a){s.close();var i="".concat(e," Error");b=t.$overalltip({type:"error",msg:i})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){b&&b.close()}},w=C,g=(e("b0f8"),Object(h["a"])(w,_,f,!1,null,"66698610",null)),$=g.exports,k=e("4f22"),D=e("837b"),y=e("4027"),x=e("aa95"),N=null,M={name:"BoardroomPool",components:{Despoit:m,Withdraw:$,tipDialog:y["a"],TitleBanner:x["a"]},data:function(){return{stakedOptions:{decimalPlaces:4},link:""}},computed:{isPC:function(){return this.$store.getters.isPC},isMobile:function(){return this.$store.getters.isMobile},currentAddress:function(){return this.$store.getters.currentAddress},chainId:function(){return this.$store.getters.chainId},coinConfig:function(){return D["a"][this.chainId]},account:function(){return this.$store.state.boardRoom.account||this.$store.state.account.address},stakedValue:function(){return this.$store.state.boardRoom.stakedValue},earn:function(){return Number(this.$store.state.boardRoom.earn)},allowance:function(){return this.$store.state.boardRoom.allowance},lpBalance:function(){return this.$store.state.boardRoom.lpBalance},apylist:function(){return this.$store.state.liquidity.apylist},poolData:function(){var t=this.$route.params,a=t.type,e=t.earn,s=t.id;if("boardroom"==a){var i=this.$store.getters["boardRoom/currentChainBoardRoomData"][e],n=i.find((function(t){return t.pid==s}))||{};return n.name.includes(" LP")&&(this.link="https://".concat(56==this.chainId?"bsc":"ht",".mdex.com/#/add/").concat(n.token_main,"/").concat(n.token_sec,"?").concat(this.globalLanguage)),Object(o["a"])(Object(o["a"])({},n),{},{earn:e,type:a})}if("liquidity"==a){var r=this.$store.getters["liquidity/poolList"],c=r.find((function(t){return t.pid==s}))||{};if(this.apylist[c.pid]){var l=this.apylist[c.pid];l.pool_name.includes("/")&&(this.link="https://".concat(56==this.chainId?"bsc":"ht",".mdex.com/#/add/").concat(l.token0,"/").concat(l.token1,"?").concat(this.globalLanguage))}return Object(o["a"])(Object(o["a"])({},c),{},{earn:e,type:a})}},erc20Utils:function(){var t=this.$route.params,a=t.type,e=t.earn;return Object(k["f"])(this.$store.state.chainId,a,e)}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.$route.params.id,t.pid=e,t.updateData();case 3:case"end":return a.stop()}}),a)})))()},watch:{chainId:function(){this.updateData()}},methods:{getImgUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"MDX";return this.globalGetImgUrl(this.coinConfig[t.toLowerCase()])},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)},updateData:function(){this.$store.dispatch("boardRoom/getWalletData",this.poolData)},addToken:function(t){var a=18;"HOO"==t.earnedToken&&(a=8);var e=this.getImgUrl(t.earnedToken),s="boardroom"==t.type?t.earnedToken:"MDX";ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.coinConfig[s.toLowerCase()],symbol:s,decimals:a,image:e}}})},settle:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.unStake,s="Settle & Withdraw Tokens",i=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.stakedValue,t.account).then((function(a){t.updateData(),i.close();var e="".concat(s," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="".concat(s," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleWallet:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,window.ethereum.enable();case 2:t.updateData();case 3:case"end":return a.stop()}}),a)})))()},handleClaim:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,s="Claim ".concat(t.earn," ").concat(t.poolData.earn.toUpperCase()),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,0,t.account).then((function(a){t.updateData(),i.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleApprove:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i,n,o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils,s=e.approveToken,i=e.saveLocalAllowance,n=t.poolData.lpAddress,o="Approve ".concat(t.poolData.name),r=t.$overalltip({type:"loading",msg:o}),s(n,t.account).then((function(a){r.close(),i(n,t.account),t.updateData();var e="".concat(o," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){r.close();var e="".concat(o," Error");N=t.$overalltip({type:"error",msg:e})}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){N&&N.close()}},R=M,T=(e("4a8e"),Object(h["a"])(R,s,i,!1,null,"200d782b",null));a["default"]=T.exports},d07f:function(t,a,e){t.exports=e.p+"img/metamask-fox.c06f3a3e.svg"},e934:function(t,a,e){},f306:function(t,a,e){"use strict";e("a2d0")},f911:function(t,a,e){}}]);
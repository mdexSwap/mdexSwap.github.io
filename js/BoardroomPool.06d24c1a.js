(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BoardroomPool"],{"34b2":function(t,a,e){"use strict";e("5746")},5746:function(t,a,e){},6404:function(t,a,e){},"857a":function(t,a,e){var s=e("1d80"),n=/"/g;t.exports=function(t,a,e,i){var o=String(s(t)),r="<"+a;return""!==e&&(r+=" "+e+'="'+String(i).replace(n,"&quot;")+'"'),r+">"+o+"</"+a+">"}},9911:function(t,a,e){"use strict";var s=e("23e7"),n=e("857a"),i=e("af03");s({target:"String",proto:!0,forced:i("link")},{link:function(t){return n(this,"a","href",t)}})},ae34:function(t,a,e){"use strict";e("c6ca")},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b0f8:function(t,a,e){"use strict";e("e934")},bf1f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=this,s=a.$createElement,n=a._self._c||s;return n("div",{staticClass:"boardroom-pool",class:[a.chainName,a.getLanguage]},[n("title-banner"),n("div",{staticClass:"boardroom-pool__content text"},[n("div",{staticClass:"boardroom-pool__cards"},[n("div",{staticClass:"boardroom-pool__content-card"},[n("div",{staticClass:"pool__card-icon"},[n("img",{attrs:{src:a.getImgUrl(a.poolData.earnedToken),alt:""}}),a.isMobile?n("div",{staticClass:"pool__card-buttons"},[n("button",{staticClass:"claim",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.handleClaim}},[a._v(" "+a._s(a.$t("Claim"))+" ")])]):a._e()]),n("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.earnedToken||"MDX")+" "+a._s(a.$t("Earneds"))+" ")]),n("div",{staticClass:"pool__card-price numbers"},[a._v(" "+a._s(Math.floor(1e4*a.earn)/1e4)+" ")]),a.isPC?n("div",{staticClass:"pool__card-buttons"},[n("button",{staticClass:"claim",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.handleClaim}},[a._v(" "+a._s(a.$t("Claim"))+" ")])]):a._e(),n("p",{directives:[{name:"show",rawName:"v-show",value:"boardroom"==a.poolData.type&&128==a.chainId,expression:"poolData.type == 'boardroom' && chainId == 128"}],staticClass:"addToken",on:{click:function(t){return a.addToken(a.poolData)}}},[n("img",{attrs:{src:e("d07f")}}),a._v(" "+a._s(a.$t("addToken.text",{token:a.poolData.earnedToken})))])]),n("div",{staticClass:"boardroom-pool__content-card"},[n("img",{attrs:{src:a.getLpImgUrl(a.poolData),alt:"",height:"50"}}),a.isMobile?n("div",{staticClass:"pool__card-buttons"},[0==a.allowance&&a.account?n("button",{staticClass:"connect",on:{click:a.handleApprove}},[a._v(" "+a._s(a.$t("Approve"))+" ")]):a._e(),a.account?a._e():n("button",{staticClass:"connect",on:{click:a.handleWallet}},[a._v(" "+a._s(a.$t("UnlockWallet"))+" ")]),a.allowance>0&&a.account?n("div",{staticClass:"pool__card-step-warp line_bg"},[n("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.withdraw.showModel()}}},[a._v(" - ")]),n("div",{staticClass:"line_middel"}),"liquidity"==a.poolData.type&&(a.poolData.pid<8&&128==a.chainId||a.poolData.pid<28&&56==a.chainId)||"OLDHOO"==a.poolData.earned_token||"ZT"==a.poolData.earned_token||a.poolData.name.includes("ZT")?a._e():n("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.despoit.showModel()}}},[a._v(" + ")])]):a._e()]):a._e(),n("div",{staticClass:"pool__card-text"},[a._v(" "+a._s(a.poolData.name)+" "+a._s(a.$t("Stakeds"))+" ")]),n("div",{staticClass:"pool__card-price numbers"},[a._v(" "+a._s(Math.floor(1e4*a.stakedValue)/1e4)+" ")]),a.isPC?n("div",{staticClass:"pool__card-buttons"},[0==a.allowance&&a.account?n("button",{staticClass:"connect",on:{click:a.handleApprove}},[a._v(" "+a._s(a.$t("Approve"))+" ")]):a._e(),a.account?a._e():n("button",{staticClass:"connect",on:{click:a.handleWallet}},[a._v(" "+a._s(a.$t("UnlockWallet"))+" ")]),a.allowance>0&&a.account?n("div",{staticClass:"pool__card-step-warp"},[n("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.withdraw.showModel()}}},[a._v(" - ")]),"liquidity"==a.poolData.type&&(74==a.poolData.pid&&128==a.chainId||a.poolData.pid<8&&128==a.chainId||a.poolData.pid<28&&56==a.chainId)||"OLDHOO"==a.poolData.earned_token||a.poolData.name.includes("ZT")?a._e():n("div",{staticClass:"pool__card-step",on:{click:function(){t.$refs.despoit.showModel()}}},[a._v(" + ")])]):a._e()]):a._e()])]),a.isShowTips?n("div",{staticClass:"tips"},[n("img",{attrs:{src:e("ece6"),alt:""}}),n("span",{domProps:{innerHTML:a._s(a.$t("noticeTips"))}}),n("span",{domProps:{innerHTML:a._s(a.$t("investNotice",{msg:a.isShowTips}))}})]):a._e(),a.isPC?n("div",{staticClass:"pool-settle-provide"},[n("button",{staticClass:"pool-settle",attrs:{disabled:!a.earn||isNaN(a.earn)},on:{click:a.settle}},[a._v(" "+a._s(a.$t("SettleWithdraw"))+" ")]),n("a",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"pool-settle provide",attrs:{href:a.link,target:"_blank"}},[a._v(" "+a._s(a.$t("ProvideLiquidity"))+" ")])]):a._e(),a.isMobile?n("div",{staticClass:"pool-settle-provide line_disappear"},[n("div",{staticClass:"pool-settle button",class:[!a.earn||isNaN(a.earn)?" isDisabeld":""],on:{click:a.settle}},[a._v(" "+a._s(a.$t("SettleWithdraw"))+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"middel"}),n("div",{directives:[{name:"show",rawName:"v-show",value:a.link,expression:"link"}],staticClass:"right pool-settle provide"},[n("a",{staticClass:"pool-settle provide",attrs:{href:a.link,target:"_blank"}},[a._v(" "+a._s(a.$t("ProvideLiquidity"))+" ")])])]):a._e()]),n("Despoit",{ref:"despoit",attrs:{pid:a.poolData.pid,account:a.account,max:a.lpBalance,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}}),n("Withdraw",{ref:"withdraw",attrs:{pid:a.poolData.pid,account:a.account,max:a.stakedValue,data:a.poolData,erc20Utils:a.erc20Utils},on:{updateData:a.updateData}})],1)},n=[],i=e("1da1"),o=e("5530"),r=(e("96cf"),e("a9e3"),e("1276"),e("ac1f"),e("b0c0"),e("7db0"),e("5319"),e("caad"),e("2532"),e("9911"),e("99af"),function(){var t=this,a=this,s=a.$createElement,n=a._self._c||s;return n("transition",{class:a.chainName,attrs:{name:"modal"}},[a.modelShow?n("div",{staticClass:"model"},[n("div",{staticClass:"model-wrap text"},[n("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:a.hideModel}}),n("h3",[a._v(a._s(a.$t("Deposit"))+" "+a._s(a.data.name))]),n("div",{staticClass:"input-wrap numbers"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"value"}],attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}}),n("div",{staticClass:"button-wrap"},[n("button",{attrs:{disabled:!a.max},on:{click:function(){return t.setMax()}}},[a._v("MAX")])])]),n("p",{staticClass:"numbers"},[a._v(a._s(a.max)+" "+a._s(a.data.name)+" "+a._s(a.$t("Available")))]),n("div",{staticClass:"btn"},[n("div",{staticClass:"cancel",on:{click:this.hideModel}},[a._v(a._s(a.$t("Cancel")))]),n("button",{staticClass:"confirm",attrs:{disabled:!Number(a.value)||Number(a.value)>Number(a.max)},on:{click:a.despoit}},[a._v(" "+a._s(a.$t("Confirm"))+" ")])])])]):a._e()])}),c=[],l=(e("d3b7"),e("2f62")),d=null,u={name:"Despoit",data:function(){return{modelShow:!1,value:""}},props:["max","account","pid","data","erc20Utils"],computed:Object(o["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},despoit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,t.hideModel(),s="Deposit ".concat(t.value," ").concat(t.data.name),n=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),n.close();var e="".concat(s," Success");d=t.$overalltip({type:"success",msg:e})})).catch((function(a){n.close();var e="".concat(s," Error");d=t.$overalltip({type:"error",msg:e})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){d&&d.close()}},p=u,_=(e("e63a"),e("2877")),v=Object(_["a"])(p,r,c,!1,null,"5ec9fdb4",null),h=v.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{class:t.chainName,attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("h3",[t._v(t._s(t.$t("Withdraw"))+" "+t._s(t.data.name))]),s("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:t.hideModel}}),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||(t.value=a.target.value)}}}),s("div",{staticClass:"button-wrap"},[s("button",{attrs:{disabled:!t.max},on:{click:t.setMax}},[t._v("MAX")])])]),s("p",[t._v(t._s(t.max)+" "+t._s(t.data.name)+" "+t._s(t.$t("Available")))]),s("div",{staticClass:"btn"},[s("div",{staticClass:"cancel",on:{click:this.hideModel}},[t._v(t._s(t.$t("Cancel")))]),s("button",{staticClass:"confirm",attrs:{disabled:!Number(t.value)||Number(t.value)>Number(t.max)},on:{click:t.handelWithdrawl}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])])])]):t._e()])},b=[],C=null,f={name:"Withdraw",props:["max","account","pid","data","erc20Utils"],data:function(){return{modelShow:!1,value:""}},computed:Object(o["a"])({},Object(l["mapGetters"])(["isPC","isMobile","currentAddress"])),mounted:function(){},methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},handelWithdrawl:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.hideModel(),e="Withdrawl ".concat(t.value," ").concat(t.data.name),s=t.$overalltip({type:"loading",msg:e}),n=t.erc20Utils.unStake,n(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),s.close();var n="".concat(e," Success");C=t.$overalltip({type:"success",msg:n})})).catch((function(a){s.close();var n="".concat(e," Error");C=t.$overalltip({type:"error",msg:n})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){C&&C.close()}},w=f,g=(e("b0f8"),Object(_["a"])(w,m,b,!1,null,"66698610",null)),k=g.exports,$=e("4f22"),y=e("837b"),D=e("4027"),x=e("c438"),N=null,M={name:"BoardroomPool",components:{Despoit:h,Withdraw:k,tipDialog:D["a"],TitleBanner:x["a"]},data:function(){return{stakedOptions:{decimalPlaces:4},link:""}},created:function(){},computed:{getLanguage:function(){return this.$store.state.language},isPC:function(){return this.$store.getters.isPC},isMobile:function(){return this.$store.getters.isMobile},currentAddress:function(){return this.$store.getters.currentAddress},chainId:function(){return this.$store.getters.chainId},coinConfig:function(){return y["a"][this.chainId]},account:function(){return this.$store.state.boardRoom.account||this.$store.state.account.address},stakedValue:function(){return this.$store.state.boardRoom.stakedValue},earn:function(){return Number(this.$store.state.boardRoom.earn)},allowance:function(){return this.$store.state.boardRoom.allowance},lpBalance:function(){return this.$store.state.boardRoom.lpBalance},apylist:function(){return this.$store.state.liquidity.apylist},isShowTips:function(){var t=this.poolData.name.split(" ")[0].split("/");return t.find((function(t){return"BLACK"===t}))},poolData:function(){var t=this.$route.params,a=t.type,e=t.earn,s=t.id,n=window.location.hostname.replace("www.","");if("boardroom"==a){var i=this.$store.getters["boardRoom/currentChainBoardRoomData"][e],r=i.find((function(t){return t.pid==s}))||{};return r.name.includes(" LP")&&(this.link="https://".concat(56==this.chainId?"bsc":"ht",".").concat(n,"/#/add/").concat(r.token_main,"/").concat(r.token_slave,"?").concat(this.globalLanguage)),Object(o["a"])(Object(o["a"])({},r),{},{earn:e,type:a})}if("liquidity"==a){var c=this.$store.getters["liquidity/poolList"],l=c.find((function(t){return t.pid==s}))||{};if(this.apylist[l.pid]){var d=this.apylist[l.pid];d.pool_name.includes("/")&&(this.link="https://".concat(56==this.chainId?"bsc":"ht",".").concat(n,"/#/add/").concat(d.token0,"/").concat(d.token1,"?").concat(this.globalLanguage))}return Object(o["a"])(Object(o["a"])({},l),{},{earn:e,type:a})}},erc20Utils:function(){var t=this.$route.params,a=t.type,e=t.earn;return Object($["k"])(this.$store.state.chainId,a,e)}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.$route.params.id,t.pid=e,t.updateData();case 3:case"end":return a.stop()}}),a)})))()},watch:{chainId:function(){this.updateData()}},methods:{getImgUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"MDX";return this.globalGetImgUrl(this.coinConfig[t.toLowerCase()])},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)},updateData:function(){this.$store.dispatch("boardRoom/getWalletData",this.poolData)},addToken:function(t){var a=18;"HOO"==t.earnedToken&&(a=8);var e=this.getImgUrl(t.earnedToken),s="boardroom"==t.type?t.earnedToken:"MDX";ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.coinConfig[s.toLowerCase()],symbol:s,decimals:a,image:e}}})},settle:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.unStake,s="Settle & Withdraw Tokens",n=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.stakedValue,t.account).then((function(a){t.updateData(),n.close();var e="".concat(s," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){n.close();var e="".concat(s," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleWallet:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:t.updateData();case 3:case"end":return a.stop()}}),a)})))()},handleClaim:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,s="Claim ".concat(t.earn," ").concat(t.poolData.earn.toUpperCase()),n=t.$overalltip({type:"loading",msg:s}),e(t.pid,0,t.account).then((function(a){t.updateData(),n.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){n.close();var e="Claim ".concat(t.poolData.earn.toUpperCase()," Error");N=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleApprove:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n,i,o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils,s=e.approveToken,n=e.saveLocalAllowance,i=t.poolData.lpAddress,o="Approve ".concat(t.poolData.name),r=t.$overalltip({type:"loading",msg:o}),s(i,t.account).then((function(a){r.close(),n(i,t.account),t.updateData();var e="".concat(o," Success");N=t.$overalltip({type:"success",msg:e})})).catch((function(a){r.close();var e="".concat(o," Error");N=t.$overalltip({type:"error",msg:e})}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){N&&N.close()}},O=M,T=(e("34b2"),Object(_["a"])(O,s,n,!1,null,"40e19a4a",null));a["default"]=T.exports},c438:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-banner",class:[t.getLanguage,t.chainName]},[["/buyback","/pastrecord"].includes(t.routerName)?e("div",{staticClass:"banner-con",style:{backgroundImage:"url("+t.getImg("buyback")+")"}}):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName == '/liquidity'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),e("div",{staticClass:"h5 li-h5title ban-start text Heavy"},[e("div",{staticClass:"act-title"},[e("p",[t._v(t._s(t.$t("LiquidityMining")))]),e("p")]),e("router-link",{staticClass:"li-title",attrs:{to:"/trading",tag:"div",exact:""}},[e("span",{staticClass:"text Heavy"},[t._v(" "+t._s(t.$t("TradePool"))+" ")])])],1),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[t._v(t._s(t.$t("TotalLockIn"))+" "),e("span",{staticClass:"numbers"},[t._v("(USDT)")])]),e("div",{staticClass:"banner-sum numbers"},[e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName == '/trading'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("router-link",{staticClass:"li-title",attrs:{to:"/liquidity",tag:"div",exact:""}},[e("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining text Heavy"},[e("p",[t._v(t._s(t.$t("TradePool")))]),e("p")])],1),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[t._v(t._s(t.$t("TotalRewardOfCurrentPool")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),e("div",[e("p",[t._v(t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),e("div",{staticClass:"ban-center"},[e("button",{staticClass:"new-banner-btn-dra text Bold",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName == '/boardroom'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerName,expression:"routerName == '/bridge'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"BoardroomPool"==t.$route.name,expression:"'BoardroomPool' == $route.name"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerName,expression:"routerName === '/introduce'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():e("div",[e("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():e("div",[e("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/priceplan"===t.routerName,expression:"routerName === '/priceplan'"}],staticClass:"banner-bar text"},[e("h1",{staticClass:"home__banner-title"},[t._v(" MDEX "+t._s(t.$t("sjrd"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("sjplantitle"))+" ")])])])},n=[],i=(e("a9e3"),e("99af"),{name:"HomeBanner",data:function(){return{}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{},mounted:function(){},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var a={buyback:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"}};return e("e8b59")("./".concat(t,"/").concat(a[t][this.stitchingPic()],".png"))},onWithdrawal:function(){this.$emit("on-withdrawal")}}}),o=i,r=(e("ae34"),e("2877")),c=Object(r["a"])(o,s,n,!1,null,"a0c1848c",null);a["a"]=c.exports},c6ca:function(t,a,e){},d07f:function(t,a,e){t.exports=e.p+"img/metamask-fox.c06f3a3e.svg"},e63a:function(t,a,e){"use strict";e("6404")},e8b59:function(t,a,e){var s={"./buyback/buyback_h5_en_Bsc.png":"2063","./buyback/buyback_h5_en_Heco.png":"4cee","./buyback/buyback_h5_zh-CN_Bsc.png":"e584","./buyback/buyback_h5_zh-CN_Heco.png":"f1b0","./buyback/buyback_pc_en_Bsc.png":"7bdc","./buyback/buyback_pc_en_Heco.png":"5150","./buyback/buyback_pc_zh-CN_Bsc.png":"175c","./buyback/buyback_pc_zh-CN_Heco.png":"c7ec"};function n(t){var a=i(t);return e(a)}function i(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="e8b59"},e934:function(t,a,e){},ece6:function(t,a,e){t.exports=e.p+"img/notice.93afaa49.svg"}}]);
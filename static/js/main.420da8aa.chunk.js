(this["webpackJsonpnhc-forum"]=this["webpackJsonpnhc-forum"]||[]).push([[0],{107:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),s=a.n(n),o=a(11),c=a.n(o),i=(a(107),a(69)),l=a(42),d=a(13),u=a(32),h=a(21),p=a(22),j=a(19),b=a(24),O=a(23),v=a(4),g=a(190),m=a(184),x=a(185),f=a(136),w=a(193),y=a(189),k=a(186),T=a(187),C=a(55),P=a(6),S=a(88),B=a.n(S),D=function(e,t){var a={email:{type:"email",pattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/},username:{type:"username",pattern:/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/},password:{type:"password",pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}};for(var r in a)if(a[r].type===t)return a[r].pattern.test(e);return!1},H=a(10),N=a.n(H),L=a(16),M="https://nhc-forum.herokuapp.com",F=M,I="/api/register",R=a(20),A=function(){var e=Object(L.a)(N.a.mark((function e(t,a){var r,n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={success:!1,userID:"",userToken:""},n={Username:t,Password:a},F+"/api/login",e.prev=3,e.next=6,Object(R.post)("https://nhc-forum.herokuapp.com/api/login",n);case 6:return s=e.sent,r.success=!0,r.userID=s.data.UserID,r.userToken=s.data.UserToken,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(L.a)(N.a.mark((function e(t,a){var r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Logging out with ".concat(t," and ").concat(a)),r={success:!1},n={UserID:t,UserToken:a},F+"/api/logout",e.prev=4,e.next=7,Object(R.post)("https://nhc-forum.herokuapp.com/api/logout",n);case 7:return r.success=!0,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}();function G(){return(G=Object(L.a)(N.a.mark((function e(t,a,r){var n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={success:!1},s={Email:t,Username:a,Password:r},F+I,e.prev=3,e.next=6,Object(R.post)("https://nhc-forum.herokuapp.com/api/register",s);case 6:return n.success=!0,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var q=a(66),W=220,z=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(W,"px)"),marginLeft:W,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:W,flexShrink:0},drawerPaper:{width:W},drawerHeader:Object(q.a)(Object(q.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-220},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},$=function(e){return{root:{display:"flex",height:"100vh",backgroundImage:"url(https://wallpaperaccess.com/full/1682029.jpg)",backgroundPosition:"center"},bodyBox:{paddingTop:"6em"},bodyBoxShift:{width:"calc(100% - ".concat(W,"px)"),marginLeft:W,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})}}},E=a(174),Z=a(176),_=a(177),J=a(178),K=a(179),Q=a(180),V=a(181),X=a(182),Y=a(192),ee=a(163),te=a(166),ae=a(167),re=a(168),ne=a(169),se=a(170),oe=a(171),ce=a(172),ie=a(173),le={Home:Object(r.jsx)(ee.a,{}),New:Object(r.jsx)(te.a,{}),Hot:Object(r.jsx)(ae.a,{}),Followed:Object(r.jsx)(re.a,{}),"Create Thread":Object(r.jsx)(ne.a,{}),"Search Thread":Object(r.jsx)(se.a,{}),"My Account":Object(r.jsx)(oe.a,{}),Logout:Object(r.jsx)(ce.a,{}),Login:Object(r.jsx)(ie.a,{})},de={Home:!1,New:!1,Hot:!1,Followed:!0,"Create Thread":!0,"Search Thread":!1,"My Account":!0,Logout:!0,Login:!1},ue=a(175),he=a(183);var pe={Home:function(e,t){e(Object(r.jsx)(d.a,{to:"/"}))},New:function(e,t){e(Object(r.jsx)(d.a,{to:"/"})),t?t("News"):console.log("Redirecting only")},Hot:function(e,t){e(Object(r.jsx)(d.a,{to:"/"})),t?t("Hot"):console.log("Redirecting only")},Followed:function(e,t,a){t(Object(r.jsx)(d.a,{to:"/"})),a?a("Followed"):console.log("Redirecting only")},"Create Thread":function(e,t){console.log("navCreate")},"Search Thread":function(e){console.log("navSearch"),alert("This feature is not yet implemented!")},"My Account":function(e,t){console.log("navAccount"),alert("This feature is not yet implemented!")},Logout:function(e,t){U(e.id,e.token).then((function(){e.tokenHandler(""),e.idHandler(""),t(Object(r.jsx)(d.a,{to:"/"}))}))},Login:function(e){e(Object(r.jsx)(d.a,{to:"/login"}))}},je=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"navList",value:function(e){var t=this,a=this.props.session.token,n=this.props.session;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:e.drawerHeader,align:"right",children:Object(r.jsx)(E.a,{onClick:this.props.closeHandler,children:Object(r.jsx)(ue.a,{})})}),Object(r.jsx)(Z.a,{}),Object(r.jsx)(_.a,{children:["Home","New","Hot","Followed"].map((function(e){return a||!de[e]?Object(r.jsxs)(J.a,{button:!0,onClick:function(){de[e]?pe[e](n,t.props.redirectAdder,t.props.threadTypeHandler):pe[e](t.props.redirectAdder,t.props.threadTypeHandler)},children:[Object(r.jsx)(K.a,{children:le[e]}),Object(r.jsx)(Q.a,{children:e})]},e):Object(r.jsx)(r.Fragment,{})}))}),Object(r.jsx)(Z.a,{}),Object(r.jsx)(_.a,{children:["Create Thread","Search Thread"].map((function(e){return a||!de[e]?Object(r.jsxs)(J.a,{button:!0,onClick:function(){de[e]?pe[e](n,t.props.redirectAdder):pe[e](t.props.redirectAdder)},children:[Object(r.jsx)(K.a,{children:le[e]}),Object(r.jsx)(Q.a,{children:e})]},e):Object(r.jsx)(r.Fragment,{})}))}),Object(r.jsx)(Z.a,{}),Object(r.jsx)(_.a,{children:["My Account","Logout","Login"].map((function(e){return!a&&de[e]||a&&"Login"===e?Object(r.jsx)(r.Fragment,{}):Object(r.jsxs)(J.a,{button:!0,onClick:function(){de[e]?pe[e](n,t.props.redirectAdder):pe[e](t.props.redirectAdder)},children:[Object(r.jsx)(K.a,{children:le[e]}),Object(r.jsx)(Q.a,{children:e})]},e)}))})]})}},{key:"render",value:function(){var e=this.props.classes;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V.a,{position:"fixed",className:Object(v.a)(e.appBar,Object(u.a)({},e.appBarShift,this.props.navBarOpen)),children:Object(r.jsxs)(X.a,{children:[Object(r.jsx)(E.a,{color:"inherit","aria-label":"open drawer",onClick:this.props.openHandler,edge:"start",className:Object(v.a)(e.menuButton,this.props.navBarOpen&&e.hide),children:Object(r.jsx)(he.a,{})}),Object(r.jsx)(C.a,{variant:"h6",noWrap:!0,children:"NHC Forum"})]})}),Object(r.jsx)(Y.a,{className:e.drawer,anchor:"left",open:this.props.navBarOpen,variant:"persistent",classes:{paper:e.drawerPaper},children:this.navList(this.props)})]})}}]),a}(s.a.Component),be=Object(P.a)(z,{withTheme:!0})(je),Oe=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={username:{value:"",incorrect:!1,errorMsg:""},password:{value:""},navBarOpen:!0,redirects:[]},r.handleDrawerClose=r.handleDrawerClose.bind(Object(j.a)(r)),r.handleDrawerOpen=r.handleDrawerOpen.bind(Object(j.a)(r)),r.addRedirect=r.addRedirect.bind(Object(j.a)(r)),r}return Object(p.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({navBarOpen:!0})}},{key:"handleDrawerClose",value:function(){this.setState({navBarOpen:!1})}},{key:"addRedirect",value:function(e){this.setState({navBarOpen:this.state.navBarOpen,redirects:[e]})}},{key:"handleLogin",value:function(e,t){var a=this;console.log("Logging in"),A(e,t).then((function(e){if(e.success){var t=e.userID,r=e.userToken;a.props.session.idHandler(t),a.props.session.tokenHandler(r),console.log("Logged in with token ".concat(r)),console.log(a.props.session)}else alert("Login error! Please try again!")}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.session.token?Object(r.jsx)(d.a,{to:"/"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(be,{session:this.props.session,closeHandler:this.handleDrawerClose,openHandler:this.handleDrawerOpen,navBarOpen:this.state.navBarOpen,redirectAdder:this.addRedirect,threadTypeHandler:this.handleThreadType}),Object(r.jsx)(g.a,{className:Object(v.a)(t.bodyBox,Object(u.a)({},t.bodyBoxShift,this.state.navBarOpen),"root"),children:Object(r.jsxs)(m.a,{container:!0,children:[Object(r.jsx)(x.a,{}),Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0}),Object(r.jsx)(m.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(r.jsx)("div",{align:"center",children:Object(r.jsxs)(f.a,{className:"paper",variant:"outlined",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"LOGIN TO NHC FORUM"})}),Object(r.jsx)("div",{children:Object(r.jsx)(w.a,{className:"avatar",children:Object(r.jsx)(B.a,{color:"secondary"})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(y.a,{id:"username",label:"Username",className:"textfield",type:"text",value:this.state.username.value,variant:"outlined",required:!0,autoComplete:"username",margin:"normal",error:this.state.username.incorrect,helperText:this.state.username.errorMsg,onChange:function(t){var a=D(t.target.value,"username")||""===t.target.value;e.setState({username:{value:t.target.value,incorrect:!a,errorMsg:a?"":"Invalid username"}})}}),Object(r.jsx)(y.a,{id:"password",className:"textfield",label:"Password",type:"password",variant:"outlined",required:!0,autoComplete:"current-password",margin:"normal",onChange:function(t){e.setState({password:{value:t.target.value}})}})]}),Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{variant:"contained",color:"primary",className:"button",onClick:this.state.username.incorrect?function(){e.setState({username:{value:"",incorrect:!0,errorMsg:"Invalid username! Please try again!"}})}:function(){e.handleLogin(e.state.username.value,e.state.password.value)},children:"Login"})}),Object(r.jsx)("div",{children:Object(r.jsx)(m.a,{container:!0,children:Object(r.jsx)(m.a,{item:!0,xs:12,children:Object(r.jsx)(T.a,{component:l.b,to:"/register",children:Object(r.jsx)(C.a,{variant:"body1",align:"center",children:"Don't have an account? Sign up here!"})})})})})]})})}),Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0})]})}),this.state.redirects]})}}]),a}(s.a.Component),ve=Object(P.a)($,{withTheme:!0})(Oe),ge=(a(132),function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={email:{value:"",incorrect:!1,errorMsg:""},username:{value:"",incorrect:!1,errorMsg:""},password:{value:"",incorrect:!1,errorMsg:""},confirmPassword:{value:"",incorrect:!1,errorMsg:""},navBarOpen:!0,redirects:[]},r.handleDrawerClose=r.handleDrawerClose.bind(Object(j.a)(r)),r.handleDrawerOpen=r.handleDrawerOpen.bind(Object(j.a)(r)),r.addRedirect=r.addRedirect.bind(Object(j.a)(r)),r}return Object(p.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({navBarOpen:!0})}},{key:"handleDrawerClose",value:function(){this.setState({navBarOpen:!1})}},{key:"addRedirect",value:function(e){this.setState({navBarOpen:this.state.navBarOpen,redirects:[e]})}},{key:"handleRegister",value:function(e,t,a){var n=this;console.log("Logging in"),function(e,t,a){return G.apply(this,arguments)}(e,t,a).then((function(e){if(e.success){var t=e.userID,a=e.userToken;n.props.session.idHandler(t),n.props.session.tokenHandler(a),console.log("Registration complete!"),alert("Registration successful! Please log in!")}else alert("Registration error! Please try again!")})),this.addRedirect(Object(r.jsx)(d.a,{to:"/login"}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.session.token?Object(r.jsx)(d.a,{to:"/"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(be,{session:this.props.session,closeHandler:this.handleDrawerClose,openHandler:this.handleDrawerOpen,navBarOpen:this.state.navBarOpen,redirectAdder:this.addRedirect}),Object(r.jsx)(g.a,{className:Object(v.a)(t.bodyBox,Object(u.a)({},t.bodyBoxShift,this.state.navBarOpen),t.root),children:Object(r.jsxs)(m.a,{container:!0,children:[Object(r.jsx)(x.a,{}),Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0}),Object(r.jsx)(m.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(r.jsx)("div",{align:"center",children:Object(r.jsxs)(f.a,{className:"paper",variant:"outlined",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Create a new NHC account"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(y.a,{id:"email",label:"Email",className:"textfield",type:"text",value:this.state.email.value,variant:"outlined",required:!0,autoComplete:"email",margin:"normal",error:this.state.email.incorrect,helperText:this.state.email.errorMsg,onChange:function(t){var a=D(t.target.value,"email")||""===t.target.value;e.setState({email:{value:t.target.value,incorrect:!a,errorMsg:a?"":"Invalid email address"}})}}),Object(r.jsx)(y.a,{id:"username",label:"Username",className:"textfield",type:"text",value:this.state.username.value,variant:"outlined",required:!0,autoComplete:"username",margin:"normal",error:this.state.username.incorrect,helperText:this.state.username.errorMsg,onChange:function(t){var a=D(t.target.value,"username")||""===t.target.value;e.setState({username:{value:t.target.value,incorrect:!a,errorMsg:a?"":"Username must be 6-20 characters long, and does not contain special characters!"}})}}),Object(r.jsx)(y.a,{id:"password",className:"textfield",label:"Password",type:"password",variant:"outlined",required:!0,autoComplete:"new-password",margin:"normal",value:this.state.password.value,error:this.state.password.incorrect,helperText:this.state.password.errorMsg,onChange:function(t){var a=D(t.target.value,"password")||""===t.target.value;e.setState({password:{value:t.target.value,incorrect:!a,errorMsg:a?"":"Password must be at least 8 characters long and contains at least one letter and one number!"}})}}),Object(r.jsx)(y.a,{id:"confirm-password",className:"textfield",label:"Confirm Password",type:"password",variant:"outlined",required:!0,autoComplete:"new-password",margin:"normal",value:this.state.confirmPassword.value,error:this.state.confirmPassword.incorrect,helperText:this.state.confirmPassword.errorMsg,onChange:function(t){var a=t.target.value===e.state.password.value||""===t.target.value;e.setState({confirmPassword:{value:t.target.value,incorrect:!a,errorMsg:a?"":"Re-entered password does not match!"}})}})]}),Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{variant:"contained",color:"primary",onClick:this.state.email.incorrect||this.state.username.incorrect||this.state.password.incorrect||this.state.confirmPassword.incorrect?function(){e.setState({email:{value:"",incorrect:!0,errorMsg:"Invalid information! Please try again!"},username:{value:"",incorrect:!0,errorMsg:"Invalid information! Please try again!"},password:{value:"",incorrect:!0,errorMsg:"Invalid information! Please try again!"},confirmPassword:{value:"",incorrect:!0,errorMsg:"Invalid information! Please try again!"}})}:function(){e.handleRegister(e.state.email.value,e.state.username.value,e.state.password.value)},className:"button",children:"Create account"})}),Object(r.jsx)("div",{children:Object(r.jsx)(m.a,{container:!0,children:Object(r.jsx)(m.a,{item:!0,xs:12,children:Object(r.jsx)(T.a,{component:l.b,to:"/login",children:Object(r.jsx)(C.a,{variant:"body1",align:"center",children:"Already have an account? Log in here!"})})})})})]})})}),Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0})]})}),this.state.redirects]})}}]),a}(s.a.Component)),me=Object(P.a)($,{withTheme:!0})(ge),xe=M,fe="/api/thread",we="/api/followedPosts";function ye(e){return ke.apply(this,arguments)}function ke(){return(ke=Object(L.a)(N.a.mark((function e(t){var a,r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={ThreadID:t},xe+fe+"/getThread",r={success:!1,thread:{}},e.prev=3,e.next=6,Object(R.get)("https://nhc-forum.herokuapp.com/api/thread/getThread",{params:a});case 6:return n=e.sent,r.success=!0,r.thread=n.data,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}var Te=a(188),Ce=Object(Te.a)((function(e){return{paper:{maxWidth:"vw",margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2),borderWidth:10,borderColor:"black"},box:{cursor:"pointer"}}}));function Pe(e){var t=Ce();return Object(r.jsx)(g.a,{className:t.box,children:Object(r.jsx)(f.a,{className:t.paper,onClick:function(){console.log(e.title)},children:Object(r.jsxs)(m.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(w.a,{children:e.author.AuthorName[0].toUpperCase()})}),Object(r.jsx)(m.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(r.jsx)(C.a,{noWrap:!0,align:"left",children:e.title})})]})})})}function Se(e){return Be.apply(this,arguments)}function Be(){return(Be=Object(L.a)(N.a.mark((function e(t){var a,n,s,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Getting previews"),a=[],e.t0=N.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=13;break}return n=e.t1.value,e.next=7,ye(t[n]);case 7:s=e.sent,console.log(s),o={AuthorName:s.thread.AuthorUsername,AuthorID:s.thread.AuthorID},a.push(Object(r.jsx)(Pe,{author:o,title:s.thread.Title})),e.next=3;break;case 13:return console.log("Got previews\n"),console.log(a),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var De=function(){var e=Object(L.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={success:!1,threads:[]},xe+"/api/hotPosts",e.prev=2,e.next=5,Object(R.get)("https://nhc-forum.herokuapp.com/api/hotPosts");case 5:a=e.sent,t.threads=a.data.IDs,t.success=!0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=Object(L.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={success:!1,threads:[]},xe+"/api/newPosts",e.prev=2,e.next=5,Object(R.get)("https://nhc-forum.herokuapp.com/api/newPosts");case 5:a=e.sent,t.threads=a.data.IDs,t.success=!0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(L.a)(N.a.mark((function e(t,a){var r,n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={success:!1,threads:[]},n={UserID:t,UserToken:a},xe+we+"/getFollows",e.prev=3,e.next=6,Object(R.get)("https://nhc-forum.herokuapp.com/api/followedPosts/getFollows",{params:n});case 6:s=e.sent,r.threads=s.data.IDs,r.success=!0,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,a){return e.apply(this,arguments)}}(),Le=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={hotThreadsPreviews:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;console.log("Getting hot threads ids"),De().then((function(a){e=a.threads,console.log("Got hot threads ids"),console.log(e),Se(e).then((function(e){t.setState({hotThreadsPreviews:e}),console.log(t.state.hotThreadsPreviews)}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.hotThreadsPreviews.length?Object(r.jsx)(r.Fragment,{children:this.state.hotThreadsPreviews}):Object(r.jsx)("span",{style:{color:"white"},children:"Loading..."})}}]),a}(n.Component),Me=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={newThreadsPreviews:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;console.log("Getting new threads ids"),He().then((function(a){e=a.threads,console.log("Got new threads ids"),console.log(e),Se(e).then((function(e){t.setState({newThreadsPreviews:e}),console.log(t.state.newThreadsPreviews)}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.newThreadsPreviews.length?Object(r.jsx)(r.Fragment,{children:this.state.newThreadsPreviews}):Object(r.jsx)("span",{style:{color:"white"},children:"Loading..."})}}]),a}(n.Component),Fe=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={followedThreadPreviews:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;console.log("Getting followed threads ids"),Ne(this.props.session.id,this.props.session.token).then((function(a){e=a.threads,console.log("Got followed threads ids"),console.log(e),Se(e).then((function(e){t.setState({followedThreadPreviews:e}),console.log(t.state.followedThreadPreviews)}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.followedThreadPreviews.length?Object(r.jsx)(r.Fragment,{children:this.state.followedThreadPreviews}):Object(r.jsx)("span",{style:{color:"white"},children:"Loading..."})}}]),a}(n.Component),Ie=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={navBarOpen:!0,redirects:[],threadType:"New"},r.handleDrawerClose=r.handleDrawerClose.bind(Object(j.a)(r)),r.handleDrawerOpen=r.handleDrawerOpen.bind(Object(j.a)(r)),r.addRedirect=r.addRedirect.bind(Object(j.a)(r)),r.handleThreadType=r.handleThreadType.bind(Object(j.a)(r)),r}return Object(p.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({navBarOpen:!0})}},{key:"handleDrawerClose",value:function(){this.setState({navBarOpen:!1})}},{key:"addRedirect",value:function(e){this.setState({navBarOpen:this.state.navBarOpen,redirects:[e]})}},{key:"handleThreadType",value:function(e){this.setState({threadType:e})}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{}),Object(r.jsx)(be,{session:this.props.session,closeHandler:this.handleDrawerClose,openHandler:this.handleDrawerOpen,navBarOpen:this.state.navBarOpen,redirectAdder:this.addRedirect,threadTypeHandler:this.handleThreadType}),Object(r.jsx)(g.a,{className:Object(v.a)(t.bodyBox,Object(u.a)({},t.bodyBoxShift,this.state.navBarOpen),"root"),children:Object(r.jsxs)(m.a,{container:!0,children:[Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0}),Object(r.jsx)(m.a,{item:!0,xs:12,sm:8,md:6,children:function(){switch(e.state.threadType){case"Hot":return Object(r.jsx)(Le,{});case"Followed":return Object(r.jsx)(Fe,{session:e.props.session});default:return Object(r.jsx)(Me,{})}}()}),Object(r.jsx)(m.a,{item:!0,xs:!0,sm:!0,md:!0})]})}),this.state.redirects]})}}]),a}(s.a.Component),Re=Object(P.a)($,{withTheme:!0})(Ie),Ae=(a(133),a(89));var Ue=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),u={token:a,id:c[0],tokenHandler:s,idHandler:c[1]};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ae.a,{children:Object(r.jsx)("title",{children:"NHC Forum"})}),Object(r.jsx)(l.a,{basename:"nhc-forum",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/login",component:function(){return Object(r.jsx)(ve,{session:u})}}),Object(r.jsx)(d.b,{path:"/register",component:function(){return Object(r.jsx)(me,{session:u})}}),Object(r.jsx)(d.b,{path:"/",component:function(){return Object(r.jsx)(Re,{session:u})}})]})})]})},Ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),s(e),o(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(Ue,{})}),document.getElementById("root")),Ge()}},[[134,1,2]]]);
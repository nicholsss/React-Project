(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{202:function(e,t,n){e.exports=n(356)},355:function(e,t,n){e.exports=n.p+"static/media/kitchen.e8d795e4.svg"},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),u=n.n(c),l=n(17),i=n(49),o=n(171),s=n(172),p=n(10),m=n.n(p),f=n(30),d=n.n(f),E=function(){return d.a.get("/api/users").then((function(e){return e.data}))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITUSERS":return t.data;default:return e}},h=n(121),g=null,b=function(){return{headers:{Authorization:g}}},y=function(){return d.a.get("/api/recipes").then((function(e){return e.data}))},O=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(d.a.post("/api/recipes",e,b()));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},w=function(e){g="bearer ".concat(e)},I=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(d.a.delete("".concat("/api/recipes","/").concat(e.id),b()));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},x=function(){g=null},j=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(d.a.put("".concat("/api/recipes","/").concat(e.id),e,b()));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},C=function(e,t){var n;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(d.a.post("".concat("/api/recipes","/").concat(e,"/comments"),t,b()));case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.concat(t.data);case"INITIALIZE":return t.data;case"REMOVE":return e.filter((function(e){return e.id!==t.data.id}));case"LIKE":case"COMMENT":return e.map((function(e){return e.id!==t.data.id?e:t.data}));default:return e}},S=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(d.a.post("/api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;case"INITLOGIN":return t.data;default:return e}},R=function(e,t){return console.log("content",e),function(n){n({type:"SET_NOTIFICATION",content:e}),setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),1e3*t)}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return"";default:return e}},A=Object(i.combineReducers)({notification:T,users:v,user:N,recipes:k}),F=Object(i.createStore)(A,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),L=n(21),M=n(42),U=n(18),D=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(d.a.post("http://localhost:3003/api/users",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},G=(n(51),n(366)),V=n(371),z=n(369),H=Object(l.b)((function(e){return{notification:e.notification}}))((function(e){return 0===e.notification.length?null:r.a.createElement(z.a,null,e.notification.message)})),J=Object(l.b)(null,{setNotification:R})(Object(M.e)((function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),i=Object(U.a)(l,2),o=i[0],s=i[1],p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"succes";e.setNotification({message:t,color:n},10)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Please Register"),r.a.createElement(H,null),r.a.createElement(G.a,{onSubmit:function(t){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,m.a.awrap(D({username:c,password:o}).then((function(){return e.history.push("/login")})).then((function(){return p("".concat(c," registered! Please log in!"))})));case 4:u(""),s(""),console.log("register succes"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("invalid username or password"),p("invalid username or password","error");case 13:case"end":return n.stop()}}),null,null,[[1,9]])}},r.a.createElement(G.a.Field,null,r.a.createElement("input",{placeholder:"username",value:c,onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement(G.a.Field,null,r.a.createElement("input",{placeholder:"password",type:"password",value:o,onChange:function(e){var t=e.target;return s(t.value)}})),r.a.createElement(V.a,null,"Register")))}))),P=Object(l.b)(null,{loginUser:function(e,t){return function(n){var a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(S(e,t));case 2:a=r.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),console.log("tokeni",a.token),console.log("username",e),w(a.token),n({data:a,type:"LOGIN"});case 8:case"end":return r.stop()}}))}},setNotification:R})(Object(M.e)((function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),i=Object(U.a)(l,2),o=i[0],s=i[1],p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"succes";e.setNotification({message:t,color:n},2)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Please Login"),r.a.createElement(H,null),r.a.createElement(G.a,{onSubmit:function(t){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e.loginUser({username:c,password:o}).then((function(){return p("".concat(c," logged in!"))})).then((function(){return e.history.push("/")})).catch((function(){p("wrong username or password","error")})),u(""),s("");case 4:case"end":return n.stop()}}))}},r.a.createElement(G.a.Field,null,r.a.createElement("input",{placeholder:"username",value:c,onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement(G.a.Field,null,r.a.createElement("input",{placeholder:"password",type:"password",value:o,onChange:function(e){var t=e.target;return s(t.value)}})),r.a.createElement(V.a,null,"Login")))}))),W=Object(l.b)(null,{createRecipe:function(e){return function(t){var n;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("whole recipe",e),a.next=3,m.a.awrap(O(e));case 3:n=a.sent,t({data:n,type:"ADD"});case 5:case"end":return a.stop()}}))}},setNotification:R})((function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),i=Object(U.a)(l,2),o=i[0],s=i[1],p=Object(a.useState)(""),m=Object(U.a)(p,2),f=m[0],d=m[1],E=Object(a.useState)(""),v=Object(U.a)(E,2),h=v[0],g=v[1],b=Object(a.useState)([]),y=Object(U.a)(b,2),O=y[0],w=y[1],I=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"succes";e.setNotification({message:t,color:n},10)};return r.a.createElement("div",{className:"ingredientInput"},r.a.createElement(H,null),r.a.createElement(G.a,{onSubmit:function(t){if(t.preventDefault(),c&&h&&O&&f){var n={title:c,category:h,ingredients:O,instruction:f};e.createRecipe(n).then(I("".concat(n.title," added!")))}else I("Please fill all fields","error");u(""),w([]),d("")}},r.a.createElement(G.a.Field,null,r.a.createElement("h1",null,"Recipe name"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement(G.a.Field,null,r.a.createElement("h2",null,"What category is your recipe ",h),r.a.createElement(V.a,{type:"button",onClick:function(){return g("Meat")}},"Meat"),r.a.createElement(V.a,{type:"button",onClick:function(){return g("Vegetarian")}},"Vegetarian"),r.a.createElement(V.a,{type:"button",onClick:function(){return g("Soup")}},"Soup"),r.a.createElement(V.a,{type:"button",onClick:function(){return g("Fish")}},"Fish")),r.a.createElement(G.a.Field,null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){var t=e.target;return s(t.value)}}),r.a.createElement(V.a,{type:"button",onClick:function(){o&&(w(O.concat(o)),s(""))}},"Add a Ingredient"),r.a.createElement("ul",null,O.map((function(e,t){return r.a.createElement("li",{key:t}," ",e,r.a.createElement(V.a,{type:"button",onClick:function(){return t=e,void w(O.filter((function(e){return e!==t})));var t}},"remove"))})))),r.a.createElement("div",{className:"guideInput"},r.a.createElement("h2",null,"Add Recipe guide"),r.a.createElement("textarea",{wid:"true",value:f,onChange:function(e){var t=e.target;return d(t.value)}}),r.a.createElement(V.a,{type:"submit"},"Create"))))})),_=n(364),K=n(368),Z=n(370),B=Object(l.b)((function(e){return{recipes:e.recipes}}))((function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],u=n[1],l=c?e.recipes.filter((function(e){return e.category.toUpperCase().includes(c.toUpperCase())})):e.recipes;return r.a.createElement(_.a,null,r.a.createElement(K.a.Group,null,r.a.createElement("h2",null,"What kind of recipes u wanna see?"),r.a.createElement(Z.a,{fluid:!0,widths:5},r.a.createElement(Z.a.Item,{onClick:function(){return u("")}},"All"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Meat")}},"Meat"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Vegetarian")}},"Vegetarian"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Soup")}},"Soup"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Fish")}},"Fish")),l.map((function(e){return r.a.createElement(L.b,{key:e.id,to:"/recipes/".concat(e.id)},r.a.createElement(K.a,null,r.a.createElement(K.a.Content,null,r.a.createElement(K.a.Header,null,e.title),r.a.createElement(K.a.Meta,null,e.category,r.a.createElement("br",null)))))}))))})),q=n(373),Q=n(372),X=n(365),Y={removeRecipe:function(e){return function(t){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("object",e),n.next=3,m.a.awrap(I(e));case 3:t({data:e,type:"REMOVE"});case 4:case"end":return n.stop()}}))}},likeRecipe:function(e){return function(t){var n,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("likerecipe"),n=Object(h.a)({},e,{likes:e.likes+1}),r.next=4,m.a.awrap(j(n));case 4:a=r.sent,t({data:a,type:"LIKE"});case 6:case"end":return r.stop()}}))}},commentRecipe:function(e,t){return function(n){var a,r,c;return m.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a={content:t},u.next=3,m.a.awrap(C(e.id,a));case 3:r=u.sent,c=Object(h.a)({},e,{comments:e.comments.concat(r)}),n({data:c,type:"COMMENT"});case 6:case"end":return u.stop()}}))}}},$=Object(l.b)((function(e){return{recipes:e.recipes,user:e.user}}),Y)(Object(M.e)((function(e){var t=function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),r=n[0],c=n[1];return[{type:e,value:r,onChange:function(e){c(e.target.value)}},function(){c("")}]}("text"),n=Object(U.a)(t,2),c=n[0],u=n[1];if(console.log("rseptii",e.recipe),void 0===e.recipe)return null;return r.a.createElement(q.a,null,r.a.createElement(Q.a,{columns:2,relaxed:"very"},r.a.createElement(Q.a.Column,null,r.a.createElement("p",null,"Made by ",e.recipe.user.username),r.a.createElement("h1",null,e.recipe.title),r.a.createElement("em",null,r.a.createElement("p",null,e.recipe.category)),r.a.createElement("br",null),e.recipe.ingredient.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement(Q.a.Column,null,r.a.createElement("p",null,e.recipe.instruction),(console.log("lol",e.recipe.user),!!e.user&&e.recipe.user.username===e.user.username&&r.a.createElement("button",{onClick:function(){return t=e.recipe,m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:window.confirm("Are u sure?")&&e.removeRecipe(t).then((function(){return e.history.push("/myRecipes")}));case 2:case"end":return n.stop()}}));var t}},"remove"))),r.a.createElement(Q.a.Column,null,r.a.createElement("form",{onSubmit:function(t){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("comment"),t.preventDefault(),e.commentRecipe(e.recipe,c.value),u();case 4:case"end":return n.stop()}}))}},r.a.createElement("div",null,r.a.createElement("input",c)," ",r.a.createElement("button",{type:"submit"},"add comment"))),r.a.createElement("li",null,e.recipe.comments.map((function(e){return r.a.createElement("ul",{key:e.id},e.content)}))))),r.a.createElement(X.a,{vertical:!0},"Instruction"))}))),ee=Object(l.b)((function(e){return{recipes:e.recipes,user:e.user,users:e.users}}))((function(e){var t=Object(a.useState)(""),n=Object(U.a)(t,2),c=n[0],u=n[1];console.log("user",e.user),e.recipes.map((function(e){return console.log("reseipti",e.user)}));var l=c?e.user&&e.recipes.filter((function(t){return t.user.username===e.user.username&&t.category.toUpperCase().includes(c.toUpperCase())})):e.user&&e.recipes.filter((function(t){return t.user.username===e.user.username}));return r.a.createElement(K.a.Group,null,r.a.createElement("h2",null,"What kind of recipes you want to see?"),r.a.createElement(Z.a,{fluid:!0,widths:5},r.a.createElement(Z.a.Item,{onClick:function(){return u("")}},"All"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Meat")}},"Meat"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Vegetarian")}},"Vegetarian"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Soup")}},"Soup"),r.a.createElement(Z.a.Item,{onClick:function(){return u("Fish")}},"Fish")),l&&l.map((function(e){return r.a.createElement(L.b,{key:e.id,to:"/recipes/".concat(e.id)},r.a.createElement(K.a,null,r.a.createElement(K.a.Content,null,r.a.createElement(K.a.Header,null,e.title),r.a.createElement(K.a.Meta,null,e.category))))})))})),te=Object(l.b)((function(e){return{recipes:e.recipes,user:e.user}}))((function(e){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("h1",null,"Store your recipes, and search for other people recipes"),r.a.createElement("img",{src:n(355),alt:"made by @realvjy"}))})),ne={initializeLogin:function(){return function(e){var t,n;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(t=window.localStorage.getItem("loggedUser"))){a.next=6;break}return n=JSON.parse(t),a.next=5,m.a.awrap(w(n.token));case 5:e({data:n,type:"INITLOGIN"});case 6:case"end":return a.stop()}}))}},logout:function(){return window.localStorage.removeItem("loggedUser"),x(),{type:"LOGOUT"}},initializeRecipes:function(){return function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(y());case 2:t=n.sent,e({data:t,type:"INITIALIZE"});case 4:case"end":return n.stop()}}))}},initializeUsers:function(){return function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(E());case 2:t=n.sent,e({data:t,type:"INITUSERS"});case 4:case"end":return n.stop()}}))}}},ae=Object(l.b)((function(e){return{users:e.users,user:e.user,recipes:e.recipes}}),ne)((function(e){Object(a.useEffect)((function(){e.initializeUsers()}),[]),Object(a.useEffect)((function(){e.initializeRecipes()}),[]),Object(a.useEffect)((function(){e.initializeLogin()}),[]);var t=function(t){return e.recipes.find((function(e){return e.id===t}))},n={padding:5};return null===e.user?r.a.createElement(_.a,null,r.a.createElement(L.a,null,r.a.createElement(Z.a,{fluid:!0,widths:4},r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{style:n,to:"/"},"Home")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{to:"/recipes"}," All recipes ")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{style:n,to:"/login"},"Login")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{style:n,to:"/register"},"Register"))),r.a.createElement("div",null,r.a.createElement(M.a,{exact:!0,path:"/",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(M.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(M.a,{exact:!0,path:"/register",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(M.a,{exact:!0,path:"/recipes",render:function(){return r.a.createElement(B,null)}})),r.a.createElement(M.a,{exact:!0,path:"/recipes/:id",render:function(e){var n=e.match;return r.a.createElement($,{recipe:t(n.params.id)})}}))):r.a.createElement(_.a,null,r.a.createElement(L.a,null,r.a.createElement(Z.a,{fluid:!0,widths:5},r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{style:n,to:"/"},"Home")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{to:"/recipeForm"}," Add recipe ")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{to:"/recipes"}," All recipes ")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{to:"/myRecipes"},"my recipes")),r.a.createElement(Z.a.Item,null,r.a.createElement(L.b,{to:"/",onClick:e.logout},"logout"))),r.a.createElement("div",null,r.a.createElement(M.a,{exact:!0,path:"/",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(M.a,{exact:!0,path:"/recipeForm",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(M.a,{exact:!0,path:"/recipes",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(M.a,{exact:!0,path:"/myRecipes",render:function(){return r.a.createElement(ee,null)}})),r.a.createElement(M.a,{exact:!0,path:"/recipes/:id",render:function(e){var n=e.match;return r.a.createElement($,{recipe:t(n.params.id)})}})))}));u.a.render(r.a.createElement(l.a,{store:F},r.a.createElement(ae,null)),document.getElementById("root"))},51:function(e,t,n){}},[[202,1,2]]]);
//# sourceMappingURL=main.223b4840.chunk.js.map
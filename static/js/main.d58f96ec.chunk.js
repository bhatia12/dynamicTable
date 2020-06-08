(this.webpackJsonpdynamictable=this.webpackJsonpdynamictable||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},21:function(e,t,a){},22:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(21),a(3)),s=a(4),i=a(6),u=a(5),m=(a(22),a(15)),d=a(14),p=a(1),f=(a(9),a(7)),h=a(8),g=function(e){return e.taskList.map((function(t){return r.a.createElement(p.Tr,{key:t.index},r.a.createElement(p.Td,null),r.a.createElement(p.Td,null,t.projectName),r.a.createElement(p.Td,null,t.task),r.a.createElement(p.Td,null,t.taskNotes),r.a.createElement(p.Td,null,t.taskStatus),r.a.createElement(p.Td,null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.delete(t)}},r.a.createElement(f.a,{icon:h.b}))))}))},E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.postPerPage,e.totalPosts,e.paginate,e.nextPage),a=e.prevPage;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content center"},r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(){return a()}},"Previous")),r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(){return t()}},"Next"))))}}]),a}(n.Component),k=function(e){return e.taskList.map((function(e){return r.a.createElement(p.Tr,{key:e.id},r.a.createElement(p.Td,null,e.id),r.a.createElement(p.Td,null,e.name),r.a.createElement(p.Td,null,e.email),r.a.createElement(p.Td,null,e.body))}))},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.filterStatus=function(e){if("all"!==e.target.value){var t=n.state.copyTask.filter((function(t){return t.taskStatus===e.target.value}));n.setState({taskList:t})}else n.setState({taskList:n.state.copyTask})},n.filterEmail=function(e){if(""!==e.target.value){var t=n.state.copyTask.filter((function(t){return-1!==t.email.toLowerCase().indexOf(e.target.value)}));n.setState({addData:t})}else n.setState({addData:n.state.copyTask})},n.handleSubmit=function(e){var t={index:n.state.index++,projectName:n.state.projectName,task:n.state.task,taskNotes:n.state.taskNotes,taskStatus:n.state.taskStatus},a=n.state.taskList;a.push(t),n.setState({projectName:"",task:"",taskNotes:"",taskStatus:"",taskList:a,copyTask:a,loadComponent:!1,addClass:!1})},n.addNewRow=function(e){n.setState((function(e){return{taskList:Object(m.a)(e.taskList),loadComponent:!0}}))},n.deleteRow=function(e,t){window.confirm("Delete the item?")&&n.setState({taskList:n.state.taskList.filter((function(t){return t!==e}))})},n.state={taskList:[],addData:[],loadComponent:!1,addClass:!1,projectName:"",task:"",taskNotes:"",taskStatus:"",index:0,copyTask:[],currentPage:1,postPerPage:10},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()})).then((function(t){e.setState({addData:t,copyTask:t}),console.log(e.state.copyTask)}))}},{key:"render",value:function(){var e=this,t=this.state.loadComponent,a=this.state,l=a.taskList,o=a.addData,c=a.currentPage,s=a.postPerPage,i=c*s,u=o.length/s,m=i-s,d=o.slice(m,i);return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row",style:{marginTop:20}},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-center"},"Add Your Daily Task",r.a.createElement("button",{onClick:this.addNewRow,type:"button",className:"btn btn-primary float-right"},r.a.createElement(f.a,{icon:h.c}))),r.a.createElement("div",{className:"card-body"},r.a.createElement(p.Table,{className:"table"},r.a.createElement(p.Thead,null,r.a.createElement(p.Tr,null,r.a.createElement(p.Th,null,"User ID"),r.a.createElement(p.Th,{className:"required"},"Name"),r.a.createElement(p.Th,{className:"required"},"Email",r.a.createElement("input",{type:"text",onChange:this.filterEmail})),r.a.createElement(p.Th,null,"Message"))),r.a.createElement(p.Tbody,null,r.a.createElement(g,{taskList:l,delete:this.deleteRow.bind(this)}),t&&r.a.createElement(n.Fragment,null,r.a.createElement(p.Tr,null,r.a.createElement(p.Td,null),r.a.createElement(p.Td,null,r.a.createElement("input",{type:"text",required:!0,name:"projectName",className:"form-control",onChange:this.handleChange})),r.a.createElement(p.Td,null,r.a.createElement("input",{type:"text",required:!0,name:"task",className:"form-control",onChange:this.handleChange})),r.a.createElement(p.Td,null,r.a.createElement("textarea",{required:!0,name:"taskNotes",className:"form-control",onChange:this.handleChange})),r.a.createElement(p.Td,null,r.a.createElement("select",{name:"taskStatus",className:"form-control",onChange:this.handleChange},r.a.createElement("option",{value:"pending"},"Pending"),r.a.createElement("option",{value:"In Progress"},"In Progress"),r.a.createElement("option",{value:"Completed"},"Completed"),r.a.createElement("option",{value:"Hold"},"Hold"))),r.a.createElement(p.Td,null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.handleSubmit()}},r.a.createElement(f.a,{icon:h.a})),r.a.createElement("button",{className:"btn btn-danger",style:{marginTop:8}},r.a.createElement(f.a,{icon:h.b}))))),r.a.createElement(k,{taskList:d}))),r.a.createElement(E,{postPerPage:s,totalPosts:o.length,paginate:function(t){return e.setState({currentPage:t})},nextPage:function(){e.state.currentPage<u&&e.setState({currentPage:c+1})},prevPage:function(){e.state.currentPage>1&&e.setState({currentPage:c-1})}}))))))}}]),a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),a}(r.a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(29),a(30);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dynamicTable",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dynamicTable","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.d58f96ec.chunk.js.map
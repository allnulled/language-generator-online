(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/language-generator-online/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var f=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),o=i.n(n);o.a},1:function(t,e){},2:function(t,e){},"45f4":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("LanguageGenerator")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"LanguageGenerator"},[i("div",{staticClass:"Topbar"},[i("ul",{staticClass:"Navigation"},t._l(t.navigation.options,(function(e,n){return i("li",{key:n,staticClass:"NavigationItem",class:{selected:n===t.navigation.selected.option}},[i("button",{staticClass:"NavigationButton NormalButton styling-1",attrs:{type:"button"},on:{click:function(e){return t.setNavigationSelectedOption(n)}}},[t._v(t._s(e))])])})),0)]),"project"===t.navigation.selected.option?i("div",{staticClass:"Main Project"},[i("div",{staticClass:"Label styling-1 FirstLabel"},[t._v("Select a project:")]),i("table",{staticClass:"Table w100"},t._l(t.info.projects,(function(e,n){return i("tr",{key:n,staticClass:"Row"},[i("td",{staticClass:"Cell w100 styling-1 cursor-pointer hover-gray-light",class:{selected:n===t.info.navigation.selected.project},on:{click:function(e){return t.selectProject(n)}}},[i("span",{staticClass:"ProjectRef"},[t._v(t._s(e.name))])]),i("td",{staticClass:"Cell styling-1"},[i("button",{staticClass:"NormalButton styling-1",attrs:{type:"button"},on:{click:function(e){return t.renameProject(n)}}},[t._v("Edit")])]),i("td",{staticClass:"Cell styling-1"},[i("button",{staticClass:"NormalButton styling-1",attrs:{type:"button"},on:{click:function(e){return t.deleteProject(n)}}},[t._v("Delete")])])])})),0),i("div",[i("button",{staticClass:"NormalButton styling-1",attrs:{type:"button"},on:{click:t.createNewProject}},[t._v("New project")])])]):"editor"===t.navigation.selected.option&&"undefined"===typeof t.info.navigation.selected.project?i("div",{staticClass:"Main Editor"},[i("div",{staticClass:"styling-1"},[t._v("You need to select a project first.")])]):"editor"===t.navigation.selected.option?i("div",{key:t.info.navigation.selected.file,staticClass:"Main Editor"},[i("div",{staticClass:"EditorTopbar"},[i("table",{staticClass:"Table w100"},[i("tr",{staticClass:"Row"},[i("td",{staticClass:"Cell styling-1"},[i("button",{staticClass:"NormalButton styling-1",class:{selected:t.info.navigation.selected.editorSidebar},attrs:{type:"button"},on:{click:t.toggleEditorSidebar}},[t._v("Files")])]),i("td",{staticClass:"Cell w100 styling-2"},["undefined"!==typeof t.info.navigation.selected.project&&"undefined"!==typeof t.info.navigation.selected.file?i("span",[i("b",{staticClass:"styling-1 FilenameRefTitle"},[t._v(" "+t._s(t.info.projects[t.info.navigation.selected.project].files[t.info.navigation.selected.file].name)+" ")])]):i("span",[t._v(" (none) ")]),"undefined"!==typeof t.info.navigation.selected.project?i("span",[t._v("["),i("b",{staticClass:"underlined styling-1 ProjectNameRef"},[t._v(t._s(t.info.projects[t.info.navigation.selected.project].name))]),t._v("]")]):t._e()])])])]),i("table",{staticClass:"Table w100"},[i("tr",{staticClass:"Row"},[t.info.navigation.selected.editorSidebar?i("td",{staticClass:"Cell valign-top"},[i("div",{staticClass:"EditorSidebar"},[i("table",{staticClass:"Table w100",attrs:{cellpadding:"0",cellspacing:"0"}},[t._l(t.info.projects[t.info.navigation.selected.project].files,(function(e,n){return i("tr",{key:n,staticClass:"Row"},[i("td",{staticClass:"Cell w100 styling-1 hover-gray-light",class:{selected:"number"===typeof t.info.navigation.selected.file&&e.name===t.info.projects[t.info.navigation.selected.project].files[t.info.navigation.selected.file].name}},[i("div",{staticClass:"FilenameRef",attrs:{title:e.name},on:{click:function(e){return t.selectFile(n)}}},[t._v(t._s(e.name))])])])})),i("tr",{staticClass:"Row"},[i("td",{staticClass:"Cell",attrs:{colspan:"5"}},[i("button",{staticClass:"NormalButton styling-1 w100",on:{click:t.createNewFile}},[t._v("New file")]),"undefined"!==typeof t.info.navigation.selected.file?i("table",{staticClass:"w100",attrs:{cellpadding:"0",cellspacing:"0"}},[i("tr",[i("td",{staticClass:"w50"},["undefined"!==typeof t.info.navigation.selected.file?i("button",{staticClass:"NormalButton styling-1 w100",on:{click:t.moveFileUp}},[t._v("Up")]):t._e()]),i("td",{staticClass:"min-width-2"}),i("td",{staticClass:"w50"},["undefined"!==typeof t.info.navigation.selected.file?i("button",{staticClass:"NormalButton styling-1 w100",on:{click:t.moveFileDown}},[t._v("Down")]):t._e()])])]):t._e(),"undefined"!==typeof t.info.navigation.selected.file?i("button",{staticClass:"NormalButton styling-1 w100",on:{click:t.deleteFile}},[t._v("Delete file")]):t._e(),"undefined"!==typeof t.info.navigation.selected.file?i("button",{staticClass:"NormalButton styling-1 w100",on:{click:t.renameFile}},[t._v("Edit name")]):t._e(),"undefined"!==typeof t.info.navigation.selected.file?i("table",{staticClass:"w100",attrs:{cellpadding:"0",cellspacing:"0"}},[i("tr",[i("td",{staticClass:"w50"},[i("button",{staticClass:"NormalButton styling-1 w100 whitespace-nowrap",on:{click:t.decreaseFont}},[t._v("Font-")])]),i("td",{staticClass:"min-width-2"}),i("td",{staticClass:"w50"},[i("button",{staticClass:"NormalButton styling-1 w100 whitespace-nowrap",on:{click:t.increaseFont}},[t._v("Font+")])])])]):t._e()])])],2)])]):t._e(),i("td",{staticClass:"Cell w100"},["undefined"!==typeof t.info.navigation.selected.project&&"undefined"!==typeof t.info.navigation.selected.file?i("div",{staticClass:"EditorInput"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.info.projects[t.info.navigation.selected.project].files[t.info.navigation.selected.file].contents,expression:"info.projects[info.navigation.selected.project].files[info.navigation.selected.file].contents"}],staticClass:"EditorTextarea w100",style:{fontSize:t.info.settings.fontSize+"px"},domProps:{value:t.info.projects[t.info.navigation.selected.project].files[t.info.navigation.selected.file].contents},on:{input:[function(e){e.target.composing||t.$set(t.info.projects[t.info.navigation.selected.project].files[t.info.navigation.selected.file],"contents",e.target.value)},t.storeInfo]}})]):t._e()])])])]):"options"===t.navigation.selected.option?i("div",{staticClass:"Main Options"},[i("div",{staticClass:"Label styling-1 FirstLabel"},[t._v("Options:")]),i("fieldset",[t._m(0),i("div",[i("button",{staticClass:"NormalButton styling-1",attrs:{type:"button"},on:{click:t.generateParser}},[t._v("Generate parser")])])]),i("br"),t._m(1)]):"help"===t.navigation.selected.option?i("div",{staticClass:"Main Help"},[i("div",{staticClass:"Label styling-1 FirstLabel",on:{click:t.debugMe}},[t._v("Help:")]),t._m(2)]):"tester"===t.navigation.selected.option?i("div",{staticClass:"Main Tester"},[i("div",{staticClass:"Label FirstLabel styling-1"},[t._v("Testing language: "),i("b",[t._v(t._s(t.info.projects[t.info.navigation.selected.project].name))])]),i("div",{staticClass:"Label FirstLabel styling-1"},[t._v("Input:")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.info.tester.input,expression:"info.tester.input"}],staticClass:"EditorTextarea w100",style:{fontSize:t.info.settings.fontSize+"px"},domProps:{value:t.info.tester.input},on:{input:[function(e){e.target.composing||t.$set(t.info.tester,"input",e.target.value)},t.generateTesterOutput]}}),t.info.tester.error?i("div",[i("div",{staticClass:"Label FirstLabel styling-1"},[t._v("Error:")]),i("div",{staticClass:"ErrorBox TesterErrorBox"},[i("span",{staticClass:"ErrorCloser TesterErrorCloser styling-1",on:{click:t.clearTesterError}},[t._v("Okay")]),i("pre",{staticClass:"ErrorMessage TesterErrorMessage styling-3"},[t._v(t._s(t.info.tester.error))])])]):t._e(),i("div",{staticClass:"Label FirstLabel styling-1"},[t._v("Output:")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.info.tester.output,expression:"info.tester.output"}],staticClass:"EditorTextarea w100",style:{fontSize:t.info.settings.fontSize+"px"},domProps:{value:t.info.tester.output},on:{input:[function(e){e.target.composing||t.$set(t.info.tester,"output",e.target.value)},t.storeInfo]}})]):t._e(),i("div",{staticClass:"Footer"},[t.info.navigation.footer.error?i("div",{key:t.info.navigation.footer.error,staticClass:"ErrorBox styling-3"},[i("span",{staticClass:"ErrorCloser styling-1",on:{click:t.clearFooterError}},[t._v("Okay")]),i("pre",{staticClass:"ErrorMessage"},[t._v(t._s(t.info.navigation.footer.error))])]):t._e()])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("legend",[i("span",{staticClass:"styling-1"},[t._v("Generators:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("fieldset",[i("legend",[i("span",{staticClass:"styling-1"},[t._v("Project settings:")])]),i("div",{staticClass:"styling-1"},[t._v(" There are no settings yet. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"styling-2"},[i("div",[t._v("This editor is designed for you to create programming languages easily.")]),i("br"),i("div",{staticClass:"Label styling-1 FirstLabel underlined"},[t._v("The idea:")]),i("div",[t._v("The idea is quite simple: you can split the source code of your own programming language in as many files as you need.")]),i("div",[t._v("This way, you can scale the volume of code that your language requires effortlessly.")]),i("div",[t._v("Also, this application can be used as a whole environment that can remember the state of the editor anytime (this feature relies on "),i("b",[t._v("localStorage")]),t._v(").")]),i("div",[t._v("Another advantage is that you can work from a mobile phone: the app is responsive, and fully compatible with mobile devices.")]),i("br"),i("div",{staticClass:"Label styling-1 FirstLabel underlined"},[t._v("To sum up:")]),i("div",[t._v("Briefly explained, these are the reasons and advantages that me, as the author, was looking for with this application:")]),i("ul",{staticClass:"DocumentationList"},[i("li",[i("div",[t._v("To be able to create programming languages...")]),i("ul",{staticClass:"DocumentationList DocumentationList2"},[i("li",[t._v("- with just a mobile phone")]),i("li",[t._v("- through many different files")]),i("li",[t._v("- with the possibility to test the grammars and see the output")]),i("li",[t._v("- with custom parser generators (right now, only "),i("a",{attrs:{href:"https://pegjs.org"}},[t._v("PEGjs")]),t._v(" is available, but it would be easy to change the framework by another)")]),i("li",[t._v("- with custom language generators (right now, there is only one generator)")])])])]),i("div",{staticClass:"Label styling-1 FirstLabel underlined"},[t._v("External resources:")]),i("div",[t._v("These external websites can be helpful documentation references:")]),i("br"),i("ul",{staticClass:"DocumentationList"},[i("li",[i("div",[i("b",[t._v("PEGjs:")])]),i("ul",{staticClass:"DocumentationList DocumentationList2"},[i("li",[t._v("- "),i("a",{attrs:{href:"https://pegjs.org/documentation"}},[t._v("Documentation")]),t._v(".")]),i("li",[t._v("- "),i("a",{attrs:{href:"https://github.com/pegjs/pegjs"}},[t._v("Source code")]),t._v(".")]),i("li",[t._v("- "),i("a",{attrs:{href:"https://pegjs.org/online"}},[t._v("Online application")]),t._v(" (the same of this application, but simpler).")])])]),i("li",[i("div",[i("b",[t._v("Codemirror")]),t._v(": (not yet related, but hopefully soon)")]),i("ul",{staticClass:"DocumentationList DocumentationList2"},[i("li",[t._v("- "),i("a",{attrs:{href:"https://codemirror.net/doc/manual.html"}},[t._v("Documentation")]),t._v(".")]),i("li",[t._v("- "),i("a",{attrs:{href:"https://github.com/codemirror/CodeMirror"}},[t._v("Source code")]),t._v(".")]),i("li",[t._v("- "),i("a",{attrs:{href:"https://codemirror.net/doc/manual.html#addons"}},[t._v("Editor addons")]),t._v(".")])])])]),i("div",{staticClass:"Label styling-1 FirstLabel underlined"},[t._v("License:")]),i("div",[t._v("The license of this project is just "),i("a",{attrs:{href:"http://www.wtfpl.net/"}},[t._v("WTFPL")]),t._v(" by default.")]),i("div",[t._v("On the other hand, it is tied to other project licenses, like:")]),i("ul",{staticClass:"DocumentationList DocumentationList2"},[i("li",[t._v("- "),i("a",{attrs:{href:"https://www.npmjs.com/package/vue"}},[t._v("vue")])]),i("li",[t._v("- "),i("a",{attrs:{href:"https://www.npmjs.com/package/core-js"}},[t._v("core-js")])]),i("li",[t._v("- "),i("a",{attrs:{href:"https://www.npmjs.com/package/jszip"}},[t._v("jszip")])]),i("li",[t._v("- "),i("a",{attrs:{href:"https://www.npmjs.com/package/pegjs"}},[t._v("pegjs")])])]),i("br")])}],l=(i("99af"),i("c975"),i("a15b"),i("d81d"),i("a434"),i("b0c0"),i("498a"),i("53ca")),c=i("7c39"),f=i.n(c),d=i("8180"),u=i.n(d),p=i("b822"),v=i.n(p),g=i("b907"),h=i.n(g),m="LANGUAGE_GENERATOR_STORAGE",y=1e3,_={name:"LanguageGenerator",components:{},data:function(){return{navigation:{selected:{option:"project"},options:{project:"Project",editor:"Editor",tester:"Tester",options:"Options",help:"Help"}},volatile:{testerInputTimeoutId:void 0,parser:void 0},info:{navigation:{selected:{project:void 0,file:void 0,editorSidebar:!1},footer:{error:void 0}},projects:[],settings:{fontSize:10},tester:{input:"",error:"",output:""}}}},mounted:function(){this.retrieveInfo()},methods:{debugMe:function(){window.LanguageGeneratorComponent=this},storeInfo:function(){localStorage[m]=JSON.stringify(Object.assign({},this.info))},retrieveInfo:function(){var t=localStorage[m],e=JSON.parse(t);this.info=Object.assign({},e)},createNewProject:function(){var t=window.prompt("Name of the new project:");if(this.checkProjectName(t))return this.info.projects.push({name:t,files:[]}),this.storeInfo()},selectProject:function(t){this.info.navigation.selected.project=t,this.info.navigation.selected.file=void 0,this.navigation.selected.option="editor",this.storeInfo()},renameProject:function(t){var e=window.prompt("New name for project <".concat(this.info.projects[t].name,">:"));this.checkProjectName(e)&&(this.info.projects[t].name=e,this.storeInfo())},deleteProject:function(t){confirm("Are you sure to remove project <".concat(this.info.projects[t].name,">?"))&&(this.info.projects.splice(t,1),this.storeInfo())},checkProjectName:function(t){return"string"===typeof t&&(this.info.projects.reduce((function(e,i){return i.name.toLowerCase()===t.toLowerCase()||e}),!1)?(window.alert("A project named <".concat(t,"> already exists.")),!1):""!==t.trim()||(window.alert("A project name cannot be empty."),!1))},createNewFile:function(){var t=window.prompt("Name of the new file:"),e=this.info.navigation.selected.project;this.checkFileName(t,e)&&(this.info.projects[e].files.push({name:t,contents:""}),this.storeInfo())},selectFile:function(t){this.info.navigation.selected.file=t,this.$forceUpdate(),this.storeInfo()},renameFile:function(){var t=this.info.navigation.selected.project,e=this.info.navigation.selected.file,i=window.prompt("New name for file <".concat(this.info.projects[t].files[e].name,"> of project <").concat(this.info.projects[t].name,">:"));this.checkFileName(i,t)&&(this.info.projects[t].files[e].name=i,this.storeInfo())},deleteFile:function(){var t=this.info.navigation.selected.project,e=this.info.navigation.selected.file;window.confirm("Are you sure you want to delete file <".concat(this.info.projects[t].files[e].name,"> from project <").concat(this.info.projects[t].name,">?"))&&(this.info.navigation.selected.file=void 0,this.info.projects[t].files.splice(e,1),this.storeInfo())},moveFileUp:function(){var t=this.info.navigation.selected.project,e=this.info.navigation.selected.file;0!==e&&(v()(this.info.projects[t].files,e,e-1),this.info.navigation.selected.file===e?this.info.navigation.selected.file-=1:this.info.navigation.selected.file===e-1&&(this.info.navigation.selected.file+=1),this.storeInfo())},moveFileDown:function(){var t=this.info.navigation.selected.project,e=this.info.navigation.selected.file;e!==this.info.projects[t].files.length-1&&(v()(this.info.projects[t].files,e,e+1),this.info.navigation.selected.file===e?this.info.navigation.selected.file+=1:this.info.navigation.selected.file===e+1&&(this.info.navigation.selected.file-=1),this.storeInfo())},checkFileName:function(t,e){return null!==t&&(this.info.projects[e].files.reduce((function(e,i){return i.name.toLowerCase()===t.toLowerCase()||e}),!1)?(window.alert("A file named <".concat(t,"> in project <").concat(this.info.projects[e].name,"> already exists.")),!1):""!==t.trim()||(window.alert("A file name cannot be empty"),!1))},setNavigationSelectedOption:function(t){if(-1!==["editor","tester"].indexOf(t)&&"undefined"===typeof this.info.navigation.selected.project)return alert("You have to select a project first.");if("tester"===t){var e=this.generateVolatileParser();if("object"!==Object(l["a"])(e))return;this.volatile.parser=e,this.info.navigation.footer.error=void 0}this.navigation.selected.option=t},toggleEditorSidebar:function(){this.info.navigation.selected.editorSidebar=!this.info.navigation.selected.editorSidebar,this.storeInfo()},increaseFont:function(){this.info.settings.fontSize++,this.storeInfo()},decreaseFont:function(){this.info.settings.fontSize--,this.storeInfo()},setFooterError:function(t){this.info.navigation.footer.error=t,this.$forceUpdate(),this.storeInfo()},clearFooterError:function(){this.setFooterError(void 0),this.$forceUpdate(),this.storeInfo()},setTesterError:function(t){this.info.tester.error=t,this.$forceUpdate(),this.storeInfo()},clearTesterError:function(){this.info.tester.error=void 0,this.$forceUpdate(),this.storeInfo()},handleFooterError:function(t,e){return console.log(t),t.message?this.setFooterError("".concat(e,":\n").concat(t.message,"\nLocation: ").concat(t.location.start.line,":").concat(t.location.start.column," - ").concat(t.location.end.line,":").concat(t.location.end.column)):this.setFooterError("".concat(e,":\n").concat(JSON.stringify(t))),!1},handleTesterError:function(t,e){return console.log(t),t.message?this.setTesterError("".concat(e,":\n").concat(t.message,"\nLocation: ").concat(t.location.start.line,":").concat(t.location.start.column," - ").concat(t.location.end.line,":").concat(t.location.end.column)):this.setTesterError("".concat(e,":\n").concat(JSON.stringify(t))),!1},generateParser:function(){if("undefined"===typeof this.info.navigation.selected.project)return alert("You have to select a project first.");var t=this.info.projects[this.info.navigation.selected.project].files.map((function(t){return t.contents})).join("\n");try{var e=u.a.generate(t,{format:"umd",output:"source"});h()(this.info.projects[this.info.navigation.selected.project].name+".pegjs",e)}catch(i){return this.handleFooterError(i,"Error generating parser")}},generateVolatileParser:function(){if("undefined"===typeof this.info.navigation.selected.project)return alert("You have to select a project first.");var t=this.info.projects[this.info.navigation.selected.project].files.map((function(t){return t.contents})).join("\n");try{return u.a.generate(t)}catch(e){return this.handleFooterError(e,"Error generating parser")}},generateTesterOutput:function(){var t=this,e=this.volatile.testerInputTimeoutId;clearTimeout(e),this.volatile.testerInputTimeoutId=setTimeout((function(){var e=t.info.tester.input;try{var i=t.volatile.parser.parse(e);"string"!==typeof t.info.tester.output?t.info.tester.output=JSON.stringify(i,null,2):t.info.tester.output=i,t.clearTesterError()}catch(n){return t.handleTesterError(n,"Error generating output")}t.$forceUpdate(),t.storeInfo()}),y)},generateProject:function(){var t=new f.a;console.log(Object(l["a"])(t))}}},b=_,j=(i("90dd"),i("2877")),w=Object(j["a"])(b,a,r,!1,null,null,null),C=w.exports,E={name:"app",components:{LanguageGenerator:C}},F=E,L=(i("034f"),Object(j["a"])(F,o,s,!1,null,null,null)),T=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T)}}).$mount("#app")},"85ec":function(t,e,i){},"90dd":function(t,e,i){"use strict";var n=i("45f4"),o=i.n(n);o.a},b822:function(t,e,i){i("a434"),t.exports=function(t,e,i){t.splice(i,0,t.splice(e,1)[0])}},b907:function(t,e){t.exports=function(t,e){var i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),i.setAttribute("download",t),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}});
//# sourceMappingURL=app.81367c64.js.map
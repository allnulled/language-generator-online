<template>
	<div class="LanguageGenerator">
		<!-- BEGINING OF COMPONENT -->

		<!-- TOPBAR -->
		<div class="Topbar">
			<ul class="Navigation">
				<li class="NavigationItem"
					:class="{selected: optionIndex === navigation.selected.option}"
					v-for="(option, optionIndex) in navigation.options"
					v-bind:key="optionIndex">
					<button class="NavigationButton NormalButton styling-1"
						type="button"
						v-on:click="setNavigationSelectedOption(optionIndex)">{{ option }}</button>
				</li>
			</ul>
		</div>

		<!-- MAIN:PROJECT -->
		<div class="Main Project" v-if="navigation.selected.option === 'project'">
			<div class="Label styling-1 FirstLabel">Select a project:</div>
			<table class="Table w100">
				<tr class="Row" v-for="(project, projectIndex) in info.projects" v-bind:key="projectIndex">
					<td class="Cell w100 styling-1 cursor-pointer hover-gray-light" :class="{ selected: projectIndex === info.navigation.selected.project }" v-on:click="selectProject(projectIndex)">
						<span class="ProjectRef">{{ project.name }}</span>
					</td>
					<td class="Cell styling-1">
						<button class="NormalButton styling-1" type="button" v-on:click="renameProject(projectIndex)">Edit</button>
					</td>
					<td class="Cell styling-1">
						<button class="NormalButton styling-1" type="button" v-on:click="deleteProject(projectIndex)">Delete</button>
					</td>
				</tr>
			</table>
			<div>
				<button type="button" class="NormalButton styling-1" v-on:click="createNewProject">New project</button>
			</div>
		</div>
		
		<!-- MAIN:EDITOR -->
		<div class="Main Editor" v-else-if="navigation.selected.option === 'editor' && typeof info.navigation.selected.project === 'undefined'">
			<div class="styling-1">You need to select a project first.</div>
		</div>
		<div class="Main Editor" v-else-if="navigation.selected.option === 'editor'" :key="info.navigation.selected.file">

			<!-- MAIN:EDITOR:TOPBAR -->
			<div class="EditorTopbar">
				<table class="Table w100">
					<tr class="Row">
						<td class="Cell styling-1">
							<button class="NormalButton styling-1" :class="{selected: info.navigation.selected.editorSidebar}" type="button" v-on:click="toggleEditorSidebar">Files</button>
						</td>
						<td class="Cell w100 styling-2">
							<span v-if="(typeof info.navigation.selected.project !== 'undefined') && (typeof info.navigation.selected.file !== 'undefined')">
								<b class="styling-1 FilenameRefTitle"> {{ info.projects[info.navigation.selected.project].files[info.navigation.selected.file].name }} </b>
							</span>
							<span v-else>
								(none)
							</span>
							<span v-if="typeof info.navigation.selected.project !== 'undefined'">[<b class="underlined styling-1 ProjectNameRef">{{ info.projects[info.navigation.selected.project].name }}</b>]</span>
						</td>
					</tr>
				</table>
			</div>

			<!-- MAIN:EDITOR:SIDEBAR -->
			<table class="Table w100">
				<tr class="Row">
					<td class="Cell valign-top" v-if="info.navigation.selected.editorSidebar">
						<div class="EditorSidebar">
							<table class="Table w100" cellpadding="0" cellspacing="0">
								<tr class="Row" v-for="(file, fileIndex) in info.projects[info.navigation.selected.project].files" v-bind:key="fileIndex">
									<td class="Cell w100 styling-1 hover-gray-light" :class="{ selected: (typeof info.navigation.selected.file === 'number') && (file.name === info.projects[info.navigation.selected.project].files[info.navigation.selected.file].name) }">
										<div class="FilenameRef" :title="file.name" v-on:click="selectFile(fileIndex)">{{ file.name }}</div>
									</td>
								</tr>
								<tr class="Row">
									<td class="Cell" colspan="5">
										<button class="NormalButton styling-1 w100" v-on:click="createNewFile">New file</button>
										<table class="w100" cellpadding="0" cellspacing="0" v-if="typeof info.navigation.selected.file !== 'undefined'">
											<tr>
												<td class="w50">
													<button class="NormalButton styling-1 w100" v-on:click="moveFileUp" v-if="typeof info.navigation.selected.file !== 'undefined'">Up</button>
												</td>
												<td class="min-width-2"></td>
												<td class="w50">
													<button class="NormalButton styling-1 w100" v-on:click="moveFileDown" v-if="typeof info.navigation.selected.file !== 'undefined'">Down</button>
												</td>
											</tr>
										</table>
										<button class="NormalButton styling-1 w100" v-on:click="deleteFile" v-if="typeof info.navigation.selected.file !== 'undefined'">Delete file</button>
										<button class="NormalButton styling-1 w100" v-on:click="renameFile" v-if="typeof info.navigation.selected.file !== 'undefined'">Edit name</button>
										<table class="w100" cellpadding="0" cellspacing="0" v-if="typeof info.navigation.selected.file !== 'undefined'">
											<tr>
												<td class="w50">
													<button class="NormalButton styling-1 w100 whitespace-nowrap" v-on:click="decreaseFont">Font-</button>
												</td>
												<td class="min-width-2"></td>
												<td class="w50">
													<button class="NormalButton styling-1 w100 whitespace-nowrap" v-on:click="increaseFont">Font+</button>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</div>
					</td>
					<td class="Cell w100">
						<div class="EditorInput" v-if="typeof info.navigation.selected.project !== 'undefined' && typeof info.navigation.selected.file !== 'undefined'">
							<textarea class="EditorTextarea w100" v-model="info.projects[info.navigation.selected.project].files[info.navigation.selected.file].contents" :style="{fontSize: info.settings.fontSize + 'px'}" @input="storeInfo"></textarea>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<!-- MAIN:OPTIONS -->
		<div class="Main Options" v-else-if="navigation.selected.option === 'options'">
			<div class="Label styling-1 FirstLabel">Options:</div>
			<fieldset>
				<legend>
					<span class="styling-1">Generators:</span>
				</legend>
				<div>
					<button class="NormalButton styling-1" type="button" v-on:click="generateParser">Generate parser</button>
				</div>
			</fieldset>
			<br/>
			<fieldset>
				<legend>
					<span class="styling-1">Project settings:</span>
				</legend>
				<div class="styling-1">
					There are no settings yet.
				</div>
			</fieldset>
		</div>
		
		<!-- MAIN:HELP -->
		<div class="Main Help" v-else-if="navigation.selected.option === 'help'">
			<div class="Label styling-1 FirstLabel" v-on:click="debugMe">Help:</div>
			<div class="styling-2">
				<div>This editor is designed for you to create programming languages easily.</div>
				<br/>
				<div class="Label styling-1 FirstLabel underlined">The idea:</div>
				<div>The idea is quite simple: you can split the source code of your own programming language in as many files as you need.</div>
				<div>This way, you can scale the volume of code that your language requires effortlessly.</div>
				<div>Also, this application can be used as a whole environment that can remember the state of the editor anytime (this feature relies on <b>localStorage</b>).</div>
				<div>Another advantage is that you can work from a mobile phone: the app is responsive, and fully compatible with mobile devices.</div>
				<br/>
				<div class="Label styling-1 FirstLabel underlined">To sum up:</div>
				<div>Briefly explained, these are the reasons and advantages that me, as the author, was looking for with this application:</div>
				<ul class="DocumentationList">
					<li>
						<div>To be able to create programming languages...</div>
						<ul class="DocumentationList DocumentationList2">
							<li>- with just a mobile phone</li>
							<li>- through many different files</li>
							<li>- with the possibility to test the grammars and see the output</li>
							<li>- with custom parser generators (right now, only <a href="https://pegjs.org">PEGjs</a> is available, but it would be easy to change the framework by another)</li>
							<li>- with custom language generators (right now, there is only one generator)</li>
						</ul>
					</li>
				</ul>
				<div class="Label styling-1 FirstLabel underlined">External resources:</div>
				<div>These external websites can be helpful documentation references:</div>
				<br/>
				<ul class="DocumentationList">
					<li>
						<div><b>PEGjs:</b></div>
						<ul class="DocumentationList DocumentationList2">
							<li>- <a href="https://pegjs.org/documentation">Documentation</a>.</li>
							<li>- <a href="https://github.com/pegjs/pegjs">Source code</a>.</li>
							<li>- <a href="https://pegjs.org/online">Online application</a> (the same of this application, but simpler).</li>
						</ul>
					</li>
					<li>
						<div><b>Codemirror</b>: (not yet related, but hopefully soon)</div>
						<ul class="DocumentationList DocumentationList2">
							<li>- <a href="https://codemirror.net/doc/manual.html">Documentation</a>.</li>
							<li>- <a href="https://github.com/codemirror/CodeMirror">Source code</a>.</li>
							<li>- <a href="https://codemirror.net/doc/manual.html#addons">Editor addons</a>.</li>
						</ul>
					</li>
				</ul>
				<div class="Label styling-1 FirstLabel underlined">License:</div>
				<div>The license of this project is just <a href="http://www.wtfpl.net/">WTFPL</a> by default.</div>
				<div>On the other hand, it is tied to other project licenses, like:</div>
				<ul class="DocumentationList DocumentationList2">
					<li>- <a href="https://www.npmjs.com/package/vue">vue</a></li>
					<li>- <a href="https://www.npmjs.com/package/core-js">core-js</a></li>
					<li>- <a href="https://www.npmjs.com/package/jszip">jszip</a></li>
					<li>- <a href="https://www.npmjs.com/package/pegjs">pegjs</a></li>
				</ul>
				<br/>
			</div>
		</div>
		
		<!-- MAIN:TESTER -->
		<div class="Main Tester" v-else-if="navigation.selected.option === 'tester'">
			<div class="Label FirstLabel styling-1">Testing language: <b>{{ info.projects[info.navigation.selected.project].name }}</b></div>
			<div class="Label FirstLabel styling-1">Input:</div>
			<textarea class="EditorTextarea w100" v-model="info.tester.input" :style="{fontSize: info.settings.fontSize + 'px'}" @input="generateTesterOutput"></textarea>
			<div v-if="info.tester.error">
				<div class="Label FirstLabel styling-1">Error:</div>
				<div class="ErrorBox TesterErrorBox">
					<span class="ErrorCloser TesterErrorCloser styling-1" v-on:click="clearTesterError">Okay</span>
					<pre class="ErrorMessage TesterErrorMessage styling-3">{{ info.tester.error }}</pre>
				</div>
			</div>
			<div class="Label FirstLabel styling-1">Output:</div>
			<textarea class="EditorTextarea w100" v-model="info.tester.output" :style="{fontSize: info.settings.fontSize + 'px'}" @input="storeInfo"></textarea>
		</div>

		<!-- FOOTER -->
		<div class="Footer">
			<div class="ErrorBox styling-3" v-if="info.navigation.footer.error" :key="info.navigation.footer.error">
				<span class="ErrorCloser styling-1" v-on:click="clearFooterError">Okay</span>
				<pre class="ErrorMessage">{{ info.navigation.footer.error }}</pre>
			</div>
		</div>

		<!-- END OF COMPONENT -->
	</div>
</template>
<script>

import JSZip from "jszip";
import pegjs from "pegjs";
import moveArrayIndex from "@/assets/scripts/move-array-index.js";
import downloadFile from "@/assets/scripts/download-file.js";

const STORAGE_ID = "LANGUAGE_GENERATOR_STORAGE";
const TESTER_TIMEOUT = 1000;

export default {
	name: "LanguageGenerator",
	components: {},
	data() {
		return {
			navigation: {
				selected: {
					option: "project",
				},
				options: {
					project: "Project",
					editor: "Editor",
					tester: "Tester",
					options: "Options",
					help: "Help",
				}
			},
			volatile: {
				testerInputTimeoutId: undefined,
				parser: undefined
			},
			info: {
				navigation: {
					selected: {
						project: undefined,
						file: undefined,
						editorSidebar: false
					},
					footer: {
						error: undefined
					}
				},
				projects: [],
				settings: {
					fontSize: 10
				},
				tester: {
					input: "",
					error: "",
					output: ""
				}
			}
		};
	},
	mounted() {
		this.retrieveInfo();
	},
	methods: {
		debugMe() {
			window.LanguageGeneratorComponent = this;
		},

		///////////////////////////////////////////////////////////
		// Persistence actions:
		storeInfo() {
			localStorage[STORAGE_ID] = JSON.stringify(Object.assign({}, this.info));
		},
		retrieveInfo() {
			const infoJson = localStorage[STORAGE_ID];
			const info = JSON.parse(infoJson);
			this.info = Object.assign({}, info);
		},

		///////////////////////////////////////////////////////////
		// Project actions:
		createNewProject() {
			const projectName = window.prompt("Name of the new project:");
			if(this.checkProjectName(projectName)) {
				this.info.projects.push({name: projectName, files: []});
				this.$forceUpdate();
				this.storeInfo();
			}
		},
		selectProject(projectIndex) {
			this.info.navigation.selected.project = projectIndex;
			this.info.navigation.selected.file = undefined;
			this.navigation.selected.option = "editor";
			this.$forceUpdate();
			this.storeInfo();
		},
		renameProject(projectIndex) {
			const projectName = window.prompt(`New name for project <${this.info.projects[projectIndex].name}>:`);
			if(this.checkProjectName(projectName)) {
				this.info.projects[projectIndex].name = projectName;
				this.$forceUpdate();
				this.storeInfo();
			}
		},
		deleteProject(projectIndex) {
			if(confirm(`Are you sure to remove project <${this.info.projects[projectIndex].name}>?`)) {
				this.info.projects.splice(projectIndex, 1);
				this.$forceUpdate();
				this.storeInfo();
			}
		},
		checkProjectName(projectName) {
			if(typeof projectName !== "string") {
				return false;
			} else if(this.info.projects.reduce((result, project) => {
				if(project.name.toLowerCase() === projectName.toLowerCase()) {
					return true;
				}
				return result;
			}, false)) {
				window.alert(`A project named <${projectName}> already exists.`);
				return false;
			} else if(projectName.trim() === "") {
				window.alert(`A project name cannot be empty.`);
				return false;
			}
			return true;
		},
		
		///////////////////////////////////////////////////////////
		// File actions:
		createNewFile() {
			const fileName = window.prompt("Name of the new file:");
			const projectIndex = this.info.navigation.selected.project;
			if(this.checkFileName(fileName, projectIndex)) {
				this.info.projects[projectIndex].files.push({ name: fileName, contents: "" });
				this.$forceUpdate();
				this.storeInfo();
			}
		},
		selectFile(fileIndex) {
			this.info.navigation.selected.file = fileIndex;
			this.$forceUpdate();
			this.storeInfo();
		},
		renameFile() {
			const projectIndex = this.info.navigation.selected.project;
			const fileIndex = this.info.navigation.selected.file;
			const fileName = window.prompt(`New name for file <${this.info.projects[projectIndex].files[fileIndex].name}> of project <${this.info.projects[projectIndex].name}>:`);
			if(this.checkFileName(fileName, projectIndex)) {
				this.info.projects[projectIndex].files[fileIndex].name = fileName;
				this.$forceUpdate();
				this.storeInfo();
			}
		},
		deleteFile() {
			const projectIndex = this.info.navigation.selected.project;
			const fileIndex = this.info.navigation.selected.file;
			if(window.confirm(`Are you sure you want to delete file <${this.info.projects[projectIndex].files[fileIndex].name}> from project <${this.info.projects[projectIndex].name}>?`)) {
				this.info.navigation.selected.file = undefined;
				this.info.projects[projectIndex].files.splice(fileIndex, 1);
				this.storeInfo();
			}
		},
		moveFileUp() {
			const projectIndex = this.info.navigation.selected.project;
			const fileIndex = this.info.navigation.selected.file;
			if(fileIndex === 0) {
				return;
			}
			moveArrayIndex(this.info.projects[projectIndex].files, fileIndex, fileIndex - 1);
			if(this.info.navigation.selected.file === fileIndex) {
				this.info.navigation.selected.file -= 1;
			} else if(this.info.navigation.selected.file === (fileIndex - 1)) {
				this.info.navigation.selected.file += 1;
			}
			this.$forceUpdate();
			this.storeInfo();
		},
		moveFileDown() {
			const projectIndex = this.info.navigation.selected.project;
			const fileIndex = this.info.navigation.selected.file;
			if(fileIndex === (this.info.projects[projectIndex].files.length-1)) {
				return;
			}
			moveArrayIndex(this.info.projects[projectIndex].files, fileIndex, fileIndex + 1);
			if(this.info.navigation.selected.file === fileIndex) {
				this.info.navigation.selected.file += 1;
			} else if(this.info.navigation.selected.file === (fileIndex + 1)) {
				this.info.navigation.selected.file -= 1;
			}
			this.$forceUpdate();
			this.storeInfo();
		},
		checkFileName(fileName, projectIndex) {
			if(fileName === null) {
				return false;
			} else if(this.info.projects[projectIndex].files.reduce((result, file) => {
				if(file.name.toLowerCase() === fileName.toLowerCase()) {
					return true;
				}
				return result;
			}, false)) {
				window.alert(`A file named <${fileName}> in project <${this.info.projects[projectIndex].name}> already exists.`);
				return false;
			} else if(fileName.trim() === "") {
				window.alert("A file name cannot be empty");
				return false;
			}
			return true;
		},

		///////////////////////////////////////////////////////////
		// Editor UI actions:
		setNavigationSelectedOption(optionIndex) {
			if((["editor", "tester"].indexOf(optionIndex) !== -1) && typeof this.info.navigation.selected.project === 'undefined') {
				return alert("You have to select a project first.");
			} else if(optionIndex === "tester") {
				const parser = this.generateVolatileParser();
				if(typeof parser !== "object") {
					return;
				}
				this.volatile.parser = parser;
				this.info.navigation.footer.error = undefined;
			}
			this.navigation.selected.option = optionIndex;
		},
		toggleEditorSidebar() {
			this.info.navigation.selected.editorSidebar = !this.info.navigation.selected.editorSidebar;
			this.$forceUpdate();
			this.storeInfo();
		},
		increaseFont() {
			this.info.settings.fontSize++;
			this.$forceUpdate();
			this.storeInfo();
		},
		decreaseFont() {
			this.info.settings.fontSize--;
			this.$forceUpdate();
			this.storeInfo();
		},
		setFooterError(error) {
			this.info.navigation.footer.error = error;
			this.$forceUpdate();
			this.storeInfo();
		},
		clearFooterError() {
			this.setFooterError(undefined);
			this.$forceUpdate();
			this.storeInfo();
		},
		setTesterError(error) {
			this.info.tester.error = error;
			this.$forceUpdate();
			this.storeInfo();
		},
		clearTesterError() {
			this.info.tester.error = undefined;
			this.$forceUpdate();
			this.storeInfo();
		},
		handleFooterError(error, previousMessage) {
			console.log(error);
			if(error.message) {
				this.setFooterError(`${previousMessage}:\n${error.message}\nLocation: ${error.location.start.line}:${error.location.start.column} - ${error.location.end.line}:${error.location.end.column}`);
			} else {
				this.setFooterError(`${previousMessage}:\n${JSON.stringify(error)}`);
			}
			return false;
		},
		handleTesterError(error, previousMessage) {
			console.log(error);
			if(error.message) {
				this.setTesterError(`${previousMessage}:\n${error.message}\nLocation: ${error.location.start.line}:${error.location.start.column} - ${error.location.end.line}:${error.location.end.column}`);
			} else {
				this.setTesterError(`${previousMessage}:\n${JSON.stringify(error)}`);
			}
			return false;
		},

		///////////////////////////////////////////////////////////
		// Editor logical actions:
		generateParser() {
			if(typeof this.info.navigation.selected.project === "undefined") {
				return alert("You have to select a project first.");
			}
			const parserSource = this.info.projects[this.info.navigation.selected.project].files.map(file => file.contents).join("\n");
			try {
				const parserGenerated = pegjs.generate(parserSource, {
					format: "umd",
					output: "source",
				});
				downloadFile(this.info.projects[this.info.navigation.selected.project].name + ".pegjs", parserGenerated);
			} catch(error) {
				return this.handleFooterError(error, "Error generating parser");
			}
		},
		generateVolatileParser() {
			if(typeof this.info.navigation.selected.project === "undefined") {
				return alert("You have to select a project first.");
			}
			const parserSource = this.info.projects[this.info.navigation.selected.project].files.map(file => file.contents).join("\n");
			try {
				return pegjs.generate(parserSource);
			} catch(error) {
				return this.handleFooterError(error, "Error generating parser");
			}
		},
		generateTesterOutput() {
			const timeoutId = this.volatile.testerInputTimeoutId;
			clearTimeout(timeoutId);
			this.volatile.testerInputTimeoutId = setTimeout(() => {
			const codeIn = this.info.tester.input;
				try {
					const codeOut = this.volatile.parser.parse(codeIn);
					if(typeof this.info.tester.output !== "string") {
						this.info.tester.output = JSON.stringify(codeOut, null, 2);
					} else {
						this.info.tester.output = codeOut;
					}
					this.clearTesterError();
				} catch(error) {
					return this.handleTesterError(error, "Error generating output");
				}
				this.$forceUpdate();
				this.storeInfo();
			}, TESTER_TIMEOUT);
		},
		generateProject() {
			const zip = new JSZip();
			console.log(typeof zip);
			// 
			// @TODO...
			// 
			// 1. [package.json]     A minimalistic package.json file with the dependencies
			// 2. [${mylang}.js]     Generate the
			// 3. [${mylang}.bin.js] Generate binary file that can:
			// 
			// <mylang> 
			//   --file <file to evaluate> | --code <inline code to evaluate>
			//   --output <file to dump data>
			//   --repl
			//   --option-<option name> <option value>
			//   --options-file <json file to get the options>
			//   --parameter-<parameter name> <parameter value>
			//   --parameters-file <json file to get the parameters>
			//   --parser <file of the parser, by default ${mylang}.node.js>
			// 
			// + description of each option
			// + help
			// 
			// 4. 
			// 5. 
			// 6. 
		},
	}
};

</script>
<style lang="css">

/* RESET STYLES */
ul, li {
	padding: 0;
	margin: 0;
	list-style-type: none;
}
html {
	background-color: #333;
}
fieldset {
	border: 1px solid #333;
}
legend {
	background-color: white;
	font-weight: bold;
	border: 1px solid #333;
	padding: 2px;
}
legend > span {
	display: block;
}
button {
	background-color: white;
	color: #333;
	border: 1px solid #333;
	padding: 4px;
	cursor: pointer;
}
textarea {
    box-sizing: border-box;
}
table {
	border-collapse: collapse;
	border-spacing: 0px;
}

/* TOOLKIT STYLES */
.hover-gray-light:hover {
	background-color: #F8F8F8;
}
.NormalButton {
	background-color: #FFFFFF;
	color: #333;
}
.NormalButton:hover {
	background-color: #E0E0E0;
}
.NormalButton.selected {
	background-color: #333333;
	color: #E0E0E0;
}

/* APPLICATION ITEM STYLES */
.LanguageGenerator {
    background-color: #E0E0E0;
}
.LanguageGenerator * {}
.LanguageGenerator > .Topbar {}
.LanguageGenerator > .Topbar > .Navigation {
	padding-left: 3px;
	padding-top: 3px;
}
.LanguageGenerator > .Topbar > .Navigation > .NavigationItem {
	display: inline-block;	
}
.LanguageGenerator > .Topbar > .Navigation > .NavigationItem.selected {}
.LanguageGenerator > .Topbar > .Navigation > .NavigationItem.selected > .NavigationButton {
	background-color: #333333;
	color: #E0E0E0;
}
.LanguageGenerator .NavigationButton {
	margin-right: 2px;
}
.LanguageGenerator > .Main {
	padding: 3px;
}
.LanguageGenerator > .Main.Project {
}
.LanguageGenerator > .Main.Project > .Table {
	margin-top: 2px;
	margin-bottom: 2px;
}
.LanguageGenerator .Table {
	background-color: #E0E0E0;
}
.LanguageGenerator .ProjectRef {
	text-decoration: underline;
	cursor: pointer;
	color: blue;
}
.LanguageGenerator .EditorTextarea {
	width: 100%;
	min-height: 300px;
	resize: vertical;
	border: 1px solid #333;
}
.LanguageGenerator .FilenameRef {
	text-decoration: underline;
	color: blue;
	white-space: nowrap;
	width: 100%;
	max-width: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: none;
	cursor: pointer;
}
.LanguageGenerator .FilenameRef:hover {
	
}
.LanguageGenerator .EditorSidebar > .Table {
	min-width: 80px;
	max-width: 100px;
}
.LanguageGenerator .Editor > .Table {
	
}
.LanguageGenerator .ProjectRef,
.LanguageGenerator .FilenameRef {
	padding: 4px;
	padding-left: 0px;
}
.LanguageGenerator .FilenameRef {
	padding-left: 4px;
}
.LanguageGenerator .FilenameRefTitle {
	text-transform: none;
}
.LanguageGenerator .ProjectNameRef {
	text-transform: none;
}
.LanguageGenerator .FirstLabel {
	padding: 4px;
    padding-left: 0;
}

.LanguageGenerator .ErrorBox  {
	background-color: red;
	color: white;
	padding: 4px;
}
.LanguageGenerator .ErrorBox .ErrorMessage {
	display: inline;
	white-space: pre-wrap;
	font-size: 10px;
}
.LanguageGenerator .ErrorBox .ErrorCloser {
	border: 1px solid white;
	float: right;
	background-color: white;
	color: black;
	cursor: pointer;
}

/* APPLICATION TOOLKIT STYLES */
.Cell {
	vertical-align: middle;
}
.Cell.selected .ProjectRef,
.Cell.selected .FilenameRef {
	color: white;
}
.Cell.selected {
	background-color: #333333;
	color: white;
}

.styling-1 {
	font-size: 10px;
	text-transform: uppercase;
}
.styling-2 {
	font-size: 10px;
}
.styling-3 {
	font-size: 12px;
}
.whitespace-nowrap {
	white-space: nowrap;
}
.cursor-pointer {
	cursor: pointer;
}
.w100 {
	width: 100%;
}
.w50 {
	width: 50%;
}
.min-width-2 {
	min-width: 2px;
}
.valign-top {
	vertical-align: top;
}
.underlined {
	text-decoration: underline;
}
.EditorSidebar .NormalButton {
	margin-top: 2px;
}
.DocumentationList {
	margin-bottom: 8px;
}
.DocumentationList2 {
    padding-left: 8px;
}

</style>
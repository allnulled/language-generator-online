<template>
	<div class="LanguageGenerator">
		<!-- BEGINING OF COMPONENT -->

		<!-- TOPBAR -->
		<div class="Topbar">
			<ul class="Navigation">
				<li class="NavigationItem"
					:class="{selected: optionIndex === info.navigation.selected.option}"
					v-for="(option, optionIndex) in navigation.options"
					v-bind:key="optionIndex">
					<button class="NavigationButton NormalButton styling-1"
						type="button"
						v-on:click="setNavigationSelectedOption(optionIndex)">{{ option }}</button>
				</li>
			</ul>
		</div>

		<!-- MAIN:PROJECT -->
		<div class="Main Project" v-if="info.navigation.selected.option === 'project'">
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
		<div class="Main Editor" v-else-if="info.navigation.selected.option === 'editor' && typeof info.navigation.selected.project === 'undefined'">
			<div class="styling-1">You need to select a project first.</div>
		</div>
		<div class="Main Editor" v-else-if="info.navigation.selected.option === 'editor'" :key="info.navigation.selected.file">

			<!-- MAIN:EDITOR:TOPBAR -->
			<div class="EditorTopbar">
				<table class="Table w100">
					<tr class="Row">
						<td class="Cell styling-1">
							<button class="NormalButton styling-1" :class="{selected: info.navigation.selected.editorSidebar}" type="button" v-on:click="toggleEditorSidebar">Files</button>
						</td>
						<td class="Cell w100 styling-2">
							<span v-if="(typeof info.navigation.selected.project !== 'undefined') && (typeof info.navigation.selected.file !== 'undefined')">
								<b class="styling-1"> {{ info.projects[info.navigation.selected.project].files[info.navigation.selected.file].name }} </b>
							</span>
							<span v-else>
								(none)
							</span>
							<span v-if="typeof info.navigation.selected.project !== 'undefined'">[<b class="underlined styling-1">{{ info.projects[info.navigation.selected.project].name }}</b>]</span>
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
												<td style="min-width:2px"></td>
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
												<td style="min-width:2px"></td>
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
		<div class="Main Options" v-else-if="info.navigation.selected.option === 'options'">
			<div class="Label styling-1 FirstLabel">Options:</div>
			<fieldset>
				<legend>
					<span class="styling-1">Generators:</span>
				</legend>
				<div>
					<button class="NormalButton styling-1" type="button" v-on:click="generateParser">Generate parser</button>
				</div>
				<!--div>
					<button class="NormalButton styling-1" type="button">Generate editor</button>
				</div>
				<div>
					<button class="NormalButton styling-1" type="button">Generate all project</button>
				</div-->
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
		<div class="Main Help" v-else-if="info.navigation.selected.option === 'help'">
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
							<li>- with the possibility to test the grammars (feature not yet included)</li>
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
						<div><b>Codemirror</b>: (not yet related, but soon)</div>
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

		<!-- FOOTER -->
		<div class="Footer">
			<div class="ErrorBox styling-2" v-if="info.navigation.footer.error" :key="info.navigation.footer.error">
				<span class="ErrorMessage">{{ info.navigation.footer.error }}</span>
				<span class="ErrorCloser styling-1" v-on:click="clearFooterError">Okay</span>
			</div>
		</div>

		<!-- END OF COMPONENT -->
	</div>
</template>
<script>

import JSZip from "jszip";
import pegjs from "pegjs";
import moveArray from "@/assets/scripts/move-array.js";
import downloadFile from "@/assets/scripts/download-file.js";

const STORAGE_ID = "LANGUAGE_GENERATOR_STORAGE";

export default {
	name: "LanguageGenerator",
	components: {},
	data() {
		return {
			navigation: {
				options: {
					project: "Project",
					editor: "Editor",
					options: "Options",
					help: "Help",
				}
			},
			info: {
				navigation: {
					selected: {
						option: "project",
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
				return this.storeInfo();
			}
		},
		selectProject(projectIndex) {
			this.info.navigation.selected.project = projectIndex;
			this.info.navigation.selected.file = undefined;
			this.info.navigation.selected.option = "editor";
			this.storeInfo();
		},
		renameProject(projectIndex) {
			const projectName = window.prompt(`New name for project <${this.info.projects[projectIndex].name}>:`);
			if(this.checkProjectName(projectName)) {
				this.info.projects[projectIndex].name = projectName;
				this.storeInfo();
			}
		},
		deleteProject(projectIndex) {
			if(confirm(`Are you sure to remove project <${this.info.projects[projectIndex].name}>?`)) {
				this.info.projects.splice(projectIndex, 1);
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
			moveArray(this.info.projects[projectIndex].files, fileIndex, fileIndex - 1);
			if(this.info.navigation.selected.file === fileIndex) {
				this.info.navigation.selected.file -= 1;
			} else if(this.info.navigation.selected.file === (fileIndex - 1)) {
				this.info.navigation.selected.file += 1;
			}
			this.storeInfo();
		},
		moveFileDown() {
			const projectIndex = this.info.navigation.selected.project;
			const fileIndex = this.info.navigation.selected.file;
			if(fileIndex === (this.info.projects[projectIndex].files.length-1)) {
				return;
			}
			moveArray(this.info.projects[projectIndex].files, fileIndex, fileIndex + 1);
			if(this.info.navigation.selected.file === fileIndex) {
				this.info.navigation.selected.file += 1;
			} else if(this.info.navigation.selected.file === (fileIndex + 1)) {
				this.info.navigation.selected.file -= 1;
			}
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
			if(optionIndex === "editor" && typeof this.info.navigation.selected.project === 'undefined') {
				return alert("You have to select a project first.");
			}
			this.info.navigation.selected.option = optionIndex;
			this.storeInfo();
		},
		toggleEditorSidebar() {
			this.info.navigation.selected.editorSidebar = !this.info.navigation.selected.editorSidebar;
			this.storeInfo();
		},
		increaseFont() {
			this.info.settings.fontSize++;
			this.storeInfo();
		},
		decreaseFont() {
			this.info.settings.fontSize--;
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

		///////////////////////////////////////////////////////////
		// Editor logical actions:
		generateParser() {
			if(typeof this.info.navigation.selected.project === "undefined") {
				return alert("You have to select a project first.");
			}
			const parserSource = this.info.projects[this.info.navigation.selected.project].files.map(file => file.contents).join("\n");
			console.log("Generated parser:", parserSource);
			try {
				const parserGenerated = pegjs.generate(parserSource, {
					format: "umd",
					output: "source",
				});
				downloadFile(this.info.projects[this.info.navigation.selected.project].name + ".pegjs", parserGenerated);
			} catch(error) {
				if(error.message) {
					this.setFooterError(error.message);
				} else {
					this.setFooterError(JSON.stringify(error));
				}
			}
		},
		generateProject() {
			const zip = new JSZip();
			console.log(typeof zip); // to avoid vue linter unused-variable rule.
			// @TODO...
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

.LanguageGenerator .FirstLabel {
	padding: 4px;
    padding-left: 0;
}

.LanguageGenerator .ErrorBox  {
	background-color: red;
	color: white;
	padding: 4px;
}
.LanguageGenerator .ErrorBox .ErrorMessage {}
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
const SETTINGS = {
	gitRepositoryURL: "https://github.com/allnulled/language-generator-online.git",
	temporaryFolder: __dirname + "/../temporary",
	distributionFolder: __dirname + "/../dist",
	projectFolder: __dirname + "/.."
};
const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs-extra");
const exec = require("execute-command-sync");
const buildProject = function() {
	exec("npm run build", { cwd: SETTINGS.projectFolder });
};
const cloneGHPagesBranchToTemporary = function() {
	try {
		fs.mkdirSync(SETTINGS.temporaryFolder);
	} catch(error) {}
	exec(`git clone ${SETTINGS.gitRepositoryURL} . --branch gh-pages`, { cwd: SETTINGS.temporaryFolder });
};
const copyGHPagesGitFromTemporaryToDist = function() {
	const gitFolder = path.resolve(SETTINGS.temporaryFolder, ".git");
	const gitFolderDist = path.resolve(SETTINGS.distributionFolder, ".git");
	fs.copySync(gitFolder, gitFolderDist);
};
const removeTemporary = function() {
	rimraf.sync(SETTINGS.temporaryFolder);
};
const publishToGHPages = function() {
	exec("git add .", { cwd: SETTINGS.distributionFolder });
	exec("git commit", { cwd: SETTINGS.distributionFolder });
	exec("git push", { cwd: SETTINGS.distributionFolder });
};
console.log("[UPLOADING APPLICATION TO GH-PAGES]");
console.log("[BUILD PROJECT]");
buildProject();
console.log("[CLONE GITHUB PAGES BRANCH TO TEMPORARY FOLDER]");
cloneGHPagesBranchToTemporary();
console.log("[COPY GITHUB PAGES .GIT FOLDER FROM TEMPORARY TO DISTRIBUTION]");
copyGHPagesGitFromTemporaryToDist();
console.log("[REMOVE TEMPORARY FOLDER]");
removeTemporary();
console.log("[PUBLISH APPLICATION TO GITHUB PAGES]");
publishToGHPages();
console.log("[UPLOADED APPLICATION TO GH-PAGES]");

const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const { graphql } = require("@octokit/graphql");
const project = require('./utils/project.js');
const { Octokit } = require("@octokit/rest");

async function run() {
    // Inputs
    const myToken = core.getInput('token');
    const org = core.getInput('org');
    const projectId = core.getInput('project_id');

    console.log(org, projectId)
    


    
    const projects = new project();
    
    const { proj } = await projects.getProject(org, myToken, projectId);
    console.log("MEMBERS: ", JSON.stringify(proj))


    
    
    
    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "members=" + orgMembers);
    
}

run();
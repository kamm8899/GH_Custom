const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    //prints message to the log
    core.notice('Hello from my custom JavaScript action!')
}
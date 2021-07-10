const Manager = require(`./lib/manager`);
const Engineer = require(`./lib/engineer`);
const Intern = require(`./lib/intern`);
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlwrite");

const theTEAM = [ ];
const OUTPUT_DIR = path.resolve(__dirname, "template");
const outputPath = path.join(OUTPUT_DIR, "profile.html");

function init(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "selectPosition",
            message: "Select position you're inputting for: ",
            choices: ["Manager", "Engineer", "Intern", "Show Team"]
        }
    ]).then(function(response){

        console.log("Position selected: ", response.selectPosition);
        

        if(response.selectPosition === "Manager"){
            console.log("manager has been chosen");
            managerSelection();

        }
        else if(response.selectPosition === "Engineer"){
            console.log("engineer has been chosen");
            engineerSelection();

        }
        else if(response.selectPosition === "Intern"){
            console.log("intern has been chosen");
            internSelection();

        }

        else if(response.selectPosition=== "Show Team"){

            console.log("Let's display the team!");
            
            fs.writeFile(outputPath,render(theTEAM), function(error){
                if(error) throw error;
                console.log("Congratulations! Checkout the employee summary");
            })
        
        
        }
    })
}


function managerSelection(){
    console.log("entered manager function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?" 
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email? "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter office number where one can reach the manager: "
        },
    ]).then(function(response){
    
        console.log("Manager data: ", response);

        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

        theTEAM.push(manager);

        init();

    })
}


function engineerSelection(){
    console.log("entered engineer function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer? "
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email? "
        },
        {
            type: "input",
            name: "username",
            message: "What is the engineer's GitHub username? "
        }
    ]).then(function(response){

        console.log("Engineer data: ", response);
        
        const engineer = new Engineer(response.name, response.id, response.email, response.username);

        theTEAM.push(engineer);

        init();

    })

}


function internSelection(){
    console.log("entered intern function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern? "
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email? "
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend? "
        }
    ]).then(function(response){

        console.log("Intern data: ", response);

        const intern = new Intern(response.name, response.id, response.email, response.school);

        theTEAM.push(intern);

        init();

    })

}

init();
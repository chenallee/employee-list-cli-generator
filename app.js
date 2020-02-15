// DEPENDENCIES
// ============================
const chalk = require(`chalk`);
const inquirer = require(`inquirer`);

const Manager = require(`./lib/manager`);

const managerQuestions = require(`./lib/manager-questions`);
const addEmployee = require(`./lib/employeeToAdd-questions`);

// console.log(`Welcome! First you'll be prompted to add the information for the team manager. After that you'll be able to enter the information for other team members.
// \n Let's start!\n`);

//const promiseHandler = promise => promise.then(res => [null, res].catch(err => [err, null]));

const init = async () => {
  const employeesArray;
  const engineersArray;
  const InternsArray;

  //first prompt the user for manager info
  const managerResponse = await inquirer.prompt(managerQuestions);
  //then create a new manager object
  const teamManager = new Manager(managerResponse.employeeName, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

  //add manager to the array of employees
  employeesArray.push(teamManager);

  let addToTeam = true;
  while (addToTeam) {
    //prompt adding new employee
    let newEmployee = (await inquirer.prompt(addEmployee)).newEmployee;

    //if none return false
    if(newEmployee === 'None'){
      return false;
    }

     //if engineer add
     if(newEmployee === 'Engineer'){
       console.log(`add engineer`);
       //if intern add
     }else if (newEmployee === 'Intern'){
       console.log(`add intern`);
     }    
  }

  

  //then if the response isn't none, we create a new employee object and add it to the respective array
  // inquirer.prompt(addEmployee).then(response => {
  //   console.log(response);
  //   console.log(response.addMore);

};

init();
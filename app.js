// DEPENDENCIES
// ============================
const chalk = require(`chalk`);
const inquirer = require(`inquirer`);

const Manager = require(`./lib/manager`);
const Engineer = require(`./lib/engineer`);
const Intern = require(`./lib/intern`);

const managerQuestions = require(`./lib/manager-questions`);
const engineerQuestions = require(`./lib/engineer-questions`);
const internQuestions = require(`./lib/intern-questions`);
const addEmployee = require(`./lib/employeeToAdd-questions`);

//const promiseHandler = promise => promise.then(res => [null, res].catch(err => [err, null]));

// INIT ASYNC FUNCTION
// ============================
const init = async () => {
  const employeesArray = [];
  const engineersArray = [];
  const InternsArray = [];

  // MANAGER INFO
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~
  //first prompt the user for manager info
  const managerResponse = await inquirer.prompt(managerQuestions);
  //then create a new manager object
  const teamManager = new Manager(managerResponse.employeeName, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

  //add manager to the array of employees
  employeesArray.push(teamManager);


  // OTHER EMPLOYEES
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~
  let addToTeam = true;
  while (addToTeam) {
    //prompt adding new employee
    let newEmployee = (await inquirer.prompt(addEmployee)).newEmployee;

    //if none return false
    if(newEmployee === 'None'){
      addToTeam = false;
    }

     //if engineer add
     if(newEmployee === 'Engineer'){
       console.log(`add engineer`);
      //create new obj and add to engineer array
      const engineerResponse = await inquirer.prompt(engineerQuestions);
      const newEngineer = new Engineer(engineerResponse.employeeName, engineerResponse.id, engineerResponse.email, engineerResponse.github);
      engineersArray.push(newEngineer);

       //if intern add
     }else if (newEmployee === 'Intern'){
       console.log(`add intern`);
       //create new obj and add to intern array
      const internResponse = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(internResponse.employeeName, internResponse.id, internResponse.email, internResponse.school);
      InternsArray.push(newIntern);
     }    
     console.log(employeesArray);
     console.log(engineersArray);
     console.log(InternsArray);
  }

  console.log(employeesArray);
  console.log(engineersArray);
  console.log(InternsArray);
  //combine all employees

  //
};

init();
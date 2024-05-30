#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


const sleep =()=>{
  return new  Promise((res)=>{
    setTimeout(res,2000)
  });
}

async function wellcome () {
  let ranbowTitle = chalkAnimation.rainbow(`let's start calculation hello honey aur you real`);
  await sleep();
  ranbowTitle .replace(`with NODE .JS INQUIRER and CHALK`);
  await sleep();
  ranbowTitle.replace(`let enjoy calculation !!!`);
  await sleep();
  ranbowTitle.stop();

 let  pulseTitle = chalkAnimation.pulse(`Developed by ASSAD AWAN fro TypeScript faculty test.`);
 await sleep();
 pulseTitle.stop();



  let neonTile = chalkAnimation.neon(`

         Scleintific Calculator
    ______________________________________       
   |                                      |                         
   |    ___________________________       | 
   |   |          _                |      |
   |   | (A|_(U|_A|0R       1.00.0 |      |      
   |   |___________________________|      |
   |     ____ ____ ____      ____         |
   |    |  7 |  8 |  9 |    | +  |        |
   |    |____|____|____|    |____|        |
   |    |  4 |  5 |  6 |    | _  |        |
   |    |____|____|____|    |____|        |
   |    |  1 |  2 |  3 |    | x  |        |
   |    |____|____|____|    |____|        |
   |    |  . |  0 |  = |    | %  |        |
   |    |____|____|____|    |____|        |
   |                                      |
   |______________________________________|
   `);
   await sleep();
   neonTile.stop();
    
   startloop();

}
async function askQuestion() {

  let answers =  await inquirer.prompt([
      
    {
      type:"list",
      name:"operation",
      message: chalk.yellowBright("which operation you want to perform?"),
      choices:["+ Addition","- Subtraction","* Multiplication","% Division"]
    },
    {
        type:"number",
        name:"num1",
        message: chalk.greenBright("Enter frist number")
    },
    {
      type:"number",
      name:"num2",
      message:chalk.redBright("Enter second number")
    }

  ])
  
  switch(answers.operation){
    case"+ Addition":{
     console.log(chalk.blue(`${answers.num1}+${answers.num2}=${answers.num1+answers.num2}`));
      break ;
    }
    case"- Subtraction":{
      console.log(chalk.red(`${answers.num1}-${answers.num2}=${answers.num1-answers.num2}`));
       break ;
    }
     case"* Multiplication":{
      console.log(chalk.yellow(`${answers.num1}*${answers.num2}=${answers.num1*answers.num2}`));
       break ;
    }
    case"% Division":{
      console.log(chalk.green(`${answers.num1}%${answers.num2}=${answers.num1%answers.num2}`));
       break ;
    }
      
  } 
}
async function startloop(){
   do{
    await askQuestion();
    var again = await inquirer.prompt([
    {
      type:"list",
      name:"restart",
      choices:["yes","No"],
      message:chalk.blue("DO you want to countiune:")
    }
     ]) 
   }while(again.restart==="yes");
  }

wellcome();

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'number',
      name: 'duzina',
      message: 'Unesi duzinu pravokutnika: '
    },
    {
      type: 'number',
      name: 'visina',
      message: 'Unesi visinu pravokutnika: '
    }
  ])
  .then((answers) => {
    const povrsina = answers.duzina * answers.visina;
    console.log(`Površina pravokutnika je: ${povrsina}`);
    fs.appendFileSync('povrsina.txt', `Duzina: ${answers.duzina}, Visina: ${answers.visina}, Povrsina: ${povrsina}\n`);
  })
  
 
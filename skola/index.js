import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'ime',
    
      message: 'Unesi ime ucenika: ',},
{
      type: 'input',
      name: 'ocjena',
      message: 'Unesi ocjenu ucenika: '
}

  ])
  .then((answers) => {
    const tekst = `Ime: ${answers.ime}, Ocjena: ${answers.ocjena}\n`;
    fs.appendFileSync('ucenici.txt', tekst, (err) => {
      if (err) throw err;
      console.log('Podaci su spremljeni!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
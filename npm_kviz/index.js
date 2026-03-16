import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Odaberi predmet: ',
    choices: [
      { name: 'hrv', value: 'hrvatski jezik' },
      { name: 'str', value: 'strani jezik' },
      { name: 'mat', value: 'matematika' },
      { name: 'pro', value: 'programiranje' }
    ]
  });

  if (pitanje === 'Hrvatski jezik') {
    console.log('Odabrao si hrvatski jezik');
  } else if (pitanje === 'Strani jezik') {
    console.log('Odabrao si strani jezik');
  } else if (pitanje === 'Matematika') {
    console.log('Odabrao si matematiku');
  } else if (pitanje === 'Programiranje') {
    console.log('Odabrao si programiranje');
  }


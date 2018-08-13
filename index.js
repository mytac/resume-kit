const fs = require('fs');
const prompts = require('prompts');

(async function () {
  const options = [
    {
      type: 'text',
      name: 'theme',
      message: 'Please input the theme name',
      initial: 'light',
      format: v => `${v}`,
    },
    {
      type: 'confirm',
      name: 'isChinese',
      initial: true,
      message: 'Is the default language Chinese?',
    },
    {
      type: 'confirm',
      name: 'isGenerate',
      initial: true,
      message: 'Is generate data template?',
    },
  ];

  console.log('Initial configuration...');
  const answer = await prompts(options);
  console.log('isGenerate', answer.isGenerate);
  const answersString = JSON.stringify(answer, null, 4);

  fs.writeFile('resume-config.json', answersString, () => {
    console.log(answersString);
  });
}());

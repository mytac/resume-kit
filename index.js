const fs=require('fs')
const prompts = require('prompts');

(async function(){
    const options = [
        {
            type: 'text',
            name: 'theme',
            message: `Please input the theme name`,
            initial: 'light',
            format: v => `${v}`
        },
        {
            type: 'confirm',
            name: 'isChinese',
            initial: true,
            message: 'Is the default language Chinese?' 
        },
    ];

    console.log('Initial configuration...')
    const answers = JSON.stringify(await prompts(options));

    fs.writeFile('resume-config.json', answers, ()=>{
        console.log(answers);
    })
})();
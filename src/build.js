const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { resumeConfig,theme } = require('../resume-config.json');

fs.readFile(path.join(__dirname, `../views/${theme}.ejs`), { encoding: 'utf8', flag: 'r' }, (err, data) => {
  if (err) {
    console.log('err', err);
    throw err;
  }
  const html = ejs.render(data, resumeConfig);
  fs.writeFile(path.join(__dirname, '../build/index.html'), html, (err1) => {
    if (err1) throw err;
    console.log('文件已保存！');
  });
});

const express = require('express');
// const ejs = require('ejs');

const app = express();
// const c = require('child_process');
const portIsOccupied = require('./utils/portIsOccupied');
const { theme,resumeConfig } = require('../resume-config.json');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  // console.log('res',res)
  res.render(theme, resumeConfig);
});

app.use((req, res) => {
  res.status(404).send('Sorry cant find that!');
});

portIsOccupied(3001).then((port) => {
  app.listen(port, () => {
    console.log(`start http://localhost:${port}`);
    // c.exec(`start http://localhost:${port}`)
  });
});

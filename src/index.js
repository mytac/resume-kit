const express=require('express')
const ejs=require('ejs')
const app=express()
const c = require('child_process');
const portIsOccupied=require('./utils/portIsOccupied')
app.set('view engine','ejs')
app.use('/assets',express.static('assets'))

const data=require('./config.json')

app.get('/',(req,res)=>{
    // console.log('res',res)
    res.render('index',data)
})

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });

portIsOccupied(3000).then(port=>{
    app.listen(port,()=>{
        console.log(`start http://localhost:${port}`)
        // c.exec(`start http://localhost:${port}`)
    })
})
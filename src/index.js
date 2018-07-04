const express=require('express')
const ejs=require('ejs')
const app=express()
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


app.listen(3001)
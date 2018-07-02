const express=require('express')
const ejs=require('ejs')
const app=express()
app.set('view engine','ejs')
app.use('/assets',express.static('assets'))

const data={
    name:'a',
    sex:'男',
    content:'dasdasdasidoais'
}

app.get('/',(req,res)=>{
    res.render('index',data)
})

app.listen(3000)
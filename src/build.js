const ejs=require('ejs')
const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'views/index.ejs'),{flag:'r'},(err,data)=>{
    if(!err){
        console.log('err',err)
        throw err
    }
    console.log('data',data)
})
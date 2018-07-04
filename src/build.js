const ejs=require('ejs')
const fs=require('fs')
const path=require('path')
const json=require('./config.json')

fs.readFile(path.join(__dirname,'../views/index.ejs'),{encoding:'utf8',flag:'r'},(err,data)=>{
    if(err){
        console.log('err',err)
        throw err
    }
    const html=ejs.render(data, json)
    fs.writeFile(path.join(__dirname,'../build/index.html'), html, (err) => {
        if (err) throw err;
        console.log('文件已保存！');
      });
})
const fs=require('fs')
// 找出html外联的css文件路径，并读取
function findPath(html){
const headReg=new RegExp("<head>(\S*)</head>")
const cssReg=/rel="stylesheet" href="(\S*).css"/
console.log('html',html.match(headReg))
const head=html.match(headReg)[1]
const path=head.split('><').map(link=>{
    console.log('link',link)
    return 'link.match(cssReg)[1]'
})
return path
}

function main(html){
    console.log(findPath(html))
}

module.exports=main


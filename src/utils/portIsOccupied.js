const net=require('net')
 
function portIsOccupied (port){
    const server=net.createServer().listen(port)
    return new Promise((resolve,reject)=>{
        server.on('listening',()=>{
            console.log(`the server is runnint on port ${port}`)
            server.close()
            resolve(port)
        })
    
        server.on('error',(err)=>{
            if(err.code==='EADDRINUSE'){
                resolve(portIsOccupied(port+1))
                console.log(`this port ${port} is occupied.try another.`)
            }else{
                reject(err)
            }
        })
    })
    
} 


module.exports=portIsOccupied


const http = require('http')
const fs = require('fs');
const path = require('path');
const port = 9000
let globalResponse = ''
const filePath = path.resolve(__dirname, 'static/index.html')

function name(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
        globalResponse.writeHead(200, {'Content-Type': 'text-plain'})
        globalResponse.write(data.toString());
        globalResponse.end()
        //console.log('funcion name')
    }
}

function name2(err){
    if(err){
        console.log(err)
    }else{
        fs.readFile(filePath, name)
        //console.log('funcion name2')
    }
}

function responseHandler(req, res){
    globalResponse = res
    fs.access(filePath, fs.constants.F_OK, name2)  
    //console.log('function responseHnadler')
}

const server = http.createServer(responseHandler);
server.listen(port);
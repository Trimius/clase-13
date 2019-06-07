const http = require('http')
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response))

let requestGlobal = ''

function handler(err) {
    if(err) {
        console.log('El archivo no existe');
    }
     else {
         fs.readFile(filePath, 'utf8', handleRead)
     }
}
function handleRead (err, data){
    if(err) {
       console.log('El archivo no existe')
    }
    else {
        console.log(data)
    }
}   

const filePath = path.resolve(__dirname, 'static/index.html')
fs.access(filePath, fs.constants.F_OK, handler)
fs.readFile(filePath, 'utf8', handleRead)

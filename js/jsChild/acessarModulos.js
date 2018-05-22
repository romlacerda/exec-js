const moduloA = require('../../modulo')
console.log(moduloA.bemVindo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8888)
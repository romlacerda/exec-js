'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
    host: 'localhost',
    port: 3003
})

server.route({
    method: 'GET',
    path:'/',
    handler: function(request, h) {
        return 'Hello World'
    }
})

server.route({
    method: 'POST',
    path:'/users',
    handler: function(request, h) {
        console.log(request.payload)
        return '<h1>Gratz</h1>'
    }
})


async function start() {
    try {
        await server.start()
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
    console.log('Server running at: ', server.info.uri)

}

start()
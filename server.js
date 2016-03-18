'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');

require('babel-core/register')({
    presets: ['react', 'es2015']
});

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

server.register(Vision, (err) => {

    if (err) {
        console.log('Failed to load vision.');
    }

    server.views({
        engines: {
            jsx: HapiReactViews
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply.view('home');
        }
    });

    server.route({
        method: 'GET',
        path: '/items',
        handler: (request, reply) => {
            reply.view('./items/index');
        }
    });

    server.route({
        method: 'GET',
        path: '/destructions',
        handler: (request, reply) => {
            reply.view('./destructions/index');
        }
    });
    
     server.route({
        method: 'GET',
        path: '/transfers',
        handler: (request, reply) => {
            reply.view('./transfers/index');
        }
    });
    
    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log('Server is listening at ' + server.info.uri);
    });
});

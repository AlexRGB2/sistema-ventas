"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsDocs = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'Sistema Ventas API',
            description: 'Documentación API',
            contact: {
                name: 'Alexis Martínez',
                url: 'https://github.com/AlexRGB2',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Developer Server',
                },
            ],
        },
    },
    basePath: '/',
    apis: ['./src/routes/*.ts'],
};
const swaggerDocs = swaggerJsDocs(options);
exports.default = swaggerDocs;

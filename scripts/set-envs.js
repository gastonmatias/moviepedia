//! script qe setea envs a traves de nodejs
//! se ejecuta con "npm run envs"

const {writeFileSync, mkdirSync} = require('fs');
// import {writeFileSync, mkdirSync} from 'fs';

require('dotenv').config()
// import * as dotenv from 'dotenv'
// dotenv.config()

const targetPathProd    = './src/environments/environment.ts'
const targetPathDev     = './src/environments/environment.development.ts'
const targetPathExample = './src/environments/environment.example.ts'

const envFileProdContent = `
    export const environment = {
        apiKey: "${process.env['CINEMA_API_KEY']}",
        apiBaseUrl: "${process.env['BASE_URL_API']}",
    };
`
const envFileDevContent = `
    export const environment = {
        apiKey: "${process.env['CINEMA_API_KEY']}",
        apiBaseUrl: "${process.env['BASE_URL_API']}",
    };
`
const envFileExampleContent = `
    export const environment = {
        apiKey:     "Bearer example asdfg example",
        apiBaseUrl: "https://www.example-api.com/",
    };
`
// crea directorio, si existe lo SOBREESCRIBE
mkdirSync('./src/environments',{ recursive:true })

// rellena directorio con contenido de ENVS
writeFileSync(targetPathProd,envFileProdContent)
writeFileSync(targetPathDev,envFileDevContent)
writeFileSync(targetPathExample,envFileExampleContent)

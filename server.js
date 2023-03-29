import express from 'express';
import bodyParser from 'body-parser';
import sequelize from 'sequelize';
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.listen(3000,()=>console.log("Server Started..."));
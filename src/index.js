const express=require('express');
const {PORT}= require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes=require('./routes/index');
const setupAndStartServer=async ()=>{
    const app=express();
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes); // in any incoming requests
    // if there is /api then map it to ApiRoutes
    app.listen(PORT,  ()=>{
        console.log(`Server started at ${PORT}`);
    })
}
setupAndStartServer();

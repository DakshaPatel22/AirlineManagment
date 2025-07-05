const express=require('express');
const {PORT}= require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes=require('./routes/index');
// const db= require('./models/index');
const {Airplane   }= require('./models/index');
const city=require("./models/city");


const setupAndStartServer=async ()=>{
    const app=express();
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes); // in any incoming requests
    // if there is /api then map it to ApiRoutes
    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
    //    db.sequelize.sync({alter:true});
    // const city= await City.findOne({
    //     where:{id:3}
    // });
    // const airports=await city.getAirports();
    // console.log(city, airports);
    await Airplane.create({
        modeNumber: 'Bombardier CRJ'
    });
    })
}
setupAndStartServer();
  
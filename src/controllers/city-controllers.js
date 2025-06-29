const city = require('../models/city');
const {CityService}= require('../services/index');
const cityService= new CityService();
//post, req.body -> city
//
const create = async(req,res )=>{
    try{
         const city =await cityService.createCity(req.body);
         return res.status(201).json({
            data:city,
            success: true,
            message: 'Successfully created the city',
            err:{}
         })
    }
    catch(error){
        console.log(error);
        res.status(501).json({
                data:{},
                success:false,
                message: ' not able to create the city',
                err:error

        })

    }
}
//DELTE-> /city/:id
const destroy = async(req,res )=>{
    try{
        const response= await cityService.deleteCity(req.params.id);
        return res.status(201).json({data:response,
            success: true,
            message: 'Successfully delted the city',
            err:{}

        })

    }
   catch(error){
        console.log(error);
        res.status(501).json({
                data:{},
                success:false,
                message: ' not able to delete the city',
                err:error

        })

    }
}
// PATCH --> /city/:id --> req.body
const update = async(req,res )=>{
    try{
const response= await cityService.updateCity(req.params.id, req.body);
return res.status(201).json(
    {
        data:response,
        message: 'City updated successfully',
        success:true,
        err:{}
    }
)
    }
    catch(error){
        res.status(501).json({
            data:{},
        message:'Not ablle to update the city',
        success:false,
        err: error
        })
}}
//GET --> /city/:id
const get = async(req,res )=>{
  try{
        const city= await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'Successfully fetched the city',
            err:{}

        })

    }
   catch(error){
        console.log(error);
        res.status(501).json({
                data:{},
                success:false,
                message: ' not able to get the city',
                err:error

        })

    }
}
const getAll=async(req,res)=>{
    try{ const cities=await cityService.getAllCities(req.params);
      return   res.status(200).json({
            data:cities,
          success:true,
             message:'Cities fetched successfully',
           
            
        err:{}

        }); 
 
    }
    catch(error){
        console.log(error);
        res.status(501).json({
            data:{},
        message:'Not ablle to fetch the cities',
        success:false,
        err: error
        })
}
}
module.exports={
    create,
    update,
    get,
    getAll,
    destroy
}
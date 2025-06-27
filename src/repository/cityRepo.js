const {City} =require('../models/index');
 class cityRepository{
    async createCity({name}){
        try{
const city= await City.create({name});
        }
        catch(error){
throw{error};
        }
    }
    async deleteCity(cityId)
    {
        try{
await City.destroy({
    where:
    {
        id:cityId;
    }
})
        }
        catch(error){
throw{error};
        }
    }
    async getCity(cityId)
    {
        try{
const city= await City.findByPk(cityId);
return city;
        }
        catch(error){
throw{error};
        }
    }
    async updateCity(cityId, data)
    {
        try{
const city= await City.update(data, {
    where:{
        id:cityId
    }
});
        }
        catch(error){
throw{error};
        }
    }
 }
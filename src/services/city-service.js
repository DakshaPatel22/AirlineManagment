const { CityRepo } = require('../repository/index');

class CityService{
    constructor()
    {
        this.cityRepo=new CityRepo();
    }
    async createCity(data)
    {
try{
const city= await this.cityRepo.createCity(data);
return city;
}
catch(error){
    console.log("Something went wrong at service layer");
    throw { error};

}
    }
    async deleteCity(cityId)
    {
        try{
            const response= await this.cityRepo.deleteCity(cityId);
            return response;

}
catch(error){
    console.log("sSomething went wrong at service layer");
    throw { error};

}
    } 
    async updateCity(cityId, data)
    {
        try{
            const city = await this.cityRepo.updateCity(cityId, data);
            return city;

}
catch(error){
    console.log("sSomething went wrong at service layer");
    throw { error};

}
    }
    async getCity(cityId)
    {
        try{
            const city =await this.cityRepo.getCity(cityId);
            return city;

}
catch(error){
    console.log("sSomething went wrong at service layer");
    throw { error};

}
    }
    async getAllCities(filter)
    {
        try{ const cities=await this.cityRepo.getAllCities({name: filter.name});
            return cities;

        }
        catch(error){
    console.log("Something went wrong at service layer");
    throw { error};

}
    }
}
module.exports = CityService;
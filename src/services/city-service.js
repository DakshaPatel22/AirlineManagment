const { CityRepo } = require('../repository');
const {cityRepo}= require('./repository/index');
class cityService{
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
    console.log("sSomething went wrong at service layer");
    throw { error};

}
    }
    async delelteCity()
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
}
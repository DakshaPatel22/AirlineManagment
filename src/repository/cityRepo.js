const { City } = require('../models/index');
const { Op}=require('sequelize');
class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({
                 name 
                });
            return city;
        } catch (error) {
            console.log("Something went wrong at repo layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong at repo layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at repo layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong at repo layer");
            throw { error };
        }
    }
    async getAllCities(filter)
    {
        try
        {
            if(filter.name){
                const cities=  await City.find({
                    where:
                    {
                        name:{[Op.startsWith]:filter.name

                        }
                    }
                });
                return cities;
            }
const cities= await City.findAll();
return cities;
        }
        catch (error) {
            console.log("Something went wrong at repo layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;
 
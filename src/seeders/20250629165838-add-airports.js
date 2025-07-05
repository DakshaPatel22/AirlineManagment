'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * //query interface helps seeder file to communicate to my 
     * sql and execute the query
    */
   await queryInterface.bulkInsert('Airports',[
    {
name: 'Kampegoda International Airport',
cityId:3,
createdAt:new Date(),
updatedAt:new Date()
    },
    {
name: 'Mysore International Airport',
cityId:3,
createdAt :new Date(),
updatedAt:new Date()
    },
    {
name: 'IGDTA International Airport',
cityId:3,
createdAt:new Date(),
updatedAt:new Date()
    },
    {
name: 'IGDTA International Airport',
cityId:6 ,
createdAt:new Date(),
updatedAt:new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

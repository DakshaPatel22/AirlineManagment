/
     - src/
           index.js// server
           models/
           controllers/
           middlewares/
           services/
           utils/
           cofig/

# Welcome to Flights Service

## Project Setup

- Clone the project on your local machine.
- Execute `npm install` in the root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable:
     - PORT=3000


- Inside the `src/config` folder, create a new file called `config.json` and add the following JSON:

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


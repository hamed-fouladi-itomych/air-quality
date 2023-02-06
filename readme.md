# Air Quality Application

This is a simple application that fetches air quality data based on a given GPS location and stores it in a database.

## Features
- Fetches air quality data from an external API.
- Saves air quality data to a database.
- Schedules a cron job to periodically fetch and save air quality data.

## Technologies Used
- Node.js
- TypeScript
- Express
- node-cron
- class-validator
- PostgreSQL
- typeorm
- Jest
- OpenAPI for documentation

## Getting started
1. Clone the repository and install the dependencies by running```npm install```
3. Set up the database settings in the ```.env``` file
4. Migrate the tables using the command ```npm run migration```
5. Start the application using the command ```npm start```
6. Start the cron job using the command ```npm run cron```
7. Run the tests using the command ```npm run tests```
> **_NOTE:_** Make sure to have a PostgreSQL database set up and running before starting the application.

## Endpoints
There are 2 endpoints in the application:

- ```/nearest-city-pollution``` Pollution data of a nearest city based on GPS coordinates
- ```/most-polluted``` The most polluted time in a given city.

## Documentation
The application uses OpenAPI for documentation. Access the documentation by visiting '/api-docs' route in your browser.

## Author
Hamed Fouladi
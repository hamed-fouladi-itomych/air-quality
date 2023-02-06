import swaggerJsdoc from 'swagger-jsdoc';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

const schemas = validationMetadatasToSchemas();

const options = {
  failOnErrors: true, // Whether or not to throw when parsing handlers. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Air quality API',
      description: '',
      termsOfService: '',
    },
    servers: [
      {
        url: 'http://localhost:5000/air-quality/',
        description: 'Local server',
      },
    ],
    definitions: {
      GetAirQualityDTO: schemas.GetAirQualityDTO,
      CityDTO: schemas.CityDTO,
      PollutionResponse: schemas.PollutionResponse,
    },
  },
  apis: ['src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);

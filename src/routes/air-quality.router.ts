import { Router } from 'express';
import { AirQualityController } from '../controllers/air-quality.controller';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import GetAirQualityDTO, { CityDTO } from '../dto/getAirQualityDTO';

const route = Router();
const airQualityController = new AirQualityController();

/**
 * @openapi
 * /nearest-city-pollution:
 *   get:
 *     description: Get nearest city pollution by (GPS coordinates).
 *     parameters:
 *       - in: query
 *         name: values
 *         required: true
 *         schema:
 *           $ref: '#/definitions/GetAirQualityDTO'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                     result:
 *                        type: object
 *                        properties:
 *                           pollution:
 *                              $ref: '#/definitions/PollutionResponse'
 */
route.get(
  '/nearest-city-pollution',
  validationMiddleware(GetAirQualityDTO),
  airQualityController.getAirQuality,
);

/**
 * @openapi
 * /most-polluted:
 *   get:
 *     description: Get post polluted time by city name
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *            $ref: '#/definitions/CityDTO'
 *     responses:
 *       200:
 *           content:
 *             application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      result:
 *                        value: string
 */
route.get(
  '/most-polluted',
  validationMiddleware(CityDTO),
  airQualityController.getMostPolluted,
);

export default route;

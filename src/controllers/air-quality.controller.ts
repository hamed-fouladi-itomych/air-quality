import { Request, Response } from 'express';
import { AirQualityService } from '../services/air-quality.service';
import { PollutionResponse } from '../dto/getAirQualityDTO';

export class AirQualityController {
  // private airQualityService: AirQualityService;
  // constructor() {
  //   this.airQualityService = new AirQualityService();
  // }

  async getAirQuality(req: Request, res: Response) {
    try {
      const longitude = Number(req.query.longitude);
      const latitude = Number(req.query.latitude);

      const airQualityService = new AirQualityService();

      const pollution: PollutionResponse =
        await airQualityService.getAirQuality(longitude, latitude);

      res.status(200).send({
        Result: {
          pollution,
        },
      });
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  }

  async getMostPolluted(req: Request, res: Response): Promise<void> {
    try {
      const city: string = req.query.city as string;
      if (!city) {
        res.status(400).send('city parameter is required');
        return;
      }

      const airQualityService = new AirQualityService();

      const result = await airQualityService.getMostPolluted(city);

      res.status(200).send({ result });
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  }
}

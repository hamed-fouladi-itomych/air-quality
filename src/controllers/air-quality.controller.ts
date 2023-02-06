import { Request, Response } from 'express';
import { AirQualityService } from '../services/air-quality.service';
import { PollutionResponse } from '../dto/getAirQualityDTO';

export class AirQualityController {
  private airQualityService: AirQualityService;
  constructor() {
    this.airQualityService = new AirQualityService();
  }

  getAirQuality = async (req: Request, res: Response) => {
    const longitude = Number(req.query.longitude);
    const latitude = Number(req.query.latitude);

    const pollution: PollutionResponse =
      await this.airQualityService.getAirQuality(longitude, latitude);

    res.status(200).send({
      Result: {
        pollution,
      },
    });
  };

  getMostPolluted = async (req: Request, res: Response): Promise<void> => {
    const city: string = req.query.city as string;
    if (!city) {
      res.status(400).send('city parameter is required');
      return;
    }

    const result = await this.airQualityService.getMostPolluted(city);

    res.status(200).send({ result });
  };
}

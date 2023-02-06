import { Request, Response } from 'express';
import { AirQualityController } from '../controllers/air-quality.controller';
import { AirQualityService } from '../services/air-quality.service';
import {
  fakeMostPollutionResponse,
  fakePollutionResponse,
} from './fake-data/faker';

jest.mock('../repositories/air-quality.repository');

describe('AirQualityController', () => {
  let req: Request;
  let res: Response;
  let airQualityController: AirQualityController;
  let airQualityService: AirQualityService;

  beforeEach(() => {
    req = {} as Request;
    res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    airQualityController = new AirQualityController();
    airQualityService = new AirQualityService();
  });

  describe('getAirQuality', () => {
    const queryParams = {
      latitude: '37.7749',
      longitude: '-122.4194',
    };

    it('should return pollution data for nearest city', async () => {
      jest
        .spyOn(AirQualityService.prototype, 'getAirQuality')
        .mockResolvedValue(fakePollutionResponse);
      req.query = queryParams;

      await airQualityController.getAirQuality(req, res);

      expect(airQualityService.getAirQuality).toHaveBeenCalledWith(
        +queryParams.longitude,
        +queryParams.latitude,
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        Result: {
          pollution: fakePollutionResponse,
        },
      });
    });
  });

  describe('getMostPolluted', () => {
    it('should return 200 and pollution data', async () => {
      const city = 'Kharkiv';
      jest
        .spyOn(AirQualityService.prototype, 'getMostPolluted')
        .mockResolvedValue(fakeMostPollutionResponse);
      req.query = { city };

      await airQualityController.getMostPolluted(req, res);

      expect(airQualityService.getMostPolluted).toHaveBeenCalledWith(city);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        result: fakeMostPollutionResponse,
      });
    });

    it('should return 400 if city not provided in query', async () => {
      jest
        .spyOn(AirQualityService.prototype, 'getMostPolluted')
        .mockResolvedValue(fakeMostPollutionResponse);
      req.query = {};

      await airQualityController.getMostPolluted(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('city parameter is required');
    });
  });
});

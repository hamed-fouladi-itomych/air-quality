import { AirQualityService } from '../services/air-quality.service';
import {
  fakeCity,
  fakeGetAirQualityDTO,
  fakeIqairClientResponse,
  fakeMostPollutionResponse,
  fakePollutionResponse,
  newDate,
} from './fake-data/faker';
import { IqairClient } from '../iqairClient';
import { AirQualityRepository } from '../repositories/air-quality.repository';

describe('AirQualityService', () => {
  let airQualityService: AirQualityService;

  beforeEach(() => {
    airQualityService = new AirQualityService();
  });

  describe('getAirQuality', () => {
    it('should return air quality data for given location', async () => {
      jest
        .spyOn(IqairClient.prototype, 'getAirQuality')
        .mockResolvedValueOnce(fakeIqairClientResponse);
      AirQualityRepository.prototype.insertAirQuality = jest.fn();

      const result = await airQualityService.getAirQuality(
        fakeGetAirQualityDTO.latitude,
        fakeGetAirQualityDTO.longitude,
      );

      expect(IqairClient.prototype.getAirQuality).toHaveBeenCalled();
      expect(result).toEqual(fakePollutionResponse);
    });

    it('should throw error if IqairClient.getAirQuality  fails', async () => {
      const error = new Error('Failed to get air quality data');

      jest
        .spyOn(IqairClient.prototype, 'getAirQuality')
        .mockResolvedValueOnce(error);

      try {
        await airQualityService.getAirQuality(
          fakeGetAirQualityDTO.latitude,
          fakeGetAirQualityDTO.longitude,
        );
      } catch (err) {
        expect(err).toEqual(error);
      }
    });
  });

  describe('getMostPolluted', () => {
    it('should return most polluted city time', async () => {
      jest
        .spyOn(AirQualityRepository.prototype, 'getMostPolluted')
        .mockResolvedValue(newDate);

      const result = await airQualityService.getMostPolluted(fakeCity);

      expect(result).toEqual(fakeMostPollutionResponse);
    });
  });
});

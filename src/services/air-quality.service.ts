import { AirQualityRepository } from '../repositories/air-quality.repository';
import { IqairClient } from '../iqairClient';
import { AirQuality } from '../db/models/air-quality.model';

export class AirQualityService {
  private airQualityRepository: AirQualityRepository;
  private iqairClient: IqairClient;
  constructor() {
    this.airQualityRepository = new AirQualityRepository();
    this.iqairClient = new IqairClient();
  }

  async getAirQuality(longitude: number, latitude: number) {
    const airQuality: AirQuality = await this.iqairClient.getAirQuality(
      longitude,
      latitude,
    );

    await this.airQualityRepository.insertAirQuality(airQuality);

    const pollution = Object.assign(airQuality);
    delete pollution.city;

    return pollution;
  }

  async getMostPolluted(city: string): Promise<string> {
    const dateTime = await this.airQualityRepository.getMostPolluted(city);

    return `${city} zone was the most polluted on ${dateTime.toDateString()} at ${dateTime.toTimeString()}`;
  }
}

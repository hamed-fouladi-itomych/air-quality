import { AirQuality } from '../db/models/air-quality.model';
import BaseRepository from './base.repository';
import { IqairError } from '../handlers/iqairError';

export class AirQualityRepository extends BaseRepository<AirQuality> {
  constructor() {
    super(AirQuality);
  }

  async insertAirQuality(airQuality: AirQuality) {
    const newAirQuality = new AirQuality();

    newAirQuality.ts = airQuality.ts;
    newAirQuality.aqius = airQuality.aqius;
    newAirQuality.mainus = airQuality.mainus;
    newAirQuality.aqicn = airQuality.aqicn;
    newAirQuality.maincn = airQuality.maincn;
    newAirQuality.city = airQuality.city;
    newAirQuality.datetime = new Date();

    await newAirQuality.save();
  }

  async getMostPolluted(city: string): Promise<Date> {
    const airQuality = await this.db
      .createQueryBuilder('airQuality')
      .where('airQuality.city = :city', { city })
      .orderBy('airQuality.aqius', 'DESC')
      .getOne();

    if (!airQuality) {
      throw new IqairError(404, 'city not found');
    }

    return airQuality.datetime;
  }
}

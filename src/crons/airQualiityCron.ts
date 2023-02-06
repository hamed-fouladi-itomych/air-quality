import * as cron from 'node-cron';
import { AirQualityRepository } from '../repositories/air-quality.repository';
import { AirQualityService } from '../services/air-quality.service';
import { connectToDatabase } from '../db/dbConnect';

const airQualityService = new AirQualityService();
const airQualityRepository = new AirQualityRepository();

connectToDatabase().then(() => {
  console.log('Success');
});

const job = cron.schedule('* * * * *', async () => {
  try {
    console.log('task is running');

    const airQuality = await airQualityService.getAirQuality(
      2.352222,
      48.856613,
    );

    await airQualityRepository.insertAirQuality(airQuality);
  } catch (err) {
    console.log('Cron task Error: ', err);
  }
});

job.start();
console.log('Job starts');

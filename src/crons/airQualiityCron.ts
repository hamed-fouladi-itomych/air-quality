import * as cron from 'node-cron';
import { AirQualityService } from '../services/air-quality.service';
import { connectToDatabase } from '../db/dbConnect';

const airQualityService = new AirQualityService();

connectToDatabase().then(() => {
  console.log('Success');
});

const job = cron.schedule('* * * * *', async () => {
  try {
    console.log('task is running');

    await airQualityService.getAirQuality(
      2.352222,
      48.856613,
    );
  } catch (err) {
    console.log('Cron task Error: ', err);
  }
});

job.start();
console.log('Job starts');

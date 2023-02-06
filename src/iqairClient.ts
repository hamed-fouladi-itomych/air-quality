import axios from 'axios';
import { IqairError } from './handlers/iqairError';

export class IqairClient {
  async getAirQuality(longitude: number, latitude: number) {
    const BASE_URL = 'https://api.airvisual.com/v2';

    try {
      const response = await axios.get(
        `${BASE_URL}/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.API_KEY}`,
      );
      return {
        city: response.data.data.city,
        ...response.data.data.current.pollution,
      };
    } catch (error) {
      if (error.response) {
        throw new IqairError(
          error.response.status,
          error.response.data.data.message,
        );
      } else {
        return new IqairError(500, 'Internal Server Error');
      }
    }
  }
}

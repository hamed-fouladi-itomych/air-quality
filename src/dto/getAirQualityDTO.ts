import {
  IsLongitude,
  IsLatitude,
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export default class GetAirQualityDTO {
  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}

export class CityDTO {
  @IsString()
  @IsNotEmpty()
  city: string;
}

export class PollutionResponse {
  @IsString()
  ts: string;

  @IsNumber()
  aqius: number;

  @IsString()
  mainus: string;

  @IsNumber()
  aqicn: number;

  @IsString()
  maincn: string;
}

import GetAirQualityDTO, { PollutionResponse } from '../../dto/getAirQualityDTO';

const fakePollutionResponse: PollutionResponse = {
  ts: "2023-02-03T01:23:45.678Z",
  aqius: 123,
  mainus: "Good",
  aqicn: 456,
  maincn: "Moderate",
};

const fakeIqairClientResponse = {
  city: 'Kharkiv',
  ...fakePollutionResponse
}

const fakeGetAirQualityDTO: GetAirQualityDTO = {
  latitude: 37.7749,
  longitude: -122.4194
};

const fakeCity = 'Kharkiv'
const newDate = new Date();
const fakeMostPollutionResponse = `${fakeCity} zone was the most polluted on ${newDate.toDateString()} at ${newDate.toTimeString()}`;

export {
  fakePollutionResponse,
  fakeGetAirQualityDTO,
  fakeIqairClientResponse,
  fakeMostPollutionResponse,
  newDate,
  fakeCity
}
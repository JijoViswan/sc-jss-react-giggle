import { trackingApi } from '@sitecore-jss/sitecore-jss-tracking';
import config from '../temp/config';
import { dataFetcher } from '../../src/dataFetcher';

const trackingApiOptions = {
  host: config.sitecoreApiHost,
  querystringParams: {
    sc_apikey: config.sitecoreApiKey,
  },
  fetcher: dataFetcher,
};

export function trackCompleteRegistration() {
  return trackGoal('Register');
}

export function trackGoal(goalId) {
  return trackingApi
    .trackEvent([{ goalId }], trackingApiOptions)
    .then(() => console.log('Goal pushed to JSS tracker API'))
    .catch((error) => console.error(error));
}

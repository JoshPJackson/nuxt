import { BaseModule } from './baseModule';

let MarketingPreference = {...BaseModule};
MarketingPreference.state = {
  endpoint: 'api/marketing-preferences',
  all: {}
};

export default MarketingPreference;

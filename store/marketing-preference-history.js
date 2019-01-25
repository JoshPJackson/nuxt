import { BaseModule } from './baseModule';

let MarketingPreferenceHistory = {...BaseModule};
MarketingPreferenceHistory.state = {
  endpoint: 'api/marketing-preference-history',
  all: {}
};

export default MarketingPreferenceHistory;

import { BaseModule } from './baseModule';

let CommunicationPreferenceHistory = {...BaseModule};
CommunicationPreferenceHistory.state = {
  endpoint: 'api/communication-preference-history',
  all: {}
};

export default CommunicationPreferenceHistory;

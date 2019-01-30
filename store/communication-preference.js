import { BaseModule } from './baseModule';

let CommunicationPreference = {...BaseModule};
CommunicationPreference.state = {
  endpoint: 'api/communication-preferences',
  all: {}
};

export default CommunicationPreference;

import { BaseModule } from './baseModule';

let CommunicationPreference = {...BaseModule};
CommunicationPreference.state = {
  endpoint: 'api/communication-preference',
  all: {}
};

export default CommunicationPreference;

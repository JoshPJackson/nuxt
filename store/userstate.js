import { BaseModule } from './baseModule';

let UserState = {...BaseModule};
UserState.state = {
  endpoint: 'api/userstates',
  all: {}
};

export default UserState;

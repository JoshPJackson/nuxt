import { BaseModule } from './baseModule';

let UserType = {...BaseModule};
UserType.state = {
  endpoint: 'api/usertypes',
  all: {}
};

export default UserType;

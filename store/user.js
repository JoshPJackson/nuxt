import { BaseModule } from './baseModule';

let User = {...BaseModule};
User.state = {
  endpoint: 'api/users',
  all: {}
};

export default User;

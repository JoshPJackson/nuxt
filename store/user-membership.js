import { BaseModule } from './baseModule';

let UserMembership = {...BaseModule};
UserMembership.state = {
  endpoint: 'api/user-memberships',
  all: {}
};

export default UserMembership;

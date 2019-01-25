import { BaseModule } from './baseModule';

let Membership = {...BaseModule};
Membership.state = {
  endpoint: 'api/memberships',
  all: {}
};

export default Membership;

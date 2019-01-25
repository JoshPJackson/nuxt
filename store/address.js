import { BaseModule } from './baseModule';

let Address = {...BaseModule};
Address.state = {
  endpoint: 'api/address',
  all: {}
};

export default Address;

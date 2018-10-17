import { Model } from '@vuex-orm/core'
import UserState from '~/models/userstate'
import UserType from '~/models/usertype'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      firstName: this.attr(null),
      lastName: this.attr(null),
      email: this.attr(null),
      typeId: this.attr(null),
      stateId: this.attr(null),
      parentId: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null),
      state: this.hasOne(UserState, 'id', 'state_id'),
      type: this.hasOne(UserType, 'id', 'type_id'),
      parent: this.hasOne(User, 'id', 'parent_id')
    }
  }

  static methodConf = {
    http: {
      url: '/users'
    },
    methods: {
      $fetch: {
        name: 'fetch',
        http: {
          url: '',
          method: 'get',
        },
      },
      $get: {
        name: 'get',
        http: {
          url: '/:id',
          method: 'get',
        },
      },
      $create: {
        name: 'create',
        http: {
          url: '',
          method: 'post',
        },
      },
      $update: {
        name: 'update',
        http: {
          url: '/:id',
          method: 'put',
        },
      },
      $delete: {
        name: 'delete',
        http: {
          url: '/:id',
          method: 'delete',
        },
      },
    }
  }

};

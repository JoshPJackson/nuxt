import { Model } from '@vuex-orm/core'

export default class UserState extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'userstates';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      name: this.attr('')
    }
  }

  static methodConf = {
    http: {
      url: '/userstates'
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
      $getCountByState: {
        name: 'getCountByState',
        http: {
          url: '/state?',
          method: 'get'
        }
      }
    }
  }
};

import { Model } from '@vuex-orm/core'

export default class UserType extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'usertypes';

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr('')
    }
  }

  static methodConf = {
    http: {
      url: '/usertypes',
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

import { Model } from '@vuex-orm/core'
import voca from 'voca'

export default class CommunicationPreference extends Model {
  static entity = 'communicationPreferences';

  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      message: this.attr(null),
      phone: this.attr(null),
      post: this.attr(null),
      email: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null)
    }
  }

  static methodConf = {
    http: {
      url: '/communicationpreferences'
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
      }
    }
  }
};

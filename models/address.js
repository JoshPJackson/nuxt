import { Model } from '@vuex-orm/core'
import voca from 'voca'

export default class Address extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'addresses';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      line_1: this.attr(null),
      line_2: this.attr(null),
      line_3: this.attr(null),
      line_4: this.attr(null),
      line_5: this.attr(null),
      postcode: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null)
    }
  }

  static methodConf = {
    http: {
      url: '/addresses'
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

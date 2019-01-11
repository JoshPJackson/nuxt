import { Model } from '@vuex-orm/core'
import voca from 'voca'

export default class Membership extends Model {
  static entity = 'memberships';

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(null),
      min_images: this.attr(null),
      max_images: this.attr(null),
      price_per_image: this.attr(null)
    }
  }

  static methodConf = {
    http: {
      url: '/memberships'
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

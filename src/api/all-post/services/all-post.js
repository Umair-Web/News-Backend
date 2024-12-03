'use strict';

/**
 * all-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-post.all-post');

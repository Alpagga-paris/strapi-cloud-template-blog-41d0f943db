'use strict';

/**
 * staging-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staging-article.staging-article');

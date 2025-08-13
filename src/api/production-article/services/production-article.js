'use strict';

/**
 * production-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production-article.production-article');

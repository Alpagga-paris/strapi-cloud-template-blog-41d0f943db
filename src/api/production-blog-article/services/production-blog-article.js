'use strict';

/**
 * production-blog-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production-blog-article.production-blog-article');
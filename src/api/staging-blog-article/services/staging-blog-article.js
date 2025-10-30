'use strict';

/**
 * staging-blog-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staging-blog-article.staging-blog-article');
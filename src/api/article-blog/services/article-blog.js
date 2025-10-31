'use strict';

/**
 * article-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-blog.article-blog');
'use strict';

/**
 * production-faq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production-faq.production-faq');

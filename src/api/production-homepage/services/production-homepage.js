'use strict';

/**
 * production-homepage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production-homepage.production-homepage');

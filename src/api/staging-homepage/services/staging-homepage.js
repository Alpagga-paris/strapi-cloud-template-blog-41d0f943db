'use strict';

/**
 * staging-homepage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staging-homepage.staging-homepage');

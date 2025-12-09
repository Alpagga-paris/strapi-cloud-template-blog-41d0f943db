'use strict';

/**
 * staging-faq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staging-faq.staging-faq');

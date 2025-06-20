module.exports = {
    'populate-all': {
      enabled: true,
      config: {
        // OR: Only populate specific collection types by UID
        relations: ['api::staging-homepage.staging-homepage'],
      },
    },
  };
  
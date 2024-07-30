const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb');

module.exports = defineConfig({

  env: {
    mongodb: {
      uri: "mongodb+srv://edi:edypassword@prueba2.p6xlp44.mongodb.net/",
      database: "sample_mflix",
      collection: "comments",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },

    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js",
    ],  

    baseUrl: "https://api.thecatapi.com/v1/",
  },

  
});

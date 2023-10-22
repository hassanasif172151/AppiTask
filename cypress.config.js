const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    include: [
      "cypress/support/commands.js"
    ]
  },
  viewportWidths: {
    "ipad-air-landscape": 1024, // Width for iPad Air in landscape
    // Add more custom widths if needed
  },
  viewportHeights: {
    "ipad-air-landscape": 768 // Height for iPad Air in landscape
  },
  viewportPresets: {
    "ipad-air-landscape": {
      width: "ipad-air-landscape",
      height: "ipad-air-landscape"
    },
    // Add more presets as needed
  }
});

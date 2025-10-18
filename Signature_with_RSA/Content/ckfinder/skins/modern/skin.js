/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://cksource.com/ckfinder/license
*/

CKFinder.skins.add("modern", {
  init: function () {
    // Load the CSS file for this skin
    CKFinder.document.appendStyleSheet(CKFinder.getUrl("skins/modern/app.css"));
  },

  // Define the HTML structure for the CKFinder interface
  getLayout: function () {
    return {
      // Main toolbar area
      toolbar: {
        class: "cke_toolbox",
      },

      // Main content area
      contents: {
        class: "cke_contents",
      },

      // Status bar
      status: {
        class: "cke_status",
      },
    };
  },
});

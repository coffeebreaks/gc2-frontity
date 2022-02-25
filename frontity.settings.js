const settings = {
  "name": "gc2-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "grafikcentralen",
      state: {
        theme: {
          actions: {
            theme: {
              beforeSSR: async ({ state, actions }) => {
                // This will make Frontity wait until the ACF options
                // page has been fetched and it is available
                // using state.source.get("acf-options-page").
                await actions.source.fetch("https://gc.webbdesign.org/wp-json/acf/v3/options/options/");
              }
            }
          },
        },
      },
    },
    
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
        
          "url": "https://gc.webbdesign.org",
          "ACF": "https://gc-webbdesign.org/wp-json/acf/v3/options/options",
          "homepage" : "/bast-pa-integrationer"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ]
};

export default settings;

import Root from "./components/home.js"


const allCategoriesHandler = {
  name: "allCategories",
  priority: 10,
  pattern: "allCategories",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "categories",
      params: {
        per_page: 100, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items,
    });
  },
};


const allPostsHandler = {
  name: "allPosts",
  priority: 10,
  pattern: "allposts",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "/wp/v2/posts/",
      params: {
        per_page: 100, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items,
    });
  },
};

// Custom handler for ACF options
const acfOptionsHandler = {
  pattern: "acf-settings",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`,
    });
    const option = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  },
};

const grafikcentralen = {
  name: "grafikcentralen",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Root,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "hover",
      // "no": it doesn’t prefetch
      // "hover": it does prefetching when the reader hovers over the link.
      // "in-view": it does prefetching when the link enters the screen.
      // "all": it does prefetching when the link component is mounted.
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all([
          actions.source.fetch("acf-settings"),
          actions.source.fetch("allCategories"),
          actions.source.fetch("allPosts"),
        ]);
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
   
    source: {
      handlers: [acfOptionsHandler, allCategoriesHandler, allPostsHandler],
  
    },
  
  },
};

export default grafikcentralen
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipies: require("@/data/recipies.json"),
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/"
      },
      {
        text: "About",
        href: "#about"
      },
      {
        text: "Nouvelle recette",
        to: "/add-recipie"
      }
    ]
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  getters: {
    tags: state => {
      const tags: { text: string; to: string }[] = [];

      for (const recipie of state.recipies) {
        if (!recipie.tag || tags.find(tag => tag.text === recipie.tag))
          continue;

        const text = recipie.tag;

        tags.push({
          text,
          to: `/category/${text}`
        });
      }

      return tags.sort().slice(0, 4);
    },
    links: (state, getters) => {
      return state.items;
    }
  },
  actions: {},
  modules: {}
});

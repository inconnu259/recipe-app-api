import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipies: [], //require("@/data/recipies.json"),
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
    ],
    //recipies: [],
    recipies_loading: false,
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      //console.log(params);
      state.status = "success";
      state.token = token;
      //state.user = params.user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  getters: {
    tags: state => {
      const tags: { text: string; to: string }[] = [];

      for (const recipie of <any>state.recipies) {
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
    },
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    login({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "/api/user/token/",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            //const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token);
            //dispatch(user_request)
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "/api/user/create/",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    get_recipes({ commit }, recipes) {
      return new Promise((resolve, reject) => {
        commit("get_recipes_request");
        axios({
          url: "/api/recipe/recipe/",
          //data: user,
          method: "GET"
        })
          .then(resp => {
            const recipe = resp.data.recipe;
            commit("recipe_success", recipe);
            resolve(resp);
          })
          .catch(err => {
            commit("recipe_error", err);
            reject(err);
          });
      });
    }
  },
  modules: {}
});

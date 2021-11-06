import { createStore } from "vuex";
import axios from "axios";
const apiKey = process.env.VUE_APP_API_KEY;
const base = "https://newsapi.org/v2";

export default createStore({
  state: {
    news: [],
    loading: true,
    categories: [],
    sources: [],
    totalResults: 0,
  },
  getters: {
    getNews: (state) => state.news,
    getLoading: (state) => state.loading,
    getCategories: (state) => state.categories,
    getSources: (state) => state.sources,
    getTotalResults: (state) => state.totalResults,
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSources(state, q) {
      state.sources = q;
    },
    setTotalResults(state, totalResults) {
      state.totalResults = totalResults;
    },
  },
  actions: {
    async fetchNews({ commit }, payload) {
      commit("setLoading", true);
      try {
        const { path, country, category, page } = payload;
        const url = `${base}/${path ? path : "top-headlines"}?country=${
          country ? country : "ng"
        }&category=${category ? category : ""}&apiKey=${apiKey}&page=${
          page || 1
        }`;
        const response = await axios.get(url);
        const data = await response.data;
        commit("setNews", data.articles);
        commit("setTotalResults", data.totalResults);
        commit("setLoading", false);
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchByCategory({ commit }, payload) {
      commit("setLoading", true);
      try {
        const { path, source, q, page } = payload;
        const url = `${base}/${path ? path : "top-headlines"}?sources=${
          source ? source : ""
        }&apiKey=${apiKey}&q=${q ? q : ""}&page=${page || 1}`;
        const response = await axios.get(url);
        const data = await response.data;
        commit("setNews", data.articles);
        commit("setTotalResults", data.totalResults);
        commit("setLoading", false);
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchSources({ commit }) {
      try {
        const url = `${base}/top-headlines/sources?apiKey=${apiKey}`;
        const response = await axios.get(url);
        const data = await response.data;
        commit("setSources", data.sources);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  modules: {},
});

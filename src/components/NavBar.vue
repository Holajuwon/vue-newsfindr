<template>
  <div id="nav">
    <router-link to="/">Top Headlines</router-link> |
    <router-link :to="{ name: 'About', params: { category: 'business' } }">
      Business
    </router-link>
    |
    <router-link :to="{ name: 'About', params: { category: 'entertainment' } }">
      Entertainment
    </router-link>
    |
    <router-link :to="{ name: 'About', params: { category: 'technology' } }">
      Technology
    </router-link>
    |
    <router-link :to="{ name: 'About', params: { category: 'sports' } }">
      Sports
    </router-link>
  </div>
  <div v-if="$route.name == 'Home'">
    <select name="city" list="cityname" v-model="currentSource">
      <option value=""></option>
      <option v-for="source in getSources" :key="source.id" :value="source.id">
        {{ source.name }}
      </option>
    </select>
    <input type="text" v-model="searchTerm" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      searchTerm: "",
      currentSource: "",
    };
  },
  watch: {
    searchTerm(q) {
      let { params, name } = this.$route;
      let query = this.currentSource
        ? { q, source: this.currentSource }
        : { q };
      this.$router.push({
        name,
        params,
        query,
      });
    },
    currentSource(source) {
      let { params, name } = this.$route;
      let query = this.searchTerm ? { source, q: this.searchTerm } : { source };
      this.$router.push({
        name,
        params,
        query,
      });
    },
  },
  methods: {
    ...mapActions(["fetchSources", "fetchByCategory"]),
  },
  computed: {
    ...mapGetters(["getSources"]),
  },
  mounted() {
    this.fetchSources();
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

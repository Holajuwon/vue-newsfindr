<template>
  <div class="home">
    <h2>Top Headlines</h2>
    <DisplayContainer :news="getNews" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DisplayContainer from "@/components/DisplayContainer.vue";

export default {
  name: "Home",
  components: { DisplayContainer },
  computed: {
    ...mapGetters(["getNews"]),
  },
  methods: {
    ...mapActions(["fetchNews", "fetchByCategory"]),
  },
  mounted() {
    this.fetchNews({});
  },
  watch: {
    "$route.query.q"() {
      let query = this.$route.query;
      this.fetchByCategory(query);
    },
    "$route.query.page"() {
      let query = this.$route.query;
      query.q || query.source
        ? this.fetchByCategory(query)
        : this.fetchNews(query);
    },
    "$route.query.source"() {
      let query = this.$route.query;
      this.fetchByCategory(query);
    },
  },
};
</script>

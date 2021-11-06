<template>
  <p v-if="getLoading">Loading...</p>
  <div v-else class="main-container">
    <div class="containerr">
      <NewsCard
        v-for="(news, id) in news"
        :key="id"
        :image="news.urlToImage"
        :title="news.title"
        :text="news.description"
        :link="news.url"
        :source="news.source.name"
      />
    </div>
    <Pagination
      v-model="page"
      :records="getTotalResults"
      :per-page="20"
      @paginate="handlePagination"
    />
  </div>
</template>

<script>
import Pagination from "v-pagination-3";
import NewsCard from "@/components/NewsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "DisplayContainer",
  components: {
    NewsCard,
    Pagination,
  },
  computed: {
    ...mapGetters(["getLoading", "getTotalResults"]),
  },
  props: {
    news: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page(page) {
      let { params, name } = this.$route;
      let q = this.$route.query;
      let query = q ? { ...q, page } : { page };
      this.$router.push({
        name,
        params,
        query,
      });
    },
    "$route.path"() {
      this.page = 1;
    },
  },
  mounted() {
    // TODO
    // Get current query and load page at query
    // this.page = this.$route.query.page;
  },
};
</script>

<style scoped>
.containerr {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

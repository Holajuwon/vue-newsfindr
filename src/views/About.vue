<template>
  <div class="about">
    <h2>{{ category.toUpperCase() }}</h2>
    <DisplayContainer :news="getNews" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DisplayContainer from "@/components/DisplayContainer.vue";

export default {
  name: "About",
  components: { DisplayContainer },
  data() {
    return {
      category: this.$route.params.category,
    };
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
  methods: {
    ...mapActions(["fetchNews"]),
  },
  mounted() {
    this.fetchNews({ category: this.category });
  },
  watch: {
    "$route.params.category"() {
      this.category = this.$route.params.category;
      this.fetchNews({ category: this.category });
    },
    "$route.query.page"() {
      let query = this.$route.query;
      this.fetchNews({ ...query, category: this.category });
    },
  },
};
</script>

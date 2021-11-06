<template>
  <div class="news-card">
    <div class="news-card__image">
      <img :src="image" alt="news image" />
    </div>
    <div class="news-card__content">
      <h2 class="news-card__source">{{ source }}</h2>
      <h3 class="news-card__title">{{ title }}</h3>
      <p class="news-card__text">{{ text }}</p>
      <a :href="link" target="__blank" class="news-card__link">READ MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["image", "title", "text", "link", "source"],
  data() {
    return {};
  },
};
</script>

<style>
.news-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  max-width: 450px;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.news-card__image {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 5px 5px 0 0;
}
.news-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-card__content {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-card__title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.news-card__source {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.news-card__text {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 10px;
  text-align: left;
}
.news-card__link {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #42b983;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.news-card__link:hover {
  background-color: #00a8ff;
}
.news-card__link:active {
  background-color: #00a8ff;
}
</style>

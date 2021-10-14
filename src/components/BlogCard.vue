<template>
  <div>
    <div v-for="(info, index) in getDataApi" :key="index">
      <img
        :src="info.urlToImage"
        alt="url-image-article"
        height="200"
        width="400"
      />
      <h5>{{ info.title }}</h5>
      <h6>Publié le {{ info.publishedAt }}</h6>
      <p>{{ info.description }}</p>
      <router-link :to="{ name: 'Article', params: { id: index + 1 } }"
        >Voir l'article</router-link
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "BlogCard",
  computed: {
    getDataApi() {
      let test = this.$store.state.infosArticles;
      console.log(this.$store.state.infosArticles);
      return test;
    },
  },
};
</script>
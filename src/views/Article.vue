<template>
  <div>
    <img :src="urlToImage" alt="url-image-article" height="200" width="400" />
    <h5>{{ title }}</h5>
    <h6>Publié le {{ publishedAt }}</h6>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      content: "",
      urlToImage: "",
      publishedAt: "",
      title: "",
    };
  },
  mounted() {
    let data =
      this.$store.state.infosArticles[parseInt(this.$route.params.id) - 1];
    console.log(data);
    this.content = data.content;
    this.urlToImage = data.urlToImage;
    this.publishedAt = data.publishedAt;
    this.title = data.title;
    console.log(this.urlToImage);
  },
};
</script>
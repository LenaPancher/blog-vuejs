<template>
    <div>
        <div v-for="(info, index) in getDataApi" :key="index">
          <img :src='info.urlToImage' alt="url-image-article" height="200" width="400">
          <h5> {{ info.title }}</h5>
          <h6>Publié le {{ info.publishedAt }}</h6>
          <p>{{ info.description }}</p>
          <router-link to="/article" :index="index">Voir l'article</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    computed: {
        getDataApi() {
          this.$store.dispatch("getData")
          return this.$store.state.infosArticles
        }
    }
}
</script>
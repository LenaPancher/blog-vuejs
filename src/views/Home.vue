<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <blog-card></blog-card>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BlogCard
  },
};
</script>

<template>
  <div class="container">
    <div class="article-info">
      <div>
        <h5 class="article-title" :class="{ empty: empty }">{{ title }}</h5>
        <h6 class="article-author" :class="{ empty: empty }">
          Par {{ author }}
        </h6>
        <h6 class="article-published" :class="{ empty: empty }">
          Publié le {{ publishedAt }}
        </h6>
      </div>
      <img :src="urlToImage" alt="url-image-article" height="200" width="400" />
    </div>
    <div class="article-content">
      <p>{{ content }}</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
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
      author: "",
      empty: false,
    };
  },
  mounted() {
    
    let store = this.$store.state.infosArticles;

    let ls = JSON.parse(localStorage.getItem("session"));

    if (ls) {
      ls.forEach((element) => {
        store.push(element);
      });
    }

    let data = store.find(
      (item) => parseInt(item.id) === parseInt(this.$route.params.id)
    );

    this.content = data.content;
    this.urlToImage = data.urlToImage;
    this.publishedAt =
      data.publishedAt === null ? (this.empty = true) : data.publishedAt;
    this.title = data.title;
    this.author = data.author === null ? (this.empty = true) : data.author;
  },
};
</script>

<style scoped>
.container {
  margin-top: 130px;
  margin-left: 200px;
  margin-right: 200px;
}

.article-info {
  display: flex;
  place-content: space-between;
}

.article-title {
  font-size: xx-large;
  font-weight: bold;
  margin: 0;
}

.article-published,
.article-author {
  font-size: small;
  color: #717b8e;
  margin: 3% 0 0 0;
}

.article-content {
  margin-top: 4%;
  line-height: 23px;
}

.empty {
  content-visibility: hidden;
}
</style>
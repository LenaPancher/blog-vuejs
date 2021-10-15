<template>
    <div class="tesla_grid_card">
        <div class="tesla_card" v-for="(info, index) in getDataApi" :key="index">
          <div class="tesla_card_image">
            <img :src='info.urlToImage' alt="url-image-article" height="200" width="400">
          </div>
          <div class="tesla_card_text">
            <h1> {{ info.title }}</h1>
            <span>Publié le {{ info.publishedAt }}</span>
            <p>{{ info.description }}</p>
            <router-link :to="{name : 'Article',  params: { id: index + 1 }}">Voir l'article</router-link>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "BlogCard",
  computed: {
    getDataApi() {
      let test = this.$store.state.infosArticles;
      console.log(test)
      return test;
    },
  },
  methods: {
    getNextArticles() {
      window.onscroll = () => {
        let windowHeight = document.documentElement.scrollTop + window.innerHeight,
            offsetHeight = document.documentElement.offsetHeight;

        if (windowHeight >= offsetHeight) {
         this.$store.getters.getNewItems.forEach((index) => {

            this.$store.state.infosArticles.push(index)
            console.log(this.$store.state.infosArticles)
          })
        }
      }
    }
  },
  mounted() {
    this.getNextArticles()
  }
};
</script>

<style scoped>
.tesla_grid_card {
  position: relative;
  top: 70px;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-columns: minmax(100px, auto);
}
.tesla_card {
  position: relative;
  height: 550px;
  background: white;
  border: none;
  box-shadow: 0px 0px 13px 0px rgb(82 63 105 / 10%);
  border-radius: 5px;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.tesla_card_image {
  position: relative;
  width: 100%;
  left: 0;
  top: 0;
  height: 30%;
  overflow: hidden;
}
.tesla_card_image img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tesla_card_text {
  padding: 20px 20px 20px 40px;
  position: relative;
  bottom: 0;
  height: 65%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tesla_card_text:before {
  content: "";
  position: absolute;
  left: 15px;
  top: 10%;
  width: 2px;
  height: 75%;
  background-color: #2a2a2a;
  padding: 20px 0;
}
.tesla_card_text h1 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  height: 55px;
  overflow: hidden;
}

.tesla_card_text span {
  background-color: #2a2a2a;
  color: white;
  text-transform: uppercase;
  padding: 5px;
  font-size: 10px;
  width: 30%;
  border-radius: 5px;
  top: 30%;
  position: absolute;
}

.tesla_card_text p {
  font-size: 14px;
  position: absolute;
  top: 40%;
  padding: 0 20px 0 0;
}

.tesla_card_text a {
  color: white;
  background: #2a2a2a;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  width: 40%;
  border-radius: 5px;
}

@media only screen and (max-width: 1035px) {
  .tesla_grid_card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;
    grid-row-gap: 100px;
  }
  .tesla_card_image img {
    object-fit: cover;
  }
}

@media only screen and (max-width: 640px) {
  .tesla_grid_card {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1em;
    grid-row-gap: 100px;
  }
}
</style>

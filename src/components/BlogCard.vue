<template>
  <div>
    <div class="testla_button_load">
      <button @click="toggleGrid('api')">ARTICLE API</button>
      <button @click="toggleGrid('admin')" v-if="!empty">ARTICLE ADMIN</button>
    </div>

        <div v-if="showGrid === 'api'" class="tesla_grid_card">
            <div class="tesla_card" v-for="(info) in getDataApi" :key="info">
              <div class="tesla_card_image">
                <img :src='info.urlToImage' alt="url-image-article" height="200" width="400">
              </div>
              <div class="tesla_card_text">
                <h1> {{ info.title }}</h1>
                <span>Publié le {{ info.publishedAt }}</span>
                <p>{{ info.description }}</p>
                <router-link :to="{name : 'Article',  params: { id: info.id }}">Voir l'article</router-link>
              </div>
            </div>
        </div>


        <div v-if="showGrid === 'admin'" class="tesla_grid_card">
            <div class="tesla_card" v-for="(storage) in lsData" :key="storage">
              <div class="tesla_card_image">
                <img :src='storage.urlToImage' alt="url-image-article" height="200" width="400">
              </div>
              <div class="tesla_card_text">
                <h1> {{ storage.title }}</h1>
                <span>Publié le {{ storage.publishedAt }}</span>
                <p>{{ storage.description }}</p>
                <router-link :to="{name : 'Article',  params: { id: storage.id }}">Voir l'article</router-link>
              </div>
            </div>
        </div>
      </div>

</template>


<script>
export default {
  name: "BlogCard",
  data() {
    return {
      showGrid: "api",
      lsData: [],
      empty: false
    }
  },
  computed: {
    getDataApi() {
      let api = this.$store.state.infosArticles;
      console.log(this.$store.state.infosArticles);
      return api;
    },
  },
  methods: {
    toggleGrid(result) {
      this.showGrid = result;
      console.log(this.showGrid);
    },
    getLocalStorageData() {
      let ls = JSON.parse(localStorage.getItem('session'))
      console.log(ls)
      this.lsData = ls === null ? (this.empty = true) : ls;
      console.log(ls)
    }
  },
  mounted() {
    this.getLocalStorageData();
  }
}
</script>

<style scoped>

.testla_button_load {
  position: relative;
  top: 100px;
  left: 40px;
  z-index: 3;
}

.testla_button_load button {
  color: white;
  background: #2a2a2a;
  padding: 5px;
  font-size: 12px;
  width: 15%;
  border-radius: 5px;
  border: none;
  margin-right: 3%;
  cursor: pointer;
}

.tesla_grid_card {
  position: relative;
  top: 70px;
  padding: 40px;
  z-index: 1;
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
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
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
    text-overflow: ellipsis;
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
  cursor: pointer;
}

@media only screen and (max-width: 1035px) {
  .tesla_grid_card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;
    grid-row-gap: 10px;
  }

  .tesla_card_image img {
    object-fit: cover;
  }

  .testla_button_load button {
    margin-bottom: 3%;
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
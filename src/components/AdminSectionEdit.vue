<template>

  <section class="tesla_admin">
    <h1>SECTION ADMINISTRATION</h1>
    <form @submit.prevent="editArticle">
      <div class="tesla_clear">
        <label for="title">TITRE DE L'ARTICLE</label>
        <input name="title" type="text" v-model="newTitle">
      </div>
      <div class="tesla_clear">
        <label for="autheur">NOM DE L'AUTHEUR</label>
        <input name="autheur" type="text" v-model="newAuthor">
        <label for="shortdesc">PETITE DESCRIPTION</label>
        <textarea name="shortdesc" v-model="newShortDesc"></textarea>
      </div>
      <div class="tesla_clear">
        <label for="url">URL IMAGE</label>
        <input name="url" type="text" v-model="urlImage">
        <label for="title">GRANDE DESCRIPTION</label>
        <textarea name="shortdesc" v-model="content"></textarea>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </section>

</template>

<script>
  export default {
    name: 'AdminEdit',
    data: () => {
      return {
        id: Number,
        datas: '',
        newTitle: '',
        newAuthor: '',
        urlImage: '',
        content: '',
        newShortDesc: '',
      }
    },
    methods: {
    },
    mounted() {
      const route = +this.$route.params.id
      const getLocalData = JSON.parse(localStorage.getItem('CartAdmin'));
      this.datas = getLocalData[route]
      this.newTitle = this.datas.title
      this.newAuthor = this.datas.author
      this.urlImage = this.datas.urlImage
      this.content = this.datas.content
      this.newShortDesc = this.datas.description
      localStorage.setItem('CartAdmin', JSON.stringify({title: this.newTitle,publishedAt: new Date().toLocaleDateString("fr-FR"),author: this.newAuthor,description: this.newShortDesc,urlToImage: this.urlImage,content: this.content}))
    }
  }
</script>


<style scoped>
.tesla_admin {
  position: relative;
  top: 70px;
  padding:20px;
}

.tesla_admin h1 {
  position: relative;
  font-size: 16px;
  padding: 0 0 0 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.tesla_admin h1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 2px;
  background: #2A2A2A;

}

.tesla_admin form {
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-start;
  padding: 40px;
}

.tesla_admin textarea,.tesla_admin input[type="text"],.tesla_admin input[type=email],.tesla_admin input[type=password],.tesla_admin input[type=tel] {
  float: left;
  position: relative;
  border: none;
  border: 1px solid #eee;
  background: #fff;
  width: 90%;
  padding: 10px;
  color: #666;
  font-size: 12px;
}
.tesla_admin input::-webkit-input-placeholder,.tesla_admin textarea::-webkit-input-placeholder {
  color: #888DA0;
  font-weight: 600;
  font-size: 12px;
  position: relative;
}
.tesla_admin input:-moz-placeholder,.tesla_admin textarea:-moz-placeholder {
  color: #888DA0;
  font-weight: 600;
  font-size: 13px
}
.tesla_admin textarea {
  height: 200px;
  resize: none;
}
.tesla_admin input {
  margin-bottom: 20px;
}
.tesla_admin label {
  float: left;
  position: relative;
  width: 100%;
  text-align: left;
  font-weight: 500;
  padding: 10px 0 10px 0;
  color: #666;
}
.tesla_admin label i {
  padding-right: 12px;
  font-size: 16px;
  position: absolute;
  top: 14px;
  left: 20px;
  text-align: center;
}
.tesla_admin button {
  padding: 20px 35px;
  margin: 10px 0;
  outline: none;
  border: none;
  cursor: pointer;
}

</style>
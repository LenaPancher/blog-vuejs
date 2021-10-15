 <template>
  <section class="tesla_admin">
    <div class="tesla_addCart">
      <h1>SECTION ADMINISTRATION</h1>
      <form @submit.prevent="addCard">
        <div class="tesla_clear">
          <label for="title">TITRE DE L'ARTICLE</label>
          <input name="title" type="text" v-model="newTitle" />
        </div>
        <div class="tesla_clear">
          <label for="autheur">NOM DE L'AUTHEUR</label>
          <input name="autheur" type="text" v-model="newAuthor" />
          <label for="shortdesc">PETITE DESCRIPTION</label>
          <textarea name="shortdesc" v-model="newShortDesc"></textarea>
        </div>
        <div class="tesla_clear">
          <label for="url">URL IMAGE</label>
          <input name="url" type="text" v-model="urlImage" />
          <label for="title">GRANDE DESCRIPTION</label>
          <textarea name="shortdesc" v-model="content"></textarea>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <div class="tesla_tableau">
        <table>
      <thead>
        <tr>
          <th>TITRE</th>
          <th>DATE</th>
          <th>NOM</th>
          <th>DESCRIPTION</th>
          <th>URL</th>
          <th>CONTENT</th>
        </tr>
          <tr v-for="(storage) in getLocalStorageData()" :key='storage'>
            <td>{{ storage.title }}</td>
            <td>{{ storage.publishedAt }}</td>
            <td>{{ storage.author }}</td>
            <td>{{ storage.description }}</td>
            <td>{{ storage.urlImage }}</td>
            <td>{{ storage.content }}</td>
            <td><i @click="deleteItem(storage.id)" style="color:red" class="fas fa-trash"></i></td>
            <td><i @click="editItem(storage.id)" style="color:orange" class="fas fa-edit"></i></td>
            <td v-if="isEdit"><i style="color:green" class="fas fa-check-square"></i></td>
          </tr>
        
      </thead>

      <tbody>
         
      </tbody>      
    </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "addCard",
  computed: {
    getDataApi() {
      let api = this.$store.state.infosArticles;
      console.log(this.$store.state.infosArticles);
      return api;
    },
  },
  data() {
    return {
      newTitle: "",
      newAuthor: "",
      newShortDesc: "",
      urlImage: "",
      content: "",
      lsData: []
    };
  },
  mounted() {},
  methods: {
    addCard() {
      let tableauAdmin = {
        id: Math.floor(Math.random() * 1000000 + 1),
        title: this.newTitle,
        publishedAt: new Date().toLocaleDateString("fr-FR"),
        author: this.newAuthor,
        description: this.newShortDesc,
        urlToImage: this.urlImage,
        content: this.content,
      };
      console.log(tableauAdmin);
      var a = [];
      a = JSON.parse(localStorage.getItem("session")) || [];
      a.push(tableauAdmin);
      localStorage.setItem("session", JSON.stringify(a));
      this.getLocalStorageData();
    },
    getLocalStorageData(){
      let ls = JSON.parse(localStorage.getItem('session'))
      this.lsData = ls;
      
      return this.lsData;
    },
    deleteItem(id) {
      const storage = JSON.parse(localStorage.getItem('session'));
      const index = storage.findIndex(item => item.id == id);
      storage.splice(index, 1);
      localStorage.setItem('session', JSON.stringify(storage));
      this.getLocalStorageData();


    },
    deleteAll() {

    },
    editItem() {    
    }
  },
};
</script>

<style scoped>
.tesla_admin {
  position: relative;
  top: 70px;
  padding: 20px;
}

.tesla_addCart h1 {
  position: relative;
  font-size: 16px;
  padding: 0 0 0 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.tesla_addCart h1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 2px;
  background: #2a2a2a;
}

.tesla_addCart form {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  padding: 40px;
}

.tesla_addCart textarea,
.tesla_addCart input[type="text"],
.tesla_addCart input[type="email"],
.tesla_addCart input[type="password"],
.tesla_addCart input[type="tel"] {
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
.tesla_addCart input::-webkit-input-placeholder,
.tesla_addCart textarea::-webkit-input-placeholder {
  color: #888da0;
  font-weight: 600;
  font-size: 12px;
  position: relative;
}
.tesla_addCart input:-moz-placeholder,
.tesla_addCart textarea:-moz-placeholder {
  color: #888da0;
  font-weight: 600;
  font-size: 13px;
}
.tesla_addCart textarea {
  height: 200px;
  resize: none;
}
.tesla_addCart input {
  margin-bottom: 20px;
}
.tesla_addCart label {
  float: left;
  position: relative;
  width: 100%;
  text-align: left;
  font-weight: 500;
  padding: 10px 0 10px 0;
  color: #666;
}
.tesla_addCart label i {
  padding-right: 12px;
  font-size: 16px;
  position: absolute;
  top: 14px;
  left: 20px;
  text-align: center;
}
.tesla_addCart button {
  padding: 20px 35px;
  margin: 10px 0;
  outline: none;
  border: none;
  cursor: pointer;
}

.tesla_admin {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
table {
  width: 800px;
  border-right-color: #ffffff;
  margin-top: 100px;
  font-size: 18px;
  /* /* border: 1px solid #343a40; */
  border-collapse: collapse; 
}

th, td {
  /* border: 1px solid #343a40; */
  padding: 16px 24px;
  text-align: center;
}
td i {
  cursor: pointer;
}
th {
  background-color: #2A2A2A;
  color: #fff;
  width: 25%;
}
tbody tr:nth-child(odd){
  background-color: #f8f9fa;
}

tbody tr:nth-child(even){
  background-color: #e9ecef;
}



</style>
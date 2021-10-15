<template>
  <div class="tesla_admin_dashboard_container">
    <table class="tesla_admin_dashboard">
      <thead>
        <tr>
          <th>title</th>
          <th>published_at</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datas" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.publishedAt }}</td>
          <td>{{ item.author }}</td>
          <td>
            <button>
              <router-link :to="{name: 'AdminEdit', params: {id: index}}">Edit</router-link>
            </button>
            <button @click="deleteArticle(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AdminSectionList',
    data: () => {
      return {
        datas: []
      }
    },
    methods: {
      getData() {
        this.datas = JSON.parse(localStorage.getItem('CartAdmin'))
        return this.datas
      },
      deleteArticle(index) {
        this.$store.commit('deleteAdmin', index)
        this.getData()
      }
    },
    mounted() {
      this.getData()
      this.deleteArticle()
    },
    created() {
    }
  }
</script>

<style>
.tesla_admin_dashboard_container {
  position: relative;
  top: 70px;
}
</style>
<template>
  <nav :class="{ 'tesla_onScroll_menu': !view.topOfPage}" id="nav">
    <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="var(--tds-icon--fill, #171a20)"></path></svg>
    <div class="tesla_list_menu_mobile">
      <p>Menu</p>
    </div>
    <div class="tesla_list_menu">
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">A propos</router-link>
      <router-link to="/admin">Administration</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

nav {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: space-between;
}
nav a {
  font-size: 16px;
  font-weight: bold;
  color: #2a2a2a;
  position: relative;
  margin: 0 20px;
  text-decoration: none;

}

.tesla_list_menu_mobile {
  display: none;
}

nav svg {
  width: 10%;
}

.tesla_onScroll_menu {
  background-color: #2A2A2A;
  z-index: 10;
}

.tesla_onScroll_menu a {
  color: white !important;
}

.tesla_onScroll_menu svg path {
  fill: white;
}

.tesla_list_menu {
  padding: 0 20px;
}

.color_navbar {
    background-color:red
}

@media screen and (max-width: 500px) {
  nav svg {
  width: 30%;
  }

  .tesla_list_menu {
    display: none;
  }

  .tesla_list_menu_mobile {
    position: fixed;
    right: 10px;
    display: block;
    padding: 5px 10px;
    border-radius: 15px;
    width: 50px;
    text-align: center;
    background-color: #e3e3e3;
    cursor: pointer;
}

   .tesla_list_menu_mobile p {
    font-size: 12px;
    margin: 5px 0;
    color: #2A2A2A;
  }

  nav a, .testa_footer span {
  font-size: 12px !important;
  margin: 0 10px;
  }
  .tesla_link a {
  margin: 0 10px !important;
  }
}

</style>
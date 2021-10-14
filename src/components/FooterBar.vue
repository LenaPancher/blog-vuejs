<template>
    <footer class="tesla_footer">
        <span class="tesla_footer_title">Tesla Blog © 2021</span>
        <div class="tesla_footer_link tesla_link">
            <router-link to="/">Accueil</router-link>
            <router-link to="/about">A propos</router-link>
            <router-link to="/admin">Administration</router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterBar"
}
</script>


<style>
.tesla_footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #2A2A2A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
}

.tesla_footer_title {
    color: whitesmoke;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.tesla_link {
  position: relative;
  padding: 0 20px;
}

.tesla_link a {
  color: whitesmoke;
  margin: 0 20px;
  font-size: 12px;
  text-decoration: none;
}

@media screen and (max-width: 640px) {
  .tesla_footer_link{
    padding: 0;
  }
}

@media screen and (max-width: 960px) {
  .tesla_footer{
    padding-left: 5px;
  }

  .tesla_footer_title{
    font-size: 10px;
    width: 15%;
    margin-left: 20px;
  }

  .tesla_footer_link{
    display: flex;
    flex-flow: wrap;
    width: 70%;
    justify-content: space-around;
    padding-right: inherit;
  }
}

@media screen and (min-width: 768px) {
  .tesla_footer_title{
    width: auto;
  }

  .tesla_footer_link{
    width: auto;
  }
}

</style>
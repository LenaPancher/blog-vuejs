<template>
    <footer class="testa_footer">
        <span>Tesla Blog © 2021</span>
        <div class="tesla_link">
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
.testa_footer {
    position: absolute;
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

.testa_footer span {
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

</style>
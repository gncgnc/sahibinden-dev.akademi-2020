<template>
  <div id="app">
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="has-text-weight-bold is-primary"> dev.akademi</span>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#" tag="router-link" :to="{ path: '/' }">
          Ana Sayfa
        </b-navbar-item>
        <b-navbar-item href="#" tag="router-link" :to="{ path: '/admin' }">
          Admin
        </b-navbar-item>
        <b-navbar-item href="#" tag="router-link" :to="{ path: '/postings' }">
          İlanlar
        </b-navbar-item>

        <!-- <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
      </template>

      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/login' }">
          <div class="buttons is-centered">
            <a class="button is-light"> Giriş Yap </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <section class="container main mt-4">
    <h1 class="title">Admin Girişi</h1>
    <form>
      <b-field
        label="Kullanıcı Adı"
        type="is-success"
        message="This username is available"
      >
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="Şifre">
        <b-input type="password" value="iwantmytreasure" password-reveal>
        </b-input>
      </b-field>

      <b-button
        @submit.prevent="submitLogin"
        native-type="submit"
        type="is-success"
      >
        Giriş Yap
      </b-button>
    </form>
  </section>
</template>

<script>
import mapActions from "vuex";

export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    // ...mapActions(["requestLoginToken"]),
    // submitLogin() {
    //   this.requestLoginToken();
    //   this.$store.state.
    //   //   this.$router.
    },
  },
};
</script>

<style lang="scss">
.main {
  max-width: 800px;
}
</style>

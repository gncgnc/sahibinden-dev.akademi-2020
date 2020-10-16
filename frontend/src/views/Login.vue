<template>
  <section class="container main mt-4">
    <h1 class="title">Admin Girişi</h1>
    <form @submit.prevent="submitLogin">
      <b-field
        label="Kullanıcı Adı"
      >
        <b-input
          v-model="username"
          maxlength="30"
          type="{ hasError: 'is-error' }"
        ></b-input>
      </b-field>

      <b-field label="Şifre">
        <b-input
          v-model="password"
          type="password"
          value="iwantmytreasure"
          password-reveal
        >
        </b-input>
      </b-field>

      <b-button native-type="submit" type="is-success"> Giriş Yap </b-button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "Admin",
      password: "şifre1234",
    };
  },
  methods: {
    ...mapActions(["requestAdminToken"]),
    async submitLogin() {
      const { username, password } = this;
      await this.requestAdminToken({ username, password });
      if (this.$store.state.isLoggedIn) {
        this.$router.push({ path: "/admin" });
      } else {
        this.hasError = true;
      }
    },
  },
};
</script>

<style lang="scss">
.main {
  max-width: 800px;
}
</style>

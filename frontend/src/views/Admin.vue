<template>
  <section class="container">
    <h1 class="title my-4">Admin Paneli</h1>
  </section>
</template>

<script>
export default {
  name: "Admin",
  mounted() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push("login");
    }
  },
  data() {
    return {};
  },
};
</script>

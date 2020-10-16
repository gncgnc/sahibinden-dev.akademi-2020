<template>
  <section class="container">
    <h1 class="title my-4">Admin Paneli</h1>

    <PostingList :postings="[]"></PostingList>

  </section>
</template>

<script>
import PostingList from "../components/PostingList.vue";

export default {
  name: "Admin",
  components: {
    PostingList
  },
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

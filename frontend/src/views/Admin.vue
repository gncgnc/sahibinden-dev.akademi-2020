<template>
  <section class="container">
    <h1 class="title my-4">Admin Paneli</h1>

    <PostingList :postings="adminPostings"></PostingList>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostingList from "../components/PostingList.vue";

export default {
  name: "Admin",
  components: {
    PostingList,
  },
  async mounted() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push("login");
    } else {
      await this.$store.dispatch("requestAdminPostings", { page: 0, size: 5 });
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["adminPostings"]),
  },
};
</script>

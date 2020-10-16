<template>
  <section class="container">
    <h1 class="title my-4">Admin Paneli</h1>

    <!-- <PostingList :postings="adminPostings"></PostingList> -->
    <PostingList :admin="true" :postings="postings"></PostingList>
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
      // await this.$store.dispatch("requestAdminPostings", { page: 0, size: 5 });
      await this.$store.dispatch("requestPostings", { page: 0, size: 5 });
    }
  },
  data() {
    return {};
  },
  computed: {
    // ...mapState(["adminPostings"]),
    ...mapState(["postings"]),
  },
};
</script>

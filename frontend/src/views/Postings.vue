<template>
  <section class="container">
    <h1 class="title my-4">İlanlar</h1>

    <PostingList :postings="postings"></PostingList>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
// eslint-disable-next-line import/no-unresolved
import PostingList from "../components/PostingList.vue";

export default {
  name: "Postings",
  components: {
    PostingList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["postings"]),
  },
  async mounted() {
    await this.$store.dispatch("requestPostings", { page: 0, size: 30 });
  },
  methods: {
    // ...mapActions(["requestPostings"])
  },
};
</script>

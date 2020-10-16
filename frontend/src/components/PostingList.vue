<template>
  <div>
    <div class="card is-narrow" v-if="!hasPostings">İlan yok...</div>
    <Posting
      class="is-narrow"
      v-for="posting in postings"
      :key="posting.id"
      :data="posting"
    ></Posting>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Posting from "./Posting.vue";

export default {
  name: "PostingList",
  components: {
    Posting,
  },
  props: {
    postings: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    hasPostings() {
      if (!this.postings) return false;
      if (!this.postings.length) return false;
      return true;
    },
  },
};
</script>

<style scoped>
.is-narrow {
  max-width: min(80%, 600px);
  margin-right: auto;
  margin-left: auto;
}
</style>

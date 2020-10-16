<template>
  <div>
    <div class="card is-narrow py-4" v-if="!hasPostings">İlan yok...</div>
    <Posting
      class="is-narrow"
      v-for="posting in postings"
      :key="posting.id"
      :data="posting"
      :admin="admin"
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
    admin: {
      type: Boolean,
      default: false,
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

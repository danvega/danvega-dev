<template>
  <ais-instant-search :search-client="searchClient" index-name="blog_posts">
    <ais-search-box placeholder="Search Blog Posts"/>

    <ais-autocomplete/>

    <ais-results>
      <template slot-scope="{ result }">
        <div>
          <ais-highlight :result="result" attribute-name="title"></ais-highlight>
        </div>
      </template>
    </ais-results>
  </ais-instant-search>
</template>

<script>
import {
  createFromAlgoliaCredentials,
  createFromSerialized,
  FACET_OR
} from "vue-instantsearch";

let store;

export default {
  name: "blog-post-search",
  asyncData({ context, route }) {
    store = createFromAlgoliaCredentials(
      "OGKDQRX9N1",
      "a08fee23596f5fba368c7b04e36ee24b"
    );
    store.indexName = "blog_posts";
    store.query = route.params.query ? route.params.query : "";
    store.addFacet("colors", FACET_OR);
    store.highlightPreTag = "<mark>";
    store.highlightPostTag = "</mark>";
    store.start();
    store.refresh();
    return store.waitUntilInSync().then(() => {
      // eslint-disable-next-line no-param-reassign
      context.state = {
        searchStore: store.serialize()
      };
    });
  },
  beforeMount() {
    if (!window.__INITIAL_STATE__) {
      throw new Error("Not state was found.");
    }
    this.searchStore = createFromSerialized(
      window.__INITIAL_STATE__.searchStore
    );
  },
  watch: {
    $route() {
      this.searchStore.query = this.$route.params.query
        ? this.$route.params.query
        : "";
    },
    "searchStore.query"(to) {
      if (to.length === 0) {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "search", params: { query: to } });
      }
    }
  },
  data() {
    return {
      searchStore: store
    };
  },
  methods: {
    getBlogPostURL(date, slug) {
      const base = process.env.GRIDSOME_BASE_URL;
      const createdOn = new Date(date);
      const year = createdOn.getFullYear();
      const month = `${
        createdOn.getMonth() + 1 < 10 ? "0" : ""
      }${createdOn.getMonth() + 1}`;
      const day = `${
        createdOn.getDate() < 10 ? "0" : ""
      }${createdOn.getDate()}`;
      return `/blog/${year}/${month}/${day}/${slug.toLowerCase()}`;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.search-results {
  background-color: rgb(233, 233, 233);
  list-style-type: none;
}
.search-results li {
  padding: 10px;
}
.search-results li:hover {
  background-color: rgb(206, 206, 206);
}
.search-results li a {
  color: #ff4e46;
}
</style>

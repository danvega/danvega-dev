<template>
  <AisInstantSearchSsr class="sidebar posts__sidebar">
    <div class="posts__search">
      <div class="posts__search-box">
        <ais-autocomplete :indices="[]">
          <template slot-scope="{ currentRefinement, indices, refine }">
            <input
              type="search"
              class="input"
              :value="currentRefinement"
              placeholder="Search Blog Posts"
              @input="refine($event.currentTarget.value)"
            >
            <ul v-for="index in indices" :key="index.label">
              <li v-if="currentRefinement">
                <ul class="search-results">
                  <li v-for="post in index.hits" :key="post.objectID">
                    <g-link class="post__link" :to="getBlogPostURL(post.date,post.slug)">
                      <ais-highlight attribute="title" :hit="post"/>
                    </g-link>
                    <span class="description">{{ post.excerpt }}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </ais-autocomplete>
      </div>
    </div>
  </AisInstantSearchSsr>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import {
  createInstantSearch,
  AisInstantSearchSsr,
  AisAutocomplete,
  AisHits,
  AisHighlight
} from "vue-instantsearch";

const searchClient = algoliasearch(
  "OGKDQRX9N1",
  "a08fee23596f5fba368c7b04e36ee24b"
);
const { instantsearch, rootMixin } = createInstantSearch({
  indexName: "blog_posts",
  searchClient
});

export default {
  name: "blog-post-search",
  components: {
    AisHighlight,
    AisInstantSearchSsr,
    AisAutocomplete
  },
  mixins: [rootMixin],
  data() {
    return {
      hit: null,
      hitsPerPage: 20
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
.post {
  padding: 10px;
}
ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.search-results {
  background-color: rgb(240, 240, 240);
  list-style-type: none;
}
.search-results li {
  padding: 10px;
}
.search-results li:hover {
  /* background-color: rgb(206, 206, 206); */
}
.search-results li a {
  color: #ff4e46;
}
.description {
  display: block;
}
</style>

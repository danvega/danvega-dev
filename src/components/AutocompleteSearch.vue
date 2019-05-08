<template>
  <ais-instant-search-ssr :search-client="searchClient" index-name="blog_posts">
    <ais-autocomplete :indices="[]">
      <div slot-scope="{ currentRefinement, indices, refine }">
        <input
          type="search"
          class="input"
          :value="currentRefinement"
          placeholder="Search Blog Posts"
          @input="refine($event.currentTarget.value)"
        >
        <ul v-if="currentRefinement" v-for="index in indices" :key="index.label">
          <li>
            <ul class="search-results">
              <li v-for="hit in index.hits" :key="hit.objectID">
                <a :href="getBlogPostURL(hit.date,hit.slug)">
                  <ais-highlight attribute="title" :hit="hit"/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ais-autocomplete>
  </ais-instant-search-ssr>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  name: "autocomplete-search",
  mixins: [rootMixin],
  data() {
    return {
      searchClient: algoliasearch(
        "OGKDQRX9N1",
        "a08fee23596f5fba368c7b04e36ee24b"
      )
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

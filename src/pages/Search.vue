<template>
  <Layout>
    <ais-instant-search :search-client="searchClient" index-name="blog_posts">
      <ais-autocomplete :indices="[]">
        <div slot-scope="{ currentRefinement, indices, refine }">
          <input
            type="search"
            :value="currentRefinement"
            placeholder="Search Blog Posts"
            @input="refine($event.currentTarget.value)"
          >
          <ul v-if="currentRefinement" v-for="index in indices" :key="index.label">
            <li>
              <ul>
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
    </ais-instant-search>
  </Layout>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";
import { instanceOf } from "prop-types";

export default {
  name: "search",
  components: {},
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

      console.log(date);
      console.log(Date.parse(date));

      return `/blog/${year}/${month}/${day}/${slug}`;
    }
  }
};
</script>

<style>
</style>

<template>
  <div class="search-wrapper">
    <search-focus @keyup="focusSearch" />
    <div class="search">
      <p>
        <input
          type="text"
          placeholder="Search (Press '/' to focus)"
          class="input"
          v-model="query"
          @blur="searchResultsVisible = false"
          @focus="searchResultsVisible = true"
          @keydown.esc="reset"
          @input="softReset"
          ref="search"
          @keyup="performSearch"
          @keydown.up.prevent="highlightPrevious"
          @keydown.down.prevent="highlightNext"
          @keydown.enter="gotoLink"
        />
        <span class="icon">
          <i class="fas fa-search"></i>
        </span>
      </p>
      <div v-if="query.length > 0" class="close" @click="reset">&times;</div>
    </div>
    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="results-container"
        style="max-height: 20rem"
      >
        <div class="results" ref="results">
          <a
            v-for="(post, index) in searchResults"
            :key="index"
            :href="post.item.path"
            @mousedown.prevent="searchResultsVisible = true"
            class="result"
            :class="{ 'bg-blue': index === highlightedIndex }"
          >{{ post.item.title }}</a>
          <div v-if="searchResults.length === 0">
            <p class="my-0">
              No results for '
              <strong>{{ query }}</strong>'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchFocus from "./SearchFocus";
import axios from "axios";

export default {
  components: {
    SearchFocus
  },
  data() {
    return {
      query: "",
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "excerpt"]
      }
    };
  },
  created() {
    axios.get("/search.json").then(response => {
      this.posts = response.data;
    });
  },
  methods: {
    reset() {
      this.query = "";
      this.highlightedIndex = 0;
    },
    softReset() {
      this.searchResultsVisible = true;
      this.highlightedIndex = 0;
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.searchResults = results;
      });
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest"
      });
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.path;
      }
    }
  }
};
</script>

<style scoped>
.search-wrapper {
  position: relative;
  margin-right: 20px;
  width: 80%;
}
.search {
  margin: 8px 0 0 0;
  padding: 0px;
  max-width: 100%;
  position: relative;
}
.search input {
  width: 100%;
  max-width: 100%;
  padding: 0.4rem 0.4rem 0.4rem 2.2rem;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  color: #363636;
  border-radius: 999px;
  border: 1px solid transparent;
  background-color: #fff;
  border-color: #dbdbdb;
  font-size: 1.1rem;
}
.search input:focus {
  outline: none;
}

.search input::placeholder {
  color: lightgray;
  font-size: 0.9rem;
}
.search .icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  left: 0;
  color: #dbdbdb;
  height: 2em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2em;
  z-index: 4;
}
.search input:focus .icon {
  color: #7a7a7a;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 24px;
  margin-right: 10px;
  color: #718096;
}

/* Search Results */

.results-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 10;
  background: white;
  margin: 0px;
  padding: 0px;
  border: 1px solid #718096;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.results {
  display: flex;
  flex-direction: column;
}
a.result,
a.result:hover,
a.result:link {
  font-family: hack, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 0.9rem;
  display: inline-block;
  border: 3px #718096;
  cursor: pointer;
  padding: 10px;
  color: rgb(63, 63, 63);
  text-decoration: none;
}
a.result:hover {
  background-color: rgb(236, 236, 236);
}
.description {
  display: block;
  margin: 3px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bg-blue {
  background-color: #ebf8ff;
}

/* media queries */
@media (max-width: 768px) {
  .results-container {
    width: 100%;
  }
}
</style>

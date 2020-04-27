<template>
  <div class="search-wrapper">
    <search-focus @keyup="focusSearch" />
    <div class="field search">
      <p class="control has-icons-left">
        <input
          type="text"
          placeholder="Search (Press  &quot;/&quot; to focus)"
          class="input is-rounded"
          v-model="query"
          @blur="searchResultsVisible = false"
          @focus="searchResultsVisible = true"
          @keydown.esc="searchResultsVisible = false"
          @input="softReset"
          ref="search"
          @keyup="performSearch"
          @keydown.up.prevent="highlightPrevious"
          @keydown.down.prevent="highlightNext"
          @keydown.enter="gotoLink"
        />
        <span class="icon is-small is-left">
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
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >{{ post.item.title }}</a>
          <div
            v-if="searchResults.length === 0"
            class="font-normal w-full border-b cursor-pointer p-4"
          >
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
  border: 1px solid red;
}
.search {
  margin: 8px 0 0 0;
  padding: 0px;
  max-width: 100%;
  position: relative;
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
.results-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 350px;
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
  display: inline-block;
  border: 5px #718096;
  cursor: pointer;
  padding: 4px;
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

.search-wrapper >>> input {
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
}

/*
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.25em;
}
.input.is-rounded {
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
}
.input,
.textarea {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  width: 100%;
}
.input,
.select select,
.textarea {
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}
.button,
.file-cta,
.file-name,
.input,
.pagination-ellipsis,
.pagination-link,
.pagination-next,
.pagination-previous,
.select select,
.textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: -webkit-inline-box;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  -webkit-box-pack: start;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  position: relative;
  vertical-align: top;
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
}
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.5em;
}
*/
</style>

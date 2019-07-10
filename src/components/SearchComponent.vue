<template>
  <div class="is-relative">
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
        >
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
      <div
        v-if="query.length > 0"
        class="close"
        @click="reset">
        &times;
      </div>
    </div>
    <transition name="fade">
      <div v-if="query.length > 0 && searchResultsVisible" class="results-container" style="max-height: 32rem">
        <div class="results" ref="results">
          <a
            v-for="(post, index) in searchResults"
            :key="index"
            :href="post.item.path"
            @mousedown.prevent="searchResultsVisible = true"
            class="post"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >
            {{ post.item.title }}
            <span class="description">{{ post.item.excerpt }}</span>
          </a>

          <!-- <div v-if="searchResults.length === 0" class="font-normal w-full border-b cursor-pointer p-4">
            <p class="my-0">No results for '<strong>{{ query }}</strong>'</p>
          </div> -->
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import SearchFocus from './SearchFocus'
import axios from 'axios'

export default {
  components: {
    SearchFocus,
  },
  data() {
    return {
      query: '',
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
        keys: ['title', 'excerpt']
      }
    }
  },
  created() {
    axios.get('/search.json')
      .then(response => {
        this.posts = response.data
      })
  },
  methods: {
    reset() {
      this.query = ''
      this.highlightedIndex = 0
    },
    softReset() {
      this.searchResultsVisible = true
      this.highlightedIndex = 0
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options)
        .then(results => {
          this.searchResults = results
        })
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1
        this.scrollIntoView()
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1
        this.scrollIntoView()
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.path
      }
    }
  }
}
</script>

<style scoped>
.search {
  margin:0px;
  padding:0px;
  width: 350px; /* could expand to 100% or something larger */
  position: relative;
}
.close {
  /*absolute top-0 right-0 text-2xl mr-3 cursor-pointer text-gray-600 hover:text-gray-800*/
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 24px;
  margin-right:10px;
  color: #718096;
}
.results-container {
  /* absolute normal-case bg-white border left-0 right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 overflow-y-auto */
  position: absolute;
  left: 0;
  right: 0;
  width: 350px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 10;
  background: white;
  margin:0px;
  padding:0px;
}
.results {
  display:flex;
  flex-direction: column;
}
.post a {
  /* border-b border-gray-400 text-xl cursor-pointer p-4 hover:bg-blue-100 */
  border: bottom 1px gray;
  cursor: pointer;
  padding: 8px;

}
.description {
  /* block font-normal text-sm my-1 */
  display: block;
  margin: 3px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

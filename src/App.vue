<template>
  <div id="app">
    <Search v-on:searchRequested="handleSearch"/>
    <Preview :isLoading="isLoading" :gifs="fetchedGifs" />
  </div>
</template>

<script>
import Search from './components/Search'
import Preview from './components/Preview';

export default {
  name: 'App',
  data() {
    return {
      giphyTrendingAPI: 'https://api.giphy.com/v1/gifs/trending?api_key=hOh3MHTITlzyC8t1oPhESg9kb4xd3Bkc&limit=25&rating=g',
      giphySearchAPI: 'https://api.giphy.com/v1/gifs/search?api_key=hOh3MHTITlzyC8t1oPhESg9kb4xd3Bkc&limit=25&offset=0&rating=g&lang=en&q=',
      fetchedGifs: [],
      isLoading: true
    }
  },
  components: {
    Search,
    Preview
  },
  created() {
    fetch(this.giphyTrendingAPI)
      .then(res => { return res.json(); })
      .then(res => { this.fetchedGifs = res.data; this.isLoading = false })
  },
  methods: {
    handleSearch(query) {
      this.isLoading = true;
      this.fetchedGifs = [];
      fetch(this.giphySearchAPI + query)
        .then(res => { return res.json(); })
        .then(res => { this.fetchedGifs = res.data; this.isLoading = false})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div class="preview">
    <h1 v-if="isLoading">Loading...</h1>
    <h2 v-if="query">Results for: <b>{{query}}</b></h2>
    <ul v-if="!isLoading">
      <h2 v-if="!gifs.length">No results found</h2>
      <li v-for="(gif, index) in gifs" :key="index">
        <img :src="gif.images.fixed_height.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'query','gifs', 'isLoading' ]
}
</script>

<style scoped>
  .preview {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    list-style: none;
    float: left;
    margin: 20px;
  }
  
  h2 {
    text-align: center;
    width: 100%;
  }

</style>
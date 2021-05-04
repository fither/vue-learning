<template>
  <div class="preview">
    <h1 v-if="isLoading">Loading...</h1>
    <ul v-if="!isLoading">
      <li v-for="(gif, index) in gifs" :key="index">
        <img :src="gif.images.fixed_height.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'gifs', 'isLoading' ]
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

</style>
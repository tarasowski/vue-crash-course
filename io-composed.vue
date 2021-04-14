<template>
  <div class="home">
    <h1>Home</h1>
    <!-- we check if there is an error, show this block -->
    <div v-if="error"> {{ error }} </div>
    <!-- if the value was loaded and posts has a lenght -->
    <div v-if="posts.lenght">
      <PostList :posts="posts" />
    </div>
    <!-- if nothing of the conditions works output loading -->
    <div v-else>Loading...</div>
  </div>
</template>

<script>
  import PostList from "..."
  import { getData } from "./composables/getData.js"

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()
    
    load()

    return { posts, error }
  }
}

</script>

<style>
</style>

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
  import { ref } from "vue"

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("url")
        // data object includes key -> ok that signals if the response was okay
        if (!data.ok) {
          // throw error and catch it inside the catch block
          throw Error("no data available")
        }
        posts.value = await data.json() // we pass the value from the response to the reactive variable
      } catch (e) {
        error.value = err.message // update error with the message that we are throwing in the try block
        console.log(error.value)
      }
    }
    return { posts, error }
  }
}

</script>

<style>
</style>

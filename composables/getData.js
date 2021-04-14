import { ref } from "vue"

export const getData = () => {
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

  return { posts, error, load }
}

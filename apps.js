const app = Vue.createApp({
  data() {
    return {
      url: "https://www.tarasowski.de",
      url2: "https://www.tarasowski.de",
      title: "Final Empire Book",
      author: "Brandon Sanderson",
      age: 45,
      books: [
        {title: "name of the wind", author: "patrick rothfuss", image: "assets/1.jpg", isFav: true},
        {title: "the end of empire", author: "brandon sanderson", image: "assets/2.jpg", isFav: false},
        {title: "meditations", author: "marcus aurelius", image: "assets/3.jpg", isFav: true},
      ]
    }
  },
  methods: {
    updateFav(book) {
      // looks like there is binding in the batteries included
      book.isFav = !book.isFav
    },
    changeTitle(e, d) {
      console.log(d)
      this.title = e.target.value
    },
    increase() {
      this.age += 1
    },
    decrease() {
      this.age -= 1
    }
  },
  // computed property is data that depends on other data usually in data()
  // when the data in data() changes this will update computed will update
  computed: {
    filteredBooks() {
      // whatever we return here we can use it in the template
      return this.books.filter(v => v.isFav)
    }
  }
})

app.mount("#app")

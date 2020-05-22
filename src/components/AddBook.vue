<template>
  <div class="add-book">
    <h4 class="center-align grey-text darken-3">Add Book</h4>
    <form @submit.prevent="AddBook">
      <div class="field title">
        <label for="title">Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="field title">
        <label for="author">Author:</label>
        <input type="text" name="author" v-model="author" />
      </div>
      <div class="field title">
        <label for="isbn">Genre:</label>
        <input type="text" name="isbn" v-model="genre" />
      </div>
      <div class="field title">
        <label for="language">Language:</label>
        <input type="text" name="language" v-model="language" />
      </div>
      <div class="field center-align">
        <button class="btn green">Add Book</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugigy from "slugify";
export default {
  name: "AddBook",
  data() {
    return {
      title: null,
      author: null,
      genre: null,
      language: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    // Send data to the Database and receive it in the UI
    AddBook() {
      if (this.title) {
        this.feedback = null;
        // Create a slug
        this.slug = slugigy(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        // Send data to firestore
        db.collection("books")
          .add({
            title: this.title,
            author: this.author,
            genre: this.genre,
            language: this.language,
            slug: this.slug
          })
          // Receive it back to the UI
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          // In case there are errors.
          .catch(err => {
            console.log(err);
          });
      } else {
        // Error message for uncomplete form
        this.feedback = "You must enter a title";
      }
    }
  }
};
</script>

<style>
.add-book {
  max-width: 700px;
  margin: 0 auto;
}

.add-book form {
  padding: 30px;
}

.add-book .btn {
  margin-top: 30px;
}
</style>

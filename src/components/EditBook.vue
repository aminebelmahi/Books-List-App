<template>
  <div v-if="book" class="edit-book">
    <h4 class="center-align grey-text darken-3">Edit Book</h4>
    <form @submit.prevent="EditBook">
      <div class="field title">
        <label for="title">Title:</label>
        <input type="text" name="title" v-model="book.title" />
      </div>
      <div class="field title">
        <label for="author">Author:</label>
        <input type="text" name="author" v-model="book.author" />
      </div>
      <div class="field title">
        <label for="isbn">Genre:</label>
        <input type="text" name="isbn" v-model="book.genre" />
      </div>
      <div class="field title">
        <label for="language">Language:</label>
        <input type="text" name="language" v-model="book.language" />
      </div>
      <div class="field center-align">
        <button class="btn green">Edit Book</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditBook",
  data() {
    return {
      book: null,
      feedback: null
    };
  },
  methods: {
    EditBook() {
      if (this.book.title) {
        // Create a slug
        this.book.slug = slugify(this.book.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        // Send data to firestore
        db.collection("books")
          .doc(this.book.id)
          .update({
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            language: this.book.language,
            slug: this.book.slug
          })
          // Receive it back to the UI
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          // In case there are errors.
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  created() {
    let ref = db
      .collection("books")
      .where("slug", "==", this.$route.params.book_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.book = doc.data();
        this.book.id = doc.id;
      });
    });
  }
};
</script>

<style>
.edit-book {
  max-width: 700px;
  margin: 0 auto;
}

.edit-book form {
  padding: 30px;
}

.edit-book .btn {
  margin-top: 30px;
}
</style>

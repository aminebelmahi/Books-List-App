<template>
  <div class="index container">
    <div class="row">
      <div class="input-field col s11">
        <i class="material-icons prefix">search</i>
        <input type="text" id="input" placeholder="Search your book..." v-model="search" />
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Language</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in filteredBooks" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.genre }}</td>
          <td>{{ book.language }}</td>
          <td>
            <router-link :to="{ name: 'EditBook', params: { book_slug: book.slug } }">
              <i class="material-icons edit">edit</i>
            </router-link>
            <i class="material-icons delete" @click="deleteBook(book.id)">delete</i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      books: [],
      search: ""
    };
  },
  methods: {
    deleteBook(id) {
      // Delete doc from Firestore
      db.collection("books")
        .doc(id)
        .delete()
        .then(() => {
          this.books = this.books.filter(book => {
            return book.id != id;
          });
        });
    }
  },
  created() {
    // Fetch data from firestore
    db.collection("books")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let book = doc.data();
          book.id = doc.id;
          this.books.push(book);
        });
      });
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.index {
  margin-top: 50px;
}

table {
  width: 100%;
  margin: 0 auto;
}

.material-icons {
  margin-right: 30px;
}

.edit {
  cursor: pointer;
  color: grey;
}

.delete {
  cursor: pointer;
  color: red;
}
</style>

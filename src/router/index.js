import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/components/Index";
import AddBook from "@/components/AddBook";
import EditBook from "@/components/EditBook";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/add-book",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/edit-book/:book_slug",
    name: "EditBook",
    component: EditBook,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

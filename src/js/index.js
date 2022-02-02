import { HeaderComponent } from "../components/header.components";
import { NavigationComponent } from "../components/navigation.components";
import { CreatePostsComponet } from "../components/createPosts.components";
import { FavouriteComponent } from "../components/favourite.components";
import { PostsComponet } from "../components/posts.components";

new HeaderComponent("header");
let navigation = new NavigationComponent("navigation");
let posts = new PostsComponet("posts");
let createPosts = new CreatePostsComponet("create_posts");
let favourite = new FavouriteComponent("favourite");
navigation.registerTabs([
  { name: "posts", component: posts },
  { name: "create-posts", component: createPosts },
  { name: "favourite", component: favourite },
]);

// const $OVERLAY = document.getElementById("overlay");
// localStorage.getItem("privacy") ? $OVERLAY.classList.add("overlay_hide") : null;

// const $OVERLAY_BUTTON = document.getElementById("overlay_button");
// $OVERLAY_BUTTON.addEventListener("click", () => {
//   localStorage.setItem("privacy", true);
//   $OVERLAY.classList.add("overlay_hide");
// });

// const $MENU_ITEMS = document.getElementsByClassName("header__menu-item");
// const $SECTIONS = document.querySelectorAll("main section");

// for (let i = 0; i < $MENU_ITEMS.length; i++) {
//   $MENU_ITEMS[i].addEventListener("click", (event) => {
//     for (let j = 0; j < $MENU_ITEMS.length; j++) {
//       $MENU_ITEMS[j].classList.remove("header__menu-item_active");
//     }
//     event.target.classList.add("header__menu-item_active");
//     $SECTIONS.forEach((section) => {
//       section.dataset.section == event.target.dataset.menuItem
//         ? section.classList.add("shared_page-show")
//         : section.classList.remove("shared_page-show");
//       console.log(section.dataset.section);
//       console.log(event.target.dataset.menuItem);
//     });
//   });
// }

import { HeaderComponent } from "../components/header.components";
import { NavigationComponent } from "../components/navigation.components";
import { CreateComponent } from "../components/create.components";
import { FavouriteComponent } from "../components/favourite.components";
import { PostsComponet } from "../components/posts.components";

new HeaderComponent("header");
const navigation = new NavigationComponent("navigation");
const posts = new PostsComponet("posts");
const create_posts = new CreateComponent("create_posts");
const favourite = new FavouriteComponent("favourite");

navigation.registerTabs([
  { name: "posts", component: posts },
  { name: "create-posts", component: create_posts },
  { name: "favourite", component: favourite },
]);

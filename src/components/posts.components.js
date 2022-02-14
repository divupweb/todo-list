import { Component } from "../core/component";
import { appService } from "../services/app.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template";

export class PostsComponet extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    this.$element.addEventListener("click", buttonHadnler.bind(this));
    this.onShow();
  };

  async onShow() {
    const fbData = await appService.fetchPost();
    const posts = TransformService.fbObjectToArray(fbData);
    const html = posts.map((post) => {
      return renderPost(post, { withButton: true });
    });

    this.$element
      .querySelector(".shared__posts-wrapper")
      .insertAdjacentHTML("afterbegin", html.join(" "));
  }

  onHide() {
    this.$element.innerHTML = "";
  }
}
function buttonHadnler(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  const $el = event.target;
  const id = $el.dataset.id;
  const title = $el.dataset.title;
  if (id) {
    console.log(id);
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    console.log(favourites);
    const candidate = favourites.find((p) => p.id === id);
    if (candidate) {
      $el.innerHTML = `<i class="far fa-star"></i></a>`;
      favourites = favourites.filter((p) => p.id !== id);
    } else {
      $el.innerHTML = `<i class="fas fa-star"></i></a>`;
      favourites.push({ id, title });
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
}

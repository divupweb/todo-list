import { Component } from "../core/component";
import { renderPost } from "../templates/post.template";
import { appService } from "../services/app.service";

export class FavouriteComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }

  init = () => {
    this.$element.addEventListener("click", linkClickHandler.bind(this));
    localStorage.getItem("favourites")
      ? null
      : localStorage.setItem("favourites", "[]");
  };

  onHide() {
    this.$element.querySelector(".shared__posts-wrapper").innerHTML = "";
  }

  onShow() {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    const html = rednderList(favourites);
    this.$element
      .querySelector(".shared__posts-wrapper")
      .insertAdjacentHTML("afterbegin", html);
  }
}

async function linkClickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains("js-link")) {
    const postId = event.target.dataset.id;
    this.$element.querySelector(".shared__posts-wrapper").innerHTML = "";

    const post = await appService.fetchPostById(postId);

    this.$element
      .querySelector(".shared__posts-wrapper")
      .insertAdjacentHTML(
        "afterbegin",
        renderPost(post, { withButton: false })
      );
  }
}

function rednderList(list = []) {
  if (list.length) {
    return `<ul class="favourite__list">
      
        ${list
          .map(
            (i) =>
              `<li>open favourite post -->  <a href ="#" class="js-link" data-id='${i.id}'>${i.title}</a></li>`
          )
          .join("")}
      
    </ul>`;
  } else {
    return `<p class="favourite__no-data">There is nothing here yet</p>`;
  }
}

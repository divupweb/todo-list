import { Component } from "../core/component";
import { Form } from "../core/form";

export class CreateComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    const $form_create = document.getElementById("create_posts_form");
    $form_create.addEventListener("submit", submitHandler.bind(this));
    this.form = new Form($form_create, { title: [], fulltext: [] });
  };
}

function submitHandler(event) {
  event.preventDefault();
}

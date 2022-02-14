import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";
import { appService } from "../services/app.service";

export class CreateComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    this.$form_create = document.getElementById("create_posts_form");
    this.$form_create.addEventListener("submit", submitHandler.bind(this));
    this.form = new Form(this.$form_create, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    });
  };
}

async function submitHandler(event) {
  event.preventDefault();
  const $button = document.getElementById("form_button");
  if (this.form.isValid()) {
    const formData = {
      type: this.$form_create.post_type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };
    $button.disabled = true;
    try {
      await appService.createPost(formData);
      this.notification(true, "your post was created.");
      $button.disabled = false;
    } catch (error) {
      this.notification(false, error);
      $button.disabled = false;
    }
    this.form.clear();
  }
}

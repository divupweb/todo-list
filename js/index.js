const $OVERLAY = document.getElementById("overlay");
localStorage.getItem("privacy") ? $OVERLAY.classList.add("overlay_hide") : null;

const $OVERLAY_BUTTON = document.getElementById("overlay_button");
$OVERLAY_BUTTON.addEventListener("click", () => {
  localStorage.setItem("privacy", true);
  $OVERLAY.classList.add("overlay_hide");
});

const $MENU_ITEMS = document.getElementsByClassName("header__menu-item");
const $SECTIONS = document.querySelectorAll("main section");

for (let i = 0; i < $MENU_ITEMS.length; i++) {
  $MENU_ITEMS[i].addEventListener("click", (event) => {
    for (let j = 0; j < $MENU_ITEMS.length; j++) {
      $MENU_ITEMS[j].classList.remove("header__menu-item_active");
    }
    event.target.classList.add("header__menu-item_active");
    $SECTIONS.forEach((section) => {
      section.dataset.section == event.target.dataset.menuItem
        ? section.classList.add("section_show")
        : section.classList.remove("section_show");
      console.log(section.dataset.section);
      console.log(event.target.dataset.menuItem);
    });
  });
}

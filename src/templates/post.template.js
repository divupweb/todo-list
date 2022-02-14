export function renderPost(post, options = {}) {
  const tag =
    post.type === "new"
      ? `<span class="shared__posts-item-type">new</span>`
      : `<span class="shared__posts-item-type">static</span>`;
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  const candidate = favourites.find((p) => p.id === post.id);
  const button = candidate
    ? `<a href="#" title="add to favourite" class="shared__posts-item-button" data-id="${post.id}" data-title="${post.title}"><i class="fas fa-star"></i></a>`
    : `<a href="#" title="add to favourite" class="shared__posts-item-button" data-id="${post.id}" data-title="${post.title}"><i class="far fa-star"></i></a>`;
  return `            
  <div class="shared__posts-item">
      <div class="shared__posts-item-head"><h4 class="shared__posts-item-title"><span>${
        post.title
      }</span></h4>${tag}</div>
      <div class="shared__posts-item-text"><p>${post.fulltext}</p></div>
      <div class="shared__posts-item-footer"><span class="shared__posts-item-data">${
        post.date
      }</span>${options.withButton ? button : ""}</div>
  </div>`;
}

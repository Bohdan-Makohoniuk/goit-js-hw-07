import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = creatElements(galleryItems);

function creatElements(gallery) {
  const imageEl = gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`
    )
    .join('');

  return imageEl;
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

console.log(galleryItems);

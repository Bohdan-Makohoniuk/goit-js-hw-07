// Майстерня калор пікер репета timeLine 01:00:00  "Репета"

// import {galleryItems} from './gallery-items.js'
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()


import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);



createImageCardsMarkUp(cardImage);

function createImageCardsMarkUp(cardImage) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>
    `;
  }).join('');
  
}







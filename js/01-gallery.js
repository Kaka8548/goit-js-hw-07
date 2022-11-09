import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDivEl = document.querySelector('.gallery');

const addImgsToGallery = arr => {
  const imgList = arr
    .map(el => {
      const imgEl = `<div class='gallery__item'><a src='#' class='gallery__link'><img class='gallery__image' src='${el.preview}' alt='${el.description}' data-orig-size='${el.original}'></a></div>`;

      return imgEl;
    })
    .join('');

  galleryDivEl.insertAdjacentHTML('afterbegin', imgList);
};

addImgsToGallery(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const onGalleryDivElClick = event => {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const newSrc = target.dataset.origSize;
  const instance = basicLightbox.create(`
    <img src='${newSrc}' width='800' height='600'>
`);

  instance.show();
};

galleryDivEl.addEventListener('click', onGalleryDivElClick);

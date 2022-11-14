import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivEl = document.querySelector('.gallery');

const addImgsToGallery = arr => {
  const imgList = arr
    .map(el => {
      const imgEl = `<a class='gallery__item' href='${el.original}'><img class='gallery__image' src='${el.preview}' alt='${el.description}'></a>`;

      return imgEl;
    })
    .join('');

  galleryDivEl.insertAdjacentHTML('afterbegin', imgList);
};

addImgsToGallery(galleryItems);

const onGalleryDivElClick = event => {
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
};

galleryDivEl.addEventListener('click', onGalleryDivElClick);

import { galleryItems } from './gallery-items.js';

// Change code below this line

const instance = basicLightbox.create('', {});

const modalElement = instance.element();

const galleryRoot = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
             <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
           </a>
          </li>`;
}

function createGallery() {
  const galleryHtmlElements = galleryItems.map(item => createGalleryItem(item)).join('');

  if (!galleryRoot) {
    return;
  }

  galleryRoot.insertAdjacentHTML('beforeend', galleryHtmlElements);
}

function createModalImage(url) {
  return `<img src="${url}" width="800" height="600"/>`;
}

function bindEvents() {
  galleryRoot.querySelectorAll('.gallery__link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      const imageUrl = event.currentTarget.querySelector('img')?.dataset.source;

      if (!imageUrl) {
        return;
      }

      modalElement.innerHTML = createModalImage(imageUrl);

      instance.show();
    });
  });

  modalElement.addEventListener('click', () => instance.close());
}

createGallery();

bindEvents();

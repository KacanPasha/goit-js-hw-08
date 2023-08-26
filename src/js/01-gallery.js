// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const ulGallery = document.querySelector(".gallery");


function galleryLayoutTemplate(elements) {
    return elements.map((element) => 

    `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
       <img
        class="gallery__image"
        src="${element.preview}" 
        alt="${element.description}" 
        />
    </a>
 </li>`
).join('');
}

ulGallery.insertAdjacentHTML("afterbegin", galleryLayoutTemplate(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250, });
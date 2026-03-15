import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

async function handleSubmit(event) {
  event.preventDefault();

  query = event.target.elements.search.value.trim();

  if (!query) return;

  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
      });
      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

async function loadMoreImages() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

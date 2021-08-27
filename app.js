const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const modalRef = document.querySelector('.js-lightbox');
const js_gallery = document.querySelector('.js-gallery');
const js_backdrop = document.querySelector('.lightbox');
const currentImgRef = document.querySelector('.lightbox__image');

let gallary = [];
gallary = galleryItems.map((item,index) => {
  const liItem = document.createElement('li');

  const linkItem = document.createElement('a');
  linkItem.href = item.original;
  linkItem.classList.add('gallery__link');

  const imageItem = document.createElement('img');
  imageItem.src = item.preview;
  imageItem.alt = item.description;
  
  imageItem.setAttribute('data-source', item.original);
  imageItem.setAttribute('index',index);
  imageItem.classList.add('gallery__image');
  
  linkItem.append(imageItem);
  liItem.append(linkItem);
  liItem.classList.add('gallery__item');
  return liItem;
});

js_gallery.append(...gallary);

js_gallery.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  const current = e.target;
  console.log(e.target);
  if (e.target.classList.contains('gallery__image')) {
    js_backdrop.classList.add('is-open');
      
    currentImgRef.src = current.getAttribute('data-source');

    window.addEventListener('keydown', onCloseModal);
  }
  else return;

}


modalRef.addEventListener('click', onModalClick);

function onModalClick(e) {
     if (e.target.classList.contains('lightbox__button') || e.target.classList.contains('lightbox__overlay'))
     {
       currentImgRef.src = '';
       window.removeEventListener('keydown', onCloseModal);
       js_backdrop.classList.remove('is-open');
      console.log(currentImgRef);
  };
}
  
function onCloseModal(e){
  console.log(e);
  if (e.key === 'Escape') {
    currentImgRef.src = '';
    js_backdrop.classList.remove('is-open');
    window.removeEventListener('keydown', onCloseModal);
  }
}
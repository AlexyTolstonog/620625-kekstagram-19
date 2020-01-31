'use strict';
(function () {
  var PHOTO_QUANTITY = 25;
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  var pictureContainer = document.querySelector('.pictures');

  function getPhotos(quantity) {
    var photos = [];
    for (var i = 0; i < quantity; i++) {
      photos[i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        likes: window.utils.getRandomNumber(window.data.LIKES.MIN, window.data.LIKES.MAX),
        comments: window.utils.getRandomElement(window.data.COMMENTS),
        description: window.utils.getRandomElement(window.data.DESCRIBTIONS),
        name: window.utils.getRandomElement(window.data.NAMES),
      };
    }
    return photos;
  }
  var photos = getPhotos(PHOTO_QUANTITY);

  function getPicture(photo) {
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    return pictureElement;
  }

  function getPictures(image) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i <= image.length - 1; i++) {
      fragment.appendChild(getPicture(image[i]));
    }
    pictureContainer.appendChild(fragment);
    return pictureContainer;
  }
  getPictures(photos);
})();

let imageNumber = localStorage.getItem("imageid");
let images2;

connect();

function connect() {
  let xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {
      images2 = JSON.parse(xhr2.responseText);
      console.log(xhr2.responseText)
      galleryFunc(imageNumber);
    }
  }
  xhr2.open("GET", 'data.json');
  xhr2.send()
}

function galleryFunc(imageNumber) {
  document.querySelector('.header-heading').innerHTML = images2[imageNumber].name;
  document.querySelector('.img-gallery').src = images2[imageNumber].images.hero.large;
  document.querySelector('.innertext').innerHTML = images2[imageNumber].description;
  document.querySelector('.source').href = images2[imageNumber].source;
  document.querySelector('.image-artist').src = images2[imageNumber].artist.image;
  document.querySelector('.header-heading').innerHTML = images2[imageNumber].name;
  document.querySelector('.artist').innerHTML = images2[imageNumber].artist.name;
  document.querySelector('.footer-heading').innerHTML = images2[imageNumber].name;
  document.querySelector('.artist-footer').innerHTML = images2[imageNumber].artist.name;
  document.querySelector('.modal-img').innerHTML = `<img src="${images2[imageNumber].images.gallery}" alt="">`;

}
function plusSlides(n) {
  imageNumber = parseInt(imageNumber) + n;
  if (imageNumber >= images2.length - 1) {
    imageNumber = 0;
  }
  if (imageNumber < 0) {
    imageNumber = images2.length - 1;
  }

  console.log(imageNumber);
  galleryFunc(imageNumber);
}

document.querySelector('.view').addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.add('active2');
  const body = document.querySelector('body');
  body.classList.add('hidden');
})

document.querySelector('.close').addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('active2')
})
document.querySelector('.modal').addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('active2')
})


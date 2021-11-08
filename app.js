const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  let hello = e.target.id;
  localStorage.setItem('imageid', hello);
})
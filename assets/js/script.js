// theme switch
const switchThemeEl = document.querySelector('.switch input');
const htmlEl = document.querySelector('html');

switchThemeEl.addEventListener('click', function(event) {
  event.stopPropagation;
  htmlEl.dataset.mode === 'light' ? htmlEl.dataset.mode = '' : htmlEl.dataset.mode = 'light';
})

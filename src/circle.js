const circle = document.querySelector('.circle');
let lastScrollPosition = 0;

document.addEventListener('scroll', function(event) {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Moving downwards
    circle.classList.add('move-down');
    circle.classList.remove('move-up');
  } else {
    // Moving upwards
    circle.classList.add('move-up');
    circle.classList.remove('move-down');
  }

  lastScrollPosition = currentScrollPosition;
});

let slideIndex = 0;
const slides = Array.from(document.getElementsByClassName('slide'));
const navigation = document.querySelector('.navigation');
const cards = document.querySelectorAll('.card');

function changeSlide(n) {
  const currentIndex = slideIndex;
  slideIndex = n;

  slides[currentIndex].classList.remove('show');
  slides[slideIndex].classList.add('show');
  cards.forEach(card => {
    const currentZIndex = card.style.zIndex;
    card.style.zIndex = '2';
  });
  navigation.classList.toggle('show-navigation');
}

function toggleNavigation() {
    cards.forEach(card => {
        const currentZIndex = card.style.zIndex;
        card.style.zIndex = currentZIndex === '0' ? '2' : '0';
    });
  navigation.classList.toggle('show-navigation');
}

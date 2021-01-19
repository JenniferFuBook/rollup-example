import '../style.css';
import flowerLogo from '../images/flower.jpg';
import hamburgerLogo from '../images/hamburger.svg';

window.onload = () => {
  const flower = document.getElementById('flower');
  flower.src = flowerLogo;
  const hamburger = document.getElementById('hamburger');
  hamburger.src = hamburgerLogo;
  const nav = document.getElementsByTagName('nav')[0];
  hamburger.onclick = () => {
    nav.classList.toggle('active');
  };

  const media = window.matchMedia('(min-width: 768px)');
  media.addEventListener('change', () => {
    if (media.matches) {
      nav.classList = '';
    }
  });
};

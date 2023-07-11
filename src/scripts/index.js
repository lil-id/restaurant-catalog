import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/restaurantList';
import DataSource from '../public/data/DATA.json';

const main = () => {
  const mainElement = document.querySelector('main');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.navbar_list');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.navbar_item').forEach((item) =>
    item.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );

  mainElement.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });

  const foodListElement = document.querySelector('restaurant-list');

  foodListElement.restaurants = DataSource.restaurants;
};

document.addEventListener('DOMContentLoaded', main);

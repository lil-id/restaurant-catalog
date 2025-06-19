import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mainResponsive.css';
import '../styles/detailResponsive.css';
import App from './views/app';
import swRegister from './utils/serviceWorkerRegister';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.navbar_list'),
  content: document.querySelector('#app'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    window.scrollTo(0, 0);

    const skipLinkElem = document.querySelector('.skip_link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;

/* eslint-disable no-underscore-dangle */
import menuTemplate from './templates/menuTemplate';

class Menus {
  constructor({ foods, drinks, data }) {
    this._foods = foods;
    this._drinks = drinks;
    this._data = data;
  }

  static container(el) {
    document.querySelector(`${el}`).innerHTML = menuTemplate();
  }

  foods() {
    this._data.menus.foods.forEach((item) => {
      this._foods.innerHTML += `<li>${item.name}</li>`;
    });
  }

  drinks() {
    this._data.menus.drinks.forEach((item) => {
      this._drinks.innerHTML += `<li>${item.name}</li>`;
    });
  }

  init() {
    this.foods();
    this.drinks();
  }
}

export default Menus;

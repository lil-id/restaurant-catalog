/* eslint-disable no-underscore-dangle */
import './restaurantItem';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('restaurant-list', RestaurantList);

/* eslint-disable no-underscore-dangle */
class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant_card">
          <div class="container_restaurant">
            <h4 class="restaurant_title">${this._restaurant.name}</h4>
            <p class="restaurant_description">${this._restaurant.description}</p>
            <div class="container_rating_location">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <p>${this._restaurant.rating}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <p>${this._restaurant.city}</p>
            </div>
            <button class="button_book_now" type="submit">Book Now</button>
          </div>
          <div class="container_restaurant_image">
            <img class="restaurant_image" src="${this._restaurant.pictureId}" alt="${this._restaurant.name} Restaurant Photo" width="180" height="180px">
          </div>
        </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);

/* eslint-disable no-underscore-dangle */
import RestaurantFavoriteDB from '../data/restaurantFavorite';
import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from './templates/favoriteTemplate';

const LikeButton = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const resto = await RestaurantFavoriteDB.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteDB.addRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
export default LikeButton;

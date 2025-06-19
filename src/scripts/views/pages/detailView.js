/* eslint-disable no-unused-vars */
import restaurantDataSource from '../../data/restaurantData';
import UrlParser from '../../routes/urlParser';
import restaurantContent from '../../components/contentElement';
import Menus from '../../components/menuElement';
import LikeButton from '../../components/likeButtonElement';

const Detail = {
  async render() {
    return `
        <main id="main" tabindex="0" class="restaurant_detail">
          <div class="detail_container"></div>
          <div class="restaurant_menu"></div>
        </main>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await restaurantDataSource.getRestaurantDetail(
      url.id
    );

    // Content
    restaurantContent({
      element: document.querySelector('.detail_container'),
      data: restaurantDetail,
    });

    // Menus Element foods and drinks
    Menus.container('.restaurant_menu');
    const Menu = new Menus({
      foods: document.querySelector('.restaurant_menu .food_menu ol'),
      drinks: document.querySelector('.restaurant_menu .drink_menu ol'),
      data: restaurantDetail,
    });

    Menu.init();

    LikeButton.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurant: { ...restaurantDetail },
    });
  },
};

export default Detail;

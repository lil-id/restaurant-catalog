/* eslint-disable no-console */
import '../../components/headerElement';
import CONFIG from '../../global/config';
import restaurantDataSource from '../../data/restaurantData';
import restaurantItem from '../../components/restaurantItem';

const Main = {
  async render() {
    return `
      <header-element></header-element>
      <main id="main" tabindex="0" class="second_section">
        <h2 class="popular_restaurant_title">Popular Restaurant</h2>
        <restaurant-list class="restaurant-list"></restaurant-list>
      </main>
      `;
  },

  async afterRender() {
    const listRestaurant = document.querySelector('.restaurant-list');
    const getRestaurantData = await restaurantDataSource.getRestaurantList();
    getRestaurantData.forEach((resto) => {
      const imgPath = `${CONFIG.BASE_URL}${CONFIG.IMAGE_PATH}${resto.pictureId}`;
      const restaurantDescription = `${resto.description}`;
      const restoEl = document.createElement('article');
      restoEl.setAttribute('class', 'resto');
      restoEl.innerHTML = restaurantItem({
        data: resto,
        imagePath: imgPath,
        description: restaurantDescription,
      });
      listRestaurant.append(restoEl);
    });
  },
};

export default Main;

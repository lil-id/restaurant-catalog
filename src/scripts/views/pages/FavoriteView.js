import restaurantItem from '../../components/restaurantItem';
import restaurantFavoriteDB from '../../data/restaurantFavorite';
import CONFIG from '../../global/config';

const Favorite = {
  async render() {
    return `
        <main id="main" tabindex="0" class="favorite_restaurant_container">
          <h2>Favorite Restaurant</h2>
          <restaurant-list class="restaurant-list"></restaurant-list>
        </main>
        `;
  },

  async afterRender() {
    const listRestaurant = document.querySelector('.restaurant-list');
    const getRestaurantData = await restaurantFavoriteDB.getAllRestaurant();
    if (getRestaurantData.length) {
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
    } else {
      listRestaurant.style.display = 'block';
      listRestaurant.innerHTML = `<h2 class="no_data">There are no restaurants to like yet!</h2>`;
    }
  },
};

export default Favorite;

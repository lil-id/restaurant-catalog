const detailElement = ({ CONFIG, restaurant }) => `
        <img class="detail_restaurant_image" src="${CONFIG.BASE_URL}${CONFIG.IMAGE_PATH}${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="restaurant_info">
          <h2 class="restaurant_name">${restaurant.name}</h2>
          <div class="detail_container_rating_location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <p>${restaurant.rating}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <p>${restaurant.address} - ${restaurant.city} </p>
          </div>
          <p class="detail_description">${restaurant.description}</p>
          <h3>Categories</h3>
          <div class="categories_container">
            <ul class="categories"></ul>
          </div>
        </div>
      `;

export default detailElement;

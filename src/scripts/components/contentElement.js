import detailElement from './templates/restaurantTemplate';
import CONFIG from '../global/config';

const restaurantContent = ({ element, data }) => {
  const detailEl = element;
  const likeEl = document.createElement('div');
  likeEl.setAttribute('class', 'likeButtonContainer');
  const createRestoElement = detailElement({
    CONFIG,
    restaurant: data,
  });
  detailEl.innerHTML = createRestoElement;
  detailEl.append(likeEl);
  const categories = document.querySelector('.categories');
  data.categories.forEach((item) => {
    const categoryEl = `
          <li class="name_categories">${item.name}</li>
        `;
    categories.innerHTML += categoryEl;
  });
};
export default restaurantContent;

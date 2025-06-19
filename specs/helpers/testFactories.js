/* eslint-disable import/prefer-default-export */
import LikeButton from '../../src/scripts/components/likeButtonElement';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButton.init({
    likeButtonContainer: document.querySelector('.likeButtonContainer'),
    restaurant,
  });
};

export { createLikeButtonPresenter };

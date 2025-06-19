/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import restaurantFavoriteDB from '../src/scripts/data/restaurantFavorite';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await restaurantFavoriteDB.addRestaurant({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await restaurantFavoriteDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="batal sukai restoran ini"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="sukai restoran ini"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });
    document
      .querySelector('[aria-label="batal sukai restoran ini"]')
      .dispatchEvent(new Event('click'));
    expect(await restaurantFavoriteDB.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });
    // hapus dulu restoran dari daftar restoran yang disukai
    await restaurantFavoriteDB.deleteRestaurant('rqdv5juczeskfw1e867');
    // kemudian, simulasikan pengguna menekan widget batal menyukai restoran
    document
      .querySelector('[aria-label="batal sukai restoran ini"]')
      .dispatchEvent(new Event('click'));
    expect(await restaurantFavoriteDB.getAllRestaurant()).toEqual([]);
  });
});

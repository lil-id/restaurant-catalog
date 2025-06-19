/* eslint-disable no-undef */
import restaurantFavoriteDB from '../src/scripts/data/restaurantFavorite';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // seharusnya menampilkan tombol menyukai ketika restauran belum disukai sebelumnya
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="sukai restoran ini"]')
    ).toBeTruthy();
  });

  // seharusnya tidak menampilkan tombol tidak menyukai ketika restauran belum disukai sebelumnya
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="batal sukai restoran ini"]')
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await restaurantFavoriteDB.getRestaurant(
      'rqdv5juczeskfw1e867'
    );
    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

    restaurantFavoriteDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenter({
      id: 'rqdv5juczeskfw1e867',
    });

    // Tambahkan restoran dengan ID 'rqdv5juczeskfw1e867' ke daftar restoran yang disukai
    await restaurantFavoriteDB.addRestaurant({ id: 'rqdv5juczeskfw1e867' });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await restaurantFavoriteDB.getAllRestaurant()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
    ]);
    restaurantFavoriteDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenter({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await restaurantFavoriteDB.getAllRestaurant()).toEqual([]);
  });
});

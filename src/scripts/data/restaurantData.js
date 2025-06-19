import API_ENDPOINT from '../global/apiEndPoint';

class restaurantDataSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.GET_ALL_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantDataSource;

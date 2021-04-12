import axios from 'axios';
import yelpAuthHeader from './auth-header';

const API_URL = 'https://api.yelp.com/v3/businesses/';

class RestaurantService {
  async getSearchRestaurants(location, name) {
    let urlParameters = 'location=' + location + '&term=' + name;

    return await axios
      .get(API_URL + 'search?' + urlParameters, { headers: yelpAuthHeader() })
      .then(response => {
        return response.data;
      });
  }

  async getBaseRestaurants(location) {
    return await axios
      .get(API_URL + 'search?open_now=true&limit=10&location=' + location, { headers: yelpAuthHeader() })
      .then(response => {
        return response.data;
      });
  }

  async getRestaurantDetail(restaurant) {
    return await axios
      .get(API_URL + restaurant.id, { headers: yelpAuthHeader() })
      .then(response => {
        return response.data;
      });
  }
}

export default new RestaurantService();
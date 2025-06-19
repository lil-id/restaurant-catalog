import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  GET_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;

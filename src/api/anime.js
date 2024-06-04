import {api} from './constant';

export default {

  getOneAnime: () => {
    return api.get('/anime');
  },

  getAnimeById: (id) => {
    return api.get(`/anime/${id});`);
  },

  getAnimeBySearch: (search) => {
    return api.get(`/anime/search?q=${search}`);
  },

};
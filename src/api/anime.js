import {api} from './constant';

export default {

    getOneAnime: () => {
        return api.get('/anime');
    },

    getAnimeById: (id) => {
        return api.get(`/animes/${id});`);
    },

};
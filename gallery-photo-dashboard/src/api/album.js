import {Api} from './api'

export default {
    getAlbums(){
        return Api.get('/albums');
    }
}
import photo from '../api/photo'
import user from '../api/user';
import album from '../api/album';

export default{
    async GET_PHOTOS({commit}){
        let {data} = await photo.getPhoto();
        commit('SET_PHOTOS', data);
    },
    async GET_USERS({commit}){
        let {data} = await user.getUsers();
        commit('SET_USERS', data);
    },
    async GET_ALBUMS({commit}){
        let {data} = await album.getAlbums();
        commit('SET_ALBUMS', data);
    }
}
import {Api} from './api'

export default {
    async getPhoto(){
        return await Api.get('/photos');
    }
}
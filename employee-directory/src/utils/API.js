import axios from 'axios';

const URL = "https://randomuser.me/api/$reslts=25"

export default {
    search: function(){
        return axios.get(URL);
    }
}
import axios from 'axios';
import { getToken } from '../utilities/authentication-configuration';

const api = config => ({
    exec: ({method, data, url}) => {
        const formData = new FormData();

        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        return axios({
            method,
            url: `${config.baseUrl}/${url}`,
            crossdomain: true,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data', 'Authorization': ` bearer ${getToken()}`},
        });          
    }
})

export default api;
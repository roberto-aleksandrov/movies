import axios from 'axios';

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
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        });          
    }
})

export default api;
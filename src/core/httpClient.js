// CORE START
import axios from "axios";
import {ENTRYPOINT} from "./config";
import history from "./history";
import API from "./httpClient";
import {ROUTE_API_LOGIN_CHECK, ROUTE_API_REFRESH_TOKEN, ROUTE_SIGN_IN} from "./routes";
// CORE END

const instance = axios.create({
    baseURL: ENTRYPOINT,
    withCredentials: true,
    responseType: 'json',
    crossDomain: true
});

instance.interceptors.response.use((response) => {
        return response
    },
    async function (error) {
        const originalRequest = error.config;

        if(originalRequest.url !== ROUTE_API_LOGIN_CHECK && originalRequest.url !== ROUTE_API_REFRESH_TOKEN
        ) {
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                return await API.get(ROUTE_API_REFRESH_TOKEN)
                    .then(res => {
                        if (res.status === 204 ){
                            return instance(originalRequest);

                        }
                    }).catch(error => {
                        history.push(ROUTE_SIGN_IN);
                    })
            }
        }
    });

export default instance;
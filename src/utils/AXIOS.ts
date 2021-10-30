import axios from "axios";

const AXIOS = axios.create({
    withCredentials: true,
});

export default AXIOS;

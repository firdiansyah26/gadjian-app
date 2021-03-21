import axios from 'axios';

const BASE_URL = 'https://randomuser.me'
const HEADER = {
    'Content-Type': 'application/json'
}

export const URL = {
    LIST_API: "/api/",
}

// GLOBAL API METHOE
export function GET(url) {
    return axios.get(BASE_URL + url, HEADER)
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
}

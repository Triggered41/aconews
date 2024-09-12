import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.get['Content-Type'] = 'application/json'

const url = 'http://localhost:8080'

const URL = (endpoint) => {
    return `${url}${endpoint}`
}

export function fetchNews(search, category, country, lang){
    return axios.get(URL(`/api/news?q=${search}&cat=${category}&reg=${country}&lang=${lang}`))
}
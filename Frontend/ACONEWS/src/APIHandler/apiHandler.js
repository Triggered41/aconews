import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.get['Content-Type'] = 'application/json'

const url = 'https://k3ky55z7qkrkr4gk7m34pb2y2m0wkzsh.lambda-url.us-east-1.on.aws'


const URL = (endpoint) => {
    return `${url}${endpoint}`
}

export function fetchNews(search, category, country, lang){
    return axios.get(URL(`/api/news?q=${search}&cat=${category}&reg=${country}&lang=${lang}&max=18`))
}
const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}))

const apikey = '';

url = '' + apikey;
const newsURL = (search, lang, country) => {
    return `https://gnews.io/api/v4/search?q=${search}&lang=${lang}&country=${country}&max={18}&apikey=${apikey}`
}

app.get('/api/news', (req, res) => {
    const { q, reg, lang } = req.query
    fetch(newsURL(q, lang, reg)).then(val=>val.json())
    .then(val=>{
        console.log(val)
        res.json(val)
    })
    
})


const PORT = 8080

app.listen(8080, (err)=>{
    console.log("Server started at port: ", PORT)
})


module.exports.handler = serverless(app)
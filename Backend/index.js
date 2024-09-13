const funcs = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const { defineString } = require('firebase-functions/params')

const app = express()
app.use(cors({
    origin: '*'
}))

const apikey = defineString('GNEWS_API_KEY');

url = '' + apikey;
const newsURL = (search, lang, country) => {
    return `https://gnews.io/api/v4/search?q=${search}&lang=${lang}&country=${country}&max={18}&apikey=${apikey}`
}

app.get('/api/news', (req, res) => {
    const { q, reg, lang } = req.query
    console.log(req.query)
    res.json({
        title: 'Harris trails Trump in latest poll, is her support surge finally fading?',
        description: 'Kamala Harris and Donald Trump will spar in a presidential debate hosted by ABC News on September 10',
        content: 'Kamala Harris and Donald Trump will spar in a presidential debate hosted by ABC News on September 10 read more\n' +
          'This combination of photos taken at campaign rallies in Atlanta shows Vice President Kamala Harris on July 30, 2024, left, and Republican p... [3801 chars]',
        url: 'https://www.firstpost.com/world/us-2024-presidential-election-harris-trails-behind-trump-in-latest-presidential-poll-is-her-honeymoon-phase-finally-over-13813442.html',
        image: 'https://images.firstpost.com/uploads/2024/09/Frankfurt-airport-halts-flights-as-climate-activists-block-runway-5-2024-09-098616b0e4b9e950196e0d7e4cb82fda.jpg?im=FitAndFill=(1200,675)',
        publishedAt: '2024-09-09T12:27:28Z',
      })

    return
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


exports.app = funcs.https.onRequest(app)
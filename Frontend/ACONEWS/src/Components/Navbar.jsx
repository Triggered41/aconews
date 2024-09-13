import { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { fetchNews } from '../APIHandler/apiHandler'


export const Navbar = ({ parent }) => {
    const [search, setSearch] = useState('latest news')
    const [region, setRegion] = useState('in')
    const [category, setCategory] = useState('general')
    const [language, setLanguage] = useState('en')

    useEffect(()=>{
        onSearchClick()
    }, [])
    
    const onSearchClick = () => {
        console.log("Searching...")
        fetchNews(search, category, region, language)
        .then(val=>{
            const newsFetched = new CustomEvent('newsFetched', {
                detail: val.data
            })
            parent.current.dispatchEvent(newsFetched)
        })
    }

    return (
        <nav className={style['navbar']}>
            <label htmlFor="">Search</label>
            <input value={search} onChange={e=>setSearch(e.target.value)} className={style['filter']} type="text" placeholder='Search news...'/>
            <label htmlFor="">from</label>
            <select value={region} onChange={e=>setRegion(e.target.value)} className={style['filter']} name="" id="">
                <option value="Any">All</option>
                <option value="au">Australia</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="in">India</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="pk">Pakistan</option>
                <option value="pe">Peru</option>
                <option value="ph">Philippines</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="ru">Russian Federation</option>
                <option value="sg">Singapore</option>
                <option value="es">Spain</option>
                <option value="se">Sweden</option>
                <option value="ch">Switzerland</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="gb">United Kingdom</option>
                <option value="us">United States</option>
            </select>
            <label htmlFor="">category</label>
            <select value={category} onChange={e=>setCategory(e.target.value)} className={style['filter']} name="" id="">
                <option value="general">General</option>
                <option value="world">World</option>
                <option value="nation">Nation</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                <option value="sports">Sports</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
            </select>
            <label htmlFor="">in language</label>
            <select value={language} onChange={e=>setLanguage(e.target.value)} className={style['filter']} name="" id="">
                <option value='Any'>All</option>
                <option value='ar'>Arabic</option>
                <option value='zh'>Chinese</option>
                <option value='nl'>Dutch</option>
                <option value='en'>English</option>
                <option value='fr'>French</option>
                <option value='de'>German</option>
                <option value='el'>Greek</option>
                <option value='he'>Hebrew</option>
                <option value='hi'>Hindi</option>
                <option value='it'>Italian</option>
                <option value='ja'>Japanese</option>
                <option value='ml'>Malayalam</option>
                <option value='mr'>Marathi</option>
                <option value='no'>Norwegian</option>
                <option value='pt'>Portuguese</option>
                <option value='ro'>Romanian</option>
                <option value='ru'>Russian</option>
                <option value='es'>Spanish</option>
                <option value='sv'>Swedish</option>
                <option value='ta'>Tamil</option>
                <option value='te'>Telugu</option>
                <option value='uk'>Ukrainian</option>
            </select>
            <br/>
            <button onClick={onSearchClick} className={style['search-button']}>Search</button>
        </nav>
    )
}


















































import style from './MainPage.module.css'

import { Card } from "./Card"
import { Navbar } from './Navbar'
import { useEffect, useRef, useState } from 'react'


const example = {title: 'Iphone century', description: 'Iphone century is 100th iphone that has all the feature of all the devices ever invented', image:undefined}
const maxArticlePerPage = 6

function getNews(setNews, setPageCount, e) {
    const temp = e.detail.articles.map((val, i)=>{ return {...val, page: Math.ceil((i+1)/maxArticlePerPage)}})
    var pageNum = Math.ceil(temp.length/maxArticlePerPage)
    var arr = []
    
    for(const i of Array(pageNum).keys()){
        console.log((i+1).toString())
        arr.push({selected: 'false'})
    }
    arr[0].selected = 'true'

    setNews(temp)
    setPageCount(arr)
    
}

export const MainPage = () => {
    const [repeat, setRepeat] = useState(false)
    const [news, setNews] = useState([example])
    const [pageCount, setPageCount] = useState([])
    const ref = useRef()
    const currentPage = useRef()

    useEffect(()=>{
        ref.current.addEventListener("newsFetched", e=>{
            getNews(setNews, setPageCount, e)
        })

        console.log(document.getElementById('page'))
    })

    const onPageButtonClick = (ev) => {
        currentPage.current.dataset.selected = 'false'
        ev.target.dataset.selected = 'true'
        currentPage.current = ev.target
        setRepeat(!repeat)
    }

    return (
        <div ref={ref}>
            <Navbar parent={ref} />
            <h1 style={{color: 'skyblue'}}>{'Catch up on latest news'}</h1>
            <div className={style['card-grid']}>
                {
                    news.filter((val)=> currentPage.current? val.page==currentPage.current?.dataset.pagenum : val.page==1 )
                    .map((val, id)=><Card key={id} Title={val.title} Description={val.description} Image={val.image} />)
                }
            </div>

            <div className={style['page-tab']}>
                {
                    pageCount.map((val, i)=><span id='page' data-pagenum={i+1} onClick={onPageButtonClick} ref={val.selected=='true'?currentPage:undefined} className={style['page-btn']} data-selected={val.selected}>{i+1}</span>)
                }
            </div>
        </div>
    )
}
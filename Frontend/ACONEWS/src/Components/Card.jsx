import { fetchNews } from '../APIHandler/apiHandler'
import styles from './Card.module.css'


export function Card({Title = "Title", Description = "Temp paragraph", Image, style, onCardClick}) {

    const onCourseClick = () => {

    }

    return (
        <div onClick={onCardClick ?? onCourseClick} className={styles.Card}>
            <div className={styles.ImgHolder}>
                <img style={style} src={Image} alt="" className={styles.Image} />
            </div>
            <strong className={styles.Title}>{Title}</strong>
            <div className={styles.Details}>
                <div>{Description}</div>
            </div>
        </div>
    )   
}
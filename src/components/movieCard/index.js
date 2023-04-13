import classNames from "classnames/bind";
import styles from './MovieCard.module.scss';
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function MovieCard({data ,classNames}) {
    return (<div className={cx('wrapper' )}>
           <Link className={cx('card')} to = '/123'>
                <img className= {cx('card-img', classNames)} src= {apiConfig.w500Image(data.poster_path)}/>
                <h3 className={cx('movie-name')}>{data.title || data.name}</h3>
           </Link>
    </div>)
}

export default MovieCard;


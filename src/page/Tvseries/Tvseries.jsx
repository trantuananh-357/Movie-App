import Button from "../../components/button";
import styles from './Tvseries.module.scss'
import classNames from "classnames/bind";
import MovieList from "../../components/MovieList";
import { useEffect } from "react";
import Search from "../../components/search";
import ShowAll from "../../components/ShowAll";
import { category, tvType } from "../../api/tmdbApi";

const cx = classNames.bind(styles)

function Tvseries() {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
   



    return( <div className={cx('wrapper')}>
        <Search />
        <h3>Tv series</h3>
        
        <ShowAll type={tvType.popular} categorys = {category.tv} />


        </div>)
        


}

export default Tvseries;
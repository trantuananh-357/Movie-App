import Button from "../../components/button";
import styles from './Movies.module.scss'
import classNames from "classnames/bind";
import MovieList from "../../components/MovieList";
import Search from "../../components/search";
import ShowAll from "../../components/ShowAll";
import { movieType, category } from "../../api/tmdbApi";
import { useEffect } from "react";
const cx = classNames.bind(styles)

function Movies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return( <div className={cx('wrapper')}>
           <Search />
        <h3>Movies</h3>

           <ShowAll type={movieType.popular} categorys = {category.movie} />



        </div>)
        


}

export default Movies;
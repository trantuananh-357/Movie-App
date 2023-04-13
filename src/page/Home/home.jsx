import Button from "../../components/button";
import styles from './Home.module.scss'
import classNames from "classnames/bind";
import MovieSlide from "../../components/MovieSlide";
import MovieList from "../../components/MovieList";
import { useEffect } from "react";
import { category, movieType, tvType } from '../../api/tmdbApi';
const cx = classNames.bind(styles)

function Home() {


    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return( <div className={cx('wrapper')}>
           <MovieSlide />
           <MovieList categorys = {category.movie} type = {movieType.popular} title = 'Trending Movies'/>
           <MovieList categorys = {category.movie} type = {movieType.top_rated} title = 'Top Rated Movies' />
           <MovieList categorys = {category.tv} type = {tvType.popular} title = 'Trending TV' />






        </div>)


        


}

export default Home;
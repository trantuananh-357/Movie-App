import MovieItem from "./MovieItem";
import classNames from "classnames/bind";
import styles from './MovieList.module.scss'
import Button from '../button'
import { useEffect, useState } from "react";
import tmdbApi  , {category, movieType }from "../../api/tmdbApi";

const cx = classNames.bind(styles)
function MovieList ({type, categorys, id, title}) {
    
    const [items, setItem] = useState([])
    console.log(type)
    console.log(category)

    useEffect( () =>{
        let res
        const getList = async () => { 
            const params = {}
        

        if(type !== 'similar'){
            switch(categorys){
                case category.movie:
                    res = await tmdbApi.getMoviesList(type, {params})
                    break;
                default:
                    res = await tmdbApi.getTvList(type, {params})
                    break;


            }
        }else{
            res = await tmdbApi.similar(category, id)

        }
        setItem(res.results)
        console.log(res)
    }
    getList()

    },[])
    console.log(items)

    return (  <div className={cx('movie-list')}>
        <div className={cx('title')}>
            <h3>{title}</h3>
            <Button to = {categorys === 'movie' ? '/movies' : '/tvseries' } smallButton>View More
            </Button>
        </div>
        <MovieItem dataItems = {items}/>
    </div>);
}

export default MovieList ;
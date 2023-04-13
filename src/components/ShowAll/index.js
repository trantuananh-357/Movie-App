import classNames from "classnames/bind";
import styles from './ShowAll.module.scss'
import MovieCard from "../movieCard";
import tmdbApi, {category, type, movieType}from '../../api/tmdbApi'

import apiConfig from "../../api/apiConfig";
import { useEffect, useState } from "react";
import Button from "../button";
const cx = classNames.bind(styles)


function ShowAll({type, categorys}) {
    const [items, setItems]  = useState([])
    const [pageLoad, setPage] = useState(0)
    

    let response    
    const loadMore = async () =>{
           
            setPage(() => pageLoad + 1)
            
        }
  
    

    useEffect(()=>{
        const params = {page: pageLoad + 1}

        const getItems = async () =>{
            switch(categorys){
                case category.movie:
                    response = await tmdbApi.getMoviesList(type, {params})
                    console.log('1')
                    break;
                case category.tv:
                    response = await tmdbApi.getTvList(type, {params})
                    console.log('2')
    
                    break;
                default:
                    response = []
                    console.log('3')
                    break;
                    
    
            }
            if(items === [] ){
                setItems(response.results)

            }
            else if(items !== []){
                setItems([...items, ...response.results])

            }

            
        }
        getItems()
    },[pageLoad])

    return ( <div className={cx('wrapper')}>
       <div className={cx('list-items')}>
            {items.map((item, index) =>(
                <MovieCard data={item} key = {index} classNames = {cx('item')}/>
            ))}
       </div>
        <div className={cx('btn')}>
            <Button smallButton onClick={loadMore}>Load More</Button>
        </div>
    </div>);
}

export default ShowAll;
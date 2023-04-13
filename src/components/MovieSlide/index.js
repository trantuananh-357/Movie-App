import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieSlideItem from "./MovieSlideItem";
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { useEffect, useState } from "react";
import axios from "axios";

function MovieSlide() {
  const [movieItems, setMovieItems] = useState([])
  
 
  useEffect(() =>{
    const params= {page:1}
    const getMovie = async  () => {
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, {params})
        setMovieItems(res.results.slice(1,4))
      } catch (error) {
      }
    }
    getMovie()
  },[])







  return (
    <Swiper spaceBetween={0} slidesPerView={1} grabCursor={true}>
     
      {movieItems.map((movieItem, index) => (
         <SwiperSlide key = {index} >
         {({ isActive }) => (
         
          < > <MovieSlideItem data = {movieItem}  className={`${isActive ? 'active' : 'not active'}`} /></>
 
         )}
       </SwiperSlide>
      ))}
      
    </Swiper>
  );
}

export default MovieSlide;

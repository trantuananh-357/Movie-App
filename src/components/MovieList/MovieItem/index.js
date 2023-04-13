import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../movieCard";
import "swiper/css";

function MovieItem({dataItems}) {
  return (
            <Swiper spaceBetween={50}  slidesPerView={7} grabCursor={true}>
              <div>
                  
                  {dataItems.map((item, index) =>(
                    
                  <SwiperSlide key= {index}>
                    {({ isActive }) => (
                        <MovieCard data = {item}/>
            
                    )}
                  </SwiperSlide>
                  ))}
              </div>
              
            </Swiper>
  );
}

export default MovieItem;

import classNames from "classnames/bind";
import styles from "./MovieSlideItem.module.scss";
import Button from "../../button";
import apiConfig from "../../../api/apiConfig";
import Modal from "../../Modal";
import { useState } from "react";

const cx = classNames.bind(styles);
function MovieSlideItem({ data, className }) {
  const backGround = apiConfig.originalImage(
    data.backdrop_path ? data.backdrop_path : data.poster_path
  );

  const [active , setActive] = useState(false)

  return (
    <>

       
      <div
        className={cx("wrapper", `${className}`)}
        style={{ backgroundImage: `url(${backGround})` }}
      >

        <div className={cx("slide-container")}>
          <div className={cx("slide-title")}>
            <h1 className={cx("movie-name")}>{data.title}</h1>
            <p className={cx("movie-summary")}>{data.overview}</p>
            <div className={cx("btn-watch")}>
              <Button primary onClick={() => setActive(true)}>Watch Now</Button>
              <Button outline>Watch trailer</Button>
            </div>
          </div>
          <div className={cx("slide-card")}>
            <img
              className={cx("slide-card__img")}
              src={apiConfig.w500Image(data.poster_path)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieSlideItem;

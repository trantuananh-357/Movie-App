import classNames from "classnames/bind";
import styles from "./DetailMovie.module.scss";
import CastList from "./CastList/CastList";
import { useEffect, useState } from "react";
import SectionVideo from "./SectionVideo/SectionVideo";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi"
const cx = classNames.bind(styles);
function DetailMovie(category, id) {
  const [videos, setVideos] = useState([])
  useEffect(() =>{
    const getVideo = async () =>{
      const  res = await tmdbApi.getVideos(category, id)
      console.log(res)
    }
    getVideo()
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div
      className={cx("wrapper")}
      style = {{backgroundColor: "#000"}}
    >
      <CastList />
      <SectionVideo />
      <SectionVideo />

      <SectionVideo />

      <SectionVideo />

    </div>
  );
}

export default DetailMovie;

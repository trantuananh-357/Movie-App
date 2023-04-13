import classNames from "classnames/bind";
import styles from "./SectionVideo.module.scss"
const cx = classNames.bind(styles)
function SectionVideo() {
    return (  
    <div className={cx("wrapper")}>
        <h1 className={cx("title-video")}>
        Legacy Is Forever
        </h1>
        
        <iframe className={cx("video")} width="100%" height="820" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    </div>
    );
}

export default SectionVideo;
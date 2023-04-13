import styles from "./Caster.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Caster() {

    return ( <div className={cx("wrapper")}>
        <div className={cx('imgCaster')} style ={{backgroundImage:`url("https://image.tmdb.org/t/p/w500//n8YlGookYzgD3cmpMP45BYRNIoh.jpg")`}}></div>
        <p className={cx('namecaster')}></p>


        
    </div> );
}

export default Caster;
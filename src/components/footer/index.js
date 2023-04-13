import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import logo from '../../assets/images/logo.png'
const cx = classNames.bind(styles)
function Footer() {
    return <div className={cx('wrapper')}> 
        <div className={cx('footer-logo')}>
            <img src={logo} className = {cx('logo')}/>
            <a className={cx('title')}>ITAmovies</a>
        </div>
        <div className={cx('content')}>
            <ul className={cx('items')}>
               <div className={cx('content-menu')}>
                    <li className={cx('item')}>Home</li>
                    <li className={cx('item')}>Contact us</li>
    
                    <li className={cx('item')}>Term of services</li>
                    <li className={cx('item')}>About us</li>

               </div> 
               <div className={cx('content-menu')}>
                    <li className={cx('item')}>Live</li>
                    <li className={cx('item')}> FQA</li>
    
                    <li className={cx('item')}>Premium</li>
                    <li className={cx('item')}>Pravacy policy</li>

               </div> 
               <div className={cx('content-menu')}>
                    <li className={cx('item')}>You must watch</li>
                    <li className={cx('item')}>Recent release</li>
    
                    <li className={cx('item')}>Top IMDB</li>

               </div> 



            </ul>
        </div>

    </div> ;
}

export default Footer;
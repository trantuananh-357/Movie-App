import classNames from "classnames/bind";
import styles from './CastList.module.scss'
import Button from "../../button";
import apiConfig from "../../../api/apiConfig";
import Caster from "./Caster.js";
const cx = classNames.bind(styles)
function CastList() {
const backGround = apiConfig.originalImage


    return ( <div className={cx('wrapper')}
    style = {{backgroundImage : `url("https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")`}}
    >
        <div className={cx('detail-card')}>
            <img className={cx('card-movie')} src="https://images.unsplash.com/photo-1676521898747-e4fa3b905e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            
        </div>
        <div className={cx('inf-movie')}>
            <p className={cx('name-movie')}>
            Black Panther: Wakanda Forever
            </p>
            <div className={cx('caterory-movie')}>
                <Button transparentButton>Action</Button>
                <Button transparentButton>Action</Button>
                <Button transparentButton>Action</Button>
            </div>


                

            
            <p className={cx('decription-movie')}>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.</p>
            <div className={cx('cast-movie')}>
                
            </div>
            <div className={cx('list-caster')}>
            <Caster />
            <Caster />
            <Caster />

        </div>
        </div>
        
    </div>);
}

export default CastList;
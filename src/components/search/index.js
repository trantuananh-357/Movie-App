import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Button from "../button";

const cx = classNames.bind(styles);
function Search() {
  return (
    <div className={cx('wrapper')}>
      <form className={cx('form')}>
        <input type='text' className={cx('value')}/>
        <Button search>search</Button>
      </form>
    </div>
  );
}

export default Search;

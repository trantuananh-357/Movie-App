import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
    function Button({ href, to, primary = false, children = false, outline = false, className = false, onClick, smallButton = false, youtubeButton = false, search =false, transparentButton = false, 
 }) {
  let Comp = "button";
  let props = {
    onClick,
  };
  if (to) {
    props.to = to
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  } else if (primary) {
    props.primary = primary;
  }

  const classes = cx("wrapper", {
    [className]: className,
    outline,
    primary,
    smallButton,
    youtubeButton,
    search,
    transparentButton,
  });

  return <Comp className={classes} {...props}>
    <span className={cx('title')}>{children}</span>
  </Comp>;
}

export default Button;

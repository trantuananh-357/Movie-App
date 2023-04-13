import classNames from "classnames";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const headerNav = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Movies",
    path: "/movies",
  },
  {
    page: "TV series",
    path: "/tvseries",
  },
];
function Header() {


  
  let  pathHeader  = useLocation();

  const active = headerNav.findIndex((e) => e.path === pathHeader.pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    const scrollHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="wrapper" id="">
      <div className="header-logo">
        <img src={logo} className="logo" />
        <a className="title">ITAMovies</a>
      </div>

      <div className="header-menu">
        <div className="menu-item">
          <ul className="menu-list">
            {headerNav.map((ele, index) => {
                let temp
                if(index === active) temp = 'active'
                else temp = ''
              return (
                <li className={`item ${temp}`} key = {index}>
                  <Link to={ele.path} >{ele.page}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;





 
 






import clsx from "clsx";
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuBurger from "../MenuBurger/MenuBurger";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery("(min-width: 767px)");
  const closeMobileMenu = () => {
    setShowModal(false);
  };
  return (
    <div className={clsx(css.container, "container")}>
      <MobileMenu showModal={showModal} closeMobileMenu={closeMobileMenu} />
      <MenuBurger
        onClick={() => {
          setShowModal(true);
        }}
        className={css.menuSvg}
      />
      <NavLink to="/" className={css.logo}></NavLink>
      {isMobile && <Navigation />}
      <div className={css.wrapperText}>
        <p className={css.text}>$</p>
        <p className={css.text}>EN</p>
      </div>
      <div className={css.user}></div>
    </div>
  );
};

export default Header;

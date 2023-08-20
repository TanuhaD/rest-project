import css from "./MobileMenu.module.css";
import CloseBurger from "../CloseBurger/CloseBurger.jsx";
import { createPortal } from "react-dom";
import clsx from "clsx";
import Phone from "../Phone/Phone";
import Facebook from "../Facebook/Facebook";
import Youtube from "../Youtube/Youtube";
import Instagram from "../Instagram/Instagram";
import Telegram from "../Telegram/Telegram";
import Navigation from "../Navigation/Navigation";
const MobileMenu = ({ showModal, closeMobileMenu }) => {
  return createPortal(
    <div
      className={clsx(css.container, {
        [css.mobileMenuOpen]: showModal,
      })}
    >
      <div className={css.wrapperHeader}>
        <CloseBurger className={css.close} onClick={closeMobileMenu} />
        <div className={css.logo}></div>
      </div>
      <div onClick={closeMobileMenu}>
        <Navigation />
      </div>
      <div className={css.wrapperText}>
        <p className={css.text}>$</p>
        <p className={css.text}>EN</p>
      </div>
      <ul className={css.socialList}>
        <li className={css.socialItem}>
          <a href="#">
            <Phone />
          </a>
        </li>
        <li className={css.socialItem}>
          <a href="#">
            <Facebook />
          </a>
        </li>
        <li className={css.socialItem}>
          <a href="#">
            <Youtube />
          </a>
        </li>
        <li className={css.socialItem}>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li className={css.socialItem}>
          <a href="#">
            <Telegram />
          </a>
        </li>
      </ul>
    </div>,
    document.querySelector("#modal")
  );
};

export default MobileMenu;

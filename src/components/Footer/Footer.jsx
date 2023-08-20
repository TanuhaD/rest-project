import clsx from "clsx";
import css from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Registration from "../Registration/Registration";
import Telegram from "../Telegram/Telegram";
import Instagram from "../Instagram/Instagram";
import Youtube from "../Youtube/Youtube";
import Facebook from "../Facebook/Facebook";
import Phone from "../Phone/Phone";

const Footer = () => {
  return (
    <div className={clsx(css.container, "container")}>
      <div className={css.box}>
        <section className={css.wrapperNavLink}>
          <h3 className={css.title}>Title section</h3>
          <NavLink to="appatment-list" className={css.link}>
            Hotels
          </NavLink>
          <NavLink to="appatment" className={css.link}>
            Appatment
          </NavLink>
          <NavLink to="about-us" className={css.link}>
            About us
          </NavLink>
          <NavLink to="contacts" className={css.link}>
            Contacts
          </NavLink>
        </section>
        <Registration />
      </div>
      <div className={css.wraperSocial}>
        <div className={css.logo}></div>
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
      </div>
    </div>
  );
};

export default Footer;

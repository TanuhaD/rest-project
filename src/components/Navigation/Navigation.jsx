import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.wrapperNavLink}>
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
    </div>
  );
};

export default Navigation;

import clsx from "clsx";
import InputSearch from "../InputSearch/InputSearch.jsx";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={clsx(css.container, css["container--hero"], "container")}>
      <div className={css.wrapperText}>
        <h1 className={css.title}>Find an apartment for your vacation</h1>
        <p className={css.text}>
          We have several thousand apartments for every taste in every corner of
          the globe
        </p>
      </div>
      <InputSearch heroForm={css.heroForm} />
    </div>
  );
};

export default Hero;

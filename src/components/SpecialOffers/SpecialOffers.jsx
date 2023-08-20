import clsx from "clsx";
import css from "./SpecialOffers.module.css";
import Card from "../Card/Card";

const SpecialOffers = () => {
  return (
    <div className={clsx(css.container, "container")}>
      <h2 className={css.title}>Special offers</h2>
      <ul className={css.cardList}>
        <li className={css.cardItem}>
          <Card />
        </li>
        <li className={css.cardItem}>
          <Card />
        </li>
        <li className={css.cardItem}>
          <Card />
        </li>
        <li className={css.cardItem}>
          <Card />
        </li>
        <li className={css.cardItem}>
          <Card />
        </li>
        <li className={css.cardItem}>
          <Card />
        </li>
      </ul>
    </div>
  );
};

export default SpecialOffers;

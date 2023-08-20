import Star from "../Star/Star";
import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapperImg}>
        <img
          src="src/assets/appartment1@2x.png"
          alt="appartment Hotel"
          className={css.img}
        />
        <div className={css.wrapperReting}>
          <Star className={css.star} />
          <p className={css.reting}>4,8</p>
        </div>
      </div>
      <h3 className={css.titleCard}>Wilderness Club at Big Ceddar</h3>
      <p className={css.textCard}>28 October — 1 November</p>
      <div className={css.wrapperCount}>
        <p className={css.total}>$2016</p>
        <p className={css.period}>/6nigth</p>
      </div>
      <div className={css.wrapperInformation}>
        <div className={css.img1}>
          <p className={css.textInformation}>4 Beds</p>
        </div>
        <div className={css.img2}>
          <p className={css.textInformation}>8 Sleeps</p>
        </div>
        <div className={css.img2}>
          <p className={css.textInformation}>1,350 Sq Ft</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

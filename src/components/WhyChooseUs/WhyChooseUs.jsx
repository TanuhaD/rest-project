import clsx from "clsx";
import css from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={clsx(css.container, "container")}>
      <h2 className={css.title}>Why Choose Us</h2>
      <p className={css.text}>
        The main reason is because our competitors have disgusting sites, but we
        can not write that here, so the text here will be different
      </p>
      <ul className={css.wrapperCard}>
        <li className={css.boxCard}>
          <div className={css.imageCard1}></div>
          <h3 className={css.titleCard}>Payment methods</h3>
          <p className={css.textCard}>
            We have a lot of them, from cryptocurrencies to barter for potatoes
          </p>
        </li>
        <li className={css.boxCard}>
          <div className={css.imageCard2}></div>
          <h3 className={css.titleCard}>Simple search process</h3>
          <p className={css.textCard}>
            We checked it out, even the kid did it, but it was my mom&lsquo;s
            friend&lsquo;s son
          </p>
        </li>
        <li className={css.boxCard}>
          <div className={css.imageCard3}></div>
          <h3 className={css.titleCard}>24/7 Support</h3>
          <p className={css.textCard}>
            Is there something you don&lsquo;t understand? Feel free to call us.
            Phone number in the footer
          </p>
        </li>
        <li className={css.boxCard}>
          <div className={css.imageCard4}></div>
          <h3 className={css.titleCard}>We are nice</h3>
          <p className={css.textCard}>
            Fantasy is over, there will be something really convincing here
          </p>
        </li>
      </ul>
    </section>
  );
};

export default WhyChooseUs;

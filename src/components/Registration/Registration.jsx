import Send from "../Send/Send";
import css from "./Registration.module.css";

const Registration = () => {
  return (
    <>
      <form className={css.form}>
        <h3 className={css.title}>Subscribe to Newsletter</h3>
        <p className={css.text}> </p>
        Your email
        <input className={css.input} type="text" />
        <Send className={css.sendSvg} />
      </form>
    </>
  );
};

export default Registration;

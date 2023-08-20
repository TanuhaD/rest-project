import clsx from "clsx";
import Calendar from "../Calendar/Calendar";
import Line from "../Line/Line";
import css from "./InputSearch.module.css";
import PropTypes from "prop-types";
const InputSearch = ({ heroForm, formAppartmentList }) => {
  return (
    <>
      <form className={clsx(css.form, heroForm, formAppartmentList)}>
        <div className={css.place}></div>
        <input type="text" className={css.input} />
        <p className={css.whereText}>Where</p>
        <div className={css.inputText}>Search Destination</div>
        <div className={css.search}></div>
        <Line className={css.line} />
        <Calendar className={css.calendar} />
        <p className={css.whenText}>When</p>
        <p className={css.selectText}>Select Date</p>
      </form>
    </>
  );
};
InputSearch.propTypes = {
  heroForm: PropTypes.string,
  formAppartmentList: PropTypes.string,
};
export default InputSearch;

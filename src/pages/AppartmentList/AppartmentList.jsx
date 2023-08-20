import clsx from "clsx";
import css from "./AppartmentList.module.css";
import InputSearch from "../../components/InputSearch/InputSearch";
import Card from "../../components/Card/Card";
const AppartmentList = () => {
  return (
    <section className={clsx(css.container, "container")}>
      <h2 className={css.title}>Last Minute Deals</h2>
      <InputSearch formAppartmentList={css.formAppartmentList} />
      <div className={css.wrapperFilter}>
        <button className={css.btnMap}>Show on map</button>
        <div className={css.boxFilter}>
          <div className={css.boxBtn}>
            <button className={css.btnFilter}>Filter</button>
            <div className={css.imgFilter}></div>
          </div>
          <p className={css.text}>Sort by</p>
          <select name="select" className={css.select}>
            <option value="value1" selected>
              Relevance
            </option>
            <option value="value2" className={css.option}>
              Newest{" "}
            </option>
            <option value="value3" className={css.option}>
              Rating
            </option>
            <option value="value4" className={css.option}>
              Discount
            </option>
            <option value="value5" className={css.option}>
              Low to High
            </option>
            <option value="value6" className={css.option}>
              High to Low
            </option>
          </select>
        </div>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
        <li className={css.item}>
          <Card />
        </li>
      </ul>
      <div className={css.wrapperBtn}>
        <butoon className={css.btn}>View More</butoon>
      </div>
    </section>
  );
};

export default AppartmentList;

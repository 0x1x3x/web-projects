import React from "react";
import AppContext from "../context";
import styles from "./Cart/Cart.module.scss";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div>
      <div className={styles.cartTotalBlock}>
        <div className="d-flex justify-between mb-30">
          <h2>Cart</h2>
          <img
            onClick={() => setCartOpened(false)}
            className={styles.removeBtn}
            width={30}
            height={30}
            src="/img/right-arrow.png"
            alt="CLOSE"
          />
        </div>
        <div className="d-flex align-center justify-center flex-column flex">
          <img className="mb-20" width={120} src={image} alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="mt-50" onClick={() => setCartOpened(false)}>
            BACK TO STORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;

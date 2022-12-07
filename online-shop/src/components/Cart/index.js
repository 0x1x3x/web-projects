import styles from "./Cart.module.scss";

function Cart(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex justify-between mb-30">
          <h2>Orders</h2>
          <img
            onClick={props.onCloseCart}
            className={styles.removeBtn}
            // className="cu-p"
            width={15}
            height={15}
            src="/img/right-arrow.png"
            alt="CLOSE"
          />
        </div>
        <div className={styles.items}>
          <div className={styles.cartItem}>
            {/* style="d-flex align-center mb-20" */}
            <div
              style={{
                backgroundImage: "url(/img/nike-jordan-mid-1/1.webp)",
              }}
              className={styles.cartItemImg}
            ></div>
            <div>
              <p className="mb-5">Women's Dunk High "Burgundy Crush"</p>
              <b>120 €</b>
            </div>
            <img
              className={styles.removeBtn}
              width={15}
              height={15}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className={styles.cartItem}>
            {/* style="d-flex align-center mb-20" */}
            <div
              style={{
                backgroundImage: "url(/img/nike-jordan-mid-1/2.webp)",
              }}
              className={styles.cartItemImg}
            ></div>
            <div>
              <p className="mb-5">Dunk HI Retro University "Safety Orange"</p>
              <b>120 €</b>
            </div>
            <img
              className={styles.removeBtn}
              width={15}
              height={15}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Subtotal:</span>
              <div></div>
              <b>120 €</b>
            </li>
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>120 €</b>
            </li>
          </ul>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
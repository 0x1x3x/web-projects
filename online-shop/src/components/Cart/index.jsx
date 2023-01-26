import React from "react";
import Info from "../Info";
import styles from "./Cart.module.scss";
import AppContext from "../../context";
import axios from "axios";

function Cart({ onCloseCart, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setOrderComplete] = React.useState(false);

  const onClickOrder = () => {
    axios.post("https://639078b365ff41831114a960.mockapi.io/order", {
      items: cartItems,
    });

    setOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="d-flex justify-between mb-30">
              <h2>Orders</h2>
              <img
                onClick={onCloseCart}
                className={styles.removeBtn}
                width={30}
                height={30}
                src="/img/right-arrow.png"
                alt="CLOSE"
              />
            </div>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    style={{
                      backgroundImage: `url(${obj.imageUrl})`,
                    }}
                    className={styles.cartItemImg}
                  ></div>
                  <div>
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} €</b>
                  </div>
                  <img
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                    className={styles.removeBtn}
                    width={15}
                    height={15}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
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
              <button onClick={onClickOrder}>CHECKOUT</button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order complete" : "Cart is empty"}
            description={
              isOrderComplete ? "Sneakers are on a way" : "Add something"
            }
            image={
              isOrderComplete ? "/img/order-complete.svg" : "/img/empty-box.svg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;

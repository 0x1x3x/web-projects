import React from "react";
import axios from "axios";

import Info from "../Info";
import useCart from "../../hooks/useCart";

import styles from "./Cart.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onCloseCart, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://639078b365ff41831114a960.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://639078b365ff41831114a960.mockapi.io/cart" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      console.log("Something go wrong");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
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
                  <b>{totalPrice} €</b>
                </li>
                <li className="d-flex">
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} €</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder}>
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order complete" : "Cart is empty"}
            description={
              isOrderComplete
                ? `Your order # ${orderId} is on the way`
                : "Add something"
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

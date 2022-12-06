function Cart(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="d-flex justify-between mb-30">
          <h2>Orders</h2>
          <img
            onClick={props.onCloseCart}
            className="removeBtn cu-p"
            width={15}
            height={15}
            src="/img/right-arrow.png"
            alt="CLOSE"
          />
        </div>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/nike-jordan-mid-1/1.webp)",
              }}
              className="cartItemImg"
            ></div>

            <div>
              <p className="mb-5">Women's Dunk High "Burgundy Crush"</p>
              <b>120 €</b>
            </div>
            <img
              className="removeBtn"
              width={15}
              height={15}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/nike-jordan-mid-1/2.webp)",
              }}
              className="cartItemImg"
            ></div>

            <div>
              <p className="mb-5">Dunk HI Retro University "Safety Orange"</p>
              <b>120 €</b>
            </div>
            <img
              className="removeBtn"
              width={15}
              height={15}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
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

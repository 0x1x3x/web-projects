function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <div className="d-flex justify-between mb-30">
            <h2>Orders</h2>
            <img
              className="removeBtn cu-p"
              width={15}
              height={15}
              src="/img/right-arrow.png"
              alt="Remove"
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">newcop</h3>
            <p>Barcelona</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.png" alt="" />
            <span>240 €</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/acc.png" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Nike Air Jordan Mid 1</h1>
          <div className="search">
            <img width={18} height={18} src="img/search.png" alt="" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img width={30} height={30} src="img/unliked.svg" alt="Unliked" />
            </div>
            <img width={330} src="/img/nike-jordan-mid-1/1.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High "Burgundy Crush"</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/2.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Dunk HI Retro University "Safety Orange"</span>
                <b>130,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/3.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Dunk HI Retro University "Chenille ...</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/4.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High LXX "Cinnabar"</span>
                <b>130,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

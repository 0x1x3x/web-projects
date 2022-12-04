function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" />
          <div>
            <h3 className="text-uppercase">newcop</h3>
            <p>Barcelona</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.png" />
            <span>1205 rub</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/acc.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Air Jordan Mid 1</h1>
        <div className="d-flex">
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/1.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High "Burgundy Crush"</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/2.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High "Burgundy Crush"</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/3.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High "Burgundy Crush"</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.png" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={330} src="/img/nike-jordan-mid-1/4.webp" alt="" />
            <p>Nike</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Women's Dunk High "Burgundy Crush"</span>
                <b>120,00 €</b>
              </div>
              <button className="button">
                <img width={30} height={30} src="/img/add.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

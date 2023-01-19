import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={70} height={70} src="favicon.svg" alt="Logo" />
          <div>
            <h3 className="text-uppercase">newcop</h3>
            <p>Limited Sneakers</p>
          </div>
        </div>
      </Link>
      <nav className="d-flex">
        <a href=" " className="mr-30">
          Sneakers
        </a>
        <a href=" " className="mr-30">
          Streetwear
        </a>
        <a href=" " className="mr-30">
          Shop
        </a>
        <a href=" " className="mr-30">
          Contacts
        </a>
      </nav>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.png" alt="Cart" />
          <span>240 €</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/unliked.svg"
              alt="Favorites"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/acc.png" alt="Account" />
        </li>
      </ul>
    </header>
  );
};

export default Header;

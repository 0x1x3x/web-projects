function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="" />
        <div>
          <h3 className="text-uppercase">newcop</h3>
          <p>Barcelona</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.png" alt="" />
          <span>240 €</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/acc.png" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

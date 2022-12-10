import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  React.useEffect(() => {
    fetch("https://639078b365ff41831114a960.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Search results for: "${searchValue}"`
              : "Air Jordan 1 Mid"}
          </h1>
          <div className="search-block">
            <img width={18} height={18} src="img/search.png" alt="" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Type to search..."
            />
            {searchValue && (
              <img
                className="clear cu-p"
                onClick={() => setSearchValue("")}
                width={15}
                height={15}
                src="/img/btn-remove.svg"
                alt="Close Search"
              />
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap justify-between">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Add to Favorites")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
// import uuid from "react-uuid"; Подключить

import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://639078b365ff41831114a960.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://639078b365ff41831114a960.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://639078b365ff41831114a960.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://639078b365ff41831114a960.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
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
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
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

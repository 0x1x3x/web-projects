import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Favorites from "./pages/Favorites";

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://639078b365ff41831114a960.mockapi.io/cart"
      );

      const favResponse = await axios.get(
        "https://639078b365ff41831114a960.mockapi.io/favorited"
      );
      const itemsResponse = await axios.get(
        "https://639078b365ff41831114a960.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://639078b365ff41831114a960.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://639078b365ff41831114a960.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://639078b365ff41831114a960.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://639078b365ff41831114a960.mockapi.io/favorited/${obj.id}`
      );
    } else {
      const { data } = await axios.post(
        "https://639078b365ff41831114a960.mockapi.io/favorited",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />
        <Route
          exact
          path="/favorites"
          element={
            <Favorites items={favorites} onAddFavorite={onAddFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

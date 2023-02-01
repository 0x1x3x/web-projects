import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favResponse, itemsResponse] = await Promise.all([
          axios.get("https://639078b365ff41831114a960.mockapi.io/cart"),
          axios.get("https://639078b365ff41831114a960.mockapi.io/favorited"),
          axios.get("https://639078b365ff41831114a960.mockapi.io/items"),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log("fetchData error");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        axios.delete(
          `https://639078b365ff41831114a960.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://639078b365ff41831114a960.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.log("addToCart error");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://639078b365ff41831114a960.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log("removeItem error");
    }
  };

  const onAddFavorite = async (obj) => {
    if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      axios.delete(
        `https://639078b365ff41831114a960.mockapi.io/favorited/${obj.id}`
      );
      setFavorites((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Cart
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

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
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

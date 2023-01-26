import React from "react";
import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filterItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
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
      <div className="d-flex flex-wrap justify-between">{renderItems()}</div>
    </div>
  );
};

export default Home;

import Card from "../components/Card";

const Favorites = ({ items, onAddFavorite, onAddToCart }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {/* {searchValue
            ? `Search results for: "${searchValue}"`
            : "Air Jordan 1 Mid"} */}
          Favorites
        </h1>
        {/* <div className="search-block">
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
        </div> */}
      </div>

      <div className="d-flex flex-wrap">
        {/* {" "}
        пофиксить расстояние между карточками */}
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddFavorite}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

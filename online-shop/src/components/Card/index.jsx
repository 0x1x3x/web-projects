import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isLiked, setIsLiked] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickLike = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={3}
          width={330}
          height={400}
          viewBox="0 0 330 410"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="330" height="305" />
          <rect x="0" y="318" rx="10" ry="10" width="225" height="35" />
          <rect x="0" y="366" rx="10" ry="10" width="287" height="35" />
          <rect x="2" y="417" rx="10" ry="10" width="150" height="35" />
          <circle cx="309" cy="434" r="19" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onFavorite}>
            <img
              onClick={onClickLike}
              width={30}
              height={30}
              src={isLiked ? "img/liked.svg" : "/img/unliked.svg"}
              alt="Unliked"
            />
          </div>
          <img width={330} src={imageUrl} alt="" />
          <p>Nike</p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>{title}</span>
              <b>{price}.00€</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              width={30}
              height={30}
              src={isItemAdded(id) ? "/img/checked.svg" : "/img/added.svg"}
              alt="Add to cart button"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;

import React from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
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
          src={isAdded ? "/img/checked.svg" : "/img/added.svg"}
          alt="Add to cart button"
        />
      </div>
    </div>
  );
}

export default Card;

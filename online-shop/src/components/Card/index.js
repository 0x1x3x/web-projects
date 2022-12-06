import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img width={30} height={30} src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={330} src={props.imageUrl} alt="" />
      <p>Nike</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>{props.title}</span>
          <b>{props.price}.00€</b>
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

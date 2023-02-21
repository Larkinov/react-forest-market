import React from "react";
import styles from "./Card.module.scss";

function Card({onClickLike, onClickPlus, title, url, price}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onPlus = () => {
    if(isAdded)
      onClickPlus({title, url, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onClickLike({title, url, price});
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardLike} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/heart-full.svg" : "/img/heart-line.svg"} alt="unliked" width={14} height={14} />
      </div>
      <img src={url} alt="tree" width={133} height={112} style={{marginLeft:"20px"}} />
      <h5>{title}</h5>
      <div className="cardButton">
        <div className="cardButtonPrice">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={onPlus}
          src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
          alt="Plus"
          width={24}
          height={24}
          style={{cursor:"pointer"}}
        />
      </div>
    </div>
  );
}

export default Card;

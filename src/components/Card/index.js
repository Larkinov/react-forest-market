import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLike} onClick={props.onClickLike}>
        <img src="/img/heart-line.svg" alt="unliked" width={14} height={14} />
      </div>
      <img src={props.url} alt="tree" width={133} height={112} />
      <h5>{props.title}</h5>
      <div className="cardButton">
        <div className="cardButtonPrice">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="buttonCard" onClick={props.onClickPlus}>
          <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;

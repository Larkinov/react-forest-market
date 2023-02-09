function Card(){
    return (<div className="card">
    <div className="card-like">
      <img src="/img/heart-line.svg" alt="unliked" width={14} height={14} />
    </div>
    <img src="/img/forest/tree-one.svg" alt="tree" width={133} height={112} />
    <h5>Лучшая елочка на районе</h5>
    <div className="cardButton">
      <div className="cardButtonPrice">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
      </button>
    </div>
  </div>);
}

export default Card;


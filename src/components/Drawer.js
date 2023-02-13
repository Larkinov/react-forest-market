function Drawer({onClose, items=[]}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img onClick={onClose} src="./img/btn-close.svg" alt="close" className="removeBtn" />
        </h2>
        <div className="items">
          {
            items.map((obj)=>(
              <div className="cartItem">
                <img
                  src={obj.url}
                  alt="trees"
                  width={70}
                  height={70}
                  className="imgTree"
                />
                <div className="cartItem-description">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img src="/img/btn-close.svg" alt="close" className="removeBtn" />
              </div>
            ))
          }
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="btnBuy">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

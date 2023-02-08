function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина<img src="/img/btn-close.svg" alt="close" className="removeBtn"/></h2>
          <div className="items">
            <div className="cartItem">
              <img src="/img/forest/tree-one.svg" alt="trees" width={70} height={70} className="imgTree"/>
              <div className="cartItem-description">
                <p>Лучшая елочка на районе</p>
                <b>12 999 руб.</b>
              </div>
              <img src="/img/btn-close.svg" alt="close" className="removeBtn"/>
            </div>
            <div className="cartItem">
              <img src="/img/forest/tree-one.svg" alt="trees" width={70} height={70} className="imgTree"/>
              <div className="cartItem-description">
                <p>Лучшая елочка на районе</p>
                <b>12 999 руб.</b>
              </div>
              <img src="/img/btn-close.svg" alt="close" className="removeBtn"/>
            </div>
            <div className="cartItem">
              <img src="/img/forest/tree-one.svg" alt="trees" width={70} height={70} className="imgTree"/>
              <div className="cartItem-description">
                <p>Лучшая елочка на районе</p>
                <b>12 999 руб.</b>
              </div>
              <img src="/img/btn-close.svg" alt="close" className="removeBtn"/>
            </div>
            
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
            <button className="btnBuy">Оформить заказ<img src="/img/arrow.svg" alt="arrow" width={20} height={20}/></button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" width={40} height={40} />
          <div className="headerInfo">
            <h3>React Forest</h3>
            <p>Магазин леса</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/buy.svg" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" width={18} height={18} />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="forest">
          <div className="card">
            <div className="card-like">
              <img
                src="/img/heart-line.svg"
                alt="unliked"
                width={14}
                height={14}
              />
            </div>
            <img
              src="/img/forest/tree-one.svg"
              alt="tree"
              width={133}
              height={112}
            />
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
          </div>
          <div className="card">
            <img
              src="/img/forest/tree-two.svg"
              alt="tree"
              width={133}
              height={112}
            />
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
          </div>
          <div className="card">
            <img
              src="/img/forest/tree-three.svg"
              alt="tree"
              width={133}
              height={112}
            />
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
          </div>
          <div className="card">
            <img
              src="/img/forest/tree-five.svg"
              alt="tree"
              width={133}
              height={112}
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

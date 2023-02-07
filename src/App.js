function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" width={40} height={40}/>
          <div className="headerInfo">
            <h3>React Forest</h3>
            <p>Магазин леса</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
          <img src="/img/buy.svg" width={18} height={18}/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img src="/img/user.svg" width={18} height={18}/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все товары</h1>
        
        <div className="forest">
          <div className="card">
            <img src="/img/forest/tree-one.svg" alt="tree" width={133} height={112}/>
            <h5>Лучшая елочка на районе</h5>
            <div className="cardButton">
              <div className="cardButtonPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/forest/tree-two.svg" alt="tree" width={133} height={112}/>
            <h5>Лучшая елочка на районе</h5>
            <div className="cardButton">
              <div className="cardButtonPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/forest/tree-three.svg" alt="tree" width={133} height={112}/>
            <h5>Лучшая елочка на районе</h5>
            <div className="cardButton">
              <div className="cardButtonPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/forest/tree-five.svg" alt="tree" width={133} height={112}/>
            <h5>Лучшая елочка на районе</h5>
            <div className="cardButton">
              <div className="cardButtonPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

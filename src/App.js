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
        ....
      </div>
    </div>
  );
}

export default App;

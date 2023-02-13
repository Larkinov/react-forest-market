import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(()=>{
    fetch("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/items").then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);
  

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" width={18} height={18} />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="forest">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              url={obj.url}
              onClickLike={() => console.log("like")}
              onClickPlus={() => console.log("plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

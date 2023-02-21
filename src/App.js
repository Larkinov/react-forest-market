import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/items")
    //   .then((res) => {     старый способ
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
      axios.get("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/items").then(res=>{
        setItems(res.data);
      });
      axios.get("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart").then(res=>{
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart",obj)
    //берем предыдущие данные и изменяем наш массив на предыдущие данные+новый объект
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item)=>item.id!==id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    // не хватило бесплатной подписки
    // axios.post("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/favorites",obj)
    // setFavorite((prev) => [...prev, obj]);
    console.log("favorite!");
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/favorites" element={<p>ss</p>}/>
      </Routes>

      <div className="content">
        <div className="search">
          <h1>
            {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" width={18} height={18} />
            {searchValue && (
              <img
                src="./img/btn-close.svg"
                alt="clear"
                className="removeBtn"
                onClick={() => {
                  setSearchValue("");
                }}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            ></input>
          </div>
        </div>
        <div className="forest">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                url={item.url}
                onClickLike={(obj) => onAddToFavorite(obj)}
                onClickPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

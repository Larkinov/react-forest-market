import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

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
    axios
      .get("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    // axios
    //   .get("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/favorites")
    //   .then((res) => {
    //     setFavorite(res.data);
    //   });   
  }, []);

  const onAddToCart = (obj) => {
    try {
      axios.post("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart", obj);
      //берем предыдущие данные и изменяем наш массив на предыдущие данные+новый объект
      setCartItems((prev) => [...prev, obj]);
    } catch (err) {
      alert("Не удалось добавить товар");
    }
    };

  const onRemoveItem = (id) => {
    axios.delete(`https://63e87eda4f3c6aa6e7beb2da.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    // не хватило бесплатной подписки
    // axios.post("https://63e87eda4f3c6aa6e7beb2da.mockapi.io/favorites",obj)
     setFavorite((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onClickLike={onAddToFavorite}
              onClickPlus={onAddToCart}
            />
          }
        />
        <Route path="/favorites" element={
          <Favorites 
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />} />
      </Routes>
    </div>
  );
}

export default App;

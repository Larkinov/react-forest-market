import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Самая лучшая елочка на районе",
    price: "1200",
    url: "./img/forest/tree-one.svg",
  },
  { title: "Дерево-дерево!", price: "1300", url: "./img/forest/tree-two.svg" },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" width={18} height={18} />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="forest">
          {arr.map((obj) => (
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

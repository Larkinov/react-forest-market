import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" width={18} height={18} />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="forest">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;

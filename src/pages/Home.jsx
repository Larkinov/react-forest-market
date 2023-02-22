import Card from "../components/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onClickLike,
    onClickPlus,
}){

    return (
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
                onClickLike={(obj) => onClickLike(obj)}
                onClickPlus={(obj) => onClickPlus(obj)}
              />
            ))}
        </div>
      </div>
    );
}

export default Home;
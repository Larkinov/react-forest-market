import Card from "../components/Card";

function Favorites({items, onAddToFavorite}){

    return (
        <div className="content">
          <div className="search">
            <h1>Мои закладки</h1>
          </div>
        <div className="forest">
          {items
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                url={item.url}
                favorited={true}
                onFavorite={onAddToFavorite}
              />
            ))}
        </div>
      </div>
    );
}

export default Favorites;
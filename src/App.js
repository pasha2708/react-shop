import React from 'react';
import 'macro-css';

import Card from './components/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer';



function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() =>{
    fetch('https://61b7874164e4a10017d18b87.mockapi.io/items').then(res =>{
    return res.json();
    }).then(json =>{
      setItems(json);
    });
  }, [])

  const onAddToCart = (obj) => {
    setcartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
          
      </div>

      <div className="d-flex flex-wrap">{
      items.map(item =>(
        <Card 
          name={item.name}
          price={item.price} 
          imageUrl={item.imageUrl}
          onPlus={(obj) => {onAddToCart(obj)}}
          // onFavorite={console.log("OnFavorite")}
        />
        ))}
      </div>

    </div>
  </div>
  );
}

export default App;

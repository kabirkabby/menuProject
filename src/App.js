import Header from './components/Layout/Header'
import React,{useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [carIsShown, setCartisShown] = useState(false);

  const showCardHandler = () => {
    setCartisShown(true)
  };

  const hideCardHandler = () => {
    setCartisShown(false)
  };

  return (
   <CartProvider>
    {carIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onTouch={showCardHandler}/>
      <main>
        <Meals/>
      </main>
   </CartProvider>
  );
}

export default App;

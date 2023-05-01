import { useContext,useEffect,useState } from 'react'
import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/Carticon'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  },0);

  const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=> {
    if(items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timmer = setTimeout(() => {
      setBtnIsHighlighted(false)
    },300);

    return () => {
      clearTimeout(timmer)
    };

  },[items])


  return (
    <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton
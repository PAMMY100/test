import './CartList.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartList = (props) => {
  const dispatch = useDispatch();
  const {id, totalPrice, price} = props.item

  const addItem = () => {
    dispatch(cartActions.addToCart({id, price}))
  }
  console.log(totalPrice)

  const removeItem = () => {
    dispatch(cartActions.removeFromCart(id))
  }

  return (
    <div className="cart-items">
      <img src={props.item.img} alt="productImage" />
      <div className="cart-elements">
        <p>{props.item.category}</p>
        <p>Price - ${props.item.price}</p>
        <p>qty - {props.item.quantity}</p>
      </div>
      <p>
        <button onClick={addItem}>+</button>
        <button onClick={removeItem}>-</button>
      </p>
      <p className="price">Total - ${Number(props.item.totalPrice)}</p>
    </div>
  )
}

export default CartList

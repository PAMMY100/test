import { useSelector } from "react-redux";
import CartList from "../components/cartlist/CartList";

export default function Cart () {
  const products = useSelector(state => state.cart.items)


  console.log(products)

  return (
    <div className="cart">
      <ul>
        {
          products.map(item =>
          <li>
            <CartList key={item.id} item={item} id={item.id} />
          </li>
          )
        }
      </ul>
    </div>
  )
}
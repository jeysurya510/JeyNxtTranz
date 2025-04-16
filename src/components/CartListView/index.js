import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummary'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeCartAllItems} = value

      const removeAllBtn = () => {
        removeCartAllItems()
      }

      return (
        <ul className="cart-list">
          <button
            className="remove-all-btn"
            onClick={removeAllBtn}
            data-testid="remove"
            type="button"
          >
            Remove All
          </button>
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
          <CartSummary cartList={cartList} />
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView

import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const priceCount = cartList.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )
          const quantityCount = cartList.length
          return (
            <div className="cart-summary-list">
              <h1 className="price-h1">
                Order Total:{' '}
                <span className="price-span">{`${priceCount}/-`}</span>
              </h1>
              <p className="count-p">{`${quantityCount} items in cart`}</p>
              <button className="checkout-btn" type="button">
                checkout
              </button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary

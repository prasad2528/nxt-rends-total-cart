import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })
      return (
        <div className="summary">
          <h1 className="order">
            Order Total: <span className="price">Rs {total}</span>/-
          </h1>
          <p className="length">{cartList.length} items in cart</p>
          <button className="checkout" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

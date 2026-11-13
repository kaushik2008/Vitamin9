import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="mb-0">Cart ({totalQuantity} items)</h4>
      </div>
      <div className="card-body">
        {items.length === 0 ? (
          <p className="text-muted mb-0">Your cart is empty</p>
        ) : (
          <>
            <div className="list-group mb-3">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
            <button className="btn btn-danger" onClick={handleClearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
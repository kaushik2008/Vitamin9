import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p className="mb-0">{item.name}</p>
        <p className="mb-0 text-muted">${item.price.toFixed(2)}</p>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-sm btn-secondary" onClick={handleDecrease}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button className="btn btn-sm btn-secondary me-2" onClick={handleIncrease}>+</button>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
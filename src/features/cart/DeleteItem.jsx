import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlics';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispath = useDispatch();
  return (
    <Button type="small" onClick={() => dispath(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

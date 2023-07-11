import { useDispatch, useSelector } from "react-redux"
import { When } from 'react-if';
import { removeFromCart } from '../../store/cart';
import { Button } from "@mui/material";
import { removeProduct } from "../../store/products";

function SimpleCart() {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch();

  const removeDispatcher = (product) => {
    dispatch(removeFromCart(product));
    dispatch(removeProduct(product));
  }

  return (
    <>
      <When condition={cart.length > 0}>

        {
          cart.map((product, index) => (
            <li key={`simplecart-${index}`}>
              {product.name}
              <Button
                onClick={() => removeDispatcher(product)}
                variant="contained"
                color="error"
                size="small"
              >X</Button>
            </li>
          ))
        }
      </When>
    </>
  )
}


export default SimpleCart;
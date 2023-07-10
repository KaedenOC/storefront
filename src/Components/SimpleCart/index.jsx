import { useDispatch, useSelector } from "react-redux"
import { When } from 'react-if';
import { removeFromCart } from '../../store/actions';
import { Button } from "@mui/material";

function SimpleCart() {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  return (
    <>
      <When condition={cart.length > 0}>

        {
          cart.map((product, index) => (
            <li key={`simplecart-${index}`}>
              {product.name}
              <Button
                onClick={() => dispatch(removeFromCart(product))}
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
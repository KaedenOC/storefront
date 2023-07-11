import { useDispatch, useSelector } from "react-redux"
import { When } from 'react-if';
import { REMOVE } from '../../store/cart';
import { Button } from "@mui/material";

function SimpleCart() {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <>
      <When condition={cart.length > 0}>

        {
          cart.map((product, index) => (
            <li key={`simplecart-${index}`}>
              {product.name}
              <Button
                onClick={() => dispatch(REMOVE(product))}
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
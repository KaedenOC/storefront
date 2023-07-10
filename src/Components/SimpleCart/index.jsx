import { useDispatch, useSelector } from "react-redux"
// import { When } from 'react-if';
import { remove } from '../../store/actions';
import { Button } from "@mui/material";

function SimpleCart(){
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  return (
    <>
      {
        cart.map((product, index) => (
          <p key={`simplecart-${index}`}>
            {product.name}
            <Button onClick={() => dispatch(remove(product))} variant="contained" color="error">X</Button>
          </p>
        ))
      }
    </>
  )
}


export default SimpleCart;
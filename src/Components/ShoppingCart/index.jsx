import { When } from "react-if";
import { useSelector } from "react-redux";
import './styles.scss';
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

function ShoppingCart() {
    const cart = useSelector((state) => state.cart);

    const calcTotal = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.price
        })
        return total;
    }

    return (
        <When condition={cart.length > 0}>
            <div className="shoppingCart">
                <ul>
                    {
                        cart.map((product, index) => (
                            <Grid sx={{ maxWidth: 345 }} key={`shoppingCart-${index}`} className="item" >
                              <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                                <Typography variant="body2" color="text.secondary">${product.price}</Typography>

                                </CardContent>

                              </Card>
                            </Grid>
                        ))
                    }
                    <li key={`shoppingcart-total`} className="item" >
                        <h2>Total</h2>
                        <h2>${calcTotal()}</h2>
                    </li>
                </ul>
            </div>
        </When>
    )
}

export default ShoppingCart;
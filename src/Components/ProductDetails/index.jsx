import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, CardActions, CardMedia, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { When } from "react-if";
import { decrementInventory } from '../../store/products';
import { addToCart } from '../../store/cart';
// import SimpleCart from "../SimpleCart";

function ProductDetails() {
    const { id } = useParams();
    const products = useSelector((state) => state.products);

    const activeProduct = products.find(product => product._id === id);

    if (!activeProduct) {
        return <div>Product not found.</div>;
    }

    const dispatch = useDispatch();

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    // dispatch(addProduct(product));
    dispatch(decrementInventory(product));
  }

    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`https://source.unsplash.com/random?${activeProduct.name}`}
                        title={activeProduct.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {activeProduct.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {activeProduct.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: ${activeProduct.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            In-Stock: {activeProduct.inStock}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <When condition={activeProduct.inStock}>
                      <Button onClick={() => addDispatcher(activeProduct)} size="small">Add To Cart</Button>
                    </When>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}
export default ProductDetails;
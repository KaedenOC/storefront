import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { addToCart } from '../../store/cart';
import { addProduct, decrementInventory, getProducts } from '../../store/products';
import { useEffect } from 'react';

export default function Products() {

  const { activeCategory } = useSelector((state) => state.categories)
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    // dispatch(addProduct(product));
    dispatch(decrementInventory(product));
  }

  useEffect(() => {
    dispatch(getProducts(activeCategory.name))
  }, [activeCategory]);

  return (

    <>
      <When condition={activeCategory}>
        <h2>{activeCategory.name}</h2>
        <h4>Category Description Goes Here</h4>
        <Grid container spacing={2} width="70%" margin="auto">
          {
            products.map((product, index) => (
              <Grid key={`products${index}`} item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random?${product.name}`}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In-Stock: {product.inStock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <When condition={product.inStock}>
                      <Button onClick={() => addDispatcher(product)} size="small">Add To Cart</Button>
                    </When>
                    <Button size="small">View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </When>
    </>
  );
}

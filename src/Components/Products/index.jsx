import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import { CardMedia, Grid } from '@mui/material';
import { addToCart } from '../../store/actions';

export default function Products() {

  const { activeCategory } = useSelector((state) => state.categories)
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (

    <>
      <When condition={activeCategory}>
        <h2>{activeCategory.displayName}</h2>
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
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => dispatch(addToCart(product))} size="small">Add To Cart</Button>
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

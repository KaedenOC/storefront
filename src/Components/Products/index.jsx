import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { When } from 'react-if';
import { CardMedia } from '@mui/material';

export default function Products() {

  const { activeCategory, products } = useSelector((state) => state.store)

  return (

    <>
      <When condition={activeCategory}>
        <h2>{activeCategory.displayName}</h2>
        <h4>Category Description Goes Here</h4>
        {
          products.map((product, index) => (
            <Card key={`products${index}`} sx={{ maxWidth: 345 }}>
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
                <Button size="small">Add To Cart</Button>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
            // <p key={`products${index}`}>{product.name}</p>
          ))
        }
      </When>
    </>
  );
}

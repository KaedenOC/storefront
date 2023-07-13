import { AppBar, Grid, Toolbar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';


function Header() {
  const { cart } = useSelector(state => state);

  return (
    <>
      <AppBar data-testid='header'>
        <Toolbar className="toolBar">
          <Grid container>
            <Grid item>
              <Button component={Link} to='/'>
                <Typography className="header-font-color" variant="h4">Storefront</Typography>
              </Button>
            </Grid>
            <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Button component={Link} to='/cart'>
                <Typography className="header-font-color">CART ({cart.length})</Typography>
              </Button>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
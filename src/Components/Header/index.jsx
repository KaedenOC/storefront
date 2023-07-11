import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


function Header() {
  const { cart } = useSelector(state => state);
  
  return(
    <>
   <AppBar className='toolBar' data-testid='header'>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography variant="h4">Storefront</Typography>
            </Grid>
            <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Typography>CART ({cart.length})</Typography>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
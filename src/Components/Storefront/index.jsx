import Header from '../Header';
import Footer from '../Footer';
import Categories from '../Categories';
import Products from '../Products';
import SimpleCart from '../SimpleCart';

function Storefront() {
  return (
    <>
      <div className="content">
        <Header />
        <Categories />
        <SimpleCart />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Storefront;
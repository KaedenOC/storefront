import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';

function Categories() {
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {
    dispatch(changeCategory(category));
  }

  return(
    <>
      <h3>Browse Our Categories</h3>
      {
        categories.map((category, index) => {
          <article key={`categories-${index}`}>
            <h5>{category.displayName}</h5>
          </article>
        })
      }
    </>
  )
}

export default Categories;
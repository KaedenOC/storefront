import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { ButtonGroup, Button } from '@mui/material';

function Categories() {
  const { categories } = useSelector((state) => state.store);
  console.log('categories', categories);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {
    dispatch(changeCategory(category));
    console.log('changeCategory', category);
  }

  return (
    <>
      <h3>Browse Our Categories</h3>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category, index) => (

            <Button key={`categories-${index}`} onClick={() => categoryHandler(category)}>{category.displayName}</Button>
          )
          )
        }
      </ButtonGroup>
    </>
  )
}

export default Categories;
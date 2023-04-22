import { DUMMY_CATEGORIES } from '../../data/DUMMY_CATEGORIES'
import CategoryItem from './category-item';

import { CategoriesContainer } from './categories-list.styles';

const CategoryList = () => {
  return (
    <>
      <CategoriesContainer>
          { DUMMY_CATEGORIES.map( (el, i) => (
              <CategoryItem category={el} key={i} />
          )) }
      </CategoriesContainer>
    </>
  );
}

export default CategoryList;

import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { CategoriesContext } from '../../contexts/categories-context';
import Product from '../../components/product/product';
import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category-preview.styles'
import Spinner from '../../components/spinner/spinner';

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
    const { category } = useParams();
    const { loading, error, data } = useQuery (
        GET_CATEGORY,
        { variables: { title: category } }
    );

    const [products, setProducts] = useState([]);

    /* 
        data  : Object
            getCollectionsByTitle   : Object
                id: "cjwuun2fa001907195roo7iyk"         key: string
                items: (5) [{…}, {…}, {…}, {…}, {…}]    key: Array
                title: "Jackets"                        key: string
    */
    useEffect(() => {
        if (data) {
            const { getCollectionsByTitle: { items } } = data;
            setProducts(items);
          }
    }, [category, data]);

    return (
        <CategoryContainer>
            {
                loading ?
                    <Spinner />
                    :
                    <>
                        <Title>{category.toUpperCase()}</Title>
                        <ProductContainer>
                            { products &&
                                products.map((product) => (
                                    <Product key={product.id} product={product} />
                                ))
                            }
                        </ProductContainer>
                    </>
            }

        </CategoryContainer>
    )
}

export default Category
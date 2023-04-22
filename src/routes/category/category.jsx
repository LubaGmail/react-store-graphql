import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories-context';
import Product from '../../components/product/product';
import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category-preview.styles'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    // const products = categoriesMap[category]
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryContainer>
            <Title>{category.toUpperCase()}</Title>
            <ProductContainer>
                { products &&
                    products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </ProductContainer>
        </CategoryContainer>
    )
}

export default Category
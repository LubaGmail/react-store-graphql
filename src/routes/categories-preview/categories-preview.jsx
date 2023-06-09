import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories-context';
import Product from '../../components/product/product';

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'
import Spinner from '../../components/spinner/spinner';

const CategoriesPreview = () => {
    const { categoriesMap, loading, error } = useContext(CategoriesContext)
    
    return (
        <>
            {
                loading ?
                    <Spinner />
                    :
                    Object.keys(categoriesMap).map((title, i) => (
                        <CategoryPreviewContainer key={i}>
                            <Link to={`/shop/${title}`}>
                                <Title>{title.toUpperCase()}</Title>
                            </Link>
                            <Preview>
                                {
                                    categoriesMap[title].map((p, i) => (
                                        <span key={i}>
                                            {i < 4 && <Product product={p} />}
                                        </span>
                                    ))
                                }
                            </Preview>
                        </CategoryPreviewContainer>
                    ) )
            }   
        </>
    )
}

export default CategoriesPreview 


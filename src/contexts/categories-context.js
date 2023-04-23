import { createContext, useState, useEffect } from 'react';

import { getCategories } from '../utils/firebase/firebase';
import { gql, useQuery } from '@apollo/client';

export const CategoriesContext = createContext({
    categoriesMap: [],
});

/*  
    collections:            Object  key='collections'
            [0]:    
                id: "cjwuuj5bz000i0719rrtw5gqk"
                items:      Array
                    [{…}, {…},...]
                        [0] {id: "cjwuuj5ip000j0719taw0mjdz", imageUrl: "https://i...", ...}
*/
const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const { loading, error, data } = useQuery(COLLECTIONS);
    
    useEffect(() => {
        if (data) {
          const { collections } = data;
          const collectionsMap = collections.reduce((acc, collection) => {
            const { title, items } = collection;
            acc[title.toLowerCase()] = items;
            return acc;
          }, {});
          
          /*  
            (5) [{…}, {…}, {…},...]     : Array
                [0] 
                    {   id: "cjwuuj5bz000i0719rrtw5gqk" ,
                        title: "Hats",
                        items: [{…}, {…}, {…},...]
                            [0] 
                                {id:  "cjwuuj5ip000j0719taw0mjdz", imageUrl: "https://i...", ...}
                    }
          */
          setCategoriesMap(collectionsMap);
        }
    }, [data]);
  
    const value = { categoriesMap };   

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
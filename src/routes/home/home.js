import CategoryList from "../../components/categories/categories-list";

/**
  <Route path='/' element={<Home />} >
    <Route path='toys' element={<Toys />} />
 */
const Home = () => {
  return (
    <>
       <CategoryList />
    </>
     
  );
}

export default Home

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import products from '../data/products';
import useLocalStorage from '../hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductList = () => {

  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1)
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    setCurrentPage(value);
  };

  

  return (
    <div>
      <div className="product-list-top-section">
        <h2 className='new-collection-title'>New Collection</h2>
        <FontAwesomeIcon className="filter-icon" icon={faFilter}/>
      </div>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <Link to={`products/${product.id}`} className="product-container" key={product.id}>
            <img className="product-image"src={product.image} alt="" />
            <h2 className="product-name">{product.name}</h2>
            <h3 className='product-price'>{product.price}</h3>
          </Link>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          className="pagination"
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default ProductList;

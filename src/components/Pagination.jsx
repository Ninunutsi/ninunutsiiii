import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import products from '../data/products';

const ProductList = () => {

  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
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
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div className="product-container" key={product.id}>
            <img className="product-image"src={product.image} alt="" />
            <h2 className="product-name">{product.name}</h2>
            <h3 className='product-price'>{product.price}</h3>
          </div>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default ProductList;

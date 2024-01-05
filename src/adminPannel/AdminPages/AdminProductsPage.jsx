import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { useNavigate } from "react-router-dom";
import useProductFetch from "../AdminHooks/useProductFetch";
import { LoadingDiv } from "../../components/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useAdminAuth } from "../AdminContexts/AdminAuthContext";

const AdminProducts = () => {
  const { t } = useTranslation();
  const { filteredProducts } = useFilterContext();
  const { logout } = useAdminAuth();

  const AdminProducts = filteredProducts.map((prod) => prod);
  const navigate = useNavigate();

  const { error, loading, products } = useProductFetch({
    url: "/api/v1/products",
    method: "GET",
  });

  const productsList =
    products?.items.map((product) => {
      return {
        title: product.title,
        price: product.price,
        desc: product.desc,
        category: product.category,
        id: product._uuid,
      };
    }) || [];

  const combinedProducts = [...productsList, ...AdminProducts];

  const onClick = () => {
    navigate("/admin/add");
  };

  const handleLogout = () => {
    logout();
  };

  if (loading)
    return (
      <LoadingDiv style={{ left: "40px" }}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </LoadingDiv>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={onClick}>Add Product</button>
      <ProductList
        products={AdminProducts}
        productsPerPage={20}
        category={t("allProducts")}
        // customRender={(product) => (
        //   <div key={product.id} style={{ border: "1px solid black" }}>
        //     <h3>{product.title}</h3>
        //     <h3>{product.price}</h3>
        //     <h3>{product.desc}</h3>
        //   </div>
        // )}
      />
    </div>
  );
};

export default AdminProducts;

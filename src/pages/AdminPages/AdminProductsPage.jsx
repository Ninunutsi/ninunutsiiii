
import ProductList from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "../../contexts/FilterContextProvider";
import { useAdminAuth } from "../../contexts/AdminAuthContext";

const AdminProducts = () => {
  const { t } = useTranslation();
  const {filteredProducts} = useFilterContext()
  const {logout} = useAdminAuth()
// ეს პროსტა ჩავსი
  const AdminProducts = filteredProducts.map((prod) => prod);

  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      {/* დროებით აქ იჯდეს ლოგაუთ ღილაკი */}
      <button onClick={handleLogout}>Logout</button>
      <ProductList
        products={AdminProducts}
        productsPerPage={20}
        category={t("allProducts")}
      />
    </div>
  );
};

export default AdminProducts;

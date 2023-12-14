import { nanoid } from "nanoid"
import forProductList from "../assets/forProductList.png"


const numberOfProducts = 100
const products = Array.from({ length: numberOfProducts }, (_, index) => ({
    id: nanoid(),
    name: `Product ${index + 1}`,
    image: forProductList,
    price: "10$"
  }));
  
  export default products
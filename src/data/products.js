import { nanoid } from "nanoid"
import forProductList from "../assets/forProductList.png"
import detailedImage1 from "../assets/detailed-image-1.png"
// import detailedImage2 from "../assets/detailed-image-2.png"


const numberOfProducts = 100
const products = Array.from({ length: numberOfProducts }, (_, index) => ({
    id: nanoid(),
    name: `Product ${index + 1}`,
    image: forProductList,
    price: "10$",
    moreImages: [detailedImage1, detailedImage1, detailedImage1, detailedImage1,  detailedImage1, detailedImage1]
  }));
  
  export default products
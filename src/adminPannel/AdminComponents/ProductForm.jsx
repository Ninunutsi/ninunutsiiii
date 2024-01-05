import { useEffect, useRef, useState } from "react";

const ProductForm = ({ onFormSubmit, title, desc, price, category }) => {
  const titleNameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  // სურათს ამატებს უბრალოდ ინფუთში არჩევის დროს --->>>

  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const objectUrls = Array.from(files, (file) => URL.createObjectURL(file));
      setPreviews(objectUrls);
    }
  };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  // აქ მთავრდება --->>>

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      (titleNameRef.current,
      priceRef.current,
      descRef.current,
      categoryRef.current)
    ) {
      onFormSubmit(
        titleNameRef.current.value,
        priceRef.current.value,
        descRef.current.value,
        categoryRef.current.value
      );
    } else {
      prompt("Please fill info");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          ref={titleNameRef}
          defaultValue={title}
        />
        <input
          type="text"
          placeholder="Product Price"
          ref={priceRef}
          defaultValue={price}
        />
        <input
          type="text"
          placeholder="Product description"
          ref={descRef}
          defaultValue={desc}
        />
        <input // აქ შეიძლება გაკეთდეს სელექთი
          type="text"
          placeholder="Product Category"
          ref={categoryRef}
          defaultValue={category}
        />
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button>Submit</button>
      </form>
      {previews.map((pic, index) => (
        <img
          key={index}
          src={pic}
          alt="img"
          style={{ width: "400px", height: "500px;" }}
        />
      ))}
    </div>
  );
};

export default ProductForm;

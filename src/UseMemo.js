import { useMemo, useRef, useState } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price, // đổi sang kiểu số
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  // sử dụng useMemo để tránh thực hiện lại đoạn tính toán ko cần thiết
  // Đoạn dưới chỉ tính lại total khi products thay đổi
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại");
      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <br />
      <p>List: </p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Name: {product.name}. Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;

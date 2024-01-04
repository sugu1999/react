import { useState, useEffect } from "react";

function DeletedProducts(props) {
  console.log(props);
  let [listOfDeletedProducts, setListOfDeletedProducts] = useState([]);

  useEffect(() => {
    console.log("first");
    if (Object.keys(props.deletedProduct).length===0) {
      setListOfDeletedProducts([]);
    } else {
      setListOfDeletedProducts([
        ...listOfDeletedProducts,
        props.deletedProduct,
      ]);
    }
  }, [props.deletedProduct]);

  console.log(listOfDeletedProducts);
  return (
    <div>
      <p className="display-3 text-danger">Deleted Products</p>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {listOfDeletedProducts.map((productObj, index) => (
            <tr key={index}>
              <td>
                <img
                  src={productObj.image}
                  width="80px"
                  height="100px"
                  alt=""
                />
              </td>
              <td>{productObj.title}</td>
              <td>{productObj.price}</td>
              {/* <td>{productObj.description}</td> */}
              <td>{productObj.category}</td>
              <td>
                {/* <button className="btn btn-danger" onClick={()=>deleteProductById(productObj.id)}>x</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeletedProducts;

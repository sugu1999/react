import { useState, useEffect } from "react";
import DeletedProducts from "../deleted-products/DeletedProducts";
import axios from "axios";

function ProductsList() {
  let [productsObj, setProductsObj] = useState({
    products: [],
    deletedProduct: {},
  });
  let [pendingState, setPendingState] = useState(false);
  let [err,setErr]=useState('')
  // let [deletedProduct, setDeletedProduct] = useState({});
  useEffect(() => {
    async function getProducts() {
      try{
      setPendingState(true);
      let res = await axios.get("https://fakestoreapi.com/products?limit=5");
      let productsList = res.data;
      setProductsObj({ ...productsObj, products: productsList });
      setPendingState(false);
      setErr('')
      }catch(err){
        setErr(err.message)
      }
    }
    getProducts();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  
  }, []);
 

  function deleteProductById(id) {
    let dp = productsObj.products.find((prod) => prod.id === id);
    let resultProducts = productsObj.products.filter((prod) => prod.id !== id);
    setProductsObj({
      ...productsObj,
      products: resultProducts,
      deletedProduct: dp,
    });
  }

  // console.log(productsObj)
  return (
    <div>
      <p className="display-3 text-info">List of Products</p>
      {err.length!==0&& <p className="text-danger display-5 lead">{err}</p>}
      {pendingState === true&&err.length===0 ? (
        <p className="text-primary display-5 lead spinner-border"></p>
      ) : (
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
            {productsObj.products.map((productObj) => (
              <tr key={productObj.id}>
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
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProductById(productObj.id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <DeletedProducts deletedProduct={productsObj.deletedProduct} />
    </div>
  );
}

export default ProductsList;

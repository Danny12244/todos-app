import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3030/data/${id}`)
        .then((r) => r.json())
        .then((d) => setProducts(d));
    }
  }, [id]);
  return (
    <>
      {id !== "undefined" ? (
        // <div key={id} className="card">
        //   Product id:{id}
        //   <div key={id}>{products.name}</div>
        // </div>
        <div className="card m-auto mt-2" style={{width: "18rem"}}>
        <div className="card-header">Product id: {id}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{products.name}</li>
         
        </ul>
      </div>
      ) : (
        <div className="card m-auto mt-2" style={{width: "18rem"}}>
          <div className="card-header">Product id does not exist</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">No item</li>
           
          </ul>
        </div>
      )}
    </>
  );
};

export default Product;

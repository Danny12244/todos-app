import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = async () => {
      let response = await fetch("http://localhost:3030/data");
      let d = await response.json();

      setProducts(d);
    };
    products();
  }, []);
  return (
    <div>
      <div className="container  mt-4">
        <div className="row justify-content-evenly">
          {products.map((el) => {
            return (
              <div key={el.id} className="col-4 p-2 m-2 card ">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">Price:{el.price}</p>
                <Link to={`${el.id}`} className="btn btn-primary m-auto">
                  ...moredetails
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";

import { apiBase } from "apiBase";

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/admin/products-list`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const products = await res.json();
      console.log(products);
      //   setProducts(products);
    });
  }, []);

  return <div>la la la</div>;
};

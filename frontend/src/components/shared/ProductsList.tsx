import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TileComponent } from "components/store/Tile";
import { httpService } from "services/rootService";
import { IProductList } from "interfaces/shared/IProductList";

const StoreProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 2rem auto;
  width: 80%;
`;

export const ProductList: React.FC<IProductList> = ({ isAdmin }) => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    httpService.GET("products-list").then((res) => setProducts(res));
  }, []);

  return (
    <StoreProductContainer>
      {products.map((product: any) => (
        <TileComponent key={product._id} product={product} isAdmin={isAdmin} />
      ))}
    </StoreProductContainer>
  );
};

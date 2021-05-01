import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TileComponent } from "components/store/Tile";
import { httpService } from "services/rootService";

const StoreProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 2rem auto;
  width: 80%;
`;

export const StoreContent: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    httpService.GET("products-list").then((res) => setProducts(res));
  }, []);

  return (
    <StoreProductContainer>
      <h2></h2>
      {products.map((product: any) => (
        <TileComponent product={product} />
      ))}
    </StoreProductContainer>
  );
};

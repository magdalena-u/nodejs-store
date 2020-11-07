import React from "react";
import styled from "styled-components";

import { TileComponent } from "components/store/Tile";

import { products } from "mock/products";
import { apiBase } from "apiBase";

const StoreProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 2rem auto;
  width: 80%;
`;

export const StoreContent: React.FC = () => {
  React.useEffect(() => {
    fetch(`${apiBase}/admin/products-list`).then((res) => console.log(res));
  }, []);

  return (
    <StoreProductContainer>
      <h2></h2>
      {products.map((product) => (
        <TileComponent key={product.title} product={product} />
      ))}
    </StoreProductContainer>
  );
};

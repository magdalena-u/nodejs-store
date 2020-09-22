import React from "react";
import styled from "styled-components";

import { TileComponent } from "components/store/Tile";

import { products } from "mock/products";

const StoreProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 2rem auto;
  width: 80%;
`;

export const StoreContent: React.FC = () => (
  <StoreProductContainer>
    <h2></h2>
    {products.map((product) => (
      <TileComponent product={product} />
    ))}
  </StoreProductContainer>
);

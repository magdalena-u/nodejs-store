import React from "react";
import styled from "styled-components";

import { IStoreProduct } from "interfaces/store/IStoreProduct";

import { color, fontWeight } from "styles/variables";

const TileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 16rem;
  height: 20rem;
  padding: 1rem;
  margin: 1rem;

  background-color: ${color.grey};
`;

const TextContainer = styled.div`
  z-index: 2;
`;

const Title = styled.h3`
  color: ${color.darkGrey};
  font-weight: ${fontWeight.regular};
  margin: 0.5rem 0;
`;

const Price = styled.span`
  color: ${color.darkGrey};
  font-weight: ${fontWeight.light};
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  padding: 1rem;
`;

export const TileComponent: React.SFC<IStoreProduct> = ({ product }) => (
  <TileContainer>
    <TextContainer>
      <Title>{product.title}</Title>
      <Price>$ {product.price}</Price>
    </TextContainer>
    <Image src={product.imageUrl} />
  </TileContainer>
);

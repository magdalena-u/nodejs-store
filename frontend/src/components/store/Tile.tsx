import React from "react";
import styled from "styled-components";

import { IStoreProduct } from "interfaces/store/IStoreProduct";
import { IconMenu } from "./IconMenu";

import { color, fontWeight } from "styles/variables";

const TileContainer = styled.div`
  position: relative;
  display: grid;

  grid-template-rows: 1fr 4fr 0.5fr 0.5fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    ". icon"
    ". ."
    "title ."
    "price .";
  align-items: center;

  width: 16rem;
  height: 20rem;
  padding: 1rem;
  margin: 1rem;

  background-color: ${color.grey};
`;

const Title = styled.h3`
  color: ${color.darkGrey};
  font-weight: ${fontWeight.regular};
  margin: 0.5rem 0;

  grid-area: title;
`;

const Price = styled.span`
  color: ${color.darkGrey};
  font-weight: ${fontWeight.light};

  grid-area: price;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  padding: 1rem;
`;

export const TileComponent: React.FC<IStoreProduct> = ({
  product,
  isAdmin,
}) => (
  <TileContainer>
    {isAdmin && <IconMenu />}
    <Title>{product.title}</Title>
    <Price>$ {product.price}</Price>
    <Image src={product.imageUrl} />
  </TileContainer>
);

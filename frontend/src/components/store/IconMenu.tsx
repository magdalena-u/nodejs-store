import React, { useState } from "react";
import styled from "styled-components";

import { httpService } from "services/rootService";
import { IIconMenu } from "interfaces/store/IIconMenu";

import EditIcon from "styles/images/edit.svg";
import DeleteIcon from "styles/images/delete.svg";
import { Redirect } from "react-router";

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  align-self: baseline;

  grid-area: icon;
`;

const Icon = styled.img`
  width: 1.25rem;
  padding: 0.5rem;

  cursor: pointer;
`;

export const IconMenu: React.FC<IIconMenu> = ({ productId }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteProduct = () => {
    httpService
      .DELETE("admin/delete-product", { productId })
      .then(() => setIsDeleted(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isDeleted ? (
        <Redirect to="/admin/product-list" />
      ) : (
        <IconContainer>
          <Icon src={EditIcon} />
          <Icon src={DeleteIcon} onClick={() => deleteProduct()} />
        </IconContainer>
      )}
    </>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";

import { httpService } from "services/rootService";
import { IIconMenu } from "interfaces/store/IIconMenu";
import { routes } from "routes/index.config";

import EditIcon from "styles/images/edit.svg";
import DeleteIcon from "styles/images/delete.svg";

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
          <a href={`${routes.admin.editProduct}/${productId}`}>
            <Icon src={EditIcon} />
          </a>
          <Icon src={DeleteIcon} onClick={() => deleteProduct()} />
        </IconContainer>
      )}
    </>
  );
};

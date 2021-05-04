import React from "react";
import styled from "styled-components";

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

export const IconMenu: React.FC = () => (
  <IconContainer>
    <Icon src={EditIcon} />
    <Icon src={DeleteIcon} />
  </IconContainer>
);

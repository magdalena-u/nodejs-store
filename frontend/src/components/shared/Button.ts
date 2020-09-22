import styled from "styled-components";

import { color, fontWeight } from "styles/variables";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  color: ${color.white};
  font-weight: ${fontWeight.bold};
  background-color: ${color.green};

  border: none;
  border-radius: 8px;
  height: 2rem;
  max-width: 5rem;
`;

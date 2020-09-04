import React from "react";
import styled from "styled-components";

import { fontWeight, color } from "styles/variables";

const routes = [
  { name: "home", url: "/" },
  { name: "admin add product", url: "/admin/add-product" },
  { name: "admin product list", url: "/admin/product-list" },
];

const NavigationContainer = styled.nav`
  font-weight: ${fontWeight.light};
  text-transform: uppercase;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;

  padding: 0;
  list-style: none;
`;

const NavigationListItem = styled.li`
  padding: 0 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${color.darkGrey};

  :hover {
    color: ${color.black};
  }
`;

export const Navigation: React.SFC = () => (
  <NavigationContainer>
    <NavigationList>
      {routes.map((route) => (
        <NavigationListItem>
          <StyledLink href={route.url}>{route.name}</StyledLink>
        </NavigationListItem>
      ))}
    </NavigationList>
  </NavigationContainer>
);

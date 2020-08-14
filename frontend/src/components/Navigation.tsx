import React from "react";

const routes = [
  { name: "home", url: "/home" },
  { name: "admin add product", url: "/admin/add-product" },
  { name: "admin product list", url: "/admin/product-list" },
];

export const Navigation = () => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li>
          <a href={route.url}>{route.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

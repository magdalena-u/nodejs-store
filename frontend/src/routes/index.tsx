import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "Layout";
import { StoreProductList } from "pages";
import { AddProduct } from "pages/admin/addProduct";
import { AdminProductList } from "pages/admin/products";

export const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact={true} path="/" component={StoreProductList} />
      <Route exact={true} path="/admin/add-product" component={AddProduct} />
      <Route
        exact={true}
        path="/admin/product-list"
        component={AdminProductList}
      />
    </Switch>
  </Layout>
);

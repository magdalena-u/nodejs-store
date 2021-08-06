import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "Layout";
import { StoreProductList } from "pages";
import { AddProduct } from "pages/admin/addProduct";
import { AdminProductList } from "pages/admin/products";
import { routes } from "routes/index.config";
import { EditProduct } from "pages/admin/editProductList";

export const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact={true} path={routes.main} component={StoreProductList} />
      <Route
        exact={true}
        path={routes.admin.addProduct}
        component={AddProduct}
      />
      <Route
        exact={true}
        path={`${routes.admin.editProduct}/:id`}
        component={EditProduct}
      />
      <Route
        exact={true}
        path={routes.admin.productList}
        component={AdminProductList}
      />
    </Switch>
  </Layout>
);

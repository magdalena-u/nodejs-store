import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "Layout";
import { StoreContent } from "pages";
import { AddProduct } from "pages/admin/addProduct";

export const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact={true} path="/" component={StoreContent} />
      <Route exact={true} path='/admin/add-product' component={AddProduct}/>
    </Switch>
  </Layout>
);

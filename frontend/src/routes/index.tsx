import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "Layout";
import { StoreContent } from "pages";

export const Routes: React.SFC = () => (
  <Layout>
    <Switch>
      <Route exact={true} path="/" component={StoreContent} />
    </Switch>
  </Layout>
);

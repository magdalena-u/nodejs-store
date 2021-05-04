import React from "react";

import { ProductList } from "components/shared/ProductsList";

export const AdminProductList: React.FC = () => <ProductList isAdmin={true} />;

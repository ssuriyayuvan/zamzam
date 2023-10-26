import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./stylesheet/style.scss";
const Home = lazy(() => import("./pages/home"));
const ProductList = lazy(() => import("./pages/product-list"));
const Cart = lazy(() => import("./pages/cart"));
const ProductDetailPage = lazy(() => import("./pages/product-detail"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router basename="/">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/product-list" exact element={<ProductList />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route
            path="/product-detail"
            exact
            element={<ProductDetailPage />}
          ></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

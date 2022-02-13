import { Route } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

//* App
function App() {
  //* return
  return (
    <div>
      <Header />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

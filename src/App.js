import { Route } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

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
      </main>
    </div>
  );
}

export default App;

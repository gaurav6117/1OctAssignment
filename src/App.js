import List from "./components/List";
import Validate from "./components/Form";
import Product from "./components/Product";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="body">
      <Product/>
      <Cart/>
      <List/>
      <Validate/>
    </div>
  )
}
export default App; 

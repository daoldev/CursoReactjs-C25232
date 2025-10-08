import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";




function App() {
  return (
    <>
      
      <div>
        <Header />
        {/* <ItemListContainer titulo="Nuestros productos"/> */}
        <ItemDetailContainer />
        <Footer />
      </div>
      
    </>
  );
}

export default App;

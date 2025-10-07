import "./App.css";
import { Boton } from "./components/Boton";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  const arrayProductos = [
    { id: 1, nombre: "Remera", precio: 20000, descripcion: "Remera de Algodon" },
    { id: 2, nombre: "Pantalon", precio: 90000, descripcion: "Pantalon de Jean" },
    { id: 3, nombre: "Zapatillas", precio: 110000, descripcion: "Zapatillas Deportivas" }];
  return (
    <>
      <div>
        <Header />
        <ItemListContainer titulo={"Bienvenidos a la tienda"} productos={arrayProductos}/>
        <Footer />
      </div>
    </>
  );
}

export default App;

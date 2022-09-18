// import './App.css';
import './components/ItemListContainer/styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Header/>

      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/contacto' element={<div>Contacto</div>} />
        <Route path='/sobrenosotros' element={<div>Sobre Nosotros</div>} />
        <Route path='/detail/:id' element={ <ItemDetailContainer/> } />
        <Route path='/category/:categoryName' element={ <ItemListContainer/> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>
    
      
    

      <Footer />
    </BrowserRouter>
  );
}

export default App;
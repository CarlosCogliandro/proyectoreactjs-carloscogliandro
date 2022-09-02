import './App.css';
import './components/ItemListContainer/styles.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <body className='body'>
        <ItemListContainer/>
      </body>      
    </div>
  );
}

export default App;
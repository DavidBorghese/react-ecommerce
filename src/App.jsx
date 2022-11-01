import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
// import './App.css';
import ItemListContainer from './Components/Items/ItemListContainer';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <NavBar />
          <ItemListContainer greeting="Aqui va el proyecto" />
      </header>
    </div>
  
  )
}

export default App;

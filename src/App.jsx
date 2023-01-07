import './App.css'
import { Route, Routes} from 'react-router-dom';
import { Home, Collections, ProductCollections } from './views';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/collections/:slug" element={<ProductCollections/>}/>

       </Routes>
      </main>
    </div>   
  )
}

export default App

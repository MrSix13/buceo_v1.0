import './App.css'
import { Route, Routes} from 'react-router-dom';
import { Home, Collections, ProductCollections } from './views';
import { Navbar,Carrousel } from './components';
import { Img1,Img2 } from './assets/img'




function App() {
  const images = [Img1, Img2]
  return (
    <div className="App">
      <Navbar/>
      <main>
       {/*
        <Carrousel images={images} autoPlay={false} showButtons={true} />
       */}
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

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel'
import Img1 from './assets/img/img1.jpg'
import Img2 from './assets/img/img2.jpg';

function App() {
  const images = [Img1, Img2]
  return (
    <div className="App">
      <Navbar/>
      <main>
       {/*
        <Carrousel images={images} autoPlay={false} showButtons={true} />
       */}
      </main>
    </div>
    
  )
}

export default App

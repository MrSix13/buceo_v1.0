import React,{useState} from 'react';
import styles from './carrousel.module.css';
import Img1 from '../../assets/img/img1.jpg';

function Carrousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  const selectNewImage = (index, images, next=true)=>{
    setLoaded(false);
    setTimeout(()=>{
        const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    },500)
  }

  const previous = () => {
    selectNewImage(selectedIndex,props.images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  }


  return (
    <>
      <img 
        src={selectedImage} 
        alt="carrousel" 
        onLoad={()=>setLoaded(true)}
      />

      <div>
        <button onClick={()=>next()}>Sig</button>
        <button onClick={()=>previous()}>Prev</button>
      </div>
    </>
  )
}

export default Carrousel
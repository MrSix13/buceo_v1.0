import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Img1, Img2 } from '../../assets/img';
import { Carrousel } from '../../components';
import { getAllProducts } from '../../redux/thunk-actions/productActions';

const Home = () => {
  const dispatch = useDispatch();
  const {allProducts} = useSelector((state)=>state.products)
  const images = [Img1, Img2]
  useEffect(()=>{
    if(!allProducts?.length){
      dispatch(getAllProducts());
    }
  },[dispatch])
  
  return (
    <div>
      <h1>landing page</h1>
      <Carrousel images={images} autoPlay={false} showButtons={true} />
    </div>
  )
}

export default Home
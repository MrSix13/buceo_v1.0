import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../redux/thunk-actions/productActions';

const Home = () => {
  const dispatch = useDispatch();
  const {allProducts} = useSelector((state)=>state.products)
  
  useEffect(()=>{
    if(!allProducts?.length){
      dispatch(getAllProducts());
    }
  },[dispatch])
  
  return (
    <div>Home</div>
  )
}

export default Home
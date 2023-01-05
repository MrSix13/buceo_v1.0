import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'


function ProductCollections() {
  const {slug} = useParams()
  const {allProducts, collections} = useSelector((state)=>state.products)
  const filterProducts = allProducts.filter(({collection})=>collection === slug)
  const filterCollections = collections.filter((collection)=> collection.slug === slug)
  
  return (
    <div>

      <img src={filterCollections[0].image} alt="" />
      <h1>{filterCollections[0].name}</h1>

      <p>{filterCollections[0].description}</p>

      <div>
        {filterProducts.map((product, index)=>(
          <div key={index}>
            <img src={product.images[0]} alt="" />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ProductCollections
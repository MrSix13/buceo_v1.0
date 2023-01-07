import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import styles from './productcollection.module.css'

function ProductCollections() {
  const {slug} = useParams()
  const {allProducts, collections} = useSelector((state)=>state.products)
  const filterProducts = allProducts.filter(({collection})=>collection === slug)
  const filterCollections = collections.filter((collection)=> collection.slug === slug)
  
  return (
    <div className={styles.productCollections_container}>

      <div className={styles.productCollection_header}>
        <img src={filterCollections[0].image} alt="" />
        <h1>{filterCollections[0].name}</h1>

        <p>{filterCollections[0].description}</p>
      </div>

      <div className={styles.productCollection_hero}>
        {filterProducts.map((product, index)=>(
          <div key={index} className={styles.productCollection_card}>
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
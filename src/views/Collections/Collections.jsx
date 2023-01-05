import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { CollectionList } from '../../components'
import styles from './collections.module.css'

const Collections = () => {
  const {collections} = useSelector((state)=>state.products)
  return (
    <div>
      <h1>Collections</h1>
      <div className={styles.collection_container}>
        {collections?.map((collection, index)=>(
          <CollectionList key={index} collection={collection}/>
        ))}
      </div>
    </div>
  )
}

export default Collections
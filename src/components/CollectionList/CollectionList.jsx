import React from 'react'
import styles from  './collectionList.module.css'
import {Link} from 'react-router-dom'

const CollectionList = ({collection}) => {
    const {name, slug} = collection;
  return (
    <Link to={`/collections/${slug}`} className={styles.collectionlist_container}>
        <h1>{name}</h1>
    </Link>
  )
}

export default CollectionList
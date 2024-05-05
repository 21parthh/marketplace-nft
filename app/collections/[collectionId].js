import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
    const router = useRouter
    console.log(router.query)
    console.log(router.query.collectionid)
  return (
    <div>Collection</div>
  )
}

export default Collection

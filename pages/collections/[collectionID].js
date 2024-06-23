import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionID)
  return (
    <div>
      <Link href="/"><h2>{router.query.collectionID}</h2></Link>
    </div>
  )
}

export default Collection

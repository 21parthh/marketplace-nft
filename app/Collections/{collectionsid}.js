import React from 'react' 
import { useRouter } from 'next/router'
import Link from 'next/link'
const Connection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.connectionsid)
    return (
        <link href="/">
            <h2>{router.query.connectionsid}</h2>
        </link>
    )
}

export default Connection
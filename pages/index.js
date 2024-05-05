import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";

export default function Home() {
  const address = useAddress();

  useEffect(() => {
    if(!address) return
      ;(async () => {
        const userDoc = {
          _type:'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address
        }
        const result = await client.createIfNotExists(userDoc)
      })()
  }, [address ])
  
  return (
    <div>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={styles.container}>
          <main className={styles.main}>
            <ConnectWallet />
          </main>
        </div>
      )}
    </div>
  );
}

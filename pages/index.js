import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";
import toast, {Toaster} from "react-hot-toast"

export default function Home() {
  const address = useAddress();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

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
        welcomeUser(result.userName)
      })()
  }, [address ])
  
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
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
          <p className="pt-4 text-neutral-500">You Need To Connect Wallet</p>
        </div>
      )}
    </div>
  );
}

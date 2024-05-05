import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  const address = useAddress();
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

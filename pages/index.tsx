import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import { client } from "../lib/sanityClient";
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

// export default function Home() {
//  return(
//
//   );
// }

// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";
import { useEffect } from "react";
// import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const address = useAddress();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };
      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <head>
            <meta name="viewport" content="initial-scale=0.9" />
          </head>
          <Container>
            <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
              <Stack spacing={4} align={"center"}>
                <Heading>Marketplace</Heading>
                <Button as={NextLink} href="/buy">
                  Shop NFTs
                </Button>
              </Stack>
            </Flex>
          </Container>
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

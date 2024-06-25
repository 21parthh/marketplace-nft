import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'sepolia';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId='f1bd1465e50a678243502fe9f4b6a2e0'
		>
			<ChakraProvider>
				<Navbar/>
				<Component {...pageProps} /></ChakraProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;


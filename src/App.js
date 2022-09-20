import { Routes, Route } from 'react-router-dom';
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { configureChains, chain, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import '@rainbow-me/rainbowkit/dist/index.css';
import Layout from './layouts';
import Home from './pages/home';
import './assets/styles/styles.scss';


const bscChain = {
  id: 97,
  name: 'BSC Testnet',
  network: 'bsc_testnet',
  iconUrl: 'https://umbria.network/assets/images/icon/bsclogo.png?v1',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'BSCScan', url: 'https://testnet.bscscan.com/' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [
    bscChain,
    chain.ropsten,
    chain.mainnet,
  ],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={lightTheme({
          accentColor: 'linear-gradient(180deg, #700EEC -16.07%, #6F23FF 152.38%);',
          accentColorForeground: '#ffff',
          borderRadius: 'small',
          fontStack: '',
          overlayBlur: 'small',
        })}>
          <Layout>
            <Routes>
              <Route index element={<Home/>} />
            </Routes>
          </Layout>
        </RainbowKitProvider>
      </ WagmiConfig>
    </>
  );
}

export default App;

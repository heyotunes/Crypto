import Head from 'next/head'
//import Coins from '../components/Coins';
import styles from  "../styles/Home.module.css";
//import CoinList from '../components/SearchBar/CoinList';

const cryptoEndpoint = 'https://api.abyiss.com/v1/coinbasepro/BTC-USD/currentprice?apiKey=Ql6A^^5)JIo*((*4)BY)kMi81^*40bSXPl^';

export async function getServerSideProps() {
 const res = await fetch(cryptoEndpoint);
  const data = await res.json();
  return {
    props: {
     data
   }
  }
}

export default function Home ({ data }) {
   console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Welcome to CryptoLand
        </h1>
         
         <div>
        <h1>Bitcoin price</h1>
        <p>{data.price}</p>
        <p>{data.market}</p>
        <p>{data.exchange}</p>
        <p>{data.timestamp}</p>
        </div>
      </main>

     
     
     
     
    </div>
  );
}





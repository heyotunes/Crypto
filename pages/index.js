import Head from 'next/head'
import 'animate.css';
import styles from  "../styles/Home.module.css";


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
        <title>Cryptoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
  
        <div className={styles.stock}>
        <p>NASDAQ</p>
        <p>AAPL</p>
        <p>AMZN</p>
        <p>ETH</p>
        <p>STZ</p>
        <p>JPM</p>
        <p>BTC</p>
        <p>OPQ</p>
        <p>AMP</p>
        <p>EXO</p>
        <p>DOGE</p>
        
        </div>
      <div className={styles.title}>
        <h1 class="animate__animated animate__bounce">
       WELCOME TO CRYPTO LAND
        </h1>
        </div>

         
    
        <div className={styles.stock}>
        <p>NASDAQ</p>
        <p>AAPL</p>
        <p>AMZN</p>
        <p>ETH</p>
        <p>STZ</p>
        <p>JPM</p>
        <p>BTC</p>
        <p>OPQ</p>
        <p>AMP</p>
        <p>EXO</p>
        <p>DOGE</p>
        </div>

       

        <div className={styles.currencyContainer}>
            <div className={styles.text}>CURRENCY BTC</div>
          <div className={styles.btc}>
            <div className={styles.marketContainer}>
              <h2>Market</h2>
              <p>{data.market}</p>
            </div>
            <div className={styles.priceContainer}>
              <h2>Price</h2>
              <p>{data.price}</p>
            </div>
           </div>

            
        </div>
        <div className={styles.stock}>
        <p>NASDAQ</p>
        <p>AAPL</p>
        <p>AMZN</p>
        <p>ETH</p>
        <p>STZ</p>
        <p>JPM</p>
        <p>BTC</p>
        <p>OPQ</p>
        <p>AMP</p>
        <p>EXO</p>
        <p>DOGE</p>
        
        </div>

      <footer className={styles.footer}>
      <p>2021 Cryptoland</p>
    </footer>
    
    </div>
       

       

    
 
    
   
    
  );

 
 
}





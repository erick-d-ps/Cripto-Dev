import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CoimProps } from "../home";
import styles from "./detail.module.css"

interface ResponseData {
  data: CoimProps;
}

interface ErrorData {
  error: string;
}

type DataProps = ErrorData | ResponseData;

export function Detail() {

    const [coin, setCoin] = useState<CoimProps>()
    const [loading, setLoading] = useState(true)

  const { cripto } = useParams();
  const navagate = useNavigate();

  useEffect(() => {
    async function getCoin() {
      try {
        fetch(`https://api.coincap.io/v2/assets/${cripto}`)
          .then((response) => response.json())
          .then((data: DataProps) => {
            if ("error" in data) {
              navagate("/");
              return;
            }

            const price = Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            });
            const priceCompact = Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
              notation: "compact",
            });

            const resultData = {
              ...data.data,
              formatedPrice: price.format(Number(data.data.priceUsd)),
              formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
              formateVolume: priceCompact.format(Number(data.data.volumeUsd24Hr)),
            };

            setCoin(resultData)
          });
      } catch (err) {
        console.log(err);
        navagate("/");
      }
    }
    getCoin();
    setLoading(false)
  }, [cripto]);

  if(loading || !coin){
    return(
        <div>
        <h4>Carregando detalhes....</h4>
        </div>
    )
  }

  return (

    <div className={styles.container}>
      <h1 className={styles.center}>{coin?.name}</h1>
      <h1 className={styles.center}>{coin?.symbol}</h1>

      <section className={styles.content}>
        <img 
        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLocaleLowerCase()}@2x.png`} 
        alt="Logo da moeda" 
        className={styles.logo}
        />
        <h1>{coin.name} | {coin?.symbol}</h1>

        <p><strong>Preço: </strong>{coin?.formatedPrice}</p>

        <a>
            <strong>Mercado: </strong>{coin?.formatedMarket}
        </a>
        <a>
            <strong>Volume: </strong>{coin?.formateVolume}
        </a>
        <a>
            <strong>Mudança 24h: </strong><span className={Number(coin?.changePercent24Hr) > 0 ? styles.profit : styles.loss}>{Number(coin?.changePercent24Hr).toFixed(3)}</span>
        </a>
      </section>
    </div>
  );
}

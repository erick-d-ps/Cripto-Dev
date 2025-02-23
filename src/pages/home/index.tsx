import { useState, FormEvent, useEffect } from "react";
import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export interface CoimProps {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd:string
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formateVolume?: string;
}

interface DataProps {
  data: CoimProps[];
}

export function Home() {
  const [input, setInput] = useState("");
  const [coins, setCois] = useState<CoimProps[]>([]);
  const [offset, setOffset] = useState(0)

  const navgate = useNavigate();
  useEffect(() => {
    getDta();
  }, [offset]);

  async function getDta() {
    fetch(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
      .then((response) => response.json())
      .then((data: DataProps) => {
        const coinsData = data.data;

        const price = Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        });
        const priceCompact = Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
          notation: "compact"
        });


        const fomatdResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
            formateVolume: priceCompact.format(Number(item.volumeUsd24Hr))
          }
          return formated;
        });
        
        //console.log(fomatdResult)

        const listCois = [...coins, ...fomatdResult]

        setCois(listCois);

      });
  }


  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    navgate(`/detail/${input}`);
  }

  function hendleGetMore() {
    if(offset === 0 ){
      setOffset(10)
      return
    }

    setOffset(offset + 10)
  }

  return (
    
    <main className={styles.container}>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          placeholder="Digite o nome da moeda... EX bitcoin"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" value={input}>
          <BsSearch size={30} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor de mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24H</th>
          </tr>
        </thead>

        <tbody id="tbody">
         {coins.length > 0 && coins.map((item) => (
           <tr className={styles.tr} key={item.id}>
           <td className={styles.tdlabel} data-label="Moeda">
             <div className={styles.nome}>
              <img 
              className={styles.logo}
              src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}@2x.png`} 
              alt="Logo Cripto" 
              />
               <Link to={`/detail/${item.id}`}>
                 <span>{item.name}</span> | {item.symbol}
               </Link>
             </div>
           </td>

           <td className={styles.tdlabel} data-label="Valor de mercado">
             {item.formatedMarket}
           </td>
           <td className={styles.tdlabel} data-label="Preço">
             {item.formatedPrice}
           </td>
           <td className={styles.tdlabel} data-label="Volume">
             {item.formateVolume}
           </td>
           <td className={Number(item.changePercent24Hr) >  0 ? styles.tdProfit : styles.tdLoss } data-label="Mudança 24H">
             <span>{Number(item.changePercent24Hr).toFixed(3)}</span>
           </td>
         </tr>
         ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
      <button className={styles.buttonMor} onClick={hendleGetMore}>
        Carregar mais
      </button>
      <button className={styles.buttonMor}><a href="#input">Inicio</a></button>
      </div>
     
    </main>
  );
}

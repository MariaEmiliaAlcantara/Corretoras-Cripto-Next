import { useEffect, useState } from "react";
import Link from "next/link";

import { IData } from "../interfaces/interfaces";
import { Header } from "../components/Header/Header";
import { ButtonsArea } from "../components/ButtonsArea/ButtonsArea";

export default function Home() {
  const [data, setData] = useState<IData[]>();
  const [dataFiltered, setDataFiltered] = useState<IData[]>();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${page}`
    )
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, [page]);

  useEffect(() => {
    if (data) {
      setDataFiltered(
        data.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setDataFiltered([]);
    }
  }, [data, filter]);

  return (
    <div>
      <Header />
      <ButtonsArea>
        <p>Página: {page}</p>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          &lt; Página anterior
        </button>
        <button
          disabled={dataFiltered && dataFiltered.length < 100}
          onClick={() => setPage(page + 1)}
        >
          Próxima Página &gt;
        </button>
      </ButtonsArea>
      <div>
        <label>
          Filtro
          <input onChange={(e: any) => setFilter(e.target.value)} />
        </label>
      </div>
      <div>
        {dataFiltered && dataFiltered.length > 1 ? (
          dataFiltered.map((item: any) => <div>{item.name}</div>)
        ) : (
          <div>Não foram encontrados resultados nesta página</div>
        )}
      </div>
    </div>
  );
}

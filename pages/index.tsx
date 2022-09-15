import { useEffect, useState } from "react";
import Link from "next/link";

import { IData } from "../interfaces/interfaces";
import { Header } from "../components/Header/Header";
import { ButtonsFilterArea } from "../components/ButtonsFilterArea/ButtonsFilterArea";
import Card from "../components/Card/Card";
import { CardArea } from "../components/CardArea/CardArea";

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
      <ButtonsFilterArea
        page={page}
        setPage={setPage}
        dataFiltered={dataFiltered}
        setFilter={setFilter}
      />
      <CardArea>
        {dataFiltered && dataFiltered.length > 1 ? (
          dataFiltered.map((item: any) => <Card key={item.id} data={item} />)
        ) : (
          <div>Não foram encontrados resultados nesta página</div>
        )}
      </CardArea>
    </div>
  );
}

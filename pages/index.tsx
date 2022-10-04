import { useEffect, useState } from "react";
import { IData } from "../interfaces/interfaces";
import { Header } from "../components/Header/Header";
import { FilterArea } from "../components/FilterArea/FilterArea";
import Card from "../components/Card/Card";
import { CardArea } from "../components/CardArea/CardArea";
import { Footer } from "../components/Footer/Footer";
import useSWR from "swr";

function SWR(page) {
  const address = `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${page}`;
  const fetcher = async (url) => await fetch(url).then((res) => res.json());
  const { data } = useSWR(address, fetcher, { refreshInterval: 5000 });
  return data;
}

export default function Home() {
  const [dataFiltered, setDataFiltered] = useState<IData[]>();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  let dataSWR: IData[] = SWR(page);

  useEffect(() => {
    if (dataSWR) {
      setDataFiltered(
        dataSWR.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setDataFiltered([]);
    }
  }, [dataSWR, filter]);

  return (
    <div>
      <Header setPage={setPage} />
      <FilterArea setFilter={setFilter} />
      <CardArea>
        {dataFiltered && dataFiltered.length > 1 ? (
          dataFiltered.map((item: any) => <Card key={item.id} data={item} />)
        ) : (
          <div>Não foram encontrados resultados nesta página</div>
        )}
      </CardArea>
      <Footer page={page} setPage={setPage} dataFiltered={dataFiltered} />
    </div>
  );
}

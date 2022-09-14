import { useEffect, useState } from "react";
import { Container } from "../components/sharedstyles";

import { IData } from "../interfaces/interfaces";

export default function Home() {
  const [data, setData] = useState<IData[]>();
  const [dataFiltered, setDataFiltered] = useState<IData[]>();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

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
      <div>
        <label>
          Filter
          <input onChange={(e: any) => setFilter(e.target.value)} />
        </label>
      </div>
      <div>
        {dataFiltered &&
          dataFiltered.map((item: any) => <div>{item.name}</div>)}
      </div>
    </div>
  );
}

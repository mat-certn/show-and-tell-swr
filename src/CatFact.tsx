import { useEffect, useState } from "react";

interface CatFactResponse {
  data: string[];
}

function useFetchRequest<Data>(url: string) {
  const [data, setData] = useState<Data | undefined>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const getData = async function () {
    setError(undefined);
    setLoading(true);

    try {
      const response = await fetch(url);
      const parsedJson = await response.json();

      setData(parsedJson);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export function CatFact() {
  const { data, loading, error } = useFetchRequest<CatFactResponse>(
    "https://meowfacts.herokuapp.com/?count=3"
  );

  return (
    <div className="card">
      <p>{String(loading)}</p>
      <p>{data?.data[0]}</p>
      <p style={{ color: "red" }}>{error?.message}</p>
    </div>
  );
}

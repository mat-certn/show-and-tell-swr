import useSWR from "swr";

async function fetcher(url: string) {
  const response = await fetch(url);
  return await response.json();
}

function useCatFactSWR(params: string) {
  return useSWR("https://meowfacts.herokuapp.com/" + params, fetcher, {
    // errorRetryCount:3
    // refreshInterval: 100,
  });
}

export function CatFactWithSWR() {
  const { data, isLoading, isValidating, error, mutate } =
    useCatFactSWR("?count=2");

  return (
    <div className="card">
      <p>isLoading: {String(isLoading)}</p>{" "}
      {/* isLoading is true only for the initial load */}
      <p>isValidating: {String(isValidating)}</p>{" "}
      {/* isValidating is true while there is an active request */}
      <p>{data?.data[0]}</p>
      <p style={{ color: "red" }}>{error?.message}</p>
      <button
        onClick={() => {
          mutate({
            // This will replace `data`, mark it as stale which will trigger a re-request.
            data: ["i like cats"],
          });
        }}
      >
        Re-fetch
      </button>
    </div>
  );
}

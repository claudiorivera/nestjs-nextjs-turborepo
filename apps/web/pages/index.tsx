import useSWR from "swr";
import { Button } from "ui";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Web() {
  const { data, error } = useSWR("/api/todos", fetcher);
  const isLoading = !error && !data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops...</p>;

  return (
    <div>
      <Button />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

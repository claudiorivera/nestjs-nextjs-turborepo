import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Web() {
  const { data, error, mutate } = useSWR("/api/todos", fetcher);
  const isLoading = !error && !data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops...</p>;

  const handlePostNewTodo = async () => {
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: `New todo ${Math.random()}` }),
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          handlePostNewTodo();
          mutate();
        }}
      >
        Create new random todo
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

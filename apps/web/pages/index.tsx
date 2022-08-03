import { Fragment } from "react";
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
    mutate();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    mutate();
  };

  return (
    <div>
      <button onClick={handlePostNewTodo}>Create new random todo</button>
      <ul>
        {data.map((todo: { id: string; title: string }) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

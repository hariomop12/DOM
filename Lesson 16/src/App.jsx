import useFetch from "./hooks/useFetch";

function App() {
  // All in one line
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading)
    return <div className="p-8 text-gray-500 text-xl">Loading... ⏳</div>;

  if (error)
    return <div className="p-8 text-red-500 text-xl">Error: {error}</div>;

  return (
    <div className="p-8 bg-red-300 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div
        className="flex flex-col
       gap-4"
      >
        {data.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow w-56">
            <p className="font-bold">{user.name}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm">{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

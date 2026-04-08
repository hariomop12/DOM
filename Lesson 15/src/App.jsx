import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./Context/ThemeContext";

const users = [
  { id: 1, name: "Hariom", role: "Backend Boy", city: "Mumbai" },
  { id: 2, name: "Tanu", role: "NCC Girl", city: "Mumbai" },
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-emerald-600">
        <Navbar />
        <div className="p-8 flex gap-6 flex-wrap">
          {users.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

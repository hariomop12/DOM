// import Navbar from "./Component/Navbar";
// import Card from "./Component/Card";
import { useState, useEffect } from "react";

// const users = [
//   {
//     name: "Hariom",
//     role: "Full Stack Developer",
//     city: "Indore",
//   },
//   {
//     name: "Rahul",
//     role: "Full Stack Developer",
//     city: "Nasik",
//   },
//   {
//     name: "Priya",
//     role: "Full Stack Developer",
//     city: "Bhopal",
//   },
// ];

function App() {
  // let name = "Hariom";
  // let city = "Indore";
  // let isLoggedIn = true;
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data))
  //     .catch((err) => console.log(err));
  // }, []); // only one time call when render

  // Serach useEffect
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  // search badlega tab yeh chalega
  useEffect(() => {
    if (search === "") {
      setMessage("");
      return;
    }
    setMessage("Searching for: " + search + "...");
  }, [search]); // ← search change hone pe chalo

  return (
    // <div>
    //   <div className="p-8 bg-gray-400 min-h-screen">
    //     {/* Heading */}
    //     <h1>Hello {name} 👋</h1>

    //     {/* Variable */}
    //     <p className="mt-4 text-lg">city : {city}</p>

    //     {/* condition */}
    //     <p className="mt-2">
    //       Status: {isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}
    //     </p>

    //     {/* Inline style */}
    //     <div style={{ background: "pink", padding: "16px", marginTop: "16px", width: "25%"}}>
    //       this is div of inline css style
    //     </div>

    //     {/* Self Clossing */}
    //     <input
    //       type="text"
    //       placeholder="Write Something"
    //       className="mt-4 border p-3 rounded block
    //       "
    //     />
    //   </div>
    // </div>

    // <div className="min-h-screen bg-slate-100">
    //   {/* Top Navbar */}
    //   <Navbar />

    //   {/* Card below */}
    //   <div className="p-8 flex gap-6">
    //     <Card name="Hariom" role="Full Stack Developer" city="Indore" />
    //     <Card name="Rahul" role="Full Stack Developer" city="Nasik" />
    //     <Card name="Priya" role="Full Stack Developer" city="Bhopal" />
    //   </div>
    // </div>

    // <div className="min-h-screen bg-gray-300">
    //   <Navbar />
    //   <div className="p-8 flex gap-6 flex-wrap">
    //     {/* Aarray map karo - har item ke liye card banao */}
    //     {users.map((user) => (
    //       <Card
    //         key={user.id}
    //         name={user.name}
    //         role={user.role}
    //         city={user.city}
    //       />
    //     ))}
    //   </div>
    // </div>

    // <div className="p-8">
    //   <h1>Count: {count}</h1>
    //   <div className="flex gap-4 mt-4">
    //     <button
    //       onClick={() => setCount(count + 1)}
    //       className=" text-white px-6 py-2 rounded bg-pink-500"
    //     >
    //       +1
    //     </button>

    //     <button
    //       onClick={() => setCount(count - 1)}
    //       className=" text-white px-6 py-2 rounded bg-pink-500"
    //     >
    //       -1
    //     </button>
    //     <button
    //       onClick={() => setCount(0)}
    //       className=" text-white px-6 py-2 rounded bg-pink-500"
    //     >
    //       Reset
    //     </button>
    //   </div>
    // </div>

    // <div className="p-8">
    //   <input
    //     type="text"
    //     placeholder="Write here...."
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     className="border p2 rounded bg-amber-400 w-50 h-10"
    //   />

    //   <p className="mt-4">
    //     You are typing: <b>{name}</b>
    //   </p>
    // </div>

    // <div className="p-8">
    //   <button
    //     onClick={() => setIsVisible(!isVisible)}
    //     className="bg-red-500 text-white px-6 py-2 rounded"
    //   >
    //     {isVisible ? "Hide it" : "Show it"}
    //   </button>
    //   {/* Condition - show only when state is true */}
    //   {isVisible && (
    //     <div className="mt-4 bg-yellow-500 p-4 rounded">
    //       I am visible only when state is true
    //     </div>
    //   )}
    // </div>

    // useEffect - eg 1 change page titl
    // <div className="p-8">
    //   <h1 className="text-3xl font-bold">Count: {count}</h1>
    //   <button
    //     onClick={() => setCount(count + 1)}
    //     className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
    //   >
    //     +1
    //   </button>
    //   <p className="mt-2 text-slate-800">Check title of browser tab!</p>
    // </div>

    // useEffect - API Call (Most Common)
    // <div className="p-8 bg-slate-400 min-h-screen">
    //   <h1 className="text-2xl font-bold mb-4">User Info</h1>

    //   {/* Show loading state until api response come */}
    //   {user === null ? (
    //     <p className="text-gray-500">Loading...</p>
    //   ) : (
    //     <div className="bg-red-100 p-4 rounded shadow w- 64 ">
    //       <p>
    //         <b>Name: </b>
    //         {user.name}
    //       </p>
    //       <p>Email: {user.email}</p>
    //       <p>
    //         City<b></b>
    //         {user.address.city}
    //       </p>
    //     </div>
    //   )}
    // </div>

    // useEffect - Search on input
    <div className="p-8 bg-pink-800">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded w-64"
      />
      <p className="mt-4 text-red-600 font-medium">{message}</p>
    </div>
  );
}

export default App;

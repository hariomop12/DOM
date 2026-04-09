import { useState, useEffect } from "react";

// Practice 1 — Users List (GET Request)
// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // API call
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-8 text-center">
//         <div className="p-8 text-center">Loading user...⏳</div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="p-8 text-center">
//         <div className="text-2xl text-red-400">Error: {error} ❌</div>
//         <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded">
//           Try Again
//         </button>
//       </div>
//     );
//   }
//   return (
//     <div className="p-8 bg-slate-800">
//       <h1 className="text-3xl font-bold mb-6">📋 Users List</h1>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((user) => (
//           <div key={user.id} className="  p-4 rounded-lg shadow bg-pink-500">
//             <h2 className="text-xl font-bold text-red-600">{user.name}</h2>
//             <p className="text-gray-600">📧 {user.email}</p>
//             <p className="text-gray-600">📞 {user.phone}</p>
//             <p className="text-gray-600">🏙️ {user.address.city}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Practice 2 — Posts with Search (GET with params)
// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchId, setSearchId] = useState("");
//   const [singlePost, setSinglePost] = useState(null);

//   function fetchAllPosts() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data.slice(0, 10)); // Sirf 10 posts
//         setLoading(false);
//         setSinglePost(null);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }

//   // fatch one post by id
//   function fetchPostById(id) {
//     if (!id) return;
//     setLoading(true);
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setSinglePost(data);
//         setLoading(false);
//         setPosts([]);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }

//     function handleSearch(e) {
//       e.preventDefault();
//       fetchPostById(searchId);
//     }

//     return (
//       <div className="p-8 max-w-screen mx-auto bg-slate-500">
//         <h1 className="text-3xl font-bold mb-6">Posts</h1>
//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="flex gap-2 mb-6">
//           <input
//             type="number"
//             placeholder="Enter Post ID (1-100)..."
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             className="flex-1 border p-2 rounded"
//           />
//           <button
//             type="submit"
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Search
//           </button>
//           <button
//             type="button"
//             onClick={fetchAllPosts}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Show All
//           </button>
//         </form>

//         {/* Loading */}
//         {loading && (
//           <div className="text-center py-8">
//             <div className="text-xl text-gray-500">Loading... ⏳</div>
//           </div>
//         )}

//         {/* Single Post View */}
//         {singlePost && !loading && (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-2xl font-bold mb-2">Post #{singlePost.id}</h2>
//             <h3 className="text-xl font-semibold text-blue-600 mb-3">
//               {singlePost.title}
//             </h3>
//             <p className="text-gray-700">{singlePost.body}</p>
//           </div>
//         )}

//         {/* All Posts View */}
//         {posts.length > 0 && !loading && (
//           <div className="space-y-4">
//             {posts.map((post) => (
//               <div key={post.id} className="bg-white p-4 rounded-lg shadow">
//                 <h2 className="text-xl font-bold text-blue-600">
//                   {post.title}
//                 </h2>
//                 <p className="text-gray-600 mt-2">{post.body}</p>
//                 <p className="text-sm text-gray-400 mt-2">Post ID: {post.id}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
// }

// Practice 3 — POST Request (Send data)
// function App() {
//   const [form, setForm] = useState({
//     title: "",
//     body: "",
//   });
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     // POST request — data bhejna
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST", // POST method
//         headers: {
//           "Content-Type": "application/json", // send json data
//         },
//         body: JSON.stringify({
//           // Convert data to JSON string
//           title: form.title,
//           body: form.body,
//           userId: 1,
//         }),
//       });

//       const data = await res.json();
//       setResponse(data);
//       setForm({ title: "", body: "" }); // Form clear karo
//     } catch (err) {
//       console.error(err);
//       alert("Error! Try again.");
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-3xl font-bold mb-6">✍️ Create New Post</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Title</label>
//           <input
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Enter post title..."
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Body</label>
//           <textarea
//             name="body"
//             value={form.body}
//             onChange={handleChange}
//             placeholder="Enter post content..."
//             rows="5"
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>

//         <button

//           type="submit"
//           disabled={loading}
//           className="w-full bg-red-500 text-white py-2 rounded disabled:bg-gray-400"
//         >
//           {loading ? "Submitting..." : "Create Post"}
//         </button>
//       </form>
//       {/* Show the response */}
//       {response && (
//         <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
//           <h2 className="text-xl font-bold"> ✅ Post Created Successfully!</h2>
//           <p>
//             <strong>Title:</strong> {response.title}
//           </p>
//           <p>
//             <strong>Body:</strong> {response.body}
//           </p>
//           <p>
//             <strong>Post ID:</strong> {response.id}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// Practice 4 — DELETE Request (Data delete karna)
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // GET — sab todos lao
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos?_limit=60")
//       .then((res) => res.json())
//       .then((data) => {
//         setTodos(data);
//         setLoading(false);
//       });
//   }, []);

//   // DELETE — ek todo delete karo
//   async function deleteTodo(id) {
//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//         {
//           method: "DELETE",
//         },
//       );

//       if (res.ok) {
//         // UI se bhi hata do
//         setTodos(todos.filter((todo) => todo.id !== id));
//         alert("Todo deleted!");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed!");
//     }
//   }

//   if (loading) return <div className="p-8">Loading todos...</div>;

//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">✅ Todo List</h1>

//       <div className="space-y-2">
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             className="flex items-center justify-between bg-white p-3 rounded shadow"
//           >
//             <div className="flex items-center gap-3">
//               <input type="checkbox" checked={todo.completed} readOnly />
//               <span
//                 className={todo.completed ? "line-through text-gray-400" : ""}
//               >
//                 {todo.title}
//               </span>
//             </div>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Practice 5 — PUT Request (Update data)

function App() {
  const [post, setPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: "", body: "" });

  // GET
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setForm({ title: data.title, body: data.body });
      });
  }, []);

  // PUT - update post
  async function updatePost(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
          title: form.title,
          body: form.body,
          userId: 1,
        }),
      });

      const updated = await res.json();
      setPost(updated);
      setEditMode(false);
      alert("Post updated!");
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }
  }
  if (!post) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>

      {editMode ? (
        <form onSubmit={updatePost}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              id="body"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Post
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit Post
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState,  } from "react";

// Practice 1 — onClick (Button Click)
// function App() {
//   const [message, setMessage] = useState("");

//   function handleClick() {
//     alert("Button clicked! 🎉");
//   }

//   function handleGreet() {
//     setMessage("Hello bro 💁‍");
//   }

//   function handleClear() {
//     setMessage("");
//   }

//   return (
//     <div className="p-8 min-h-screen bg-white-900">
//       <h1 className="text-2xl font-bold mb-4">Event - onClick</h1>
//       {/* Simple alert */}
//       <button
//         onClick={handleClick}
//         className="bg-red-500 text-white px-2 py-2 rounded mr-4"
//       >
//         Show alert
//       </button>

//       <button
//         onClick={handleGreet}
//         className="bg-green-500 text-white px-2 py-2 rounded mr-5"
//       >
//         Greeting
//       </button>
//       {/* Clear  */}
//       <button
//         onClick={handleClear}
//         className="bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Clear
//       </button>
//       {/* Message show */}
//       {message && <p className="mt-4 text-xl text-pink-600">{message}</p>}
//     </div>
//   );
// }

// Practice 2 — onClick with Parameters (pass value)
// function App() {
//   const [selected, setSelected] = useState(null);

//   // this function will run imedtly
//   // <button onClick={handleClick('Red')}>Red</button>

//   // Correct way use arrow function
//   function handleClick(color) {
//     setSelected(color);
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">
//         Event - onClick with Parameters (choose color)
//       </h1>
//       <div className="flex gap-4">
//         <button
//           onClick={() => handleClick("Red")}
//           className="bg-red-500 text-white px-6 py-2 rounded"
//         >
//           Red
//         </button>
//         <button
//           onClick={() => handleClick("Green")}
//           className="bg-green-500 text-white px-6 py-2 rounded"
//         >
//           Green
//         </button>

//         <button
//           onClick={() => handleClick("Blue")}
//           className="bg-blue-500 text-white px-6 py-2 rounded"
//         >
//           Blue
//         </button>
//       </div>

//       {selected && (
//         <p className="pt-4">
//           Selected: <span className="font-bold pt-6">{selected}</span>
//         </p>
//       )}
//     </div>
//   );
// }

// Practice 3 — onChange (Input Change)
// function App() {
//   const [text, setText] = useState("");
//   const [charCount, setCharCount] = useState(0);

//   // Event object - e.target.value give use input value

//   function handleChange(e) {
//     const newText = e.target.value;
//     setText(newText);
//     setCharCount(newText.length);
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">onChange — Live typing</h1>

//       <input
//         type="text"
//         placeholder="type something..."
//         value={text}
//         onChange={handleChange}
//         className="border p-2 rounded w-96 block"
//       />

//       <p>
//         You typed: <b>{text || "____"}</b>
//       </p>
//       <p className="text-gray-500">Characters: {charCount}</p>
//     </div>
//   );
// }

// Practice 4 — onSubmit (Form Submit)
// function App() {
//   const [submittedData, setSubmittedData] = useState(null);
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);

//   // Handle form submit
//   function handleSubmit(e) {
//     e.preventDefault(); // ⭐ IMPORTANT - stop page to refess

//     const formData = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//     };

//     setSubmittedData(formData);
//   }

//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-2xl font-bold mb-4">onSubmit Registration</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className="block mb-1 font-medium">Name: </label>
//           <input
//             ref={nameRef}
//             type="text"
//             placeholder="Enter your name"
//             className="border p-2 rounded w-full"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             ref={emailRef}
//             type="email"
//             placeholder="Enter your Email"
//             className="border p-2 rounded w-full"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-2 rounded w-full mt-10"
//         >
//           Submit
//         </button>
//       </form>

//       {/* show submitted data */}
//       {submittedData && (
//         <div className="mt-6 p-4 bg-green-100 rounded">
//           <h2 className="font-bold text-green-800">✅ Form Submitted!</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// Practice 5 — Multiple Events (Real World)

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  // one function handle all input
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPreview(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      alert("When Enter press form will submit!");
    }
  }

  function handleMouseEnter() {
    console.log("Mouse enter");
  }

 

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Multiple Events</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onMouseEnter={handleMouseEnter}
            className="border p-2 rounded w-full"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
      {showPreview && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="font-bold">Preview:</h2>
          <p>Username: {form.username}</p>
          <p>Email: {form.email}</p>
          <p>Message: {form.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;

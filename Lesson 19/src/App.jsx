import { useState } from "react";

// Practice 1 — Single Controlled Input
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log({ name, email, age });
//     alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}`);
//   }

//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-2xl font-bold mb-4">Controlled Form</h1>
//       <form className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border p-2 rounded w-full"
//             placeholder="Write your name here"
//           />
//           {/* Live preview */}
//           <p className="text-sm text-gray-500 mt-1">Typing: {name || "___"}</p>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border p-2 rounded w-full"
//             placeholder="email@example.com"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-red-500 text-white px-6 py-2 rounded w-full"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Live Preview Card */}
//       <div className="mt-6 p-4 bg-gray-100 rounded">
//         <h2 className="font-bold mb-2">Live Preview:</h2>
//         <p>Name: {name || "—"}</p>
//         <p>Email: {email || "—"}</p>
//         <p>Age: {age || "—"}</p>
//       </div>
//     </div>
//   );
// }

// Practice 2 - Multiple inputs (one function handle eveything)
// function App() {
//   // all value in one object
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     city: "",
//   });

//   // one function handle all input
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form Data:", form);
//     alert("check console for form data");
//   }

//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-2xl- font-bold mb-1">Multiple Input Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">UserName</label>
//           <input
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Email</label>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Password</label>
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Confirm Password</label>
//           <input
//             name="confirmPassword"
//             type="password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">City</label>
//           <select
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           >
//             <option value="">Select City</option>
//             <option value="Indore">Indore</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Bangalore">Bangalore</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-red-500 text-white px-6 py-2 rounded w-full"
//         >
//           Register
//         </button>
//       </form>
//       {/* live update */}
//       <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
//         <h2 className="font-bold mb-2">Current Form State:</h2>
//         <pre className="bg-white p-2 rounded overflow-x-auto">
//           {JSON.stringify(form, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// }

// Practice 3 — Checkbox & Radio Buttons
// function App() {
//   const [form, setForm] = useState({
//     name: "",
//     gender: "",
//     interests: [],
//     agree: false,
//   });

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       if (name === "interests") {
//         // Multiple checkboxes wala case
//         let updatedInterests = [...form.interests];
//         if (checked) {
//           updatedInterests.push(value);
//         } else {
//           updatedInterests = updatedInterests.filter((i) => i !== value);
//         }
//         setForm({ ...form, interests: updatedInterests });
//       } else {
//         // Single checkbox (agree)
//         setForm({ ...form, [name]: checked });
//       }
//     } else {
//       // Text, radio, select
//       setForm({ ...form, [name]: value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Submitted:", form);
//     alert("Form submitted! Check console.");
//   }

//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-2xl font-bold mb-4">Checkbox & Radio</h1>{" "}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Text Input */}
//         <div>
//           <label className="block mb-1">Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         {/* Radio Buttons */}
//         <div>
//           <label className="block mb-2">Gender</label>
//           <div className="flex gap-4">
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={form.gender === "male"}
//                 onChange={handleChange}
//                 className="mr-1"
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={form.gender === "female"}
//                 onChange={handleChange}
//                 className="mr-1"
//               />
//               Female
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 checked={form.gender === "other"}
//                 onChange={handleChange}
//                 className="mr-1"
//               />
//               Other
//             </label>
//           </div>
//         </div>

//         {/* Checkboxes (Multiple) */}
//         <div>
//           <label className="block mb-2">Interests</label>
//           <div className="space-y-1">
//             <label>
//               <input
//                 type="checkbox"
//                 name="interests"
//                 value="coding"
//                 checked={form.interests.includes("coding")}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Coding 💻
//             </label>
//             <br />
//             <label>
//               <input
//                 type="checkbox"
//                 name="interests"
//                 value="gaming"
//                 checked={form.interests.includes("gaming")}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Gaming 🎮
//             </label>
//             <br />
//             <label>
//               <input
//                 type="checkbox"
//                 name="interests"
//                 value="reading"
//                 checked={form.interests.includes("reading")}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Reading 📚
//             </label>
//           </div>
//         </div>

//         {/* Single Checkbox */}
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="agree"
//               checked={form.agree}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={!form.agree}
//           className={`px-6 py-2 rounded w-full ${
//             form.agree
//               ? "bg-red-500 text-white cursor-pointer"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Submit
//         </button>
//       </form>
//       {/* Live Preview */}
//       <div className="mt-6 p-4 bg-gray-100 rounded">
//         <h2 className="font-bold mb-2">Form Data:</h2>
//         <pre className="bg-white p-2 rounded text-sm">
//           {JSON.stringify(form, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// }

// Practice 4 — Textarea (Controlled)
function App() {
  const [review, setReview] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  function handleChange(e) {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setReview(text);
      setCharCount(text.length);
    }
  }

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Write a Review</h1>
      <textarea
        value={review}
        onChange={handleChange}
        placeholder="write review..."
        rows="5"
        className="border p-2 rounded w-full"
      />

      <div className="flex justify-between mt-2 text-sm">
        <span
          className={
            charCount > maxChars - 20 ? "text-orange-500" : "text-gray-500"
          }
        >
          Characters: {charCount}/{maxChars}
        </span>
        {charCount === maxChars && (
          <span className="text-red-500">Limit reached!</span>
        )}
      </div>

      <button
        onClick={() => alert("Review: " + review)}
        disabled={review.length === 0}
        className={`mt-4 px-6 py-2 rounded w-full ${
          review.length === 0
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-500 text-white"
        }`}
      >
        Submit Review
      </button>
      {/* Preview */}
      {review && (
        <div className="mt-4 p-3 bg-yellow-50 rounded">
          <p className="font-bold">Preview:</p>
          <p className="italic">{review}</p>
        </div>
      )}
    </div>
  );
}

export default App;

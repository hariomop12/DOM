// Eg 1  Input focus most Common
import { useRef, useState } from "react";
// useRef is used for acess the DOM element
// function App() {
//   const inputRef = useRef(null);

//   function focusKaro() {
//     inputRef.current.focus();
//   }

//   function clearKaro() {
//     inputRef.current.value = "";
//   }

//   return (
//     <div className="p-8">
//       <input
//         type="text"
//         ref={inputRef}
//         placeholder="i am in focus"
//         className="border p-2 rounded w-64 block"
//       />

//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={focusKaro}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Focus
//         </button>

//         <button
//           onClick={clearKaro}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Clear karo
//         </button>
//       </div>
//     </div>
//   );
// }

// Eg 2 - useRef vs useState Diffrence
// function App() {
//   const [startCount, setStartCount] = useState(0);
//   const refCount = useRef(null);

//   function stateAdd() {
//     setStartCount(startCount + 1);
//     // Number will incress on screen and ui will update
//   }

//   function refAdd() {
//     refCount.current = refCount.current + 1;
//     console.log("Ref Value: ", refCount.current);
//     // value will store but ui will not update; check in console
//   }

//   return (
//     <div className="p-8 bg-slate-950 text-white min-h-screen">
//       {/* useState - screen will update */}
//       <div className="mb-6">
//         <p className="text-lg">useState: {startCount}</p>
//         <button
//           onClick={stateAdd}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           State +1 (screen will update)
//         </button>
//       </div>

//       {/* useRef - screen will not update */}
//       <div>
//         <p className="text-lg">useRef: (see in the console!)</p>
//         <button
//           onClick={refAdd}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Ref +1 (screen will not update)
//         </button>
//       </div>
//     </div>
//   );
// }

// Eg 3 real use focus on form submit
function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value === "" || emailRef.current.value === "") {
      nameRef.current.focus();
    } else {
      setSubmitted(true);
    }
  }

  return (
    <div className="p-8" max-w-md>
      <h1 className="text-2xl font-bold mb-4">Form</h1>

      {submitted ? (
        <p className="text-green-600 font-bold">Form Submitted</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="border p-2 rounded w-full"
          />
          <button className="bg-emerald-800 text-white py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;

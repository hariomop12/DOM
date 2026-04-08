// import { useState } from "react";
import useValidation from "./useValidation";

// Practice 1 — Basic Validation (Real-time)
// function App() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Validation logic
//   function validate(name, value) {
//     let error = "";

//     if (name === "name") {
//       if (value.length < 3) {
//         error = "Name at least 3 characters chahiye";
//       } else if (/\d/.test(value)) {
//         error = "Name mein numbers nahi hone chahiye";
//       }
//     }

//     if (name === "email") {
//       if (!value.includes("@")) {
//         error = "Email mein @ hona chahiye";
//       } else if (!value.includes(".")) {
//         error = "Email mein . hona chahiye";
//       }
//     }

//     if (name === "password") {
//       if (value.length < 6) {
//         error = "Password kam se kam 6 characters ka hona chahiye";
//       }
//     }

//     setErrors((prev) => ({ ...prev, [name]: error }));
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     validate(name, value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // validate all fields before submiting
//     validate("name", form.name);
//     validate("email", form.email);
//     validate("password", form.password);

//     // check if there is any error
//     if (
//       !errors.name &&
//       !errors.email &&
//       !errors.password &&
//       form.name &&
//       form.email &&
//       form.password
//     ) {
//       alert("✅ Form submitted successfully!");
//       console.log(form);
//     } else {
//       alert("❌ Please fix errors first!");
//     }
//   }
//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-2xl font-bold mb-4">Form Validation</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name Field */}
//         <div>
//           <label className="block mb-1">Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className={`border p-2 rounded w-full ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//           {form.name && !errors.name && (
//             <p className="text-green-500 text-sm mt-1">✅ Valid name</p>
//           )}
//         </div>

//         {/* Email Field */}
//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className={`border p-2 rounded w-full ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Password Field */}
//         <div>
//           <label className="block mb-1 font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             className={`border p-2 rounded w-full ${
//               errors.password ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//           )}
//           {/* Password strength indicator */}
//           {form.password && !errors.password && (
//             <p className="text-green-500 text-sm mt-1">✅ Strong password</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-2 rounded w-full"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// Practice 2 — Complete Registration Form (Real-world)
// function App() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     age: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({}); // Track which fields user has visited
//   const [submitted, setSubmitted] = useState(false);

//   // Full validation function
//   function validateForm() {
//     const newErrors = {};

//     // Full Name validation
//     if (!form.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     } else if (form.fullName.length < 3) {
//       newErrors.fullName = "Name must be at least 3 characters";
//     } else if (/\d/.test(form.fullName)) {
//       newErrors.fullName = "Name cannot contain numbers";
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!form.email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(form.email)) {
//       newErrors.email = "Enter a valid email (e.g., name@example.com)";
//     }

//     // Phone validation
//     if (!form.phone) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Phone number must be exactly 10 digits";
//     }

//     // Age validation
//     if (!form.age) {
//       newErrors.age = "Age is required";
//     } else if (form.age < 18) {
//       newErrors.age = "You must be at least 18 years old";
//     } else if (form.age > 100) {
//       newErrors.age = "Age cannot be more than 100";
//     }

//     // Password validation
//     if (!form.password) {
//       newErrors.password = "Password is required";
//     } else if (form.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     } else if (!/[A-Z]/.test(form.password)) {
//       newErrors.password =
//         "Password must contain at least one uppercase letter";
//     } else if (!/[0-9]/.test(form.password)) {
//       newErrors.password = "Password must contain at least one number";
//     }

//     // Confirm Password validation
//     if (form.password !== form.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // true if no errors
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));

//     // Validate on change if field has been touched
//     if (touched[name]) {
//       validateField(name, value);
//     }
//   }

//   function validateField(name, value) {
//     const newErrors = { ...errors };

//     switch (name) {
//       case "fullName":
//         if (!value.trim()) newErrors.fullName = "Full name is required";
//         else if (value.length < 3)
//           newErrors.fullName = "Name must be at least 3 characters";
//         else if (/\d/.test(value))
//           newErrors.fullName = "Name cannot contain numbers";
//         else delete newErrors.fullName;
//         break;

//       case "email":
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!value) newErrors.email = "Email is required";
//         else if (!emailRegex.test(value))
//           newErrors.email = "Enter a valid email";
//         else delete newErrors.email;
//         break;

//       case "phone":
//         if (!value) newErrors.phone = "Phone number is required";
//         else if (!/^\d{10}$/.test(value))
//           newErrors.phone = "Phone must be 10 digits";
//         else delete newErrors.phone;
//         break;

//       case "age":
//         if (!value) newErrors.age = "Age is required";
//         else if (value < 18) newErrors.age = "You must be at least 18";
//         else if (value > 100) newErrors.age = "Age cannot exceed 100";
//         else delete newErrors.age;
//         break;

//       case "password":
//         if (!value) newErrors.password = "Password is required";
//         else if (value.length < 6)
//           newErrors.password = "Password must be at least 6 characters";
//         else if (!/[A-Z]/.test(value))
//           newErrors.password = "Password needs an uppercase letter";
//         else if (!/[0-9]/.test(value))
//           newErrors.password = "Password needs a number";
//         else delete newErrors.password;
//         break;

//       case "confirmPassword":
//         if (value !== form.password)
//           newErrors.confirmPassword = "Passwords do not match";
//         else delete newErrors.confirmPassword;
//         break;
//     }

//     setErrors(newErrors);
//   }

//   function handleBlur(e) {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     validateField(name, value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Mark all fields as touched
//     const allTouched = {};
//     Object.keys(form).forEach((key) => {
//       allTouched[key] = true;
//     });
//     setTouched(allTouched);

//     // Validate everything
//     const isValid = validateForm();

//     if (isValid && Object.keys(form).every((key) => form[key])) {
//       setSubmitted(true);
//       console.log("Form submitted:", form);
//     } else {
//       alert("❌ Please fix all errors before submitting");
//     }
//   }

//   if (submitted) {
//     return (
//       <div className="p-8 max-w-md mx-auto">
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
//           <h2 className="font-bold text-xl">✅ Registration Successful!</h2>
//           <p className="mt-2">Welcome, {form.fullName}!</p>
//           <p>We've sent a confirmation email to {form.email}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Register Another
//           </button>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-2">📝 Registration Form</h1>
//       <p className="text-gray-500 mb-6">Please fill all fields correctly</p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Full Name */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Full Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="e.g., Hariom Virkhare"
//             className={`w-full p-2 border rounded ${
//               touched.fullName && errors.fullName
//                 ? "border-red-500"
//                 : "border-gray-300"
//             }`}
//           />
//           {touched.fullName && errors.fullName && (
//             <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="hariom@example.com"
//             className={`w-full p-2 border rounded ${
//               touched.email && errors.email
//                 ? "border-red-500"
//                 : "border-gray-300"
//             }`}
//           />
//           {touched.email && errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Phone Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="9876543210"
//             maxLength="10"
//             className={`w-full p-2 border rounded ${
//               touched.phone && errors.phone
//                 ? "border-red-500"
//                 : "border-gray-300"
//             }`}
//           />
//           {touched.phone && errors.phone && (
//             <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//           )}
//         </div>

//         {/* Age */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Age <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="age"
//             type="number"
//             value={form.age}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="18"
//             className={`w-full p-2 border rounded ${
//               touched.age && errors.age ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {touched.age && errors.age && (
//             <p className="text-red-500 text-sm mt-1">{errors.age}</p>
//           )}
//         </div>

//         {/* Password */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Password <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="Min 6 chars, 1 uppercase, 1 number"
//             className={`w-full p-2 border rounded ${
//               touched.password && errors.password
//                 ? "border-red-500"
//                 : "border-gray-300"
//             }`}
//           />
//           {touched.password && errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//           )}
//           {/* Password strength indicator */}
//           {form.password && !errors.password && touched.password && (
//             <p className="text-green-500 text-sm mt-1">✅ Strong password!</p>
//           )}
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block mb-1 font-medium">
//             Confirm Password <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="confirmPassword"
//             type="password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             placeholder="Retype your password"
//             className={`w-full p-2 border rounded ${
//               touched.confirmPassword && errors.confirmPassword
//                 ? "border-red-500"
//                 : "border-gray-300"
//             }`}
//           />
//           {touched.confirmPassword && errors.confirmPassword && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.confirmPassword}
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600"
//         >
//           Register Now
//         </button>
//       </form>

//       {/* Form Progress */}
//       <div className="mt-6 p-3 bg-gray-100 rounded">
//         <p className="text-sm font-medium">Form Progress:</p>
//         <div className="mt-1 text-xs">
//           {Object.values(form).filter((v) => v).length}/
//           {Object.keys(form).length} fields filled
//         </div>
//       </div>
//     </div>
//   );
// }

// Practice 3 — Custom Validation Hook (Reusable)

function App() {
  const validationRules = {
    username: {
      required: true,
      requiredMessage: "Username chahiye bhai!",
      minLength: 3,
      minLengthMessage: "3 se kam nahi chalega",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternMessage: "Sahi email daal na bhai",
    },
  };

  const { values, errors, touched, handleChange, handleBlur, validateAll } =
    useValidation({ username: "", email: "" }, validationRules);

  function handleSubmit(e) {
    e.preventDefault();
    if (validateAll()) {
      alert("✅ Form valid hai! Submitting...");
      console.log(values);
    } else {
      alert("❌ Errors hain, sahi karo!");
    }
  }

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Custom Hook Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border rounded ${
              touched.username && errors.username
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.username && errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border rounded ${
              touched.email && errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

import { useState } from "react";

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
        placeholder="Apna review likho..."
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

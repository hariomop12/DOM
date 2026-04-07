function Card({ naam, role, city }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-64">
      <h2 className="text-xl font-bold text-gray-800">{naam}</h2>
      <p className="text-gray-500 mt-1">{role} 👨‍💻</p>
      <p className="text-gray-500">{city}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Follow
      </button>
    </div>
  );
}

export default Card;
